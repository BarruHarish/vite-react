import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Neeraja Collections</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Trendy Collections Just for You ✨</h2>
        <p>Shop the latest fashion & accessories at affordable prices.</p>
      </section>

      {/* Products */}
      <section id="shop" className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Product 1</h3>
            <p>₹499</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Product 2</h3>
            <p>₹799</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Product 3</h3>
            <p>₹999</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Neeraja Collections. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
