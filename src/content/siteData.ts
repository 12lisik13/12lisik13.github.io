export type PortfolioItem = {
  src: string // filename inside `public/portfolio/`
}

export type PortfolioAlbum = {
  title: string
  items: PortfolioItem[]
}

export type Service = {
  title: string
  description: string
}

export type PricingPlan = {
  title: string
  price: string
  description: string
  bullets: string[]
  popular?: boolean
}

export type Testimonial = {
  quote: string
  name: string
  role?: string
}

export const siteData = {
  header: {
    nav: [
      { label: 'Услуги', href: '#services' },
      { label: 'Прайс', href: '#pricing' },
      { label: 'Портфолио', href: '#portfolio' },
      { label: 'Отзывы', href: '/contacts' },
      { label: 'Контакты', href: '/contacts' },
    ],
  },
  hero: {
    eyebrow: 'Веб и контент дизайн',
    title: 'Делаю сайты и контент, которые хочется смотреть и хочется заказывать.',
    description:
      'Минималистичный дизайн, продуманная типографика и визуальная система под ваш стиль. Быстро, аккуратно и с вниманием к деталям.',
    ctas: [
      { label: 'Смотреть портфолио', href: '#portfolio' },
      { label: 'Связаться', href: '/contacts' },
    ],
  },
  services: [
    {
      title: 'Веб-дизайн',
      description: 'Лендинги, структура, UI, дизайн-макеты и стилизация под бренд.',
    },
    {
      title: 'Контент для соцсетей',
      description: 'Обложки, посты, сторис, визуальные шаблоны и единый стиль.',
    },
    {
      title: 'Визуальная система',
      description: 'Типографика, палитра, сетка, компоненты и рекомендации для роста.',
    },
  ] satisfies Service[],
  pricing: [
    {
      title: 'Старт',
      price: 'от 500 рублей',
      description: 'Для одного аккуратного макета в нужном формате.',
      bullets: [
        '1 макет',
        'Типографика',
        'Экспорт в нужных форматах',
      ],
    },
    {
      title: 'Оптимум',
      price: 'от 1000 рублей',
      description: 'Когда нужно 2–3 макета в одном стиле и для набора задач.',
      bullets: [
        '2–3 макета',
        'Единая визуальная система',
        'Экспорт пакетом',
      ],
      popular: true,
    },
    {
      title: 'Премиум',
      price: 'по согласованию',
      description: 'Под ключ для контента/визуальной системы в проекте.',
      bullets: [
        'Под ключ',
        'Согласование',
        'Финальный набор',
        'Сопровождение в проекте',
      ],
    },
  ] satisfies PricingPlan[],
  portfolioAlbums: [
    {
      title: 'Посты',
      items: [
        { src: 'work-01.jpg' },
        { src: 'work-02.jpg' },
      ],
    },
    {
      title: 'Баннеры',
      items: [{ src: 'work-03.jpg' }],
    },
    {
      title: 'Литературный клуб',
      items: [
        { src: 'work-04.jpg' },
        { src: 'work-05.jpg' },
        { src: 'work-06.jpg' },
        { src: 'work-07.jpg' },
      ],
    },
    {
      title: 'Логотип альбома',
      items: [
        { src: 'logo-01.jpg' },
        { src: 'logo-02.jpg' },
        { src: 'logo-03.jpg' },
      ],
    },
    {
      title: 'Логотип университета',
      items: [{ src: 'logo-04.jpg' }, { src: 'logo-05.jpg' }],
    },
    {
      title: 'Океанариум',
      items: [
        { src: 'work-08.jpg' },
        { src: 'work-09.jpg' },
        { src: 'work-10.jpg' },
        { src: 'work-11.jpg' },
        { src: 'work-12.jpg' },
      ],
    },
  ] satisfies PortfolioAlbum[],
  testimonials: [
    {
      quote: 'Очень аккуратно собран визуальный стиль — теперь у нас всё выглядит цельно и “дорого”.',
      name: 'Марина',
      role: 'основатель проекта',
    },
    {
      quote: 'Понравилось, что есть структура: от концепции до финальных материалов. Быстро и без лишней суеты.',
      name: 'Алексей',
      role: 'маркетинг',
    },
    {
      quote: 'Дизайн реально помог продавать: после обновления визуалки заявки стало больше.',
      name: 'Екатерина',
    },
  ] satisfies Testimonial[],
  contact: {
    email: 'mdima1304@gmail.com',
    telegram: '@Evelina2548',
    description:
      'Напишите пару слов о задаче — подскажу формат работы и сроки. Можно прислать ссылку на примеры, которые вам нравятся.',
  },
  footer: {
    copyright: '© 2026. Все права защищены.',
  },
} as const

