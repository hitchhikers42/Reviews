const axios = require('axios');
const url = 'http://localserver:9001/api/reviews/full';

const fetchProductData = function(productId) {
  return axios.get(url + productId);
};

export default fetchProductData;