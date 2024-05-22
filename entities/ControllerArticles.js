const Articles = require("../entities/article.js");

class ControllerArticles {
  #articles = [];

  addArticle(article) {
    this.#articles.push(article);
  }

  getArticles() {
    return this.#articles;
  }

  getArticle(id) {
    function OnFind(el) {
      return el.getId() === id;
    }
    return this.#articles.find(OnFind);
  }

  deleteArticle(id) {
    function OnFilter(el) {
      return el.getId() !== id;
    }
    return this.#articles.filter(OnFilter);
  }

  updateArticle(id, article) {
    function OnMap(el) {
      if (el.getId() === id) return article;
      else return el;
    }
    return this.#articles.find(OnFind);
  }
}

module.exports = ControllerArticles;