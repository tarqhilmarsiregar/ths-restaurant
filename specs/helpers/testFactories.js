import 'regenerator-runtime';
import LikeButtonInitiator from '../../src/scripts/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    LikeButtonContainer: document.querySelector('favorite-button'),
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
