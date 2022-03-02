import axios from 'axios';
const URL = 'https://icetory.na4u.ru/api/v1';

export default {

  getCategories(params) {
    return axios.get(`${URL}/categories`, params);
  },

  getProducts(params) {
    return axios.get(`${URL}/products`, params);
  },

  getReviews(params) {
    return axios.get(`${URL}/reviews`, params);
  },

  getStories(params) {
    return axios.get(`${URL}/stories`, params);
  },

  sendFeedback(params) {
    return axios.post(`${URL}/feedback/`, params);
  },

  createOrder(params) {
    return axios.post(`${URL}/orders/`, params);
  },

  getAddresses(data) {
    return axios.post(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', 
      { query: data, count: 10 }, 
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token c9a3b265faf2cb77e6c8daae35ee992f56cf4c59',
        },
      },
    );
  },

};