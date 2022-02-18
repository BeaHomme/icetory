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

};