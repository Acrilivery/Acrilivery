class Ordine {
  #prodotto = [];
  #prezzo;
  #attributoPagamento;
  #indirizzo;
  #status;
  #orario;
  #id;
  constructor(pagamento, prodotti) {    
    this.#attributoPagamento = pagamento;
    this.#orario = new Date(Date.now());
    this.#status = "pagato";
    this.#prodotto = prodotti;
    this.#id = this.#randomID;
    this.#prezzo = this.#calculateTotalPrice();
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
  getStatus() {
    return this.#status;
  }
  getOrario() {
    return this.#orario;
  }
  getID() {
    return this.#id;
  }
  #randomID() {
    return Math.random() * 1000;
  }
}
