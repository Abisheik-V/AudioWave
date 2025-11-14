import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Accessories() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');
  const [filterType, setFilterType] = useState('All');

  const accessories = [
    {
      id: 1,
      name: 'Adjustable Microphone Boom Arm',
      description: 'Sturdy boom arm with cable management for precise mic positioning.',
      price: '$79',
      image:
        'https://m.media-amazon.com/images/I/61gJeE73zaL.jpg',
      tag: 'Studio',
      type: 'Stand',
    },
    {
      id: 2,
      name: 'Pop Filter & Windscreen Kit',
      description: 'Dual-layer pop filter and foam windscreen to tame plosives and wind noise.',
      price: '$39',
      image:
        'https://m.media-amazon.com/images/I/71Z3C3OgV4L._AC_UF1000,1000_QL80_.jpg',
      tag: 'Vocal',
      type: 'Filter',
    },
    {
      id: 3,
      name: 'Premium XLR Cable 3m',
      description: 'Low-noise balanced XLR cable with metal connectors and flexible jacket.',
      price: '$29',
      image:
        'https://m.media-amazon.com/images/I/616tggmuCaL.jpg',
      tag: 'Cable',
      type: 'XLR cable',
    },
    {
      id: 4,
      name: 'Headphone Stand',
      description: 'Minimal metal stand to keep your headphones safe and your desk clean.',
      price: '$49',
      image:
        'https://m.media-amazon.com/images/I/61W6iP84ojL.jpg',
      tag: 'Desk',
      type: 'Stand',
    },
    {
      id: 5,
      name: 'Carrying Case for Headphones',
      description: 'Hard-shell travel case with soft interior to protect over-ear headphones.',
      price: '$59',
      image:
        'https://m.media-amazon.com/images/I/816+VsX8I0L.jpg',
      tag: 'Travel',
      type: 'Case',
    },
    {
      id: 6,
      name: 'Speaker Isolation Pads',
      description: 'Foam isolation pads that reduce vibrations and tighten low-end response.',
      price: '$69',
      image:
        'https://m.media-amazon.com/images/I/71kb5FHJCdL.jpg',
      tag: 'Studio',
      type: 'Isolation',
    },
  ];

  const filteredAccessories = accessories.filter((item) => {
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
          id="accessories"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="display-5 fw-bold mb-2">Accessories</h1>
              <p className="text-secondary mb-0">
                Stands, cables, cases, and isolation tools that complete and protect your audio setup.
              </p>
            </div>
            <span className="badge bg-warning text-dark">Essentials</span>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
            <span className="small text-secondary mb-2 mb-md-0">
              Filter accessories by type to match your setup.
            </span>
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="accessoryTypeFilter" className="small text-secondary mb-0">
                Type:
              </label>
              <select
                id="accessoryTypeFilter"
                className="form-select form-select-sm bg-black text-light border-secondary"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Stand">Stand</option>
                <option value="Filter">Filter</option>
                <option value="XLR cable">XLR cable</option>
                <option value="Case">Case</option>
                <option value="Isolation">Isolation</option>
              </select>
            </div>
          </div>

          {lastAdded && (
            <div className="alert alert-success py-2 small" role="alert">
              Added to cart: <strong>{lastAdded}</strong> (Cart items: {cartCount})
            </div>
          )}

          <div className="row g-4 mb-4">
            {filteredAccessories.map((item, index) => (
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
                        type="button"
                        className="btn btn-warning btn-sm"
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
                  <h2 className="h4 mb-3">Dial in your workspace</h2>
                  <p className="small text-secondary mb-3">
                    The right accessories keep your gear safe, tidy, and sounding its best. Stands and isolation pads
                    can dramatically improve clarity and comfort.
                  </p>
                  <ul className="small text-secondary mb-0">
                    <li>Use headphone stands to prevent cable strain and wear</li>
                    <li>Isolation pads help speakers sound tighter and more controlled</li>
                    <li>Quality cables reduce noise and connection issues</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                <h2 className="h4 mb-3">Not sure what you need?</h2>
                <p className="small text-secondary mb-3">
                  Share your current setup and goals, and we'll suggest accessories that make the most impact for your
                  space and workflow.
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

export default Accessories;

