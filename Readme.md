## Требования к коду:

- Использование последней версии ReactJS.
- Настройка системы сборки (желательно без react-create-app).
- Можно использовать любимую state management библиотеку и роутер.

Вы можете выбирать любые технологии на ваше усмотрение, но должны обосновать свой выбор.

## Требования к реализации:

- Итоговое тестовое задание должно находиться на GitHub/Bitbucket.
- Разбейте свою работу на маленькие подзадачи и делайте коммит для каждой подзадачи отдельно (фиксы допускаются).
- Будьте готовы прокомментировать каждую строку, действуйте осознанно, в коде оставляйте комментарии.
- Разверните любой удобный вам сборщик. Он должен будет объединять весь css и весь js, минимизировать их, и удалять комментарии.
- После реализации задачи напишите ТЗ, как будто код ещё не написан и выполнять ее будет другой разработчик.

## Задача:

Используя SWAPI (https://swapi.co/) реализовать приложение, которое показывает список персонажей из вселенной Star Wars и позволяет просматривать подробную информацию с указанием родной планеты, фильмов в которых он участвовал и т.д.


##  ТЗ

Реализовать Single Page Application (SPA) для просмотра информации по вселенной Star Wars (SW).

Структура SPA:
  - Шапка
  Отображается всегда.
  Содержит следующие разделы: films, people, planets, species, starships, vehicles.
  Активный раздел должен быть подсвечен.

  - Список элементов (из раздела)
  Отображается при выборе раздела из шапки.
  Содержит список элементов из выбранной темы, блок с пагинацией.
  Список содержит не более 10 элементов.
  При нажатии на элемент из списка отображается блок с подробным описанием данного элемента.
  Пагинация - содержит 2 кнопки "Next" и "Prev", для переключения страниц.
  При отсутствии возможности перейти на "Next/Prev" старницу, кнопка должна быть неактивна.

  - Подробное описание элемента
  Отображается при выборе элемента из "Списка".
  Некоторые свойства элемента могут ссылаться на элементы из других разделов,
  должна быть возможность открыть данные элементы для просмотра из текущего раздела.

Список поддерживаемых десктоп браузеров (последние версии):
  - Google Chrome
  - Firefox
  - Safari

Используемые технологии:
  - React
  - Effector (state manager)
  - Styled-component (стилизация компонентов, в проекте обойтись без написания .css файлов)


## [GitHub Pages Link](https://glebhihoho.github.io/vigbo/#/people)


## [Commits naming](https://github.com/artalar/blog/blob/master/src/pages/commits-naming.md)


## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `public` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run check`

Run jscpd for analyze code
