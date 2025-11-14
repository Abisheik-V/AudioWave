import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Shop() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');

  const products = [
    {
      id: 1,
      name: 'Wireless Noise-Cancelling Headphones',
      description: 'Premium over-ear headphones with adaptive noise cancelling and 30-hour battery life.',
      price: '$299',
      image:
        'https://media.wired.com/photos/688421c8d632f582759c6e56/1:1/w_800,h_800,c_limit/The%20Best%20Noise-Canceling%20Headphones.png',
      tag: 'Bestseller',
    },
    {
      id: 2,
      name: 'Studio Monitor Speakers',
      description: '5" nearfield studio monitors with accurate frequency response for mixing and production.',
      price: '$499',
      image:
        'https://m.media-amazon.com/images/I/71NbYGfedQL.jpg',
      tag: 'Studio',
    },
    {
      id: 3,
      name: 'USB Condenser Microphone',
      description: 'Cardioid USB mic ideal for streaming, podcasting, and voice-over work.',
      price: '$149',
      image:
        'https://m.media-amazon.com/images/I/6177+T5PIdS._AC_UF1000,1000_QL80_.jpg',
      tag: 'Creator',
    },
    {
      id: 4,
      name: 'Portable Bluetooth Speaker',
      description: 'Compact, water-resistant speaker with powerful sound and 15-hour battery.',
      price: '$129',
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2024/11/portablebluetoothspeakers-2048px-9130.jpg?auto=webp&quality=75&width=1024',
      tag: 'On-the-go',
    },
    {
      id: 5,
      name: 'Open-Back Reference Headphones',
      description: 'Open-back design for detailed, spacious soundstage and critical listening.',
      price: '$399',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDlAV4wfZy2aQli56XCllePb2INz2i4uytg&s',
      tag: 'Audiophile',
    },
    {
      id: 6,
      name: 'Audio Interface 2-In / 2-Out',
      description: 'Low-latency USB interface for recording vocals, instruments, and podcasts.',
      price: '$229',
      image:
        'https://m.media-amazon.com/images/I/51n5lwsjDmL.jpg',
      tag: 'Studio',
    },
    {
      id: 7,
      name: 'Wireless Earbuds with Case',
      description: 'True wireless earbuds with charging case, touch controls, and clear calls.',
      price: '$159',
      image:
        'https://gourban.in/cdn/shop/files/Q2_Pro.webp?v=1706938481&width=2048',
      tag: 'Everyday',
    },
    {
      id: 8,
      name: 'Desktop DAC & Headphone Amp',
      description: 'High-resolution USB DAC and amp combo for powering demanding headphones.',
      price: '$279',
      image:
        'https://m.media-amazon.com/images/I/61UwucOlB8L.jpg',
      tag: 'Hi‑Fi',
    },
    {
      id: 9,
      name: 'Broadcast Boom Arm & Pop Filter',
      description: 'Adjustable boom arm and pop filter bundle for clean, flexible microphone placement.',
      price: '$89',
      image:
        'https://m.media-amazon.com/images/I/61FnlpA9MgL.jpg',
      tag: 'Accessories',
    },
  ];

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
    setLastAdded(product.name);
  };

  return (
    <div className="audio-shop bg-dark text-light min-vh-100">
      <header className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-3 shadow-sm">
        <Link className="navbar-brand fw-bold" to="/">
          AudioWave
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/featured">Featured</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categories">Categories</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/deals">Deals</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item d-flex align-items-center">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
              <span className="badge bg-warning text-dark ms-1">{cartCount}</span>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          </ul>
        </div>
      </header>

      <main>
        <section
          id="shop"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="display-5 fw-bold mb-2">Shop All Audio Gear</h1>
              <p className="text-secondary mb-0">
                Browse headphones, speakers, microphones, and studio essentials curated by our audio team.
              </p>
            </div>
            <span className="badge bg-warning text-dark">New &amp; popular</span>
          </div>

          {lastAdded && (
            <div className="alert alert-success py-2 small" role="alert">
              Added to cart: <strong>{lastAdded}</strong> (Cart items: {cartCount})
            </div>
          )}

          <div className="row g-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="col-sm-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={50 * index}
              >
                <div className="card h-100 bg-black text-light border-0 shadow-sm overflow-hidden">
                  <div className="ratio ratio-4x3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title mb-0">{product.name}</h5>
                      {product.tag && (
                        <span className="badge bg-warning text-dark ms-2">{product.tag}</span>
                      )}
                    </div>
                    <p className="card-text text-secondary small mb-3">
                      {product.description}
                    </p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="h5 mb-0">{product.price}</span>
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-top border-secondary py-5 mt-4">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-md-4">
              <h5 className="mb-3">AudioWave</h5>
              <p className="small text-secondary mb-2">
                Your destination for premium headphones, speakers, microphones, and studio gear.
              </p>
              <p className="small text-secondary mb-0">
                Email: support@audiowave.shop
              </p>
              <p className="small text-secondary mb-0">Phone: +1 (555) 012-3456</p>
            </div>

            <div className="col-md-4">
              <h6 className="mb-3">Quick Links</h6>
              <ul className="list-unstyled small text-secondary mb-0 d-flex flex-wrap gap-3">
                <Link to="/featured"><a className="text-white text-decoration-none" href="/featured">Featured</a></Link>
                <Link to="/categories"><a className="text-white text-decoration-none" href="/categories">Categories</a></Link>
                <Link to="/deals"><a className="text-white text-decoration-none" href="/deals">Deals</a></Link>
                <Link to="/contact"><a className="text-white text-decoration-none" href="/contact">Contact</a></Link>
                <Link to="/about"><a className="text-white text-decoration-none" href="/about">About</a></Link>
                <Link to="/cart"><a className="text-white text-decoration-none" href="/cart">Cart</a></Link>
                <Link to="/login"><a className="text-white text-decoration-none" href="/login">Login</a></Link>
              </ul>
            </div>

            <div className="col-md-4">
              <h6 className="mb-3">Stay in the loop</h6>
              <p className="small text-secondary mb-3">
                Get updates on new releases, limited-time deals, and curated audio guides.
              </p>
              <button className="btn btn-warning btn-sm px-3">Join Newsletter</button>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pt-4 mt-4 border-top border-secondary">
            <span className="small text-secondary">
              © {new Date().getFullYear()} AudioWave. All rights reserved.
            </span>
            <span className="small text-secondary">AudioWave</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Shop;

