# Остаточные параметры и оператор расширения

## Остаточные параметры (...)

Функцию можно вызвать с любым количеством аргументов, это не вызовет ошибку, но посчитаются только те, которые заданы функции.

Остаточные параметры могут быть обозначены через ...

Остаточные параметры должны располагаться в конце, иначе это вызовет ошибку


## Переменная "arguments"

Все параметры хранятся в псевдомассиве arguments со своими порядковыми номерами.

Это старый способ, использовалось до того, пока в языке не было остаточных параметров

Недостатком является то, что это псевдомассив и он не поддерживает методы массивов. Также arguments всегда содержит все аргументы функции, нельзя получить их часть.

Стрелочные функции не имеют arguments


## Оператор расширения

Данный оператор также использует ... как и в остаточных параметрах, только делает противоложное.

Он расширяет перебираемый объект в список аргументов. Другими словами он извлекает элементы из массива.

`
let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (оператор "раскрывает" массив в список аргументов)
`

Также его можно использовать и для слияния массивов.