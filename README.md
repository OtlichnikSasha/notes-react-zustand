![image](https://github.com/OtlichnikSasha/notes-react-zustand/assets/71177045/6a603fb3-c579-49a1-90a5-416222f6422a)

![image](https://github.com/OtlichnikSasha/notes-react-zustand/assets/71177045/2b806fd0-4869-45f2-ad1b-37c365e77ab0)


Приложение заметки. Pet проект.
Стек:
 - React + Typescript
 - SASS modules
 - Vite
 - framer-motion
 - zustand (state-manager)
 - axios

Реализовано создание, удаление, вывод и редактирование заметок. Заметки хранятся в localstorage (добавляются, меняются и извлекаются автоматически, с помощью middleware от zustand - persist)
Для редактирования и создания заметок сделано модальное окно. Для написания контента (с возможностью делать текст жирным, курсивным и т.п) использовалась библиотека tinymce
Для анимаций (открытие модального окна, клик на кнопки, анимация удаления карточки) использовался framer-motion
В качестве сборщика использовался vite (сделан конфиг для импорта svg, как компонентов, добавлен autoprefixer и автоматический импорт файла с миксинами ко всем scss файлам)
Приложение выложено на gh-pages: https://otlichniksasha.github.io/notes-react-zustand/
