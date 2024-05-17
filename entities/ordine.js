class Ordine {
  #prodotto = [];
  #prezzo;
  #attributoPagamento;
  #indirizzo;
  #status;
  #orario;
  constructor(prezzo, pagamento) {
    this.#prezzo = prezzo;
    this.#attributoPagamento = pagamento;
    this.#orario = new Date();
    this.#status = "pagato";
  }

  tracciaOrdine() {}

  aggiungiIndirizzo() {}

  anullaOrdine() {}

  aggiungiMetodoPagamento() {}

  get prodotto() {
    return this.#prodotto;
  }
  get prezzo() {
    return this.#prezzo;
  }
  get attributoPagamento() {
    return this.#attributoPagamento;
  }
  get indirizzo() {
    return this.#indirizzo;
  }
  get status() {
    return this.#status;
  }
  get orario() {
    return this.#orario;
  }
}
