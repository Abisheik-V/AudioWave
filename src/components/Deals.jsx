import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Deals() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

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
          id="deals"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="display-5 fw-bold mb-2">Deals &amp; Promotions</h1>
              <p className="text-secondary mb-0">
                Limited-time offers on headphones, speakers, microphones, and more. Save on curated bundles and
                best-sellers.
              </p>
            </div>
            <span className="badge bg-warning text-dark">This week</span>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="50">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Headphone Flash Sale</h5>
                  <p className="card-text text-secondary small mb-3">
                    Up to 35% off select wireless and wired headphones. Perfect for music, gaming, and travel.
                  </p>
                  <p className="h5 mb-3 text-warning">Save up to 35%</p>
                  <Link to="/headphones" className="btn btn-warning w-100">Shop Headphone Deals</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Studio Starter Bundle</h5>
                  <p className="card-text text-secondary small mb-3">
                    Monitors, audio interface, and microphone bundled together at a special price.
                  </p>
                  <p className="h5 mb-3 text-warning">Bundle: $649 (was $899)</p>
                  <Link to="/bundle" className="btn btn-warning w-100">View Bundle</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="150">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Portable Audio Specials</h5>
                  <p className="card-text text-secondary small mb-3">
                    Discounts on Bluetooth speakers and true wireless earbuds for listening anywhere.
                  </p>
                  <p className="h5 mb-3 text-warning">Save up to 30%</p>
                  <Link to="/portable" className="btn btn-warning w-100">Explore Portable Deals</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-6">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                <h2 className="h4 mb-3">Member-only perks</h2>
                <p className="small text-secondary mb-3">
                  Join AudioWave Rewards to unlock early access to deals, bonus points on every order, and
                  exclusive members-only drops.
                </p>
                <ul className="small text-secondary mb-0">
                  <li>Earn points on every purchase</li>
                  <li>Get notified before public sales go live</li>
                  <li>Redeem rewards for discounts and upgrades</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h2 className="h4 mb-3">Student &amp; creator discounts</h2>
                    <p className="small text-secondary mb-3">
                      Verify your status to access additional savings on select studio gear and creator bundles.
                    </p>
                  </div>
                  <button className="btn btn-outline-light w-100">Check eligibility</button>
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

export default Deals;

