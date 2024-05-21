class Ordine {
  #prodotto = [];
  #prezzo;
  #attributoPagamento;
  #indirizzo;
  #status;
  #orario;
  #id;
  constructor(prezzo, pagamento, prodotti) {
    this.#prezzo = this.#calculateTotalPrice();
    this.#attributoPagamento = pagamento;
    this.#orario = new Date(Date.now());
    this.#status = "pagato";
    this.#prodotto = prodotti;
    this.#id = this.#randomID;
  }
  #calculateTotalPrice() {
    function Sum(acc, el) {
      return acc + el.getPrezzo();
    }
    return this.#prodotto.reduce(Sum, 0);
  }
  getProdotto() {
    return this.#prodotto;
  }
  getPrezzo() {
    return this.#prezzo;
  }
  getMetodoPagamento() {
    return this.#attributoPagamento;
  }
  getIndirizzo() {
    return this.#indirizzo;
  }
  gettatus() {
    return this.#status;
  }
  getOrario() {
    return this.#orario;
  }
  #randomID() {
    return Math.random() * 1000;
  }
}

//prova prova VIVA IL DUCE
