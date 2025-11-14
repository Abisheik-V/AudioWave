import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Portable() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');
  const [filterType, setFilterType] = useState('All');

  const portableProducts = [
    {
      id: 1,
      name: 'Pocket Bluetooth Speaker',
      description: 'Ultra-compact speaker that slips into any bag with surprising volume and bass.',
      price: '$69',
      image:
        'https://images.pexels.com/photos/3394668/pexels-photo-3394668.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Travel',
      type: 'Speaker',
    },
    {
      id: 2,
      name: 'Clip-On Outdoor Speaker',
      description: 'Rugged IPX7 waterproof speaker with carabiner clip for hiking and cycling.',
      price: '$99',
      image:
        'https://images-cdn.ubuy.co.in/66609264e3010f2e622ea0ac-oraolo-wearable-bluetooth-speaker.jpg',
      tag: 'Outdoor',
      type: 'Speaker',
    },
    {
      id: 3,
      name: 'Foldable On-Ear Headphones',
      description: 'Lightweight wired on-ear headphones that fold flat for easy packing.',
      price: '$79',
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Compact',
      type: 'Headphones',
    },
    {
      id: 4,
      name: 'Portable DAC & Headphone Amp',
      description: 'USB-C DAC/amp that turns your phone or laptop into a hi-fi source on the go.',
      price: '$149',
      image:
        'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Hi-Fi',
      type: 'DAC/Amp',
    },
    {
      id: 5,
      name: 'True Wireless Travel Earbuds',
      description: 'Noise-isolating earbuds with compact charging case and quick-charge support.',
      price: '$129',
      image:
        'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Travel',
      type: 'Earbuds',
    },
    {
      id: 6,
      name: 'Slim Protective Gear Case',
      description: 'Semi-rigid case sized for small speakers or foldable headphones.',
      price: '$39',
      image:
        'https://m.media-amazon.com/images/I/71f-B2rcrqL.jpg',
      tag: 'Case',
      type: 'Accessory',
    },
  ];

  const filteredPortableProducts = portableProducts.filter((item) => {
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
          id="portable"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="display-5 fw-bold mb-2">Portable Audio</h1>
              <p className="text-secondary mb-0">
                Compact speakers, headphones, and accessories designed to travel anywhere with you.
              </p>
            </div>
            <span className="badge bg-warning text-dark">Travel-ready</span>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
            <span className="small text-secondary mb-2 mb-md-0">
              Filter portable gear by type to match how you travel.
            </span>
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="portableTypeFilter" className="small text-secondary mb-0">
                Type:
              </label>
              <select
                id="portableTypeFilter"
                className="form-select form-select-sm bg-black text-light border-secondary"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Speaker">Speaker</option>
                <option value="Headphones">Headphones</option>
                <option value="DAC/Amp">DAC/Amp</option>
                <option value="Earbuds">Earbuds</option>
                <option value="Accessory">Accessory</option>
              </select>
            </div>
          </div>

          {lastAdded && (
            <div className="alert alert-success py-2 small" role="alert">
              Added to cart: <strong>{lastAdded}</strong> (Cart items: {cartCount})
            </div>
          )}

          <div className="row g-4 mb-4">
            {filteredPortableProducts.map((item, index) => (
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
                  <h2 className="h4 mb-3">Built for the road</h2>
                  <p className="small text-secondary mb-3">
                    Portable gear needs to be tough, lightweight, and ready for anything from flights to hikes.
                  </p>
                  <ul className="small text-secondary mb-0">
                    <li>Look for IP-rated water resistance for outdoor use</li>
                    <li>Foldable designs save space in your backpack</li>
                    <li>Travel cases keep your audio gear safe in transit</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                <h2 className="h4 mb-3">Plan your portable setup</h2>
                <p className="small text-secondary mb-3">
                  Tell us how you traveldaily commute, weekly flights, or weekend hikesand we'll recommend
                  portable audio gear that fits your routine.
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

export default Portable;

