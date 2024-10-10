import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async Home() {
    const response = await fetch(API_ENDPOINT.GET_DATA);
    const responseJson = response.json();
    return responseJson;
  }

  static async RestaurantDetail(id) {
    const response = fetch(API_ENDPOINT.DETAIL(id));
    return response;
  }

  static async AddReviewToRestaurant(review) {
    await fetch(API_ENDPOINT.ADD_REVIEW_URL, {
      method: 'POST',
      headers: {
        'Content-Type': ' application/json',
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((responseJson) => responseJson.message)
      .catch((error) => console.log(error));
  }
}

export default RestaurantSource;
