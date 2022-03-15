# Свойства - геттеры и сеттеры

## Геттеры и сеттеры

Свойства-аксессоры - по своей сути это функции, которые используются для присвоения и получения значения.

Геттер используетя для чтения, сеттер - для записи. Обозначаются как `get` и `set`.

```
let obj = {
  get propName() {
    // геттер, срабатывает при чтении obj.propName
  },

  set propName(value) {
    // сеттер, срабатывает при записи obj.propName = value
  }
};
```

Снаружи свойство-аксессор выглядит как обычно свойство.

```
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
```

## Дескрипторы свойств доступа

Дескрипторы свойств-аксессоров отличаются от обычных свойств-данных.

Они не имеют `value` и `writable`, но взамен предлагают функции `get` и `set`

Дескриптор аксессора может иметь:

`get` – функция без аргументов, которая сработает при чтении свойства,
`set` – функция, принимающая один аргумент, вызываемая при присвоении свойства,
`enumerable` – то же самое, что и для свойств-данных,
`configurable` – то же самое, что и для свойств-данных.

Например, для создания аксессора при помощи `defineProperty` омжно передать дескриптор с использованием `get` и `set`:

```
let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname
```

При попытке указать и `get`, и `value` в одном дескрипторе будет ошибка.


