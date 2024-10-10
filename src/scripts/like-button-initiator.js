import 'regenerator-runtime';
import FavoriteRestaurantIdb from './data/favorite-restaurant-idb';

const LikeButtonInitiator = {
  async init({ LikeButtonContainer, restaurant }) {
    this._likeButtonContainer = LikeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._likeButtonContainer.innerHTML = '<img class="favoriteButton" src="./images/favorite.png" alt="favorite" aria-label="favorite this restaurant">';

    this._likeButtonContainer.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });

    this._likeButtonContainer.addEventListener('keypress', async (event) => {
      if (event.keyCode === 13) {
        await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
        this._renderButton();
      }
    });
  },

  _renderFavorited() {
    this._likeButtonContainer.innerHTML = '<img class="favoriteButton" src="./images/favorite2.png" alt="favorited" aria-label="unfavorite this restaurant">';

    this._likeButtonContainer.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });

    this._likeButtonContainer.addEventListener('keypress', async (event) => {
      if (event.keyCode === 13) {
        await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
        this._renderButton();
      }
    });
  },
};

export default LikeButtonInitiator;
