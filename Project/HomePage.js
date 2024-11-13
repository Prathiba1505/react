import React from 'react';
import './HomePage.css'; 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Supermarket</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Products</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="hero-section">
      <h1>Fresh Groceries Delivered to Your Doorstep</h1>
      <p>Discover the best deals on fresh fruits, vegetables, and more.</p>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  );
}

function ProductCard({ image, name, price, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

function Products() {
  const products = [
    { id: 1, image: 'https://www.fruitsmith.com/pub/media/catalog/product/cache/3d1197b96d84cacc4f40a78b1d94d82b/a/p/apple-usa.png', name: 'Apple', price: 0.99 },
    { id: 2, image: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400', name: 'Banana', price: 0.59 },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROf9ZCPSLoUSf6gjVMC4SZsDeG5mizdtqWgg&s', name: 'Carrot', price: 0.89 },
    { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8G3tLIWUDKqA_KPah80Zz0N_lIZQ5Mb3ww&s', name: 'Orange', price: 1.19 },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkT_H1bqbM7gJsyq8rrDmN2y8jduzaqk3cw&s', name: 'Broccoli', price: 1.49 },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebldobg-Dl-uSZOzwk8CrLZr-vbSE02UYyg&s', name: 'Tomato', price: 1.29 },
  ];

  return (
    <div className="products-section">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>&copy; 2024 Supermarket. All rights reserved.</div>
        <ul className="footer-links">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Products />
      <Footer />
    </>
  );
}

export default HomePage;
