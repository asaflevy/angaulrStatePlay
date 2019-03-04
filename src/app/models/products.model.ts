export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  creationDate?: Date;
  imageUrl?: string;

}


export class Product implements ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  creationDate?: Date;
  imageUrl?: string;
}
