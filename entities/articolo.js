class Articolo {
  #nomeProdotto;
  #disponibilita;
  #descrizione;
  #prezzo;
  #composizione;

  constructor(nome, disp, desc, price, composition) {
    this.#nomeProdotto = nome;
    this.#disponibilita = disp;
    this.#descrizione = desc;
    this.#prezzo = price;
    this.#composizione = composition;
  }
  get nomeProdotto() {
    return this.#nomeProdotto;
  }

  get disponibilita() {
    return this.#disponibilita;
  }
  get descrizione() {
    return this.#descrizione;
  }
  get prezzo() {
    return this.#prezzo;
  }
  get composizione() {
    return this.#composizione;
  }
}

const prodotto = new Articolo("prodotto", 1, 1, "prodotto di prova", 10);
