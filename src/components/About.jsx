import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function About() {
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
          id="about"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="row g-4 mb-4">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold mb-3">About AudioWave</h1>
              <p className="text-secondary mb-3">
                AudioWave was created by music lovers, producers, and everyday listeners who believe that great
                sound should be accessible to everyone.
              </p>
              <p className="text-secondary mb-3">
                From studio-grade gear to everyday wireless audio, we hand-pick products that deliver clarity,
                comfort, and reliability014backed by honest advice and real-world testing.
              </p>
              <p className="text-secondary mb-0">
                Whether you're building your first setup or upgrading a professional studio, our team is here to
                help you find the gear that fits your sound.
              </p>
            </div>

            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="150">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                <h2 className="h4 mb-3">What we stand for</h2>
                <ul className="small text-secondary mb-0">
                  <li>Carefully curated selection of audio brands</li>
                  <li>Transparent recommendations over hype</li>
                  <li>Support before and after your purchase</li>
                  <li>Focus on long-term listening comfort and quality</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row g-4" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-6">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h4 mb-3">Our story</h2>
                  <p className="small text-secondary mb-3">
                    AudioWave began as a small listening room where friends would compare headphones and speakers
                    late into the night. That passion turned into a store dedicated to helping people discover the
                    joy of great sound.
                  </p>
                  <p className="small text-secondary mb-0">
                    Today, we ship worldwide and continue to test every piece of gear we recommend, so you can
                    shop with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h4 mb-3">For listeners of all kinds</h2>
                  <p className="small text-secondary mb-3">
                    We work with gamers, podcasters, producers, and casual listeners to match gear to real
                    lifestyles014not spec sheets.
                  </p>
                  <ul className="small text-secondary mb-0">
                    <li>Audiophile-grade headphones and DACs</li>
                    <li>Creator and streaming setups</li>
                    <li>Home theater and desktop speakers</li>
                    <li>Portable audio for travel and everyday use</li>
                  </ul>
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

export default About;

