class Utente {
  #nome;
  #cognome;
  #email;
  #password;
  #indirizzo;
  #metodoDiPagamento = [];
  #idUtente;
  #codiceFiscale;
  constructor(nome, cognome, email, password, indirizzo, codiceFiscale) {
    this.#nome = nome;
    this.#cognome = cognome;
    this.#email = email;
    this.#password = password;
    this.#indirizzo = indirizzo;
    this.#codiceFiscale = codiceFiscale;
  }

  registrati() {}

  compra() {}

  cambioCredenziali() {}

  recuperaPassword() {}

  login() {}

  getNome() {
    return this.#nome;
  }
  getCognome() {
    return this.#cognome;
  }
  getEmail() {
    return this.#email;
  }
  getPassword() {
    return this.#password;
  }
  getIndirizzo() {
    return this.#indirizzo;
  }
  getCodiceFiscale() {
    return this.#codiceFiscale;
  }
}
