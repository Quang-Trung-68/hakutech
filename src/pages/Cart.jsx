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
        <main className="container mx-auto px-6 py-6">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Link className="hover:text-primary transition-colors" to="/">Trang chủ</Link>
                <span className="material-icons text-xs">chevron_right</span>
                <span className="text-slate-900 dark:text-slate-100 font-medium">Giỏ hàng</span>
            </nav>
            <h1 className="text-2xl font-bold mb-8">Giỏ hàng của bạn</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column: Cart Table */}
                <div className="w-full lg:w-[70%] space-y-4">
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50 dark:bg-slate-800/50">
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
                                                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img alt={item.name} className="w-full h-full object-cover" src={item.img} />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{item.name}</h3>
                                                    <p className="text-sm text-slate-500 mt-1 line-clamp-1">{item.desc}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 font-medium">{item.price.toLocaleString('vi-VN')}đ</td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded w-max bg-white dark:bg-slate-800">
                                                <button className="px-2 py-1 text-slate-400 hover:text-primary transition-colors" onClick={() => updateQty(item.id, -1)}>
                                                    <span className="material-icons text-sm">remove</span>
                                                </button>
                                                <input className="w-10 text-center border-none text-sm p-0 focus:ring-0 bg-transparent" type="text" value={item.qty} readOnly/>
                                                <button className="px-2 py-1 text-slate-400 hover:text-primary transition-colors" onClick={() => updateQty(item.id, 1)}>
                                                    <span className="material-icons text-sm">add</span>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 font-semibold text-slate-900 dark:text-white">{(item.price * item.qty).toLocaleString('vi-VN')}đ</td>
                                        <td className="px-6 py-6 text-center">
                                            <button className="p-2 text-slate-400 hover:text-red-500 transition-colors" onClick={() => removeItem(item.id)}>
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <Link className="flex items-center gap-2 text-primary font-medium text-sm hover:underline" to="/category">
                            <span className="material-icons text-sm">arrow_back</span>
                            Tiếp tục mua sắm
                        </Link>
                        <button className="text-slate-500 hover:text-red-500 transition-colors text-sm flex items-center gap-1" onClick={() => setCartItems([])}>
                            <span className="material-icons text-sm">delete_sweep</span>
                            Xóa tất cả giỏ hàng
                        </button>
                    </div>
                </div>
                {/* Right Column: Summary Card */}
                <div className="w-full lg:w-[30%]">
                    <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                        <h2 className="text-lg font-bold mb-6">Tóm tắt đơn hàng</h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                <span>Tạm tính</span>
                                <span className="font-medium text-slate-900 dark:text-white">{subtotal.toLocaleString('vi-VN')}đ</span>
                            </div>
                            <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                <span>Phí vận chuyển</span>
                                <span className="text-green-500 font-medium">Miễn phí</span>
                            </div>
                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Mã giảm giá</label>
                                <div className="flex gap-2">
                                    <input className="flex-grow bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 focus:ring-primary focus:border-primary" placeholder="HAKU2024" type="text"/>
                                    <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-colors">Áp dụng</button>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end mb-6">
                            <span className="text-slate-900 dark:text-white font-bold">Tổng tiền</span>
                            <span className="text-2xl font-bold text-primary">{subtotal.toLocaleString('vi-VN')}đ</span>
                        </div>
                        <Link to="/checkout" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group">
                            Tiến hành thanh toán
                            <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                                <span className="material-icons text-primary">verified_user</span>
                                Thanh toán an toàn 100% bảo mật
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                                <span className="material-icons text-primary">local_shipping</span>
                                Giao hàng nhanh toàn quốc 2-4 ngày
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cart;
