class DrinkItem extends HTMLElement {
  set drink(drink) {
    this._drink = drink;
    this.render();
  }

  render() {
    this.innerHTML = `
      <p tabindex="0">${this._drink.name}</p>
    `;
  }
}

customElements.define('drink-item', DrinkItem);
