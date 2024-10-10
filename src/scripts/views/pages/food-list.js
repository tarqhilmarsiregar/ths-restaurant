import './food-item';

class FoodList extends HTMLElement {
  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  render() {
    this.innerHTML = '<h4 tabindex="0">Foods Menu List</h4>';
    this._foods.menus.foods.forEach((food) => {
      const FoodItemElement = document.createElement('food-item');
      FoodItemElement.food = food;
      this.appendChild(FoodItemElement);
    });
  }
}

customElements.define('food-list', FoodList);
export default FoodList;
