const inquirer = require("inquirer");
const prices = require("./prices");
const setSize = require("./Size");

class Coffee {
  constructor() {
    this.coffee = [];
    this.orderTotal = 0;
  }

  getPrice() {
    console.log(this.coffee);

    // Iterate through current order array, get their prices then add them together.
    for (let i = 0; i < this.coffee.length; i++) {
      const result = prices.find(({ name }) => name === this.coffee[i]);
      console.log(result.name + ` Added`);
      this.orderTotal = this.orderTotal + result.price;
      console.log(`Total: $` + Math.round(this.orderTotal * 100) / 100);
    }
    return this.orderTotal;
  }

  async Start() {
    const { coffeeType } = await inquirer.prompt([
      {
        type: "list",
        name: "coffeeType",
        message: `What type of coffee would you like?`,
        choices: ["House Blend", "Dark Roast", "Robusta", "Arabica"],
      },
    ]);

    const { coffee } = await inquirer.prompt([
      {
        type: "list",
        name: "coffee",
        message: `What coffee would you like?`,
        choices: ["Espresso", "Latte", "Cappuccino", "Macchiato", "Mocha"],
      },
    ]);

    const { size } = await inquirer.prompt([
      {
        type: "list",
        name: "size",
        message: `What size would you like for your coffee?`,
        choices: ["Standard", "Child", "Large", "Addict"],
      },
    ]);

    // send coffeeType and coffee for price calculation.
    this.coffee.push(coffeeType, coffee);
    this.getPrice();

    // multiple orderTotal with the size selected.
    this.orderTotal = setSize(size, this.orderTotal);

    // empty array since coffeeType and coffee prices are already stored in the total.
    this.coffee = [];

    const { condiment } = await inquirer.prompt([
      {
        type: "list",
        name: "condiment",
        message: `Would you like to add a condiment?`,
        choices: ["Milk", "Sugar", "Coco Powder", "No, finish my order"],
      },
    ]);
    if (condiment !== "No, finish my order") {
      this.coffee.push(condiment);
      this.askCondiments();
    } else {
      this.getPrice();
    }
  }
}

module.exports = Coffee;
