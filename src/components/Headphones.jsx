import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Headphones() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');
  const [filterType, setFilterType] = useState('All');

  const headphones = [
    {
      id: 1,
      name: 'Wireless Noise-Cancelling Headphones',
      description: 'Premium over-ear wireless headphones with adaptive ANC and 30-hour battery life.',
      price: '$299',
      image:
        'https://media.wired.com/photos/688421c8d632f582759c6e56/1:1/w_800,h_800,c_limit/The%20Best%20Noise-Canceling%20Headphones.png',
      tag: 'Bestseller',
      type: 'Wireless',
    },
    {
      id: 2,
      name: 'Open-Back Reference Headphones',
      description: 'Open-back, reference-tuned headphones with wide soundstage for critical listening.',
      price: '$399',
      image:
        'https://cdn.shopaccino.com/johns-music/products/clear-351239_l.jpg?v=615',
      tag: 'Audiophile',
      type: 'Open-back',
    },
    {
      id: 3,
      name: 'Studio Monitoring Headphones',
      description: 'Closed-back studio headphones for tracking, mixing, and detailed monitoring.',
      price: '$199',
      image:
        'https://shopatsc.com/cdn/shop/files/1_b36ac316-5085-4893-b60d-80b719789ca1.jpg?v=1727158985',
      tag: 'Studio',
      type: 'Closed-back',
    },
    {
      id: 4,
      name: 'Wireless Earbuds with ANC',
      description: 'Compact true wireless earbuds with noise cancelling and wireless charging case.',
      price: '$179',
      image:
        'https://m.media-amazon.com/images/I/513bUEiaL1L.jpg',
      tag: 'Everyday',
      type: 'Earbuds',
    },
    {
      id: 5,
      name: 'Gaming Headset with Mic',
      description: 'Surround-sound gaming headset with detachable mic and comfortable memory foam pads.',
      price: '$149',
      image:
        'https://5.imimg.com/data5/ECOM/Default/2023/5/310683532/NS/JV/HQ/40788096/1658189174205d9xytg-500x500.jpg',
      tag: 'Gaming',
      type: 'Headset',
    },
  ];

  const filteredHeadphones = headphones.filter((item) => {
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
          id="headphones"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="display-5 fw-bold mb-2">Headphones &amp; Earbuds</h1>
              <p className="text-secondary mb-0">
                From reference-grade open-backs to everyday wireless earbuds, find the right sound for how you listen.
              </p>
            </div>
            <span className="badge bg-warning text-dark">Curated picks</span>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
            <span className="small text-secondary mb-2 mb-md-0">
              Filter headphones and earbuds by type.
            </span>
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="headphonesTypeFilter" className="small text-secondary mb-0">
                Type:
              </label>
              <select
                id="headphonesTypeFilter"
                className="form-select form-select-sm bg-black text-light border-secondary"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Wireless">Wireless</option>
                <option value="Open-back">Open-back</option>
                <option value="Closed-back">Closed-back</option>
                <option value="Earbuds">Earbuds</option>
                <option value="Headset">Headset</option>
              </select>
            </div>
          </div>

          {lastAdded && (
            <div className="alert alert-success py-2 small" role="alert">
              Added to cart: <strong>{lastAdded}</strong> (Cart items: {cartCount})
            </div>
          )}

          <div className="row g-4 mb-4">
            {filteredHeadphones.map((item, index) => (
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
                  <h2 className="h4 mb-3">Finding the right fit</h2>
                  <p className="small text-secondary mb-3">
                    Comfort and isolation matter as much as sound. Over-ear, on-ear, and in-ear designs each have
                    their strengths depending on where and how you listen.
                  </p>
                  <ul className="small text-secondary mb-0">
                    <li>Over-ear: best for long sessions and maximum immersion</li>
                    <li>On-ear: lighter profile with more awareness of your surroundings</li>
                    <li>In-ear: ultra-portable and great for commuting or travel</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                <h2 className="h4 mb-3">Need a recommendation?</h2>
                <p className="small text-secondary mb-3">
                  Tell us about your favorite music and how you listen, and we'll suggest headphone models that
                  match your sound signature and budget.
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

export default Headphones;
