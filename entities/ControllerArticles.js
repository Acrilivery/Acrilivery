const Articles = require("../entities/articolo.js");

class ControllerArticles {
  #articles = [];

  addArticle(article) {
    this.#articles.push(article);
  }

  getArticles() {
    return this.#articles;
  }

  getArticle(id) {
    return this.#articles.find((article) => article.getId() === id);
  }

  deleteArticle(id) {
    this.#articles = this.#articles.filter((article) => article.getId() !== id);
  }

  updateArticle(id, article) {
    const index = this.#articles.findIndex((article) => article.getId() === id);
    this.#articles[index] = article;
  }
}
