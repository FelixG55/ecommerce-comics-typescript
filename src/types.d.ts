export interface Product  {
    id: number;
    name: string;
    summary?: string;
    price: number;
    date: string;
    image: string;
    imageAlt?: string;
    category: string;
    publisher?: string;
    characters?: string[];
  }

export type ProductList = Product[]