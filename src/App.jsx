import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Category from './pages/Product/Category';
import ProductDetail from './pages/Product/ProductDetail';
import Cart from './pages/Order/Cart';
import Checkout from './pages/Order/Checkout';
import Promotions from './pages/Product/Promotions';
import Blog from './pages/Info/Blog';
import Support from './pages/Info/Support';
import About from './pages/Info/About';
import StoreSystem from './pages/Info/StoreSystem';
import TechNews from './pages/Info/TechNews';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import Dashboard from './pages/Account/Dashboard';
import EditProfile from './pages/Account/EditProfile';
import ChangePassword from './pages/Account/ChangePassword';
import OrderHistory from './pages/Account/OrderHistory';
import OrderDetail from './pages/Account/OrderDetail';
import EmailVerification from './pages/Auth/EmailVerification';
import VerifyEmailSuccess from './pages/Auth/VerifyEmailSuccess';
import Unauthorized from './pages/Error/Unauthorized';
import NotFound from './pages/Error/NotFound';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isCheckout = location.pathname === '/checkout';
  const isStoreSystem = location.pathname === '/stores';
  const isAuthPage = ['/login', '/register', '/forgot-password', '/reset-password', '/verify-email', '/verify-email-success'].includes(location.pathname);
  const isErrorPage = ['/unauthorized'].includes(location.pathname) || location.pathname.match(/^\/404/);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {!isCheckout && !isAuthPage && !isErrorPage && <Header />}
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/account" element={<Dashboard />} />
          <Route path="/account/profile" element={<EditProfile />} />
          <Route path="/account/password" element={<ChangePassword />} />
          <Route path="/account/orders" element={<OrderHistory />} />
          <Route path="/account/orders/:id" element={<OrderDetail />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/verify-email-success" element={<VerifyEmailSuccess />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!isCheckout && !isStoreSystem && !isAuthPage && !isErrorPage && <Footer />}
    </div>
  );
}

export default App;
