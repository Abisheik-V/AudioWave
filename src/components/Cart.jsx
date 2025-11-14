import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Cart() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [quantities, setQuantities] = useState({
    headphones: 1,
    speakers: 1,
    mic: 1,
  });

  const [removed, setRemoved] = useState({
    headphones: false,
    speakers: false,
    mic: false,
  });

  const HEADPHONES_PRICE = 299;
  const SPEAKERS_PRICE = 499;
  const MIC_PRICE = 149;

  const handleQuantityChange = (key, value) => {
    const parsed = Number(value);
    const safeValue = !Number.isNaN(parsed) && parsed > 0 ? parsed : 1;
    setQuantities((prev) => ({
      ...prev,
      [key]: safeValue,
    }));
  };

  const handleRemove = (key) => {
    setRemoved((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const subtotal =
    (removed.headphones ? 0 : HEADPHONES_PRICE * quantities.headphones) +
    (removed.speakers ? 0 : SPEAKERS_PRICE * quantities.speakers) +
    (removed.mic ? 0 : MIC_PRICE * quantities.mic);

  const total = subtotal; // shipping free, tax estimate $0 in this demo

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
            <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          </ul>
        </div>
      </header>

      <main>
        <section
          id="cart"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="row g-4">
            <div className="col-lg-8">
              <h1 className="display-6 fw-bold mb-3">Your Cart</h1>
              <p className="text-secondary mb-4">
                Review your selected audio gear before checkout. You can adjust quantities or remove items anytime.
              </p>

              {!removed.headphones && (
                <div className="card bg-black text-light border-0 shadow-sm mb-3">
                  <div className="card-body">
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                      <div>
                        <h5 className="mb-1">Wireless Noise-Cancelling Headphones</h5>
                        <p className="small text-secondary mb-1">Matte Black · Over-ear · Bluetooth 5.3</p>
                        <span className="small text-secondary">In stock</span>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="input-group input-group-sm" style={{ width: '100px' }}>
                          <span className="input-group-text bg-dark border-secondary text-secondary">Qty</span>
                          <input
                            type="number"
                            className="form-control bg-dark text-light border-secondary"
                            min="1"
                            value={quantities.headphones}
                            onChange={(e) => handleQuantityChange('headphones', e.target.value)}
                          />
                        </div>
                        <div className="text-end">
                          <div className="fw-semibold">${HEADPHONES_PRICE}</div>
                          <button
                            type="button"
                            className="btn btn-link btn-sm text-secondary p-0"
                            onClick={() => handleRemove('headphones')}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!removed.speakers && (
                <div className="card bg-black text-light border-0 shadow-sm mb-3">
                  <div className="card-body">
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                      <div>
                        <h5 className="mb-1">Studio Monitor Speakers</h5>
                        <p className="small text-secondary mb-1">Pair · 5" drivers · Balanced inputs</p>
                        <span className="small text-secondary">In stock</span>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="input-group input-group-sm" style={{ width: '100px' }}>
                          <span className="input-group-text bg-dark border-secondary text-secondary">Qty</span>
                          <input
                            type="number"
                            className="form-control bg-dark text-light border-secondary"
                            min="1"
                            value={quantities.speakers}
                            onChange={(e) => handleQuantityChange('speakers', e.target.value)}
                          />
                        </div>
                        <div className="text-end">
                          <div className="fw-semibold">${SPEAKERS_PRICE}</div>
                          <button
                            type="button"
                            className="btn btn-link btn-sm text-secondary p-0"
                            onClick={() => handleRemove('speakers')}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!removed.mic && (
                <div className="card bg-black text-light border-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                      <div>
                        <h5 className="mb-1">USB Condenser Microphone</h5>
                        <p className="small text-secondary mb-1">Cardioid · USB-C · Desktop stand</p>
                        <span className="small text-secondary">In stock</span>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="input-group input-group-sm" style={{ width: '100px' }}>
                          <span className="input-group-text bg-dark border-secondary text-secondary">Qty</span>
                          <input
                            type="number"
                            className="form-control bg-dark text-light border-secondary"
                            min="1"
                            value={quantities.mic}
                            onChange={(e) => handleQuantityChange('mic', e.target.value)}
                          />
                        </div>
                        <div className="text-end">
                          <div className="fw-semibold">${MIC_PRICE}</div>
                          <button
                            type="button"
                            className="btn btn-link btn-sm text-secondary p-0"
                            onClick={() => handleRemove('mic')}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-4" data-aos="fade-left" data-aos-delay="150">
              <div className="hero-card rounded-4 p-4 p-md-4 bg-gradient mb-3">
                <h2 className="h5 mb-3">Order summary</h2>
                <div className="d-flex justify-content-between small text-secondary mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="d-flex justify-content-between small text-secondary mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="d-flex justify-content-between small text-secondary mb-3">
                  <span>Tax (estimate)</span>
                  <span>$0</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fw-semibold">Total</span>
                  <span className="h5 mb-0">${total}</span>
                </div>
                <Link to="/checkout" className="btn btn-warning w-100 mb-2">Proceed to Checkout</Link>
                <button className="btn btn-outline-light w-100 btn-sm">Continue Shopping</button>
              </div>

              <div className="card bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h6 mb-2">Secure checkout</h2>
                  <p className="small text-secondary mb-0">
                    All payments are processed over encrypted connections. We never store your full card details.
                  </p>
                </div>
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

export default Cart;

