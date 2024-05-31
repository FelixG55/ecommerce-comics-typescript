export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  date: string;
  image: string;
  category: Category;
  publisher?: string;
  characters?: string[];
}

export interface CartContextProps {
  cart: CartProductList;
  addItem: (item: Product, quantity: number) => void;
  decreaseItem: (item: CartProduct) => void;
  increaseItem: (item: CartProduct) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  getCountProducts: () => number;
  getSumProducts: () => number;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  key: string;
  description: string;
}

export type CategoryList = Category[];
export type ProductList = Product[];
export type CartProductList = CartProduct[];