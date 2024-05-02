export class Products {
  id: number;
  product_name: string;
  description: string;
  change_for: string;
  price: number;
  images: string[];
  category: any;
  boost: boolean;
  contact_information: any;

  constructor(
    id: number,
    product_name: string,
    description: string,
    change_for: string,
    price: number,
    images: string[],
    category: any,
    boost: boolean,
    contact_information: any
  ) {
    this.id = id;
    this.product_name = product_name;
    this.description = description;
    this.change_for = change_for;
    this.price = price;
    this.images = images;
    this.category = category;
    this.boost = boost;
    this.contact_information = contact_information;
  }
}
