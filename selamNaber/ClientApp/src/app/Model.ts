export class Model {
  categoryName: string;
  products: Array<Product>;

  constructor() {

    this.categoryName = "Phones";
    this.products = [
      new Product(1, "oppo1", 5500, false),
      new Product(2, "oppo2", 3000, true),
      new Product(3, "oppo3", 2000, true),
      new Product(4, "oppo4", 3000, false),
      new Product(5, "oppo5", 3500, true),
      new Product(6, "oppo6", 4250, false)
    ];
  }
}

export class Product {

  id: number;
  name: string;
  price: number; 
  isActive: boolean;

  constructor(id: number, name: string, price: number, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.isActive = isActive;
  }
}