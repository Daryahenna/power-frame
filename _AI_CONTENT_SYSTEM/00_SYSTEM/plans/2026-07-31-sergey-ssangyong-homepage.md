# Plan: Сергей - главная ремонта рам SsangYong
Date: 2026-07-31
Goal: Пересобрать главную страницу в презентационный сайт профильного мастера по рамам SsangYong.
Spec: `_AI_CONTENT_SYSTEM/00_SYSTEM/specs/2026-07-31-sergey-ssangyong-homepage.md`

## Files Affected

- `public/images/workshop-welding.jpg` - временное стоковое фото сварочных работ.
- `public/images/workshop-frame.jpg` - временное стоковое фото ремонта силовой части.
- `src/styles/global.css` - дизайн-токены, типографика, базовые состояния и анимации.
- `src/layouts/BaseLayout.astro` - шрифты, тема страницы и мобильная контактная команда.
- `src/components/Header.astro` - компактная навигация только для новой главной.
- `src/components/Footer.astro` - простой подвал без неподтвержденных реквизитов.
- `src/components/CTAForm.astro` - форма предварительной оценки с локальным подтверждением.
- `src/pages/index.astro` - новая структура и тексты главной страницы только про SsangYong.
- `tailwind.config.cjs` - обновленная палитра, шрифты и размеры.

## Architecture Notes

- Сохраняется Astro 4 и Tailwind 3, новые UI-библиотеки не добавляются.
- Существующие SEO-маршруты моделей SsangYong сохраняются.
- Страницы Kia остаются вне навигации и главной до отдельного решения, но исходные файлы не удаляются.
- Стоковые фотографии хранятся локально и применяются только как временное оформление.
- Форма не передает данные наружу: обработчик `submit` показывает локальный статус прототипа.

## Task 1: Подготовить визуальные материалы
Files: `public/images/workshop-welding.jpg`, `public/images/workshop-frame.jpg`

Steps:
- [ ] Скачать две бесплатные фотографии Pexels в локальную папку `public/images`.
- [ ] Проверить формат, размеры и открытие каждого файла.
- [ ] Зафиксировать ссылки на источники в комментариях главной страницы.

Verify: `Get-ChildItem public/images | Select-Object Name,Length` показывает два непустых JPG-файла.
Commit: `chore: add temporary workshop photography`

## Task 2: Обновить дизайн-систему
Files: `tailwind.config.cjs`, `src/styles/global.css`, `src/layouts/BaseLayout.astro`

Steps:
- [ ] Задать цвета `paper`, `ink`, `metal`, `signal` и шрифты `Golos Text`, `IBM Plex Mono`.
- [ ] Добавить базовые классы контейнера, кнопок, секций, фокуса и reduced motion.
- [ ] Подключить шрифты и обновить `theme-color` на `#d3102f`.
- [ ] Удалить плавающую кнопку WhatsApp с несуществующим контактом.

Verify: `npm run build` завершается с кодом 0 и CSS содержит новые токены.
Commit: `feat: establish industrial visual system`

## Task 3: Пересобрать шапку и подвал
Files: `src/components/Header.astro`, `src/components/Footer.astro`

Steps:
- [ ] Заменить старый каталог навигацией по якорям новой главной.
- [ ] Добавить текстовый знак `СЕРГЕЙ / РАМЫ SSANGYONG`.
- [ ] Сделать мобильное меню с корректным `aria-expanded`.
- [ ] Упростить подвал до профиля, навигации и пометки презентационного прототипа.

Verify: DOM содержит одну основную навигацию, ссылки `#problems`, `#works`, `#process`, `#faq`, `#estimate`.
Commit: `feat: simplify homepage navigation`

## Task 4: Собрать новую главную страницу
Files: `src/pages/index.astro`

Steps:
- [ ] Реализовать первый экран с заголовком `Ремонт рам SsangYong` и временным фото сварки.
- [ ] Добавить полосу доверия без неподтвержденных цифр.
- [ ] Добавить секции проблем, будущих кейсов, процесса, личной ответственности и моделей.
- [ ] Добавить короткий FAQ и безопасные тексты без Kia.
- [ ] Сохранить Service schema с описанием только SsangYong.

Verify: поиск `rg -n "Kia|Киа|\[" src/pages/index.astro` не находит Kia и видимые шаблонные плейсхолдеры.
Commit: `feat: redesign SsangYong frame repair homepage`

## Task 5: Пересобрать форму оценки
Files: `src/components/CTAForm.astro`

Steps:
- [ ] Оставить поля модели, телефона, описания и фотографий.
- [ ] Добавить валидацию обязательных полей средствами HTML.
- [ ] Перехватить `submit`, скрыть форму и показать локальное подтверждение.
- [ ] Не использовать фиктивные ссылки телефона, Telegram и WhatsApp.

Verify: отправка валидной формы меняет видимый статус без навигации и сетевого запроса.
Commit: `feat: add presentation estimate form`

## Task 6: Проверить сборку и адаптивность
Files: весь проект

Steps:
- [ ] Запустить `npm run build` и устранить ошибки.
- [ ] Проверить главную в desktop viewport 1440x900.
- [ ] Проверить главную в mobile viewport 390x844.
- [ ] Проверить горизонтальный скролл, наложения, меню, якоря и форму.
- [ ] Оставить локальный сервер запущенным для презентации.

Verify: сборка проходит, screenshots desktop/mobile читаемы, `scrollWidth === clientWidth`, в консоли нет ошибок.
Commit: `test: verify homepage presentation build`

## Execution

Inline: задачи выполняются последовательно в текущей сессии, поскольку изменения связаны общей визуальной системой и одной страницей.
