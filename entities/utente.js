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

  get nome() {
    return this.#nome;
  }
  get cognome() {
    return this.#cognome;
  }
  get email() {
    return this.#email;
  }
  get password() {
    return this.#password;
  }
  get indirizzo() {
    return this.#indirizzo;
  }
  get codiceFiscale() {
    return this.#codiceFiscale;
  }
}
