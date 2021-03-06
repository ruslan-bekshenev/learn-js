# Оператор объединения с null '??'

**Эта возможность была добавлена в язык недавно. В старых браузерах может понадобиться полифил**

Объединение с null представляет собой два вопросительных знака **??**

Результат выражения **a ?? b** будет следующим:

- **a**, если значение **a** определено,
- **b**, если значение **a** не определено.

То есть оператор **??** возвращает первый аргумент, если он не **null/undefined**, иначе второй.

Два вопросительных знака аналогичны записи:

```
 let result = (a !== null && a !== undefined) ? a : b;
```

Как правило, данный оператор нужен для того, чтобы задать значение по умолянию для потенциально неопределенной переменной.

## Сравнение с ||

Оператор **||** существует с самого появления JS, поэтому ранее для решения похожих задач разработчики использовали именно его.

Поскольку многие разработчики были недовольны оператором **||** ввели оператор объединения **??**.

### Различия

- **||** возвращает первое истинное значение.
- **??** возвращает первое определенное значение.

Проще говоря, оператор **||** не различает **false**, **0**, пустую строку и **null/undefined**. Для него они все одинаковыми, то есть являются ложными значениями.

## Приоритет

Оператор **??** имеет довольно низкий приоритет: 5. Таким образом **??** вычисляется до **=** и **?**, но после большинства других операций, таких как **+** и <b>*</b>.

## Использование ?? вместе с && или ||

По соображениям безопасности JS запрещает использование оператора **??** вместе с **&&** b **||**, если только приоритет явно не указан в круглых скобках.

```
  let x = 1 && 2 ?? 3; // Синтаксическая ошибка
```

Это довольно спорное ограничение, которое было описано в спецификации языка, чтобы избежать ошибок при замене оператора **||** на **??**.