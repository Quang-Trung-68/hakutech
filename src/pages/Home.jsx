import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white dark:bg-background-dark">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center py-16 lg:py-24 gap-12">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                New Arrival 2024
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
                                Công nghệ chính hãng. <br/>
                                <span className="text-primary">Giá tốt mỗi ngày.</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                                Khám phá hệ sinh thái thiết bị công nghệ đỉnh cao từ Apple, Samsung, Dell và hàng trăm thương hiệu hàng đầu thế giới với ưu đãi độc quyền.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                                <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all">
                                    Mua ngay
                                </button>
                                <button className="w-full sm:w-auto px-10 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    Xem khuyến mãi
                                </button>
                            </div>
                        </div>
                        {/* Right Visual */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-square hero-pattern rounded-3xl overflow-hidden relative flex items-center justify-center p-12">
                                <img alt="Modern high-end laptop and smartphone ensemble" className="z-10 w-full h-auto drop-shadow-2xl rounded-lg" data-alt="Modern high-end laptop and smartphone ensemble on desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkwLsf1WWmP7ILbvN00virg3nQv2DtrEmYdyVt_wRc5IKKBVhKCKC4FGVSesvNLc8gVfTULDFrGAYKMdPFIr7DONvxirPK0ZqyDApLAdRKwccQfVbOpb2lHz2RdZ38aiDS6lvCv2eMjPgh9NeCuf3ZWd4Rl1jK3PBLBte3fVuso_2TqCibc2tXqL8ItfcLpqUkg4fUN516BfRN1ZUzq1nXP8NUNZ4dFf-Dx-9N_a_lrZ7jWZ5CiW6O3kTOzuHNPh7hqCwoGw_kkjk"/>
                                {/* Abstract Shapes */}
                                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Categories */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white">Danh mục nổi bật</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Category 1 */}
                        <Link to="/category" className="group bg-white dark:bg-slate-800 p-8 rounded-2xl flex flex-col items-center text-center border border-slate-100 dark:border-slate-700 hover:border-primary transition-all product-card">
                            <div className="w-20 h-20 mb-4 flex items-center justify-center bg-primary/5 rounded-full group-hover:scale-110 transition-transform">
                                <span className="material-icons text-4xl text-primary">smartphone</span>
                            </div>
                            <span className="font-bold text-lg">Smartphone</span>
                            <span className="text-xs text-slate-500 mt-2">1.2k+ sản phẩm</span>
                        </Link>
                        {/* Category 2 */}
                        <Link to="/category" className="group bg-white dark:bg-slate-800 p-8 rounded-2xl flex flex-col items-center text-center border border-slate-100 dark:border-slate-700 hover:border-primary transition-all product-card">
                            <div className="w-20 h-20 mb-4 flex items-center justify-center bg-primary/5 rounded-full group-hover:scale-110 transition-transform">
                                <span className="material-icons text-4xl text-primary">laptop</span>
                            </div>
                            <span className="font-bold text-lg">Laptop</span>
                            <span className="text-xs text-slate-500 mt-2">800+ sản phẩm</span>
                        </Link>
                        {/* Category 3 */}
                        <Link to="/category" className="group bg-white dark:bg-slate-800 p-8 rounded-2xl flex flex-col items-center text-center border border-slate-100 dark:border-slate-700 hover:border-primary transition-all product-card">
                            <div className="w-20 h-20 mb-4 flex items-center justify-center bg-primary/5 rounded-full group-hover:scale-110 transition-transform">
                                <span className="material-icons text-4xl text-primary">headphones</span>
                            </div>
                            <span className="font-bold text-lg">Phụ kiện</span>
                            <span className="text-xs text-slate-500 mt-2">3k+ sản phẩm</span>
                        </Link>
                        {/* Category 4 */}
                        <Link to="/category" className="group bg-white dark:bg-slate-800 p-8 rounded-2xl flex flex-col items-center text-center border border-slate-100 dark:border-slate-700 hover:border-primary transition-all product-card">
                            <div className="w-20 h-20 mb-4 flex items-center justify-center bg-primary/5 rounded-full group-hover:scale-110 transition-transform">
                                <span className="material-icons text-4xl text-primary">router</span>
                            </div>
                            <span className="font-bold text-lg">Thiết bị mạng</span>
                            <span className="text-xs text-slate-500 mt-2">450+ sản phẩm</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Best Sellers */}
            <section className="py-20 bg-white dark:bg-background-dark">
                <div className="container mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Bán chạy nhất</h2>
                            <p className="text-slate-500 mt-2">Những sản phẩm được yêu thích nhất tuần qua</p>
                        </div>
                        <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
                            Xem tất cả <span className="material-icons">arrow_forward</span>
                        </a>
                    </div>
                    {/* Simplified Grid with sample Product Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {/* Use map if data was separated, for now hardcoding specific items to match design */}
                         <div className="group bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-4 product-card transition-all relative">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">BEST SELLER</span>
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-700 mb-4 relative">
                                <img alt="MacBook Air M2 Silver" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU5x3M7tRjEbthjMdvUA17MJ85QemQnyyb7pgzF8IB_62-zM2kIBNNe4TcksJymgC2ep20dxv1JsvAT8VSOCVOnnj4RSktXW6kf0c8bUV75WeNvvJJFHKBiVj_MlFnjvmVAIpYcyaS5vlVUMC9J5myQS7cBt9GjbVqwLJ65hknytOaEXexKZIWyBIAAmEfNzDmHGVFJ6j--oLsIRozB8j-nU8ttKfWuMW3AE77yy7HBG1aIpX6YeLjUUPrQnOKSxsejPATUoJd7yA"/>
                            </div>
                            <div className="space-y-2">
                                <div className="flex text-amber-400 text-sm">
                                    <span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span>
                                    <span className="text-slate-400 ml-1 text-xs font-medium">(128)</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white line-clamp-2 h-10">MacBook Air M2 2023 13-inch 8GB/256GB</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-primary font-bold text-lg">26.990.000đ</span>
                                    <span className="text-slate-400 text-xs line-through">29.990.000đ</span>
                                </div>
                                <button className="w-full mt-4 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white text-slate-900 dark:text-white py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                                    <span className="material-icons text-sm">shopping_cart</span> Thêm vào giỏ
                                </button>
                            </div>
                        </div>

                         <div className="group bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-4 product-card transition-all relative">
                             <div className="absolute top-4 left-4 z-10">
                                <span className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">BEST SELLER</span>
                            </div>
                             <div className="aspect-square rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-700 mb-4 relative">
                                <Link to="/product/iphone-15-pro-max">
                                 <img alt="iPhone 15 Pro Max Titanium" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYCEYMFJJle5yhFFUrfHk9FAhvAErI1cC9tVnTOpZPGlyg2gSb0Yo435x1vkiez8Dn5wrVq7buAMmuKxR4RDcLUpl-XXIXDCgXVkNPRjxDkYETUeMei5u75ljo7HyUUctXG9PK_8PDARs9UIHrdFaV4RBU4FswZVn5Pke1GAs9mIl9zUiosMhF6Gpl8i_okap9Strbg2HG7AlE8ASvELkPxo2beWZ08YmFdy2wBGLGv9IGUkns8ZSz4ckcrOAx2BRE_YLx55ktGno"/>
                                </Link>
                            </div>
                            <div className="space-y-2">
                                <div className="flex text-amber-400 text-sm">
                                    <span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span>
                                    <span className="text-slate-400 ml-1 text-xs font-medium">(256)</span>
                                </div>
                                <Link to="/product/iphone-15-pro-max">
                                    <h3 className="font-bold text-slate-900 dark:text-white line-clamp-2 h-10">iPhone 15 Pro Max 256GB - Blue Titanium</h3>
                                </Link>
                                <div className="flex items-center gap-2">
                                    <span className="text-primary font-bold text-lg">31.490.000đ</span>
                                    <span className="text-slate-400 text-xs line-through">34.990.000đ</span>
                                </div>
                                <button className="w-full mt-4 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white text-slate-900 dark:text-white py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                                    <span className="material-icons text-sm">shopping_cart</span> Thêm vào giỏ
                                </button>
                            </div>
                        </div>

                        {/* More products would go here... I'll omit for brevity but keep structure */}
                    </div>
                </div>
            </section>

             {/* Why Choose HakuTech */}
            <section className="py-20 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <span className="material-icons text-3xl text-primary">verified</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">100% Chính hãng</h4>
                                <p className="text-sm text-slate-500">Cam kết hoàn tiền 200% nếu phát hiện hàng giả, hàng nhái.</p>
                            </div>
                        </div>
                         {/* Other trust items... */}
                         <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <span className="material-icons text-3xl text-primary">security</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Bảo hành 1 đổi 1</h4>
                                <p className="text-sm text-slate-500">Chính sách bảo hành ưu việt, hỗ trợ kỹ thuật trọn đời.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <span className="material-icons text-3xl text-primary">local_shipping</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Giao hàng 2h</h4>
                                <p className="text-sm text-slate-500">Miễn phí giao hàng cho đơn hàng trên 2 triệu trong 2 giờ.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <span className="material-icons text-3xl text-primary">support_agent</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Hỗ trợ 24/7</h4>
                                <p className="text-sm text-slate-500">Đội ngũ chuyên viên tư vấn nhiệt tình mọi lúc mọi nơi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
