import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Login() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  const [loginMessage, setLoginMessage] = useState(null);
  const [signupMessage, setSignupMessage] = useState(null);

  const handleLoginChange = (field) => (event) => {
    const value = field === 'remember' ? event.target.checked : event.target.value;
    setLoginData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setLoginMessage(null);
  };

  const handleSignupChange = (field) => (event) => {
    const value = field === 'acceptedTerms' ? event.target.checked : event.target.value;
    setSignupData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setSignupMessage(null);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (!loginData.email || !loginData.password) {
      setLoginMessage({ type: 'error', text: 'Please enter both email and password to log in.' });
      return;
    }
    setLoginMessage({ type: 'success', text: 'Logged in (demo only). You can now browse your audio gear.' });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (!signupData.firstName || !signupData.email || !signupData.password || !signupData.confirmPassword) {
      setSignupMessage({ type: 'error', text: 'Please fill in all required fields to create an account.' });
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      setSignupMessage({ type: 'error', text: 'Passwords do not match. Please check and try again.' });
      return;
    }
    if (!signupData.acceptedTerms) {
      setSignupMessage({ type: 'error', text: 'You need to agree to the terms and privacy policy to continue.' });
      return;
    }
    setSignupMessage({ type: 'success', text: 'Account created (demo only). You can now log in with your details.' });
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
            <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          </ul>
        </div>
      </header>

      <main>
        <section
          id="login"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card bg-black text-light border-0 shadow-sm h-100">
                <div className="card-body">
                  <h1 className="h3 fw-bold mb-3">Welcome back</h1>
                  <p className="text-secondary mb-4 small">
                    Log in to view your orders, manage your wishlist, and access personalized recommendations.
                  </p>

                  {loginMessage && (
                    <div
                      className={`alert py-2 small ${loginMessage.type === 'success' ? 'alert-success' : 'alert-danger'}`}
                      role="alert"
                    >
                      {loginMessage.text}
                    </div>
                  )}

                  <form className="row g-3" onSubmit={handleLoginSubmit}>
                    <div className="col-12">
                      <label htmlFor="loginEmail" className="form-label small text-secondary">Email</label>
                      <input
                        type="email"
                        className="form-control bg-dark text-light border-secondary"
                        id="loginEmail"
                        placeholder="you@example.com"
                        value={loginData.email}
                        onChange={handleLoginChange('email')}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="loginPassword" className="form-label small text-secondary">Password</label>
                      <input
                        type="password"
                        className="form-control bg-dark text-light border-secondary"
                        id="loginPassword"
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={handleLoginChange('password')}
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center">
                      <div className="form-check small">
                        <input
                          className="form-check-input bg-dark border-secondary"
                          type="checkbox"
                          id="rememberMe"
                          checked={loginData.remember}
                          onChange={handleLoginChange('remember')}
                        />
                        <label className="form-check-label text-secondary" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <button type="button" className="btn btn-link btn-sm text-secondary p-0">Forgot password?</button>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-warning w-100">Log In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="150">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                <h2 className="h4 mb-2">New to AudioWave?</h2>
                <p className="small text-secondary mb-3">
                  Create an account to save your preferences, track orders, and get early access to limited drops.
                </p>

                {signupMessage && (
                  <div
                    className={`alert py-2 small ${signupMessage.type === 'success' ? 'alert-success' : 'alert-danger'}`}
                    role="alert"
                  >
                    {signupMessage.text}
                  </div>
                )}

                <form className="row g-3" onSubmit={handleSignupSubmit}>
                  <div className="col-md-6">
                    <label htmlFor="signupFirstName" className="form-label small text-secondary">First name</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-secondary"
                      id="signupFirstName"
                      placeholder="First name"
                      value={signupData.firstName}
                      onChange={handleSignupChange('firstName')}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="signupLastName" className="form-label small text-secondary">Last name</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-secondary"
                      id="signupLastName"
                      placeholder="Last name"
                      value={signupData.lastName}
                      onChange={handleSignupChange('lastName')}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="signupEmail" className="form-label small text-secondary">Email</label>
                    <input
                      type="email"
                      className="form-control bg-dark text-light border-secondary"
                      id="signupEmail"
                      placeholder="you@example.com"
                      value={signupData.email}
                      onChange={handleSignupChange('email')}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="signupPassword" className="form-label small text-secondary">Password</label>
                    <input
                      type="password"
                      className="form-control bg-dark text-light border-secondary"
                      id="signupPassword"
                      placeholder="Create a password"
                      value={signupData.password}
                      onChange={handleSignupChange('password')}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="signupConfirm" className="form-label small text-secondary">Confirm password</label>
                    <input
                      type="password"
                      className="form-control bg-dark text-light border-secondary"
                      id="signupConfirm"
                      placeholder="Repeat password"
                      value={signupData.confirmPassword}
                      onChange={handleSignupChange('confirmPassword')}
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check small">
                      <input
                        className="form-check-input bg-dark border-secondary"
                        type="checkbox"
                        id="signupTerms"
                        checked={signupData.acceptedTerms}
                        onChange={handleSignupChange('acceptedTerms')}
                      />
                      <label className="form-check-label text-secondary" htmlFor="signupTerms">
                        I agree to the terms and privacy policy
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-outline-light w-100">Create account</button>
                  </div>
                </form>
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

export default Login;

