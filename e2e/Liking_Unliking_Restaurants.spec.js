const assert = require('assert');

Feature('Restaurants');

Scenario('liking and Unliking restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement(".card_title > a");
  I.wait(5);
  const firstRestaurant = locate(".card_title > a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(locate(".card_title > a").first());

  I.seeElement('favorite-button');
  I.click('favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.card_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement('.card_title > a');
  I.click(locate('.card_title > a').first());

  I.seeElement('favorite-button');
  I.click('favorite-button');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('restaurant-item');
});
