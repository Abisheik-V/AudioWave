import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

function Speakers() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');
  const [filterType, setFilterType] = useState('All');

  const speakers = [
    {
      id: 1,
      name: 'Studio Monitor Speakers 5"',
      description: 'Compact nearfield monitors with accurate response for mixing and production.',
      price: '$499',
      image:
        'https://files.vplak.com/500-images/presonus/ERIS-E4.5/black/image-3.jpg',
      tag: 'Studio',
      type: 'Nearfield',
    },
    {
      id: 2,
      name: 'Bookshelf Speakers',
      description: 'Hi-fi bookshelf speakers designed for living rooms and desktop listening.',
      price: '$349',
      image:
        'https://m.media-amazon.com/images/I/810KuDTVu-L.jpg',
      tag: 'Hi‑Fi',
      type: 'Bookshelf',
    },
    {
      id: 3,
      name: 'Floorstanding Tower Speakers',
      description: 'Full-range tower speakers that fill larger rooms with rich, detailed sound.',
      price: '$899',
      image:
        'https://www.bowerswilkins.com/dw/image/v2/BGJH_PRD/on/demandware.static/-/Library-Sites-bowers_europe_shared/default/dw9fb790c5/PLP/Floor-Standing-Speakers/floor-standing-speakers_hero_mainbanner-mobile.jpg?sw=768',
      tag: 'Home Theater',
      type: 'Floorstanding',
    },
    {
      id: 4,
      name: 'Portable Bluetooth Speaker',
      description: 'Rugged, water-resistant portable speaker with powerful bass.',
      price: '$159',
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2024/11/portablebluetoothspeakers-2048px-9130.jpg?auto=webp&quality=75&width=1024',
      tag: 'Outdoor',
      type: 'Portable',
    },
    {
      id: 5,
      name: 'Soundbar with Subwoofer',
      description: 'Slim soundbar and wireless subwoofer combo for cinematic TV audio.',
      price: '$429',
      image:
        'https://shop.zebronics.com/cdn/shop/files/Zeb-Juke-bar-10000-pic-1.jpg?v=1746425832&width=2000',
      tag: 'TV Audio',
      type: 'Soundbar',
    },
    {
      id: 6,
      name: 'Desktop Speaker Pair',
      description: 'Compact powered speakers ideal for desks and small setups.',
      price: '$199',
      image:
        'https://m.media-amazon.com/images/I/51v40LDkKtL.jpg',
      tag: 'Desktop',
      type: 'Powered',
    },
  ];

  const filteredSpeakers = speakers.filter((item) => {
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
          id="speakers"
          className="container py-5"
          data-aos="fade-up"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="display-5 fw-bold mb-2">Speakers &amp; Soundbars</h1>
              <p className="text-secondary mb-0">
                From precise studio monitors to room‑filling tower speakers, shape your space with sound.
              </p>
            </div>
            <span className="badge bg-warning text-dark">Speaker lineup</span>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
            <span className="small text-secondary mb-2 mb-md-0">
              Browse speakers by type to match your room and setup.
            </span>
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="speakerTypeFilter" className="small text-secondary mb-0">
                Type:
              </label>
              <select
                id="speakerTypeFilter"
                className="form-select form-select-sm bg-black text-light border-secondary"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Nearfield">Nearfield</option>
                <option value="Bookshelf">Bookshelf</option>
                <option value="Floorstanding">Floorstanding</option>
                <option value="Portable">Portable</option>
                <option value="Soundbar">Soundbar</option>
                <option value="Powered">Powered</option>
              </select>
            </div>
          </div>

          {lastAdded && (
            <div className="alert alert-success py-2 small" role="alert">
              Added to cart: <strong>{lastAdded}</strong> (Cart items: {cartCount})
            </div>
          )}

          <div className="row g-4 mb-4">
            {filteredSpeakers.map((item, index) => (
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
                  <h2 className="h4 mb-3">Choosing the right speakers</h2>
                  <p className="small text-secondary mb-3">
                    Room size, listening distance, and placement all affect how your speakers sound. Our selection
                    covers compact desks to full living rooms.
                  </p>
                  <ul className="small text-secondary mb-0">
                    <li>Studio monitors: nearfield accuracy for creators</li>
                    <li>Bookshelf speakers: flexible placement for music and TV</li>
                    <li>Floorstanding speakers: impactful sound for larger rooms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient h-100">
                <h2 className="h4 mb-3">Need help with setup?</h2>
                <p className="small text-secondary mb-3">
                  Share your room layout and gear, and we'll recommend speaker placement, stands, and acoustic tips
                  to get the best sound.
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

export default Speakers;

