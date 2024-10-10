import CONFIG from './config';

const API_ENDPOINT = {
  GET_DATA: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  ADD_REVIEW_URL: 'https://restaurant-api.dicoding.dev/review',
};

export default API_ENDPOINT;
