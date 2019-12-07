const url = 'http://localserver:9001/api/';

const fetchProductData = function(productId) {
  return axios.get(url + productId);
};

export default fetchProductData;