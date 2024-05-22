const Users = require("./entities/ControllerUsers.js");
const Orders = require("./entities/ControllerOrder.js");
const Articles = require("./entities/ControllerArticle.js");

class App {
  #users = new ControllerUsers();
  #orders = new ControllerOrders();
  #articles = new ControllerArticles();
  #currentUser=null;
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
    function OnFind(el)
    {
      if(el.getEmail() === email && el.getPassword() === password)
        return el;
      else
      {
        return null;
      }
    }
    this.#currentUser = this.#users.getUsers().find(OnFind);
    if(this.#currentUser != null)
      {
        console.log("Login avvenuto correttamente.")
      }
      else
      {
        console.log("Password e/o email sbagliate.")
      }
  }
  cambioCredenziali() {}

  recuperaPassword() {}

  compra() {
    
  }
}
