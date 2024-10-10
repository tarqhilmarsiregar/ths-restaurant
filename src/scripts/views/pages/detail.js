import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import './restaurant-detail';
import './csReview-list';
import './food-list';
import './drink-list';
import './favorite-button';
import LikeButtonInitiator from '../../like-button-initiator';
import './add-review';

const Detail = {
  async render() {
    return '';
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.RestaurantDetail(url.id)
      .then((response) => response.json())
      .then((responseJson) => responseJson.restaurant);
    const RestaurantDetailElement = document.createElement('restaurant-detail');
    RestaurantDetailElement.detail = restaurant;
    document.querySelector('main').appendChild(RestaurantDetailElement);

    const FoodListElement = document.querySelector('food-list');
    FoodListElement.foods = restaurant;
    const DrinkListElement = document.querySelector('drink-list');
    DrinkListElement.drinks = restaurant;

    const h3ReviewTitle = document.createElement('h3');
    h3ReviewTitle.innerHTML = 'Customers Review';
    h3ReviewTitle.setAttribute('tabindex', '0');
    document.querySelector('main').appendChild(h3ReviewTitle);

    const csReviewListElement = document.createElement('review-list');
    csReviewListElement.reviews = restaurant.customerReviews;
    document.querySelector('main').appendChild(csReviewListElement);

    const FavoriteButton = document.createElement('favorite-button');
    FavoriteButton.setAttribute('tabindex', '0');
    document.querySelector('main').appendChild(FavoriteButton);
    FavoriteButton.innerHTML = '<img src="./images/favorite.png" alt="favorite">';

    LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('favorite-button'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
      },
    });

    const addReviewButton = document.createElement('button');
    addReviewButton.setAttribute('type', 'button');
    addReviewButton.setAttribute('tabindex', '0');
    addReviewButton.classList.add('add-review-button');
    addReviewButton.textContent = 'Add Review';
    document.querySelector('main').appendChild(addReviewButton);
    addReviewButton.addEventListener('click', () => {
      const addReview = document.querySelector('add-review');
      addReview.classList.toggle('show-form');
    });

    const addReview = document.createElement('add-review');
    document.querySelector('main').appendChild(addReview);

    const review = {
      id: null,
      name: null,
      review: null,
    };

    const formReview = document.querySelector('form');
    formReview.addEventListener('submit', (event) => {
      const reviewerName = document.getElementById('reviewer');
      const reviewText = document.getElementById('review-text');
      review.id = `${url.id}`;
      review.name = `${reviewerName.value}`;
      review.review = `${reviewText.value}`;
      RestaurantSource.AddReviewToRestaurant(review);
      event.preventDefault();
      alert('Anda telah berhasil menambahkan review');
      window.location.reload();
    });
  },
};

export default Detail;
