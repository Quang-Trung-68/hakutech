import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main id="main-content">
            {/* Skip to main content link for keyboard navigation */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
            >
                Bỏ qua để xem nội dung chính
            </a>

            {/* Hero Section */}
            <section 
                className="relative overflow-hidden bg-white dark:bg-background-dark"
                aria-labelledby="hero-heading"
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center py-12 sm:py-16 lg:py-24 gap-8 lg:gap-12">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
                            <div 
                                className="inline-flex items-center px-3 py-1.5 sm:py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
                                role="status"
                                aria-label="Sản phẩm mới năm 2024"
                            >
                                New Arrival 2024
                            </div>
                            <h1 
                                id="hero-heading"
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white"
                            >
                                Công nghệ chính hãng. <br/>
                                <span className="text-primary">Giá tốt mỗi ngày.</span>
                            </h1>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
                                Khám phá hệ sinh thái thiết bị công nghệ đỉnh cao từ Apple, Samsung, Dell và hàng trăm thương hiệu hàng đầu thế giới với ưu đãi độc quyền.
                            </p>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                                <button 
                                    className="w-full sm:w-auto min-h-[44px] px-8 sm:px-10 py-3 sm:py-4 bg-primary text-white rounded-xl font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    aria-label="Mua sản phẩm ngay"
                                >
                                    Mua ngay
                                </button>
                                <button 
                                    className="w-full sm:w-auto min-h-[44px] px-8 sm:px-10 py-3 sm:py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold text-base sm:text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                                    aria-label="Xem các chương trình khuyến mãi"
                                >
                                    Xem khuyến mãi
                                </button>
                            </div>
                        </div>
                        {/* Right Visual */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-square hero-pattern rounded-2xl sm:rounded-3xl overflow-hidden relative flex items-center justify-center p-8 sm:p-12">
                                <img 
                                    alt="Laptop cao cấp và smartphone hiện đại trên bàn làm việc, thể hiện công nghệ tiên tiến" 
                                    className="z-10 w-full h-auto drop-shadow-2xl rounded-lg motion-safe:hover:scale-105 motion-safe:transition-transform motion-safe:duration-300" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkwLsf1WWmP7ILbvN00virg3nQv2DtrEmYdyVt_wRc5IKKBVhKCKC4FGVSesvNLc8gVfTULDFrGAYKMdPFIr7DONvxirPK0ZqyDApLAdRKwccQfVbOpb2lHz2RdZ38aiDS6lvCv2eMjPgh9NeCuf3ZWd4Rl1jK3PBLBte3fVuso_2TqCibc2tXqL8ItfcLpqUkg4fUN516BfRN1ZUzq1nXP8NUNZ4dFf-Dx-9N_a_lrZ7jWZ5CiW6O3kTOzuHNPh7hqCwoGw_kkjk"
                                    loading="eager"
                                />
                                {/* Abstract Shapes - decorative only, hidden from screen readers */}
                                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl motion-safe:animate-pulse" aria-hidden="true"></div>
                                <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-2xl motion-safe:animate-pulse" aria-hidden="true"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Categories */}
            <section 
                className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/50"
                aria-labelledby="categories-heading"
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 
                        id="categories-heading"
                        className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-slate-900 dark:text-white"
                    >
                        Danh mục nổi bật
                    </h2>
                    <nav aria-label="Danh mục sản phẩm">
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            {/* Category 1 */}
                            <li>
                                <Link 
                                    to="/category" 
                                    className="group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl flex flex-col items-center text-center border border-slate-100 dark:border-slate-700 hover:border-primary transition-all duration-200 product-card cursor-pointer min-h-[160px] sm:min-h-[180px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    aria-label="Xem danh mục Smartphone, có hơn 1200 sản phẩm"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center bg-primary/5 rounded-full motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-200" aria-hidden="true">
                                        <span className="material-icons text-3xl sm:text-4xl text-primary">smartphone</span>
                                    </div>
                                    <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">Smartphone</span>
                                    <span className="text-xs text-slate-500 mt-1 sm:mt-2">1.2k+ sản phẩm</span>
                                </Link>
                            </li>
                            {/* Category 2 */}
                            <li>
                                <Link 
                                    to="/category" 
                                    className="group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl flex flex-col items-center text-center border border-slate-100 dark:border-slate-700 hover:border-primary transition-all duration-200 product-card cursor-pointer min-h-[160px] sm:min-h-[180px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    aria-label="Xem danh mục Laptop, có hơn 800 sản phẩm"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center bg-primary/5 rounded-full motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-200" aria-hidden="true">
                                        <span className="material-icons text-3xl sm:text-4xl text-primary">laptop</span>
                                    </div>
                                    <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">Laptop</span>
                                    <span className="text-xs text-slate-500 mt-1 sm:mt-2">800+ sản phẩm</span>
                                </Link>
                            </li>
                            {/* Category 3 */}
                            <li>
                                <Link 
                                    to="/category" 
                                    className="group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl flex flex-col items-center text-center border border-slate-100 dark:border-slate-700 hover:border-primary transition-all duration-200 product-card cursor-pointer min-h-[160px] sm:min-h-[180px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    aria-label="Xem danh mục Phụ kiện, có hơn 3000 sản phẩm"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center bg-primary/5 rounded-full motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-200" aria-hidden="true">
                                        <span className="material-icons text-3xl sm:text-4xl text-primary">headphones</span>
                                    </div>
                                    <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">Phụ kiện</span>
                                    <span className="text-xs text-slate-500 mt-1 sm:mt-2">3k+ sản phẩm</span>
                                </Link>
                            </li>
                            {/* Category 4 */}
                            <li>
                                <Link 
                                    to="/category" 
                                    className="group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl flex flex-col items-center text-center border border-slate-100 dark:border-slate-700 hover:border-primary transition-all duration-200 product-card cursor-pointer min-h-[160px] sm:min-h-[180px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    aria-label="Xem danh mục Thiết bị mạng, có hơn 450 sản phẩm"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center bg-primary/5 rounded-full motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-200" aria-hidden="true">
                                        <span className="material-icons text-3xl sm:text-4xl text-primary">router</span>
                                    </div>
                                    <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">Thiết bị mạng</span>
                                    <span className="text-xs text-slate-500 mt-1 sm:mt-2">450+ sản phẩm</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            {/* Best Sellers */}
            <section 
                className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-background-dark"
                aria-labelledby="bestsellers-heading"
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4">
                        <div>
                            <h2 
                                id="bestsellers-heading"
                                className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
                            >
                                Bán chạy nhất
                            </h2>
                            <p className="text-sm sm:text-base text-slate-500 mt-1 sm:mt-2">Những sản phẩm được yêu thích nhất tuần qua</p>
                        </div>
                        <Link 
                            to="/products" 
                            className="text-primary font-bold flex items-center gap-2 hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:rounded min-h-[44px]"
                            aria-label="Xem tất cả sản phẩm bán chạy"
                        >
                            Xem tất cả <span className="material-icons" aria-hidden="true">arrow_forward</span>
                        </Link>
                    </div>
                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                        {/* Product Card 1 */}
                        <article className="group bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-4 product-card motion-safe:transition-all motion-safe:duration-200 hover:shadow-lg relative">
                            <div className="absolute top-3 left-3 z-10">
                                <span 
                                    className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm"
                                    role="status"
                                    aria-label="Sản phẩm bán chạy nhất"
                                >
                                    BEST SELLER
                                </span>
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-700 mb-4 relative">
                                <img 
                                    alt="MacBook Air M2 màu bạc, phiên bản 2023, màn hình 13 inch, RAM 8GB và ổ cứng 256GB" 
                                    className="w-full h-full object-cover motion-safe:group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-300" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU5x3M7tRjEbthjMdvUA17MJ85QemQnyyb7pgzF8IB_62-zM2kIBNNe4TcksJymgC2ep20dxv1JsvAT8VSOCVOnnj4RSktXW6kf0c8bUV75WeNvvJJFHKBiVj_MlFnjvmVAIpYcyaS5vlVUMC9J5myQS7cBt9GjbVqwLJ65hknytOaEXexKZIWyBIAAmEfNzDmHGVFJ6j--oLsIRozB8j-nU8ttKfWuMW3AE77yy7HBG1aIpX6YeLjUUPrQnOKSxsejPATUoJd7yA"
                                    loading="lazy"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center text-amber-400 text-sm" role="img" aria-label="Đánh giá 5 trên 5 sao từ 128 người dùng">
                                    <span className="material-icons text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-sm" aria-hidden="true">star</span>
                                    <span className="text-slate-400 ml-1 text-xs font-medium">(128)</span>
                                </div>
                                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-2 min-h-[2.5rem]">
                                    MacBook Air M2 2023 13-inch 8GB/256GB
                                </h3>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-primary font-bold text-base sm:text-lg">26.990.000đ</span>
                                    <span className="text-slate-400 text-xs line-through">29.990.000đ</span>
                                </div>
                                <button 
                                    className="w-full min-h-[44px] mt-3 sm:mt-4 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white text-slate-900 dark:text-white py-2.5 sm:py-2 rounded-lg font-semibold text-sm motion-safe:transition-colors motion-safe:duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    aria-label="Thêm MacBook Air M2 2023 vào giỏ hàng"
                                >
                                    <span className="material-icons text-sm" aria-hidden="true">shopping_cart</span> Thêm vào giỏ
                                </button>
                            </div>
                        </article>

                        {/* Product Card 2 */}
                        <article className="group bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-4 product-card motion-safe:transition-all motion-safe:duration-200 hover:shadow-lg relative">
                            <div className="absolute top-3 left-3 z-10">
                                <span 
                                    className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm"
                                    role="status"
                                    aria-label="Sản phẩm bán chạy nhất"
                                >
                                    BEST SELLER
                                </span>
                            </div>
                            <Link 
                                to="/product/iphone-15-pro-max" 
                                className="block focus:outline-none focus:ring-2 focus:ring-primary focus:rounded-lg"
                                aria-label="Xem chi tiết iPhone 15 Pro Max 256GB Blue Titanium"
                            >
                                <div className="aspect-square rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-700 mb-4 relative">
                                    <img 
                                        alt="iPhone 15 Pro Max 256GB màu Blue Titanium, vỏ titan cao cấp" 
                                        className="w-full h-full object-cover motion-safe:group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-300" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYCEYMFJJle5yhFFUrfHk9FAhvAErI1cC9tVnTOpZPGlyg2gSb0Yo435x1vkiez8Dn5wrVq7buAMmuKxR4RDcLUpl-XXIXDCgXVkNPRjxDkYETUeMei5u75ljo7HyUUctXG9PK_8PDARs9UIHrdFaV4RBU4FswZVn5Pke1GAs9mIl9zUiosMhF6Gpl8i_okap9Strbg2HG7AlE8ASvELkPxo2beWZ08YmFdy2wBGLGv9IGUkns8ZSz4ckcrOAx2BRE_YLx55ktGno"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center text-amber-400 text-sm" role="img" aria-label="Đánh giá 5 trên 5 sao từ 256 người dùng">
                                        <span className="material-icons text-sm" aria-hidden="true">star</span>
                                        <span className="material-icons text-sm" aria-hidden="true">star</span>
                                        <span className="material-icons text-sm" aria-hidden="true">star</span>
                                        <span className="material-icons text-sm" aria-hidden="true">star</span>
                                        <span className="material-icons text-sm" aria-hidden="true">star</span>
                                        <span className="text-slate-400 ml-1 text-xs font-medium">(256)</span>
                                    </div>
                                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-2 min-h-[2.5rem]">
                                        iPhone 15 Pro Max 256GB - Blue Titanium
                                    </h3>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-primary font-bold text-base sm:text-lg">31.490.000đ</span>
                                        <span className="text-slate-400 text-xs line-through">34.990.000đ</span>
                                    </div>
                                </div>
                            </Link>
                            <button 
                                className="w-full min-h-[44px] mt-3 sm:mt-4 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white text-slate-900 dark:text-white py-2.5 sm:py-2 rounded-lg font-semibold text-sm motion-safe:transition-colors motion-safe:duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Thêm iPhone 15 Pro Max vào giỏ hàng"
                            >
                                <span className="material-icons text-sm" aria-hidden="true">shopping_cart</span> Thêm vào giỏ
                            </button>
                        </article>
                    </div>
                </div>
            </section>

            {/* Why Choose HakuTech */}
            <section 
                className="py-12 sm:py-16 lg:py-20 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50"
                aria-labelledby="benefits-heading"
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 
                        id="benefits-heading"
                        className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 sm:mb-12 text-center"
                    >
                        Tại sao chọn HakuTech?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                        {/* Benefit 1 */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center" aria-hidden="true">
                                <span className="material-icons text-2xl sm:text-3xl text-primary">verified</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-base sm:text-lg mb-1 text-slate-900 dark:text-white">100% Chính hãng</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Cam kết hoàn tiền 200% nếu phát hiện hàng giả, hàng nhái.</p>
                            </div>
                        </div>
                        {/* Benefit 2 */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center" aria-hidden="true">
                                <span className="material-icons text-2xl sm:text-3xl text-primary">security</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-base sm:text-lg mb-1 text-slate-900 dark:text-white">Bảo hành 1 đổi 1</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Chính sách bảo hành ưu việt, hỗ trợ kỹ thuật trọn đời.</p>
                            </div>
                        </div>
                        {/* Benefit 3 */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center" aria-hidden="true">
                                <span className="material-icons text-2xl sm:text-3xl text-primary">local_shipping</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-base sm:text-lg mb-1 text-slate-900 dark:text-white">Giao hàng 2h</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Miễn phí giao hàng cho đơn hàng trên 2 triệu trong 2 giờ.</p>
                            </div>
                        </div>
                        {/* Benefit 4 */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center" aria-hidden="true">
                                <span className="material-icons text-2xl sm:text-3xl text-primary">support_agent</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-base sm:text-lg mb-1 text-slate-900 dark:text-white">Hỗ trợ 24/7</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Đội ngũ chuyên viên tư vấn nhiệt tình mọi lúc mọi nơi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
