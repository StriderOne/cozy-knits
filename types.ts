export type Category = 'ALL' | 'ANIMALS' | 'DOLLS' | 'DECOR';

export interface Product {
  id: string;
  name: string;
  price: number; // Display price just for reference
  category: Category;
  shortDescription: string;
  fullDescription: string;
  materials: string;
  dimensions: string;
  images: string[];
  marketplaceLinks: {
    wildberries?: string;
    ozon?: string;
    yandex?: string;
  };
  inStock: boolean;
}

export interface OrderForm {
  name: string;
  contactType: 'TELEGRAM' | 'WHATSAPP';
  contactValue: string;
  productType: string;
  details: string;
}
