//Here we can chain decorators and combine them
class Coffee {
    cost() {
      return 5;
    }
  }

  class MilkDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }

    cost() {
      return this.coffee.cost() + 2;
    }
  }

  class SugarDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }

    cost() {
      return this.coffee.cost() + 1;
    }
  }

  const simpleCoffee = new Coffee();
  const coffeeWithMilkAndSugar = new SugarDecorator(new MilkDecorator(simpleCoffee));

  console.log(simpleCoffee.cost());
  console.log(coffeeWithMilkAndSugar.cost());
