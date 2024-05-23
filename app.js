const Users = require("./entities/ControllerUsers.js");
const Orders = require("./entities/ControllerOrder.js");
const Articles = require("./entities/ControllerArticle.js");

class App {
  #users = new ControllerUsers();
  #orders = new ControllerOrders();
  #articles = new ControllerArticles();
  #currentUser = null;
  registrati(nome, cognome, email, password, indirizzo, codiceFiscale) {
    this.#users.AddUser(
      nome,
      cognome,
      email,
      password,
      indirizzo,
      codiceFiscale
    );
    console.log("Registrazione avvenuta");
  }
  login(email, password) {
    function OnFind(el) {
      if (el.getEmail() === email && el.getPassword() === password) return el;
      else {
        return null;
      }
    }
    this.#currentUser = this.#users.getUsers().find(OnFind);
    if (this.#currentUser != null) {
      console.log("Login avvenuto correttamente.");
    } else {
      console.log("Password e/o email sbagliate.");
    }
  }
  cambioCredenziali(nuovaPassword, nuovaEmail) {
    this.#currentUser.setPassword(nuovaPassword);
    this.#currentUser.setEmail(nuovaEmail);
    if (
      this.#currentUser.setPassword !== getPassword() &&
      this.#currentUser.getEmail() !== getEmail()
    ) {
      return console.log("Credenziali cambiate con successo");
    }
    console.log("riprova");
  }

  recuperaPassword(nuovaPassword) {
    if (this.#currentUser.getPassword() === setPassword()) {
      return console.log("Password recuperata con successo");
    } else {
      return console.log("Password sbagliata");
    }
  }

  compra() {}
}
