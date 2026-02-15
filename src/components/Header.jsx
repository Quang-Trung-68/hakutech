import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <Link to="/" className="text-primary text-3xl font-extrabold tracking-tight">Haku<span className="text-slate-900 dark:text-white">Tech</span></Link>
                </div>
                {/* Navigation */}
                <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium">
                    <Link className="hover:text-primary transition-colors" to="/">Trang chủ</Link>
                    <Link className="hover:text-primary transition-colors" to="/category">Danh mục</Link>
                    <Link className="hover:text-primary transition-colors" to="/promotions">Khuyến mãi</Link>
                    <Link className="hover:text-primary transition-colors" to="/technews">Tin tức</Link>
                    <Link className="hover:text-primary transition-colors" to="/stores">Cửa hàng</Link>
                    <Link className="hover:text-primary transition-colors" to="/support">Hỗ trợ</Link>
                    <Link className="hover:text-primary transition-colors" to="/about">Về Haku</Link>
                </nav>
                {/* Search Bar */}
                <div className="flex-grow max-w-xl relative">
                    <input className="w-full pl-12 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all" placeholder="Tìm kiếm sản phẩm công nghệ..." type="text"/>
                    <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                </div>
                {/* User Actions */}
                <div className="flex items-center space-x-5">
                    <button className="flex items-center gap-2 hover:text-primary transition-colors">
                        <span className="material-icons text-2xl">account_circle</span>
                    </button>
                    <div className="relative">
                        <Link to="/cart" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <span className="material-icons text-2xl">shopping_cart</span>
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
                        </Link>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all">
                        Đăng ký ngay
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
