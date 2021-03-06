# Экспорт и импорт

## Экспорт до объявления

Мы можем пометить любое объявление как экспортируемое, разместив `export` перед ним, будь то переменная, функция или класс.

```
// экспорт массива
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// экспорт класса
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

**Не ставится точка с запятой после экспорта класса/функции**

Большинство руководств по стилю кода в JavaScript не рекомендуют ставить точку с запятой после объявлений функций или классов.

## Экспорт отдельно от объявления

Также можно экспортировать можно отдельно

```
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye};
```

## Импорт *

Обычно мы располагаем список того, что хотим импортировать, в фигурных скобках `import {...}`

Но если импортировать нужно много чего, мы можем импортировать всё сразу в виде объекта, используя `import * as <obj>`

```
import * as say from './say.js';
```

На первый взгляд «импортировать всё» выглядит очень удобно, не надо писать лишнего, зачем нам вообще может понадобиться явно перечислять список того, что нужно импортировать?

Для этого есть несколько причин.

1. Современные инструменты сборки собирают модули вместе и оптимизируют их, ускоряя загрузку и удаляя неспользуемый код
2. Явно перечисляя то, что хотим импортировать, мы получаем более короткие имена функций
3. Явное перечисление импортов делает код более понятным, позволяет увидеть, что именно и где используется. Упрощает поддержку и рефакторинг кода.

## Импорт «как»

Мы также можем использовать `as`, чтобы импортировать под другими именами. Аналогично с `export`.

## Экспорт по умолчанию

По умолчанию в модуле может быть только один `export default`.

Экспортированная сущность по умолчанию может не обязана иметь имя

## Реэкспорт

Синтаксис «реэкспорта» `export ... from ...` позволяет импортировать что-то и тут же экспортировать, возможно под другим именем.

