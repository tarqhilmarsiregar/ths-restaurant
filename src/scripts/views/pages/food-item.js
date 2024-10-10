class FoodItem extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.innerHTML = `
      <p tabindex="0">${this._food.name}</p>
    `;
  }
}

customElements.define('food-item', FoodItem);
