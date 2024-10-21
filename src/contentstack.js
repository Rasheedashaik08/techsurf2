// src/contentstack.js
const Contentstack = require('contentstack');

const stack = Contentstack.Stack({
  api_key: 'YOUR_API_KEY',
  delivery_token: 'YOUR_DELIVERY_TOKEN',
  environment: 'YOUR_ENVIRONMENT',
});

export const fetchEntries = (contentType) => {
  const Query = stack.ContentType(contentType).Query();
  return Query.toJSON().find()
    .then(response => response)
    .catch(error => console.error(error));
};

// New function to fetch products
export const fetchProducts = () => {
  return fetchEntries('products'); // 'products' is the Content Type ID
};
