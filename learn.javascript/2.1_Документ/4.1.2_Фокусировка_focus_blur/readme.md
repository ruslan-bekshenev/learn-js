# Фокусировка: focus/blur

События `focus` и `blur` срабатывают на фокусировке/потере фокуса элемента.

Их особенности:

- Они не всплывают. Но можно использовать фазу перехвата или `focusin/focusout`.
- Большинство элементов не поддерживают фокусировку по умолчанию. Используйте tabindex, чтобы сделать фокусируемым любой элемент.

Текущий элемент с фокусом можно получить из `document.activeElement`.