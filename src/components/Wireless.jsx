import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Wireless() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');
  const [filterType, setFilterType] = useState('All');

  const wirelessProducts = [
    {
      id: 1,
      name: 'Wireless Noise-Cancelling Headphones',
      description: 'Over-ear wireless headphones with adaptive ANC and 30-hour battery life.',
      price: '$299',
      image:
        'https://media.wired.com/photos/688421c8d632f582759c6e56/1:1/w_800,h_800,c_limit/The%20Best%20Noise-Canceling%20Headphones.png',
      tag: 'Commuter',
      type: 'Over-ear',
    },
    {
      id: 2,
      name: 'True Wireless Earbuds',
      description: 'Compact earbuds with wireless charging case and IPX4 splash resistance.',
      price: '$159',
      image:
        'https://elver.in/cdn/shop/files/2_3d1c932d-efd6-4acf-917d-6964dbb34eb3.png?v=1763025248&width=1110',
      tag: 'Everyday',
      type: 'Earbuds',
    },
    {
      id: 3,
      name: 'Sport Wireless Earbuds',
      description: 'Secure-fit wireless earbuds with ear hooks and sweat resistance for workouts.',
      price: '$179',
      image:
        'https://vader-prod.s3.amazonaws.com/1750085113-61CVMs0OauL.jpg',
      tag: 'Sport',
      type: 'Earbuds',
    },
    {
      id: 4,
      name: 'Portable Bluetooth Speaker',
      description: 'Rugged portable speaker with deep bass and 15-hour battery.',
      price: '$129',
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2024/11/portablebluetoothspeakers-2048px-9130.jpg?auto=webp&quality=75&width=1024',
      tag: 'Outdoor',
      type: 'Speaker',
    },
    {
      id: 5,
      name: 'Mini Travel Speaker',
      description: 'Pocket-sized Bluetooth speaker for quick listening on the go.',
      price: '$79',
      image:
        'https://images.meesho.com/images/products/514498165/p0l58_512.webp?width=512',
      tag: 'Travel',
      type: 'Speaker',
    },
    {
      id: 6,
      name: 'Wireless Home Speaker',
      description: 'Wi-Fi and Bluetooth enabled speaker for whole-home audio setups.',
      price: '$249',
      image:
        'https://avstore.in/cdn/shop/products/AVStore-Denon-Home-150-Black-Hero.jpg?v=1634724489',
      tag: 'Home',
      type: 'Speaker',
    },
  ];

  const filteredProducts = wirelessProducts.filter((item) => {
    if (filterType === 'All') return true;
    return item.type === filterType;
  });

  const handleAddToCart = (item) => {
    setCartCount((prev) => prev + 1);
    setLastAdded(item.name);
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
          id="wireless"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="display-5 fw-bold mb-2">Wireless Audio</h1>
              <p className="text-secondary mb-0">
                Go cable-free with wireless headphones, earbuds, and speakers for every moment of your day.
              </p>
            </div>
            <span className="badge bg-warning text-dark">On-the-go</span>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
            <span className="small text-secondary mb-2 mb-md-0">
              Showing wireless products. Filter by type to narrow your choice.
            </span>
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="wirelessTypeFilter" className="small text-secondary mb-0">
                Type:
              </label>
              <select
                id="wirelessTypeFilter"
                className="form-select form-select-sm bg-black text-light border-secondary"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Over-ear">Over-ear</option>
                <option value="Earbuds">Earbuds</option>
                <option value="Speaker">Speaker</option>
              </select>
            </div>
          </div>

          {lastAdded && (
            <div className="alert alert-success py-2 small" role="alert">
              Added to cart: <strong>{lastAdded}</strong> (Cart items: {cartCount})
            </div>
          )}

          <div className="row g-4 mb-4">
            {filteredProducts.map((item, index) => (
              <div
                key={item.id}
                className="col-sm-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={50 * index}
              >
                <div className="card h-100 bg-black text-light border-0 shadow-sm overflow-hidden">
                  <div className="ratio ratio-4x3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title mb-0">{item.name}</h5>
                      {item.tag && (
                        <span className="badge bg-warning text-dark ms-2">{item.tag}</span>
                      )}
                    </div>
                    <p className="card-text text-secondary small mb-2">
                      {item.description}
                    </p>
                    <p className="small text-secondary mb-3">Type: {item.type}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="h5 mb-0">{item.price}</span>
                      <button
                        className="btn btn-warning btn-sm"
                        type="button"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4" data-aos="fade-up" data-aos-delay="250">
            <div className="col-lg-6">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h4 mb-3">Battery life &amp; comfort</h2>
                  <p className="small text-secondary mb-3">
                    Long sessions demand both stamina and comfort. Look for at least 20 hours of playback on
                    headphones, and secure but gentle fits on earbuds.
                  </p>
                  <ul className="small text-secondary mb-0">
                    <li>Headphones: ideal for all-day work and travel</li>
                    <li>Earbuds: best for commuting, workouts, and quick listening</li>
                    <li>Speakers: perfect for sharing music with the room</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                <h2 className="h4 mb-3">Need help choosing wireless gear?</h2>
                <p className="small text-secondary mb-3">
                  Tell us where you listen mostat home, at the gym, or on the roadand we'll match you with
                  wireless options that fit your lifestyle.
                </p>
                <Link to="/specialist" className="btn btn-outline-light w-100">Talk to an audio specialist</Link>
              </div>
            </div>
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

export default Wireless;

