export interface ProductByRestaurant {
  _id: string;
  name: string;
  description: string;
  imagePath: string
  price: number;
  ingredients: [];
  category: string;
}
