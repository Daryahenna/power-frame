// Единая точка правды для плейсхолдеров. Заменить перед деплоем.
export const SITE = {
  isPreview: true,
  domain: 'power-frame.ru',
  url: 'https://power-frame.ru',
  companyName: 'Power Frame Beard',
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
