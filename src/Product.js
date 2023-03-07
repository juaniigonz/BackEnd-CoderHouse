class Product {
    constructor({ title, description, price, thumbnail, code, stock }) {
      this.id = this.#generateId();
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
    #generateId() {
      const min = 1000000000;
      const max = 9999999999;
      return Math.floor(Math.random() * (max - min) + min).toString();
    }
  }
module.export = Product