export interface CartProductType {
  productId: number;
  quantity: number;
}

export interface CartType {
  userId: number;
  date: Date;
  products: CartProductType[];
}
