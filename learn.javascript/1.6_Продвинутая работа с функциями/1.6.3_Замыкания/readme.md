# Замыкание

## Лексическое Окружение

Это внутренний объект внутри выполняемой функции, блока кода или скрипта.

Объект лексического окружения состоит из двух частей:
- Environment Record - объект в котором хранятся локальные переменные в виде свойств.
- Ссылка на внешние лексические окружения.

**"Переменная" – это просто свойство специального внутреннего объекта: Environment Record. «Получить или изменить переменную», означает, «получить или изменить свойство этого объекта».**

Переменная - это свойство специального внутреннего объекта связанного с текущим выполняющимся блоком/функцией/скриптом.

Работа с переменными - это на самом деле работа со свойствами этого объекта.

## Function Declaration

Инициализируются когда создается лексическое окружение.

Дла верхнеуровневых - когда скрипт начинается выполнение (в самом вверху скрипта).

## Внутреннее и внешнее лексическое окружение

При запуске функции для неё автоматически создаётся новое лексическое окружение, для хранения локальных переменных и параметров вызова.

В процессе вызова функции есть два лексических окружения: внутреннее и внешнее.

Когда код хочет получить доступ к переменной – сначала происходит поиск во внутреннем лексическом окружении, затем во внешнем, затем в следующем и так далее, до глобального.

Если переменная не была найдена, это будет ошибкой в strict mode. Без strict mode, для обратной совместимости, присваивание несуществующей переменной создаёт новую глобальную переменную с таким именем.

Функция получает текущее значение внешних переменных, то есть, их последнее значение.

Лексическое окружение - специальный внутренний объект. Мы не можем получить его в нашем коде и изменять напрямую. Сам движок JS может оптимизировать его, уничтожать неиспользуемые переменные для освобождения памяти и выполнять другие внутренние уловки, но видимое поведение объекта должно оставаться таким, как было описано

## Вложенные функции

Функция называется вложенной, когда она создается внутри другой функции.

Вложенная функция может быть возвращена: либо в качестве свойства нового объекта, либо сама по себе. И затем может быть использована в любом месте.

Если внутренняя функция начинает выполняться и в ней используется переменная, то начинается поиск:

1. В начале поиск идет по локальным переменным (переменным, объявленные внутри этой же функции)
2. Переменный внешней функции
3. И тд, пока не будут достигнуты глобальные переменные

## Окружение в деталях

Рассмотрим на примере. Есть функция:

```
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert( counter1() ); // 0
alert( counter1() ); // 1

alert( counter2() ); // 0 (независимо)
```

1. Когда скрипт только начинает выполняться, есть только глобальное лексическое окружение.

Все функции "при рождении" получают скрытое свойство `[[Environment]]`, которое ссылается на лексическое окружение места, где они были созданы.

`[[Environment]]` - скрытое свойство функции, которое содержит эту ссылку.

2. Код продолжает выполняться, объявляется новая глобальная переменная `counter`, которой присваивается результат вызова `makeCounter`.
 
    В момент вызова `makeCounter` создается лексическое окружение, для хранения его переменных и аргументов

    Как и все лексические окружения, функция содержит две вещи:

  - Environment Record с локальными переменными.
  - Ссылка на внешние окружения, которая устанавливается в значение `[[Environment]]` функции

3. В процессе выполнения `makeCounter()` создается небольшая вложенная функция.

    Вне зависимости от того, каким способом объявлена функция, она получается свойство `[[Environment]]`, которое ссылается на лексическое окружение, в котором они были созданы.

4. Выполнение продолжается, вызов `makeCounter()` завершается, и результат присваивается глобальной переменной. 

5. При вызове `counter()` для этого вызова создается новое лексическое окружение. 

6. Вызов `counter()` не только возвращает значение `count`, но также увеличивает его.

7. Следующие вызовы `counter()` сделают то же самое.

Замыкание - функция, которая запоминает свои внешние переменные и может получить к ним доступ. В JS, все функции изначально являются замыканиями (исключение синтаксис "new Function")

То есть, они автоматически запоминают, где были созданы, с помощью скрытого свойства `[[Environment]]` и все они могут получить доступ к внешним переменным.

## Блоки кода и циклы, IIFE

Лексическое окружение существует для любых блоков кода `{...}`.

Оно создается при выполнении блока кода и содержит локальные переменным для этого блока.

### Блоки кода

Все скрипты в браузере (кроме `type="module"`) разделяют одну общую глобальную область. Если создать переменную в одном скрипте, она станет доступна и в других, что может стать источником конфликтов, если два скрипта используют одно и то же имя переменной и перезаписывают друг друга. Если хотим это избежать, можно использовать блок кода для изоляции.

### IIFE

В прошлом в JS не было лексического окружения на уровне блоков кода.

Так что программистам пришлось что-то придумать. И то, что они сделали, называется `immediately-invoked function expressions`, что означает функцию, запускаемую сразу после объявления.

```
    (function() {
    
      let message = "Hello";
    
      alert(message); // Hello
    
    })();
```

Здесь создается и немедленно вызывается Function Expression. Так что код выполняется сразу же и у него есть свои локальные переменные.

Function Expression обёрнуто в скобки, потому что, когда JS встречает "function" в основном потоке кода, он воспринимает это как начало Function Declaration. Но у Function Declaration должно быть имя, иначе код вызовет ошибку.

```
// ошибка синтаксиса из-за скобок ниже
function go() {

}(); // <-- не можете вызывать Function Declaration немедленно
```

Даже если добавить имя - то же будет ошибка.

Скобки вокруг функции - это трюк, который позволяет показать JS, что функция была создана в контексте другого выражения и, таким образом, это функциональное выражение, которому не нужно имя и его можно немедленно вызвать.

## Сборка мусора

Обычно лексическое окружение очищается и удаляется после того, как функция выполнилась.

Если функция завершает свое выполнение, лексическое значение станет недоступно, поэтому оно удалится из памяти.

Но, если есть вложенная функция, которая все еще доступна после выполнения `f`, то у нее есть свойство `[[Environment]]`, которое ссылается на внешнее лексическое окружение, тем самым оставляя его достижимым