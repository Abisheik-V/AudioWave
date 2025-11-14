import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Bundle() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');

  const handleAddBundle = (name) => {
    setCartCount((prev) => prev + 1);
    setLastAdded(name);
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
          id="bundles"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="display-5 fw-bold mb-2">Curated Bundles</h1>
              <p className="text-secondary mb-0">
                Ready-made setups for creators, listeners, and gamerscarefully matched for sound and value.
              </p>
            </div>
            <span className="badge bg-warning text-dark">Bundles</span>
          </div>

          {lastAdded && (
            <div className="alert alert-success py-2 small" role="alert">
              Added bundle to cart: <strong>{lastAdded}</strong> (Cart items: {cartCount})
            </div>
          )}

          <div className="row g-4 mb-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="50">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h2 className="h5 mb-2">Creator Essentials Bundle</h2>
                  <p className="small text-secondary mb-3">
                    A focused starter kit for streamers and content creators.
                  </p>
                  <ul className="small text-secondary mb-3">
                    <li>USB condenser microphone with boom arm &amp; pop filter</li>
                    <li>Closed-back studio headphones</li>
                    <li>Compact audio interface</li>
                  </ul>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">$749</span>
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={() => handleAddBundle('Creator Essentials Bundle')}
                    >
                      Add Bundle to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h2 className="h5 mb-2">Home Listening Bundle</h2>
                  <p className="small text-secondary mb-3">
                    A hi-fi combo designed for immersive music listening at home.
                  </p>
                  <ul className="small text-secondary mb-3">
                    <li>Bookshelf speakers with desktop stands</li>
                    <li>Desktop DAC &amp; headphone amp</li>
                    <li>Open-back reference headphones</li>
                  </ul>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">$1,199</span>
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={() => handleAddBundle('Home Listening Bundle')}
                    >
                      Add Bundle to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="150">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h2 className="h5 mb-2">Gaming &amp; Streaming Bundle</h2>
                  <p className="small text-secondary mb-3">
                    Built for long gaming sessions, clear comms, and occasional streaming.
                  </p>
                  <ul className="small text-secondary mb-3">
                    <li>Gaming headset with detachable mic</li>
                    <li>USB microphone for streaming and calls</li>
                    <li>Compact desktop speakers</li>
                  </ul>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">$549</span>
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={() => handleAddBundle('Gaming & Streaming Bundle')}
                    >
                      Add Bundle to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4" data-aos="fade-up" data-aos-delay="250">
            <div className="col-lg-6">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h4 mb-3">Why choose a bundle?</h2>
                  <p className="small text-secondary mb-3">
                    Bundles are matched for compatibility, sound, and valueso you can skip the guesswork and get
                    straight to listening or creating.
                  </p>
                  <ul className="small text-secondary mb-0">
                    <li>Components tested together for balanced sound</li>
                    <li>Save compared to buying items separately</li>
                    <li>Simple upgrade paths as your needs grow</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                <h2 className="h4 mb-3">Want a custom bundle?</h2>
                <p className="small text-secondary mb-3">
                  Tell us about your budget, space, and goals, and we'll assemble a tailored bundle for music, content
                  creation, or gaming.
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

export default Bundle;

