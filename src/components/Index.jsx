 import React, { useEffect } from 'react';
 import { Link } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 import AOS from 'aos';
 import 'aos/dist/aos.css';
 import '../assets/style/style.css';

 function Index() {
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
           id="home"
           className="hero-section container py-5"
           data-aos="fade-up"
         >
           <div className="row align-items-center">
             <div className="col-lg-6 mb-4 mb-lg-0">
               <h1 className="display-4 fw-bold mb-3">
                 Experience Sound
                 <span className="text-warning"> Redefined</span>
               </h1>
               <p className="lead text-secondary mb-4">
                 Premium headphones, speakers, and studio gear curated for audiophiles,
                 creators, and everyday listeners.
               </p>
               <div className="d-flex gap-3">
                 <Link to="/shop" className="btn btn-warning btn-lg px-4">Shop Now</Link>
                 <Link to="/shop" className="btn btn-outline-light btn-lg px-4">View Collections</Link>
               </div>
             </div>
             <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="150">
               <div className="hero-card rounded-4 p-4 p-md-5 bg-gradient">
                 <h2 className="h4 mb-3">Featured Setup</h2>
                 <ul className="list-unstyled small text-secondary mb-0">
                   <li>• Noise-cancelling wireless headphones</li>
                   <li>• High-fidelity Bluetooth speaker</li>
                   <li>• Studio-grade USB microphone</li>
                 </ul>
               </div>
             </div>
           </div>
         </section>

         <section
           id="featured"
           className="container py-5"
           data-aos="fade-up"
         >
           <div className="d-flex justify-content-between align-items-center mb-4">
             <h2 className="h3 mb-0">Featured Gear</h2>
             <Link to="/shop" className="text-warning small text-decoration-none">
               View all
             </Link>
           </div>
           <div className="row g-4">
             <div className="col-md-4" data-aos="fade-up" data-aos-delay="50">
               <div className="card h-100 bg-black text-light border-0 shadow-sm">
                 <div className="card-body">
                   <h5 className="card-title">Wireless Noise-Cancelling Headphones</h5>
                   <p className="card-text text-secondary small mb-3">
                     Immersive sound with 30-hour battery life and adaptive noise control.
                   </p>
                   <p className="h5 mb-3">$299</p>
                   <button className="btn btn-warning w-100">Add to Cart</button>
                 </div>
               </div>
             </div>
             <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
               <div className="card h-100 bg-black text-light border-0 shadow-sm">
                 <div className="card-body">
                   <h5 className="card-title">Studio Monitor Speakers</h5>
                   <p className="card-text text-secondary small mb-3">
                     Accurate reference sound for music production and mixing.
                   </p>
                   <p className="h5 mb-3">$499</p>
                   <button className="btn btn-warning w-100">Add to Cart</button>
                 </div>
               </div>
             </div>
             <div className="col-md-4" data-aos="fade-up" data-aos-delay="150">
               <div className="card h-100 bg-black text-light border-0 shadow-sm">
                 <div className="card-body">
                   <h5 className="card-title">USB Condenser Microphone</h5>
                   <p className="card-text text-secondary small mb-3">
                     Broadcast-quality voice capture for streaming and podcasts.
                   </p>
                   <p className="h5 mb-3">$149</p>
                   <button className="btn btn-warning w-100">Add to Cart</button>
                 </div>
               </div>
             </div>
           </div>
         </section>

         <section
           id="categories"
           className="bg-black py-5"
           data-aos="fade-up"
         >
           <div className="container">
             <h2 className="h3 mb-4">Shop by Category</h2>
             <div className="row g-4">
               <div className="col-md-3" data-aos="fade-right" data-aos-delay="50">
                 <div className="category-tile p-3 rounded-3 border border-secondary h-100">
                   <h5>Headphones</h5>
                   <p className="small text-secondary mb-0">Over-ear, on-ear, and in-ear.</p>
                 </div>
               </div>
               <div className="col-md-3" data-aos="fade-right" data-aos-delay="100">
                 <div className="category-tile p-3 rounded-3 border border-secondary h-100">
                   <h5>Speakers</h5>
                   <p className="small text-secondary mb-0">Home, studio, and portable.</p>
                 </div>
               </div>
               <div className="col-md-3" data-aos="fade-right" data-aos-delay="150">
                 <div className="category-tile p-3 rounded-3 border border-secondary h-100">
                   <h5>Microphones</h5>
                   <p className="small text-secondary mb-0">Streaming, studio, and stage.</p>
                 </div>
               </div>
               <div className="col-md-3" data-aos="fade-right" data-aos-delay="200">
                 <div className="category-tile p-3 rounded-3 border border-secondary h-100">
                   <h5>Accessories</h5>
                   <p className="small text-secondary mb-0">Cables, stands, and more.</p>
                 </div>
               </div>
             </div>
           </div>
         </section>

         <section
           id="deals"
           className="container py-5"
           data-aos="fade-up"
         >
           <div className="row align-items-center">
             <div className="col-lg-7 mb-4 mb-lg-0">
               <h2 className="h3 mb-3">Limited-Time Deals</h2>
               <p className="text-secondary mb-3">
                 Save up to 40% on selected headphones and speakers this week only.
               </p>
               <ul className="small text-secondary mb-3">
                 <li>Free shipping on orders above $99</li>
                 <li>30-day hassle-free returns</li>
                 <li>2-year extended warranty on premium lines</li>
               </ul>
               <Link to="/deals" className="btn btn-warning px-4">Explore Deals</Link>
             </div>
             <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="150">
               <div className="deal-badge text-center p-4 rounded-4 border border-warning">
                 <h3 className="display-6 text-warning mb-1">40% OFF</h3>
                 <p className="small text-secondary mb-0">On select audio bundles</p>
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
             <span className="small text-secondary">© {new Date().getFullYear()} AudioWave. All rights reserved.</span>
             <span className="small text-secondary">AudioWave</span>
           </div>
         </div>
       </footer>
     </div>
   );
 }

 export default Index;

