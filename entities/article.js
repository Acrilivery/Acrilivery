class Articolo {
  #nomeProdotto;
  #disponibilita;
  #descrizione;
  #prezzo;
  #composizione;
  #id;

  constructor(nome, disp, desc, price, composition) {
    this.#nomeProdotto = nome;
    this.#disponibilita = disp;
    this.#descrizione = desc;
    this.#prezzo = price;
    this.#composizione = composition;
    this.#id = this.#randomID();
  }

  getNomeProdotto() {
    return this.#nomeProdotto;
  }

  getDisponibilita() {
    return this.#disponibilita;
  }
  getDescrizione() {
    return this.#descrizione;
  }
  getPrezzo() {
    return this.#prezzo;
  }
  getComposizione() {
    return this.#composizione;
  }

  getId() {
    return this.#id;
  }
  #randomID() {
    return Math.random() * 1000;
  }
}
