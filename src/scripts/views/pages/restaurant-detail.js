import CONFIG from '../../globals/config';

class RestaurantDetail extends HTMLElement {
  set detail(detail) {
    this._detail = detail;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="image-detail">
                <img src="${CONFIG.IMAGE_URL + this._detail.pictureId}" width="100%" height="100%" alt="${this._detail.name}" tabindex="0">
            </div>
            <div class="text-detail">
                <h3 tabindex="0">${this._detail.name}</h3>
                <p tabindex="0">${this._detail.description}</p>
                <p tabindex="0">Address : ${this._detail.address}</p>
                <p tabindex="0">City : ${this._detail.city}</p>

                <food-list></food-list>
                <drink-list></drink-list>
            </div>        
        `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
