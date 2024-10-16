export interface IProduct {
  _id: string;
  name: string;
  description?: string;
  price: number;
  size?: string;
  images: [string];
  isNew?: boolean;
  quantity?: number;
  discount: number;
  category?: Category;
}

export type Category = {
  _id: string;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Cart = {
  product: IProduct;
  quantity: number;
};
