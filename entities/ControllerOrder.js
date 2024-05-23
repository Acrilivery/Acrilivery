const Order = require("./order.js");

class ControllerOrders {
  #orders = [];
  addOrders(order) {
    this.#orders.push(order);
  }

  getOrders() {
    return this.#orders;
  }

  elimateOrder(id) {
     function OnFilter(el) {
      return el.getId() !== id;
    }
    return this.#orders.filter(OnFilter);
  }

  getOrder(id) {
     function OnFind(el) {
      return el.getId() === id;
    }
    return this.#orders.find(OnFind);
  }
}

module.exports = ControllerOrders;
