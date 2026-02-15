import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Promotions from './pages/Promotions';
import Blog from './pages/Blog';
import Support from './pages/Support';
import About from './pages/About';
import StoreSystem from './pages/StoreSystem';
import TechNews from './pages/TechNews';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isCheckout = location.pathname === '/checkout';
  const isStoreSystem = location.pathname === '/stores';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {!isCheckout && <Header />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/stores" element={<StoreSystem />} />
          <Route path="/technews" element={<TechNews />} />
        </Routes>
      </div>
      {!isCheckout && !isStoreSystem && <Footer />}
    </div>
  );
}

export default App;
