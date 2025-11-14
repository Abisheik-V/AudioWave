import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Checkout() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [checkoutData, setCheckoutData] = useState({
    fullName: '',
    phone: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    paymentMethod: 'card',
    saveAddress: true,
  });

  const [message, setMessage] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);

  const demoSubtotal = 947;
  const demoShipping = 0;
  const demoTax = 0;
  const demoTotal = demoSubtotal + demoShipping + demoTax;

  const handleChange = (field) => (event) => {
    const value =
      field === 'saveAddress' ? event.target.checked : event.target.value;
    setCheckoutData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setMessage(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkoutData.fullName || !checkoutData.phone || !checkoutData.addressLine1 || !checkoutData.city) {
      setMessage({
        type: 'error',
        text: 'Please fill in all required fields (name, phone, primary address, city).',
      });
      return;
    }
    setMessage({
      type: 'success',
      text: 'Order placed (demo only). Thank you for shopping with AudioWave!',
    });
    setShowReceipt(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const summary = `Order summary\nName: ${checkoutData.fullName}\nPhone: ${checkoutData.phone}\nEmail: ${checkoutData.email}\nCity: ${checkoutData.city}\nTotal: $${demoTotal}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'AudioWave Order Receipt',
          text: summary,
        });
      } else {
        alert('Sharing is not supported in this browser. You can print or copy the receipt instead.');
      }
    } catch (err) {
      // Swallow share cancellation or errors silently for this demo
    }
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
          id="checkout"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-2">
            <div>
              <h1 className="h3 fw-bold mb-1">Checkout</h1>
              <p className="small text-secondary mb-0">
                Complete your delivery details and payment to place your order.
              </p>
            </div>
            <div className="d-flex flex-wrap small text-secondary gap-2">
              <span className="badge bg-warning text-dark">1. Cart</span>
              <span className="badge bg-warning text-dark">2. Address</span>
              <span className="badge bg-warning text-dark">3. Payment</span>
              <span className="badge bg-secondary text-light">4. Done</span>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card bg-black text-light border-0 shadow-sm mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h5 mb-0">Delivery address</h2>
                    <span className="badge bg-warning text-dark small">Step 1</span>
                  </div>

                  {message && (
                    <div
                      className={`alert py-2 small ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}
                      role="alert"
                    >
                      {message.text}
                    </div>
                  )}

                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label className="form-label small text-secondary">Full name *</label>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        value={checkoutData.fullName}
                        onChange={handleChange('fullName')}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label small text-secondary">Phone *</label>
                      <input
                        type="tel"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        value={checkoutData.phone}
                        onChange={handleChange('phone')}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label small text-secondary">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        value={checkoutData.email}
                        onChange={handleChange('email')}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small text-secondary">Address line 1 *</label>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        value={checkoutData.addressLine1}
                        onChange={handleChange('addressLine1')}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small text-secondary">Address line 2</label>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        value={checkoutData.addressLine2}
                        onChange={handleChange('addressLine2')}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small text-secondary">City *</label>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        value={checkoutData.city}
                        onChange={handleChange('city')}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small text-secondary">State / Region</label>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        value={checkoutData.state}
                        onChange={handleChange('state')}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small text-secondary">Postal code *</label>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-dark text-light border-secondary"
                        value={checkoutData.postalCode}
                        onChange={handleChange('postalCode')}
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check small">
                        <input
                          className="form-check-input bg-dark border-secondary"
                          type="checkbox"
                          id="saveAddress"
                          checked={checkoutData.saveAddress}
                          onChange={handleChange('saveAddress')}
                        />
                        <label className="form-check-label text-secondary" htmlFor="saveAddress">
                          Save this address for future orders
                        </label>
                      </div>
                    </div>

                    <hr className="text-secondary" />

                    <div className="col-12 mb-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h2 className="h5 mb-0">Payment method</h2>
                        <span className="badge bg-warning text-dark small">Step 2</span>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="btn-group w-100" role="group">
                        <button
                          type="button"
                          className={`btn btn-sm ${checkoutData.paymentMethod === 'card' ? 'btn-warning' : 'btn-outline-light'}`}
                          onClick={() => setCheckoutData((prev) => ({ ...prev, paymentMethod: 'card' }))}
                        >
                          Card
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm ${checkoutData.paymentMethod === 'upi' ? 'btn-warning' : 'btn-outline-light'}`}
                          onClick={() => setCheckoutData((prev) => ({ ...prev, paymentMethod: 'upi' }))}
                        >
                          UPI / Wallet
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm ${checkoutData.paymentMethod === 'cod' ? 'btn-warning' : 'btn-outline-light'}`}
                          onClick={() => setCheckoutData((prev) => ({ ...prev, paymentMethod: 'cod' }))}
                        >
                          Cash on delivery
                        </button>
                      </div>
                    </div>

                    <div className="col-12 d-flex justify-content-end mt-3">
                      <button type="submit" className="btn btn-warning px-4">
                        Place order
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-left" data-aos-delay="150">
              <div className="hero-card rounded-4 p-4 p-md-4 bg-gradient mb-3">
                <h2 className="h5 mb-3">Order summary</h2>
                <div className="d-flex justify-content-between small text-secondary mb-2">
                  <span>Items total</span>
                  <span>${demoSubtotal}</span>
                </div>
                <div className="d-flex justify-content-between small text-secondary mb-2">
                  <span>Shipping</span>
                  <span>{demoShipping === 0 ? 'Free' : `$${demoShipping}`}</span>
                </div>
                <div className="d-flex justify-content-between small text-secondary mb-3">
                  <span>Tax (estimate)</span>
                  <span>${demoTax}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fw-semibold">Total</span>
                  <span className="h5 mb-0">${demoTotal}</span>
                </div>
                <p className="small text-secondary mb-0">
                  You will be able to review your order before final confirmation.
                </p>
              </div>

              <div className="card bg-black text-light border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h6 mb-2">Secure payment</h2>
                  <p className="small text-secondary mb-0">
                    Payments are processed over encrypted connections. We never store your full card details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showReceipt && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1050 }}>
          <div className="card bg-black text-light border border-secondary shadow-lg" style={{ maxWidth: '520px', width: '100%' }}>
            <div className="card-body" id="receipt-content">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h2 className="h5 mb-0">Order receipt</h2>
                <span className="badge bg-warning text-dark small">Demo</span>
              </div>
              <p className="small text-secondary mb-3 mb-md-2">
                Thank you for your purchase. This is a demo receipt based on the details you entered.
              </p>

              <div className="border rounded-3 p-3 mb-3">
                <h3 className="small text-uppercase text-secondary mb-2">Customer</h3>
                <p className="small mb-1 text-white">{checkoutData.fullName || '—'}</p>
                <p className="small mb-1 text-secondary">Phone: {checkoutData.phone || '—'}</p>
                <p className="small mb-1 text-secondary">Email: {checkoutData.email || '—'}</p>
              </div>

              <div className="border rounded-3 p-3 mb-3">
                <h3 className="small text-uppercase text-secondary mb-2">Delivery address</h3>
                <p className="small mb-1 text-white">{checkoutData.addressLine1 || '—'}</p>
                {checkoutData.addressLine2 && (
                  <p className="small mb-1 text-white">{checkoutData.addressLine2}</p>
                )}
                <p className="small mb-0 text-secondary">
                  {checkoutData.city || '—'}, {checkoutData.state || '—'} {checkoutData.postalCode || ''}
                </p>
              </div>

              <div className="border rounded-3 p-3 mb-3">
                <h3 className="small text-uppercase text-secondary mb-2">Payment</h3>
                <p className="small mb-0 text-white">
                  Method:{' '}
                  {checkoutData.paymentMethod === 'card' && 'Card'}
                  {checkoutData.paymentMethod === 'upi' && 'UPI / Wallet'}
                  {checkoutData.paymentMethod === 'cod' && 'Cash on delivery'}
                </p>
              </div>

              <div className="border rounded-3 p-3 mb-3">
                <h3 className="small text-uppercase text-secondary mb-2">Summary</h3>
                <div className="d-flex justify-content-between small text-secondary mb-1">
                  <span>Items total</span>
                  <span>${demoSubtotal}</span>
                </div>
                <div className="d-flex justify-content-between small text-secondary mb-1">
                  <span>Shipping</span>
                  <span>{demoShipping === 0 ? 'Free' : `$${demoShipping}`}</span>
                </div>
                <div className="d-flex justify-content-between small text-secondary mb-1">
                  <span>Tax</span>
                  <span>${demoTax}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center small mt-2">
                  <span className="fw-semibold text-white">Total</span>
                  <span className="fw-semibold text-white">${demoTotal}</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 mt-3">
                <button type="button" className="btn btn-outline-light btn-sm" onClick={handlePrint}>
                  Print
                </button>
                <button type="button" className="btn btn-outline-light btn-sm" onClick={handleShare}>
                  Share
                </button>
                <Link
                  to="/shop"
                  className="btn btn-warning btn-sm flex-grow-1 text-center"
                  onClick={() => setShowReceipt(false)}
                >
                  Continue Shopping
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm flex-grow-1"
                  onClick={() => setShowReceipt(false)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Checkout;

