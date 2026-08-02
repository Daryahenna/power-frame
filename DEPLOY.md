# Деплой на VPS

Сайт — статический (Astro, `output: 'static'`). Сборка даёт папку `dist/` с готовыми HTML/CSS/JS —
никакого Node.js процесса на сервере не нужно, только nginx.

## 1. Перед первым деплоем

1. Замени плейсхолдер домена на реальный:
   - `astro.config.mjs` → `SITE_URL`
   - `public/robots.txt` → `Sitemap:`
2. Заполни реальные данные в `src/config.ts` (телефон, Telegram, WhatsApp, адрес, ИНН и т.д.) —
   сейчас там плейсхолдеры вида `[ТЕЛЕФОН]`.
3. Пройдись по `TODO:` в контенте (`src/content/models/*.yaml`, `src/pages/**`) — цены, кейсы,
   отзывы, гарантийные сроки.
4. Подключи backend для формы заявки (`src/components/CTAForm.astro`) — сейчас форма без
   обработчика (`action="#"`). Проще всего — Telegram-бот по аналогии с ботами клиента (см.
   `jlm_bot` / `nastya_bot` в инфраструктуре) или любая форм-CRM.

## 2. Сборка

```bash
npm install
npm run build
```

Результат — папка `dist/`.

## 3. Вариант A — просто nginx (рекомендуется, сайт статический)

1. Скопировать `dist/` на VPS:

```bash
rsync -avz --delete dist/ root@<VPS_IP>:/var/www/remont-ram/
```

2. Конфиг nginx (`/etc/nginx/sites-available/remont-ram`):

```nginx
server {
    listen 80;
    server_name example-remont-ram.ru www.example-remont-ram.ru;

    root /var/www/remont-ram;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript image/svg+xml application/json;

    location / {
        try_files $uri $uri/ =404;
    }

    location = /404.html {
        internal;
    }

    error_page 404 /404.html;
}
```

3. Активировать и выпустить SSL:

```bash
ln -s /etc/nginx/sites-available/remont-ram /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
certbot --nginx -d example-remont-ram.ru -d www.example-remont-ram.ru
```

## 4. Вариант B — Docker (если хочешь унифицировать с остальными проектами на VPS)

`Dockerfile`:

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

Дальше — как обычный контейнер за общим nginx-реверс-прокси на VPS (тот же паттерн, что и у
других твоих сервисов).

## 5. Обновление сайта после правок контента

```bash
npm run build
rsync -avz --delete dist/ root@<VPS_IP>:/var/www/remont-ram/
```

CI не настраивал — по умолчанию сборка и деплой руками/скриптом, как выше. Если понадобится
автодеплой по git push — можно добавить простой GitHub Actions workflow отдельно.
