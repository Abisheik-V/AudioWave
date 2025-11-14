import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Categories() {
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
          id="categories"
          className="bg-black py-5"
          data-aos="fade-up"
        >
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="display-5 fw-bold mb-2">Browse Categories</h1>
                <p className="text-secondary mb-0">
                  Explore headphones, speakers, microphones, and accessories tailored to every type of listener.
                </p>
              </div>
              <span className="badge bg-warning text-dark">Shop by type</span>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-md-3" data-aos="fade-right" data-aos-delay="50">
                <div className="category-tile p-3 rounded-3 border border-secondary h-100">
                  <h5>Headphones</h5>
                  <p className="small text-secondary mb-2">Over-ear, on-ear, and in-ear options.</p>
                  <Link to="/headphones" className="btn btn-warning btn-sm">View Headphones</Link>
                </div>
              </div>

              <div className="col-md-3" data-aos="fade-right" data-aos-delay="100">
                <div className="category-tile p-3 rounded-3 border border-secondary h-100">
                  <h5>Speakers</h5>
                  <p className="small text-secondary mb-2">Home, studio, and portable speakers.</p>
                  <Link to="/speakers" className="btn btn-warning btn-sm">View Speakers</Link>
                </div>
              </div>

              <div className="col-md-3" data-aos="fade-right" data-aos-delay="150">
                <div className="category-tile p-3 rounded-3 border border-secondary h-100">
                  <h5>Microphones</h5>
                  <p className="small text-secondary mb-2">Streaming, studio, and stage mics.</p>
                  <Link to="/microphones" className="btn btn-warning btn-sm">View Microphones</Link>
                </div>
              </div>

              <div className="col-md-3" data-aos="fade-right" data-aos-delay="200">
                <div className="category-tile p-3 rounded-3 border border-secondary h-100">
                  <h5>Accessories</h5>
                  <p className="small text-secondary mb-2">Stands, cables, cases, and more.</p>
                  <Link to="/accessories" className="btn btn-warning btn-sm">View Accessories</Link>
                </div>
              </div>
            </div>

            <div className="row g-4" data-aos="fade-up" data-aos-delay="250">
              <div className="col-lg-6">
                <div className="card h-100 bg-black text-light border-0 shadow-sm">
                  <div className="card-body">
                    <h2 className="h4 mb-3">Build your ideal setup</h2>
                    <p className="small text-secondary mb-3">
                      Mix and match categories to create a setup that fits your space – from compact desks to full
                      studios.
                    </p>
                    <ul className="small text-secondary mb-0">
                      <li>Start with headphones or speakers</li>
                      <li>Add a microphone for calls, streaming, or recording</li>
                      <li>Finish with accessories to keep everything tidy and protected</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                  <h2 className="h4 mb-3">Not sure where to start?</h2>
                  <p className="small text-secondary mb-3">
                    Answer a few quick questions and we7ll suggest categories and bundles tailored to your
                    listening style.
                  </p>
                  <button className="btn btn-outline-light w-100">Take the audio style quiz</button>
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

export default Categories;

