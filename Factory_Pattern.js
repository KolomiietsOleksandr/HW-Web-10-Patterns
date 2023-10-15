//Here, the factory can create different types of products
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  class ProductFactory {
    createProduct(name, price) {
      return new Product(name, price);
    }
  }

  const factory = new ProductFactory();
  const productA = factory.createProduct("Product A", 10);
  const productB = factory.createProduct("Product B", 20);

  console.log(productA); // { name: 'Product A', price: 10 }
  console.log(productB); // { name: 'Product B', price: 20 }
