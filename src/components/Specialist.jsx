import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Specialist() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    primaryUse: 'Music listening',
    budget: 'Under $200',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleQuickAddToCart = () => {
    setCartCount((prev) => prev + 1);
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
          id="specialist"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="row g-4 align-items-start mb-4">
            <div className="col-lg-7" data-aos="fade-right" data-aos-delay="50">
              <h1 className="display-5 fw-bold mb-2">Talk to an Audio Specialist</h1>
              <p className="text-secondary mb-4">
                Get personalized recommendations for headphones, speakers, microphones, and complete setups tailored
                to your space, budget, and listening style.
              </p>

              <div className="card bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h5 mb-3">Tell us about your setup</h2>
                  {submitted && (
                    <div className="alert alert-success py-2 small" role="alert">
                      Thanks, {formData.name || 'there'}! A specialist will review your request and reply to {formData.email || 'your email'} within 1 business day.
                    </div>
                  )}
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small text-secondary">Name</label>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        value={formData.name}
                        onChange={handleChange('name')}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small text-secondary">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        value={formData.email}
                        onChange={handleChange('email')}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small text-secondary">Primary use</label>
                      <select
                        className="form-select form-select-sm bg-dark text-light border-secondary"
                        value={formData.primaryUse}
                        onChange={handleChange('primaryUse')}
                      >
                        <option>Music listening</option>
                        <option>Home theater</option>
                        <option>Gaming</option>
                        <option>Content creation / streaming</option>
                        <option>Podcasting / voice</option>
                        <option>Studio production</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small text-secondary">Budget range</label>
                      <select
                        className="form-select form-select-sm bg-dark text-light border-secondary"
                        value={formData.budget}
                        onChange={handleChange('budget')}
                      >
                        <option>Under $200</option>
                        <option>$200 - $500</option>
                        <option>$500 - $1,000</option>
                        <option>$1,000 - $2,000</option>
                        <option>$2,000+</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label small text-secondary">Describe your room and goals</label>
                      <textarea
                        rows="4"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        placeholder="Room size, existing gear, brands you like, any specific needs..."
                        value={formData.description}
                        onChange={handleChange('description')}
                      ></textarea>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-outline-light btn-sm"
                        onClick={handleQuickAddToCart}
                      >
                        Add recommended bundle to cart
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-sm px-4"
                        onClick={handleSubmit}
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="100">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100 d-flex flex-column">
                <h2 className="h4 mb-3">How our specialists help</h2>
                <p className="small text-secondary mb-3">
                  Our team lives and breathes audio. We match products not just by specs, but by how they feel and
                  sound in real rooms and real workflows.
                </p>
                <ul className="small text-secondary mb-4">
                  <li>Build complete setups from scratch or upgrade what you already have</li>
                  <li>Fine-tune gear for specific genres, games, or content types</li>
                  <li>Suggest acoustic treatment and placement tips for better sound</li>
                </ul>
                <div className="mt-auto small text-secondary">
                  Typical response time: <span className="text-white">within 1 business day</span>.
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4" data-aos="fade-up" data-aos-delay="200">
            <div className="col-md-4">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h6 mb-2">For listeners</h3>
                  <p className="small text-secondary mb-0">
                    From casual playlists to critical hi-fi listening, we'll help you find the right headphones or
                    speakers that make your favorite tracks shine.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h6 mb-2">For creators</h3>
                  <p className="small text-secondary mb-0">
                    We can suggest microphones, interfaces, monitors, and accessories tuned to your content and
                    recording environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h6 mb-2">For gamers</h3>
                  <p className="small text-secondary mb-0">
                    Want clearer comms and more immersive sound? We'll recommend headsets and setups that keep you
                    locked into the action.
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

export default Specialist;

