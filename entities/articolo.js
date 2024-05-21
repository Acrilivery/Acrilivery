class Articolo {
  #nomeProdotto;
  #disponibilita;
  #descrizione;
  #prezzo;
  #composizione;
  #id;

  constructor(nome, disp, desc, price, composition, randomID) {
    this.#nomeProdotto = nome;
    this.#disponibilita = disp;
    this.#descrizione = desc;
    this.#prezzo = price;
    this.#composizione = composition;
    this.#id = randomID;
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
}

const prodotto = new Articolo("prodotto", 1, 1, "prodotto di prova", 10);
