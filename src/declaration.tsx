export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  qty: number;
}
export interface User {
  email: string;
  password: string;
  name: string;
  admin: boolean;
  first: boolean;
}

export interface Table<T> {
  [key: string]: T;
}

export interface TContext {
  products: Array<Product>;
  users: Table<User>;
  cart: Array<Product>;
  paid: boolean;
  login: (
    email: User["email"],
    name: User["name"],
    password: User["password"],
    admin: User["admin"]
  ) => void;
  logout: () => void;
  addToCart: (productId: number) => void;
  removeFromToCart: (product: Product) => void;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  setAdmin: (admin: boolean) => void;
  checkout: () => void;
  getTotalAvailableProduct: () => number;
  onCheckoutSuccess: () => void;
  getTotalProductInCart: () => number;
}
