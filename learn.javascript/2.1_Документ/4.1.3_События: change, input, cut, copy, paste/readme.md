# События: change, input, cut, copy, paste


- `change` - 	Значение было изменено. Для текстовых полей срабатывает при потере фокуса.
- `input` - 	Срабатывает при каждом изменении значения. Запускается немедленно, в отличие от `change`.
- `cut/copy/paste` - 	Действия по вырезанию/копированию/вставке. Действие можно предотвратить. Свойство `event.clipboardData` предоставляет доступ на чтение/запись в буфер обмена….