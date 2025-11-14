import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index.jsx';
import Featured from './components/Featured.jsx';
import Categories from './components/Categories.jsx';
import Deals from './components/Deals.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Cart from './components/Cart.jsx';
import Login from './components/Login.jsx';
import Shop from './components/Shop.jsx';
import Headphones from './components/Headphones.jsx';
import Speakers from './components/Speakers.jsx';
import Microphones from './components/Microphones.jsx';
import Accessories from './components/Accessories.jsx';
import Wireless from './components/Wireless.jsx';
import Bundle from './components/Bundle.jsx';
import Portable from './components/Portable.jsx';
import Specialist from './components/Specialist.jsx';
import Checkout from './components/Checkout.jsx';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/microphones" element={<Microphones />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/wireless" element={<Wireless />} />
        <Route path="/bundle" element={<Bundle />} />
        <Route path="/portable" element={<Portable />} />
        <Route path="/specialist" element={<Specialist />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
