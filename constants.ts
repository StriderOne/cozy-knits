import { Product } from './types';

export const HERO_TITLE = "Игрушки, у которых есть душа";
export const HERO_SUBTITLE = "Бескомпромиссное качество в каждой петельке. Ручная работа, гипоаллергенные материалы и внимание к деталям.";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Мишка Тедди "Оливер"',
    category: 'ANIMALS',
    price: 3500,
    shortDescription: 'Классический вязаный мишка в винтажном стиле.',
    fullDescription: 'Оливер создан для самых теплых объятий. Выполнен из мягкой полушерсти, наполнитель — гипоаллергенный холлофайбер. Конечности подвижны (пуговичное крепление).',
    materials: 'Полушерсть, холлофайбер, дерево (пуговицы)',
    dimensions: '25 см',
    images: [
      'https://picsum.photos/seed/bear1/800/800',
      'https://picsum.photos/seed/bear2/800/800',
      'https://picsum.photos/seed/bear3/800/800',
    ],
    marketplaceLinks: {
      wildberries: 'https://wb.ru',
      ozon: 'https://ozon.ru',
    },
    inStock: true,
  },
  {
    id: '2',
    name: 'Зайка "Мия" в платье',
    category: 'ANIMALS',
    price: 2800,
    shortDescription: 'Нежная зайка с длинными ушами и съемной одеждой.',
    fullDescription: 'Мия станет лучшей подружкой для вашей принцессы. Платье снимается, можно заказывать дополнительные наряды. Глазки на безопасном креплении.',
    materials: '100% мерсеризованный хлопок',
    dimensions: '30 см (с ушами)',
    images: [
      'https://picsum.photos/seed/bunny1/800/800',
      'https://picsum.photos/seed/bunny2/800/800',
    ],
    marketplaceLinks: {
      ozon: 'https://ozon.ru',
      yandex: 'https://market.yandex.ru',
    },
    inStock: true,
  },
  {
    id: '3',
    name: 'Интерьерная кукла "Алиса"',
    category: 'DOLLS',
    price: 4200,
    shortDescription: 'Утонченная кукла для украшения детской или гостиной.',
    fullDescription: 'Алиса стоит самостоятельно. Волосы из мягкой пряжи можно заплетать. Одежда выполнена с высокой детализацией.',
    materials: 'Хлопок, акрил, фатин',
    dimensions: '32 см',
    images: [
      'https://picsum.photos/seed/doll1/800/800',
      'https://picsum.photos/seed/doll2/800/800',
    ],
    marketplaceLinks: {
      wildberries: 'https://wb.ru',
    },
    inStock: false,
  },
  {
    id: '4',
    name: 'Набор корзинок "Уют"',
    category: 'DECOR',
    price: 1500,
    shortDescription: 'Набор из двух вязаных корзинок для мелочей.',
    fullDescription: 'Идеально держат форму благодаря плотной вязке из трикотажной пряжи. Подходят для ванной, спальни или детской.',
    materials: 'Трикотажная пряжа (100% хлопок)',
    dimensions: '15х10 см, 20х15 см',
    images: [
      'https://picsum.photos/seed/decor1/800/800',
    ],
    marketplaceLinks: {
      ozon: 'https://ozon.ru',
    },
    inStock: true,
  },
  {
    id: '5',
    name: 'Львенок "Симба"',
    category: 'ANIMALS',
    price: 3200,
    shortDescription: 'Солнечный львенок с густой гривой.',
    fullDescription: 'Грива надежно закреплена, не лезет. Очень приятный на ощупь, фактурная вязка.',
    materials: 'Полухлопок (Jeans)',
    dimensions: '22 см',
    images: [
      'https://picsum.photos/seed/lion1/800/800',
    ],
    marketplaceLinks: {
      wildberries: 'https://wb.ru',
      yandex: 'https://market.yandex.ru',
    },
    inStock: true,
  }
];
