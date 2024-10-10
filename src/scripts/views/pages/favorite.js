import 'regenerator-runtime';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Favorite = {
  async render() {
    return `
      <h2 tabindex="0" id="mainContent" class="favorite_title">Favorite Restaurants</h2>
      <restaurant-list>
        <restaurant-item>
            <div class="list" tabindex="0">
              <div class="skeleton img-card">
                <img class="lazyload" data-src="" width="100%"
                  height="300" alt="">
              </div>
              <h3 class="skeleton card_title" tabindex="0"></h3>
              <div class="card-text">
                <p class="skeleton card_rating" tabindex="0"></p>
                <p class="skeleton card_address restaurant-location" tabindex="0"></p>
              </div>
            </div>
        </restaurant-item>
      </restaurant-list>      
    `;
  },

  async afterRender() {
    const container = document.querySelector('restaurant-list');
    const cardTemplate = document.querySelector('restaurant-item');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10; i++) {
      container.append(cardTemplate.cloneNode(true));
    }

    container.innerHTML = '';
    const Restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    Restaurants.forEach((restaurant) => {
      const div = cardTemplate.cloneNode(true);

      div.querySelector('.img-card').innerHTML = `<img class="lazyload" data-src="${CONFIG.IMAGE_URL + restaurant.pictureId}" width="100%" height="300" alt="${restaurant.name}">`;

      div.querySelector('.card_title').innerHTML = `<a href="#/detail/${restaurant.id}">${restaurant.name}</a>`;
      container.append(div);
      div.querySelector('.card_title').classList.remove('skeleton');

      div.querySelector('.card_rating').innerHTML = `<i class="fa-solid fa-star"></i> ${restaurant.rating}`;
      div.querySelector('.card_rating').classList.remove('skeleton');

      div.querySelector('.card_address').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${restaurant.city}`;
      div.querySelector('.card_address').classList.remove('skeleton');
    });
  },
};

export default Favorite;
