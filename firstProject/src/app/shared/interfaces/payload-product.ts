import { Product } from "./product";

export type PayloadProduct = Omit<Product, 'id'>;
