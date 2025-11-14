import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Contact() {
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
          id="contact"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold mb-3">Get in touch</h1>
              <p className="text-secondary mb-4">
                Have a question about gear, orders, or recommendations? Send us a message and our audio specialists
                will get back to you.
              </p>

              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="contactName" className="form-label small text-secondary">Name</label>
                  <input type="text" className="form-control bg-dark text-light border-secondary" id="contactName" placeholder="Your name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contactEmail" className="form-label small text-secondary">Email</label>
                  <input type="email" className="form-control bg-dark text-light border-secondary" id="contactEmail" placeholder="you@example.com" />
                </div>
                <div className="col-12">
                  <label htmlFor="contactSubject" className="form-label small text-secondary">Subject</label>
                  <input type="text" className="form-control bg-dark text-light border-secondary" id="contactSubject" placeholder="How can we help?" />
                </div>
                <div className="col-12">
                  <label htmlFor="contactMessage" className="form-label small text-secondary">Message</label>
                  <textarea className="form-control bg-dark text-light border-secondary" id="contactMessage" rows="5" placeholder="Tell us a bit more..."></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-warning px-4">Send Message</button>
                </div>
              </form>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="150">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                <h2 className="h4 mb-3">Visit or reach us</h2>
                <p className="small text-secondary mb-3">
                  We7re available online and in-store to help with product demos, setup advice, and after-sales
                  support.
                </p>
                <ul className="small text-secondary mb-3">
                  <li><strong>Store hours:</strong> Mon–Sat, 10:00 AM – 8:00 PM</li>
                  <li><strong>Showroom:</strong> 123 Audio Lane, Sound City</li>
                  <li><strong>Support:</strong> support@audiowave.shop</li>
                </ul>
                <p className="small text-secondary mb-1"><strong>Phone:</strong> +1 (555) 012-3456</p>
                <p className="small text-secondary mb-0"><strong>WhatsApp:</strong> +1 (555) 987-6543</p>
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

export default Contact;

