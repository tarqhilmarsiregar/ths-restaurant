import './csReview-item';

class csReviewList extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._reviews.forEach((review) => {
      const reviewItemElement = document.createElement('review-item');
      reviewItemElement.review = review;
      this.appendChild(reviewItemElement);
    });
  }
}

customElements.define('review-list', csReviewList);
