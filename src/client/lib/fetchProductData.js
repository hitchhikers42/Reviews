const axios = require('axios');
const url = 'http://localhost:9001/api/reviews/full/';

const fetchProductData = function(productId) {
  return axios.get(url + productId);
};

export default fetchProductData;