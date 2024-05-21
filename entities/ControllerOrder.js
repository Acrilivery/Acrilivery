const Order = require("./ordine.js");

class ControllerOrders {
  #orders = [];
  addOrders(order) {
    this.#orders.push(order);
  }

  getOrders() {
    return this.#orders;
  }

  elimateOrder(id) {
    this.#orders = this.#orders.filter((el) => el.getId() != id);
  }

  getOrder(id) {
    return this.#orders.find((order) => order.getId() === id);
  }
}

module.exports = Orders;
