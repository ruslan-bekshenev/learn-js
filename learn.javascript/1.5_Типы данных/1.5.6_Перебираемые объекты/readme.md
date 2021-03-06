# Перебираемые объекты

Перебираемые объекты - концепция, которая позволяет использовать любой объект в цикле `for..of`.

## Symbol.iterator

Чтобы сделать объект итерируемым, нужно добавить в объект метод с именем `Symbol.iterator`

1. Когда цикл `for..of` запускается, он вызывает этот метод один раз. Этот метод должен вернуть итератор - объект с методом `next`
2. Дальше `for..of` работает только с этим возвращенным объектом.
3. Когда `for..of` хочет получить следующее значение, он вызывает `next()` этого объекта.
4. Результат вызова `next()` должен иметь вид `{done: Boolean, value: any}`, где `done=true` означает, что цикл завершен, в противном случае `value` содержит очередное значение.

```
  let range = {
    from: 1,
    to: 5
  };
  
  // 1. вызов for..of сначала вызывает эту функцию
  range[Symbol.iterator] = function() {
  
    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() вызывается на каждой итерации цикла for..of
      next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // теперь работает!
  for (let num of range) {
    alert(num); // 1, затем 2, 3, 4, 5
  }
```

Недостаток такого подхода в том, что нельзя использовать этот объект в двух параллельных циклах `for..of`: у них будет общее текущее состояние итерации, потому что теперь существует лишь один итератор - сам объект.

### Бесконечные итераторы

Можно сделать бесконечный итератор. Например, `range` будет бесконечным при `range.to = Infinity`.

`next` не имеет ограничений. Чтобы выйти из цикла можно использовать `break`.

## Строка – перебираемый объект 

## Явный вызов итератора

```
  let str = "Hello";
  
  // делает то же самое, что и
  // for (let char of str) alert(char);
  
  let iterator = str[Symbol.iterator]();
  
  while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // выводит символы один за другим
  }
```

Дает больше контроля над процессом, чем `for..of`. Например, можно разбить процесс итерации на части: перебрать немного элементов, затем остановиться, сделать что-то еще и потом продолжить.

## Итерируемые объекты и псевдомассивы

_Итерируемые объекты_ - объекты, которые реализуют метод `Symbol.iterator`.
_Псевдомассивы_ - объекты, у которых есть индексы и свойство `length`, то есть, они выглядят как массивы

Есть объекты, который являются итерируемыми или псевдомассивами, или и тем, и другим.

Например, строки итерируемы (для них работает `for..of`) и являются псевдомассивами (они индексировны и есть `length`)

Но итерируемый объект может не быть псевдомассивом и наоборот.

```
  let arrayLike = { // есть индексы и свойство length => псевдомассив
    0: "Hello",
    1: "World",
    length: 2
  };
  
  // Ошибка (отсутствует Symbol.iterator)
  for (let item of arrayLike) {}
```

 Итерируемые объекты, и псевдомассивы – это обычно не массивы
 
## Array.from

```
  Array.from(obj[, mapFn, thisArg])
```

Универсальный метод, который принимает в аргументе итерируемый объект или псевдомассив и делает из него настоящий массив, то есть создает новый массив и копирует туда все элементы.

Есть необязательный второй аргумент может быть функцией, которая будет применена к каждому элементу перед добавлением в массив, а `thisArg` позволяет установить `this` для этой функции