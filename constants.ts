import { Product } from './types';

export const HERO_TITLE = "Игрушки, у которых есть душа";
export const HERO_SUBTITLE = "Бескомпромиссное качество в каждой петельке. Ручная работа, гипоаллергенные материалы и внимание к деталям.";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Набор "Пухляши"',
    category: 'ANIMALS',
    price: 4500,
    shortDescription: 'Трио круглых друзей: котик, хомяк и корги.',
    fullDescription: 'Уникальный набор из трех игрушек-антистресс круглой формы. В комплект входят: серый котик, коричневый хомяк и рыжий корги. Идеальный размер для детской ручки. Очень мягкие, отлично держат форму.',
    materials: 'Плюшевая пряжа Himalaya Dolphin Baby, холлофайбер, глазки на безопасном креплении.',
    dimensions: 'Диаметр каждой игрушки ~10-12 см',
    images: [
      './group.png', // Фото, где трое
    ],
    marketplaceLinks: {
      ozon: 'https://ozon.ru', // Замените на реальную ссылку
    },
    inStock: true,
  },
  {
    id: '2',
    name: 'Корги "Бенни"',
    category: 'ANIMALS',
    price: 3500,
    shortDescription: 'Верный плюшевый друг с рыжим ошейником.',
    fullDescription: 'Очаровательный корги из плюшевой пряжи. Очень мягкий и приятный на ощупь. Реалистичная окраска и милая мордочка. Ошейник не снимается.',
    materials: 'Плюшевая пряжа, холлофайбер, безопасные глазки и носик.',
    dimensions: 'Высота 15 см, Длина 20 см',
    images: [
      './corgi.png', // Фото корги отдельно
    ],
    marketplaceLinks: {
      wildberries: 'https://wb.ru', // Замените на реальную ссылку
    },
    inStock: true,
  },
  {
    id: '3',
    name: 'Утконос "Перри"',
    category: 'ANIMALS',
    price: 2800,
    shortDescription: 'Агент П в своей знаменитой шляпе.',
    fullDescription: 'Любимый герой мультфильма. Связан из мягкой плюшевой пряжи. Шляпа надежно закреплена (или снимается, если нужно - уточните при заказе).',
    materials: 'Плюшевая пряжа, фетр (для шляпы), холлофайбер.',
    dimensions: 'Высота 18 см',
    images: [
      './platypus.png', // Фото утконоса
    ],
    marketplaceLinks: {},
    inStock: true,
  }
];