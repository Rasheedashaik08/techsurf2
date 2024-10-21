// Array of product objects
const products = [
  {
    name: "Product 1",
    price: 1299,
    img.source= "car.jpg",
    description: "A high-quality product for your needs."
  },
  {
    name: "Product 2",
    price: 1499,
    image: "https://via.placeholder.com/250",
    description: "This product offers excellent features."
  },
  {
    name: "Product 3",
    price: 999,
    image: "https://via.placeholder.com/250",
    description: "Affordable and reliable."
  },
  {
    name: "Product 4",
    price: 475,
    image: "https://via.placeholder.com/250",
    description: "Great value for its price."
  },
  {
    name: "Product 5",
    price: 799,
    image: "https://via.placeholder.com/250",
    description: "A stylish and modern product."
  },
  {
    name: "Product 6",
    price: 10999,
    image: "https://via.placeholder.com/250",
    description: "Top-of-the-line features and performance."
  },
  {
    name: "Product 7",
    price: 850,
    image: "https://via.placeholder.com/250",
    description: "Perfect for everyday use."
  },
  {
    name: "Product 8",
    price: 199,
    image: "https://via.placeholder.com/250",
    description: "Budget-friendly and durable."
  },
  {
    name: "Product 9",
    price: 385,
    image: "https://via.placeholder.com/250",
    description: "A great choice for those on a budget."
  },
  {
    name: "Product 10",
    price: 5999,
    image: "https://via.placeholder.com/250",
    description: "Premium features at an affordable price."
  }
];

// Function to render products
function renderProducts() {
  const productGrid = document.getElementById('product-grid');
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Price: Rs. ${product.price}</p>
      <p>${product.description}</p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    `;

    productGrid.appendChild(productCard);
  });
}

// Execute the function to render products when the page loads
document.addEventListener('DOMContentLoaded', renderProducts);
