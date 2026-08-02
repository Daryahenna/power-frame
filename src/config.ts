// Единая точка правды для плейсхолдеров. Заменить перед деплоем.
export const SITE = {
  domain: 'example-remont-ram.ru',
  url: 'https://example-remont-ram.ru',
  companyName: '[НАЗВАНИЕ КОМПАНИИ]',
  phone: '[ТЕЛЕФОН]',
  phoneHref: 'tel:+70000000000',
  telegram: '[TELEGRAM]',
  whatsapp: '[WHATSAPP]',
  email: '[EMAIL]',
  address: '[АДРЕС, МОСКВА]',
  addressMapEmbed: '[ССЫЛКА НА КАРТУ]',
  workHours: '[РЕЖИМ РАБОТЫ]',
  legalName: '[ЮР. ЛИЦО / ИП]',
  inn: '[ИНН]',
} as const;
