import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    // Simple state for demonstration
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'MacBook Air M2 13"', desc: '8GB RAM, 256GB SSD - Silver', price: 24500000, qty: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnodCkpkBwRYJ2RMAenjSfRDI-gfnnF_N8u4MvsDTgey7LOWaOqbh9zlN7W3bIqLsB9YPRQiiY1m9m6VXmclDjLq1-IFqP8pvDABeISCkN8prCOmkiK-TjizF7Mpg3a5Sn452EkwFVdwtAtE5kJIjv93Q1VcY6S8jW6muLtOodgZaoxX9_7RcGTf8HX_lVStabLXo5qNAN-jR9SJSancGMXiKJuji9UyIYuxk9PnTsShkGm8nkdZ0WhD4YyiCC4126Dy1EYVCkEBg' },
        { id: 2, name: 'iPhone 15 Pro Max 256GB', desc: 'Natural Titanium - Hàng chính hãng', price: 34990000, qty: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACxwFmMeuNMf_pz6bSwXQnglVJbIt-KV6Qkt8m7tQzCuj78ofnZznCHA-G6GtKRvwlhzBI6upy-QcgHqKulbsOWBetQMCDRi9BqQt3T8TaZIjIHNKZddsn82e_Vnoi3LnRP0zpkAeFWR9fSL5e5mUowi6QPzAo3vZ2xg8dMWT2aD-EGNGdel5eViYdOX6DHcduBN3pExc86mfeXTTtAQavB0hkPq8hraN6gZF75EXR5zrmCgEUgwjdl5yaXAekYmnXKHbWLalwxp0' }
    ]);

    const updateQty = (id, delta) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                const newQty = item.qty + delta;
                return newQty > 0 ? { ...item, qty: newQty } : item;
            }
            return item;
        }));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <main id="main-content" className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">
            {/* Skip Link */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg">
                Bỏ qua để xem nội dung chính
            </a>

            {/* Breadcrumb */}
            <nav className="mb-6 sm:mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400" aria-label="Đường dẫn trang">
                <Link className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1" to="/">Trang chủ</Link>
                <span className="material-icons text-xs" aria-hidden="true">chevron_right</span>
                <span className="text-slate-900 dark:text-slate-100 font-semibold" aria-current="page">Giỏ hàng</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 dark:text-white">Giỏ hàng của bạn</h1>

            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
                {/* Left Column: Cart items */}
                <div className="w-full lg:w-[70%] space-y-6">
                    {/* PC View: Table */}
                    <div className="hidden md:block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse" aria-label="Danh sách sản phẩm trong giỏ hàng">
                            <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-50/50 dark:bg-slate-800/50">
                                    <th className="px-6 py-4">Sản phẩm</th>
                                    <th className="px-6 py-4">Đơn giá</th>
                                    <th className="px-6 py-4">Số lượng</th>
                                    <th className="px-6 py-4">Thành tiền</th>
                                    <th className="px-6 py-4 text-center">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {cartItems.map(item => (
                                    <tr key={item.id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100 dark:border-slate-700">
                                                    <img alt={item.name} className="w-full h-full object-contain p-2" src={item.img} loading="lazy" />
                                                </div>
                                                <div className="max-w-[300px]">
                                                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">{item.name}</h3>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{item.desc}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 font-medium text-slate-900 dark:text-slate-300">{item.price.toLocaleString('vi-VN')}đ</td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg w-max bg-white dark:bg-slate-800 focus-within:ring-2 focus-within:ring-primary shadow-sm overflow-hidden">
                                                <button 
                                                    className="px-3 py-2 text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 transition-all min-h-[44px] cursor-pointer" 
                                                    onClick={() => updateQty(item.id, -1)}
                                                    aria-label={`Giảm số lượng ${item.name}`}
                                                >
                                                    <span className="material-icons text-sm" aria-hidden="true">remove</span>
                                                </button>
                                                <input 
                                                    className="w-10 text-center border-none text-sm p-0 focus:ring-0 bg-transparent font-bold text-slate-900 dark:text-white" 
                                                    type="text" 
                                                    value={item.qty} 
                                                    readOnly
                                                    aria-label="Số lượng hiện tại"
                                                />
                                                <button 
                                                    className="px-3 py-2 text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 transition-all min-h-[44px] cursor-pointer" 
                                                    onClick={() => updateQty(item.id, 1)}
                                                    aria-label={`Tăng số lượng ${item.name}`}
                                                >
                                                    <span className="material-icons text-sm" aria-hidden="true">add</span>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 font-bold text-primary">{(item.price * item.qty).toLocaleString('vi-VN')}đ</td>
                                        <td className="px-6 py-6 text-center">
                                            <button 
                                                className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500" 
                                                onClick={() => removeItem(item.id)}
                                                aria-label={`Xóa ${item.name} khỏi giỏ hàng`}
                                            >
                                                <span className="material-icons" aria-hidden="true">delete_outline</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {cartItems.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-20 text-center">
                                            <div className="flex flex-col items-center gap-4 text-slate-400">
                                                <span className="material-icons text-6xl">shopping_cart</span>
                                                <p className="text-lg">Giỏ hàng của bạn đang trống</p>
                                                <Link to="/products" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">Mua sắm ngay</Link>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile View: Cards */}
                    <div className="md:hidden space-y-4">
                        {cartItems.map(item => (
                            <article key={item.id} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
                                <button 
                                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500 min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-red-500 rounded-full" 
                                    onClick={() => removeItem(item.id)}
                                    aria-label={`Xóa ${item.name}`}
                                >
                                    <span className="material-icons">close</span>
                                </button>
                                <div className="flex gap-4">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden flex-shrink-0">
                                        <img alt={item.name} className="w-full h-full object-contain p-2" src={item.img} loading="lazy" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h3 className="font-bold text-slate-900 dark:text-white line-clamp-2 pr-8">{item.name}</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                                        <p className="text-primary font-bold">{(item.price * item.qty).toLocaleString('vi-VN')}đ</p>
                                        <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg w-max bg-white dark:bg-slate-800 mt-2 focus-within:ring-2 focus-within:ring-primary overflow-hidden">
                                            <button className="px-3 py-1 text-slate-500 min-h-[44px]" onClick={() => updateQty(item.id, -1)} aria-label="Giảm"><span className="material-icons text-sm">remove</span></button>
                                            <input className="w-10 text-center border-none text-sm p-0 bg-transparent font-bold text-slate-900 dark:text-white" type="text" value={item.qty} readOnly />
                                            <button className="px-3 py-1 text-slate-500 min-h-[44px]" onClick={() => updateQty(item.id, 1)} aria-label="Tăng"><span className="material-icons text-sm">add</span></button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-6">
                        <Link className="flex items-center gap-2 text-primary font-bold text-sm hover:translate-x-[-4px] transition-transform min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary rounded px-2" to="/products">
                            <span className="material-icons text-sm" aria-hidden="true">arrow_back</span>
                            Tiếp tục mua sắm
                        </Link>
                        {cartItems.length > 0 && (
                            <button 
                                className="text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors text-sm font-semibold flex items-center gap-1 min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2" 
                                onClick={() => setCartItems([])}
                            >
                                <span className="material-icons text-lg" aria-hidden="true">delete_sweep</span>
                                Xóa tất cả giỏ hàng
                            </button>
                        )}
                    </div>
                </div>

                {/* Right Column: Summary Card */}
                <aside className="w-full lg:w-[30%]">
                    <section className="sticky top-24 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl shadow-slate-100 dark:shadow-none" aria-labelledby="summary-title">
                        <h2 id="summary-title" className="text-xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="material-icons text-primary" aria-hidden="true">receipt_long</span>
                            Tóm tắt đơn hàng
                        </h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                <span>Tạm tính ({cartItems.length} sản phẩm)</span>
                                <span className="font-bold text-slate-900 dark:text-white">{subtotal.toLocaleString('vi-VN')}đ</span>
                            </div>
                            <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                <span>Phí vận chuyển</span>
                                <span className="text-emerald-500 font-bold" role="status">Miễn phí</span>
                            </div>
                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                                <label htmlFor="coupon-input" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Mã giảm giá (Coupon)</label>
                                <div className="flex gap-2">
                                    <input 
                                        id="coupon-input"
                                        className="flex-grow bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm px-4 focus:ring-2 focus:ring-primary focus:border-primary py-3 transition-all" 
                                        placeholder="NHAPMA2024" 
                                        type="text"
                                    />
                                    <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20 min-h-[44px] min-w-[100px] cursor-pointer">Áp dụng</button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center mb-8">
                            <span className="text-slate-900 dark:text-white font-bold text-lg">Tổng cộng</span>
                            <span className="text-3xl font-black text-primary transition-all" aria-live="polite">{subtotal.toLocaleString('vi-VN')}đ</span>
                        </div>
                        <Link 
                            to="/checkout" 
                            className={`w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-3 group text-lg ${cartItems.length === 0 ? 'pointer-events-none opacity-50' : ''}`}
                            aria-label="Tiến hành thanh toán đơn hàng"
                        >
                            Thanh toán ngay
                            <span className="material-icons motion-safe:group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                        </Link>
                        
                        <div className="mt-8 space-y-4 pt-6 border-t border-slate-50 dark:border-slate-800">
                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                                <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-500">
                                    <span className="material-icons text-sm">verified_user</span>
                                </div>
                                <span>Thanh toán an toàn & bảo mật 100%</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                                <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                                    <span className="material-icons text-sm">local_shipping</span>
                                </div>
                                <span>Giao hàng nhanh toàn quốc (2 - 4 ngày)</span>
                            </div>
                        </div>
                    </section>
                </aside>
            </div>
        </main>
    );
};

export default Cart;
