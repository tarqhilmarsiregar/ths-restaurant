import RestaurantSource from '../../data/restaurant-source';
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Home = {
  async render() {
    return `
      <div class="hero" tabindex="0">
        <picture>
          <source type="image/webp" media="(max-width: 425px)" srcset="./images/heros/hero-image_2-small.webp">
          <source type="image/jpeg" media="(max-width: 425px)" srcset="./images/heros/hero-image_2-small.jpg">
          <source type="image/webp" srcset="./images/heros/hero-image_2-large.webp">
          <img src="./images/heros/hero-image_2-large.jpg" alt="hero image">
      </picture>
      </div>
      <h2 tabindex="0" id="mainContent"><i class="fa-solid fa-globe"></i> Jelajahi Restoran</h2>
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
    const Restaurants = await RestaurantSource.Home();
    Restaurants.restaurants.forEach((restaurant) => {
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

export default Home;
