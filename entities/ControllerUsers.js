const User = require("./user.js");

class ControllerUsers {
  #users = [];
  addUser(nome, cognome, email, password, indirizzo, codiceFiscale) {
    const user = new User(
      nome,
      cognome,
      email,
      password,
      indirizzo,
      codiceFiscale
    );
    this.#users.push(user);
  }
  getUsers() {
    return this.#users;
  }
  getUser(id) {
    function OnFind(el) {
      return el.getId() === id;
    }
    return this.#users.find(OnFind);
  }
}
module.export = ControllerUsers;
