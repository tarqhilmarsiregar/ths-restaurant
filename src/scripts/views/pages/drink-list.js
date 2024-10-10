import './drink-item';

class DrinkList extends HTMLElement {
  set drinks(drinks) {
    this._drinks = drinks;
    this.render();
  }

  render() {
    this.innerHTML = '<h4 tabindex="0">Drinks Menu List</h4>';
    this._drinks.menus.drinks.forEach((drink) => {
      const DrinkItemElement = document.createElement('drink-item');
      DrinkItemElement.drink = drink;
      this.appendChild(DrinkItemElement);
    });
  }
}

customElements.define('drink-list', DrinkList);
export default DrinkList;
