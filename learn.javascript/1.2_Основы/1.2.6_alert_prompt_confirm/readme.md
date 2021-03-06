
# Взаимодействие: alert, prompt, confirm

## alert

Показывает сообщение в модальном окне и ждет, пока пользователь не нажмет на кнопку "ОК".

```
 alert("Hi!")
```

Модальным окном называется окно, которое блокирует весь интерфейс страницы, взаимодействие возможно только с самим окном

## prompt

Функция отображает модальное окно с сообщением и текстовым полем, куда пользователь вводит значение

```
 let result = prompt(title, [default]);
```

Также в интерфейсе присутствуют 2 кнопки: "Ок" и "Отмена"

При нажатии на "Ок" переменной result присвоится значение введеное пользователем в текстовом поле, при нажатии на "отмену" или на ESC, окно закрывается и переменной присваивается значение null.

Также в функцию вторым аргументом передается значение по умолчанию в текстовое поле.

В IE рекомендуется указывать начальное значение, иначе в текстовое поле вставится "undefined".


## confirm

Функция отображает модальное окно с текстом вопроса и двумя кнопками: "Ок" и "Отмена"

```
  result = confirm(question);
```

При нажатии на "Ок" результатом присваивания будет true, при отмене - false