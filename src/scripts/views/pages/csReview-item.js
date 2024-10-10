class csReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h4 tabindex="0">${this._review.name}</h4>
      <p tabindex="0">${this._review.date}</p>
      <q tabindex="0">${this._review.review}</q>
    `;
  }
}

customElements.define('review-item', csReviewItem);
