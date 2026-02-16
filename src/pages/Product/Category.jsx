import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <main id="main-content" className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            {/* Skip to main content link for keyboard navigation */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
            >
                Bỏ qua để xem nội dung chính
            </a>

            {/* Breadcrumb */}
            <nav 
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4 sm:mb-6"
                aria-label="Đường dẫn"
            >
                <Link 
                    className="hover:text-primary motion-safe:transition-colors motion-safe:duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:rounded" 
                    to="/"
                >
                    Trang chủ
                </Link>
                <span className="material-icons text-xs" aria-hidden="true">chevron_right</span>
                <span className="text-slate-900 dark:text-slate-200 font-medium" aria-current="page">Smartphone</span>
            </nav>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Left Sidebar Filters */}
                <aside 
                    className="w-full lg:w-[280px] flex-shrink-0 space-y-4 sm:space-y-6"
                    aria-label="Bộ lọc sản phẩm"
                >
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800">
                        <h2 className="font-bold text-base sm:text-lg mb-4 flex items-center justify-between text-slate-900 dark:text-white">
                            Bộ lọc
                            <span className="material-icons text-slate-400" aria-hidden="true">filter_list</span>
                        </h2>
                        {/* Brands */}
                        <fieldset className="mb-6 sm:mb-8">
                            <legend>
                                <button 
                                    className="flex items-center justify-between w-full font-semibold text-sm mb-4 text-slate-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:rounded min-h-[44px]"
                                    aria-expanded="true"
                                    aria-controls="brand-filter"
                                >
                                    Thương hiệu
                                    <span className="material-icons text-xs" aria-hidden="true">expand_less</span>
                                </button>
                            </legend>
                            <div id="brand-filter" className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
                                    <input 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo thương hiệu Apple"
                                    />
                                    <span className="text-sm group-hover:text-primary motion-safe:transition-colors motion-safe:duration-200">Apple</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
                                    <input 
                                        defaultChecked 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo thương hiệu Samsung"
                                    />
                                    <span className="text-sm group-hover:text-primary motion-safe:transition-colors motion-safe:duration-200">Samsung</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
                                    <input 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo thương hiệu Xiaomi"
                                    />
                                    <span className="text-sm group-hover:text-primary motion-safe:transition-colors motion-safe:duration-200">Xiaomi</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
                                    <input 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo thương hiệu Oppo"
                                    />
                                    <span className="text-sm group-hover:text-primary motion-safe:transition-colors motion-safe:duration-200">Oppo</span>
                                </label>
                            </div>
                        </fieldset>
                        {/* Price Range */}
                        <fieldset className="mb-6 sm:mb-8">
                            <legend>
                                <button 
                                    className="flex items-center justify-between w-full font-semibold text-sm mb-4 text-slate-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:rounded min-h-[44px]"
                                    aria-expanded="true"
                                    aria-controls="price-filter"
                                >
                                    Khoảng giá
                                    <span className="material-icons text-xs" aria-hidden="true">expand_less</span>
                                </button>
                            </legend>
                            <div id="price-filter" className="px-2">
                                <div className="h-1 bg-slate-200 dark:bg-slate-700 relative rounded-full mb-6" role="slider" aria-label="Thanh trượt khoảng giá">
                                    <div className="absolute left-0 right-1/4 h-full bg-primary rounded-full" aria-hidden="true"></div>
                                    <div 
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer focus:ring-2 focus:ring-primary" 
                                        role="button"
                                        tabIndex="0"
                                        aria-label="Giá tối thiểu"
                                    ></div>
                                    <div 
                                        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer focus:ring-2 focus:ring-primary" 
                                        role="button"
                                        tabIndex="0"
                                        aria-label="Giá tối đa"
                                    ></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="sr-only" htmlFor="price-min">Giá tối thiểu</label>
                                    <input 
                                        id="price-min"
                                        className="w-full text-xs py-2 sm:py-1.5 px-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-center focus:ring-2 focus:ring-primary focus:outline-none" 
                                        type="text" 
                                        defaultValue="0đ"
                                        aria-label="Giá tối thiểu"
                                    />
                                    <span className="text-slate-400" aria-hidden="true">-</span>
                                    <label className="sr-only" htmlFor="price-max">Giá tối đa</label>
                                    <input 
                                        id="price-max"
                                        className="w-full text-xs py-2 sm:py-1.5 px-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-center focus:ring-2 focus:ring-primary focus:outline-none" 
                                        type="text" 
                                        defaultValue="50.000.000đ"
                                        aria-label="Giá tối đa"
                                    />
                                </div>
                            </div>
                        </fieldset>
                        {/* RAM */}
                        <fieldset className="mb-6 sm:mb-8">
                            <legend>
                                <button 
                                    className="flex items-center justify-between w-full font-semibold text-sm mb-4 text-slate-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:rounded min-h-[44px]"
                                    aria-expanded="true"
                                    aria-controls="ram-filter"
                                >
                                    Dung lượng RAM
                                    <span className="material-icons text-xs" aria-hidden="true">expand_less</span>
                                </button>
                            </legend>
                            <div id="ram-filter" className="grid grid-cols-2 gap-2">
                                <label className="flex items-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded cursor-pointer hover:border-primary motion-safe:transition-all min-h-[44px]">
                                    <input 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo RAM 4GB"
                                    />
                                    <span className="text-xs">4GB</span>
                                </label>
                                <label className="flex items-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded cursor-pointer hover:border-primary motion-safe:transition-all min-h-[44px]">
                                    <input 
                                        defaultChecked 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo RAM 8GB"
                                    />
                                    <span className="text-xs">8GB</span>
                                </label>
                                <label className="flex items-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded cursor-pointer hover:border-primary motion-safe:transition-all min-h-[44px]">
                                    <input 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo RAM 16GB"
                                    />
                                    <span className="text-xs">16GB</span>
                                </label>
                                <label className="flex items-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded cursor-pointer hover:border-primary motion-safe:transition-all min-h-[44px]">
                                    <input 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo RAM 24GB"
                                    />
                                    <span className="text-xs">24GB</span>
                                </label>
                            </div>
                        </fieldset>
                        {/* Storage */}
                        <fieldset className="mb-2">
                            <legend>
                                <button 
                                    className="flex items-center justify-between w-full font-semibold text-sm mb-4 text-slate-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:rounded min-h-[44px]"
                                    aria-expanded="true"
                                    aria-controls="storage-filter"
                                >
                                    Bộ nhớ trong
                                    <span className="material-icons text-xs" aria-hidden="true">expand_less</span>
                                </button>
                            </legend>
                            <div id="storage-filter" className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
                                    <input 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo bộ nhớ 128GB"
                                    />
                                    <span className="text-sm group-hover:text-primary motion-safe:transition-colors motion-safe:duration-200">128GB</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
                                    <input 
                                        defaultChecked 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo bộ nhớ 256GB"
                                    />
                                    <span className="text-sm group-hover:text-primary motion-safe:transition-colors motion-safe:duration-200">256GB</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
                                    <input 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo bộ nhớ 512GB"
                                    />
                                    <span className="text-sm group-hover:text-primary motion-safe:transition-colors motion-safe:duration-200">512GB</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
                                    <input 
                                        className="w-5 h-5 rounded text-primary focus:ring-2 focus:ring-primary border-slate-300 cursor-pointer" 
                                        type="checkbox"
                                        aria-label="Lọc theo bộ nhớ 1TB"
                                    />
                                    <span className="text-sm group-hover:text-primary motion-safe:transition-colors motion-safe:duration-200">1TB</span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </aside>
                {/* Main Product Area */}
                <div className="flex-1">
                    {/* Top Title & Sort */}
                    <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 id="category-title" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Điện thoại thông minh</h1>
                            <p className="text-sm text-slate-500" aria-live="polite">Hiển thị 1 - 12 trên 148 sản phẩm</p>
                        </div>
                        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
                            <label htmlFor="sort-select" className="text-sm text-slate-500 whitespace-nowrap">Sắp xếp theo:</label>
                            <select 
                                id="sort-select"
                                className="border-none bg-transparent text-sm font-semibold focus:ring-0 cursor-pointer pr-8 text-slate-900 dark:text-white"
                                aria-label="Sắp xếp sản phẩm theo tiêu chí"
                            >
                                <option>Phổ biến nhất</option>
                                <option>Giá thấp đến cao</option>
                                <option>Giá cao đến thấp</option>
                                <option>Mới nhất</option>
                            </select>
                        </div>
                    </div>
                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" aria-labelledby="category-title">
                        {/* Product 1 */}
                        <article className="product-card group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 motion-safe:hover:scale-[1.02]">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded" role="status">GIẢM 10%</span>
                            </div>
                            <div className="relative mb-4 aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden">
                                <Link to="/product/iphone-15-pro-max" className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-lg" aria-label="Xem chi tiết iPhone 15 Pro Max 256GB - Chính hãng VN/A">
                                    <img 
                                        alt="iPhone 15 Pro Max 256GB - Chính hãng VN/A" 
                                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoFTddTO_E4S5mQP0U0i8mW2cHjffhr2FiAMlv1ErXMxcaFMCn3HBEIw-osaf9xHDgJp-FKVOO0zI6T_TElfFtwKSJwZV4U7nzjqvqCx2QPirQl7mqHsSpOUXWo0s23rjBtCGPdDAxLny2qFfGYy0iMU6bARNUmNMw5DmcHq7TZ5htFt6gMKrhJeI6Y6_3epmegDs2TrWGVVr8OlP66Oo2-OwQc41o90y-zwg6lkqP31U3hxN2UcQ56bi9foTTe1gNDlcaxwkuN78"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <div className="space-y-2">
                                <Link to="/product/iphone-15-pro-max" className="block focus:outline-none focus:ring-2 focus:ring-primary rounded">
                                    <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors text-slate-900 dark:text-white">iPhone 15 Pro Max 256GB - Chính hãng VN/A</h3>
                                </Link>
                                <div className="flex items-center gap-1" role="img" aria-label="Đánh giá 5 trên 5 sao">
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="text-[11px] text-slate-400 ml-1" aria-label="124 đánh giá">(124)</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold text-lg">34.990.000đ</span>
                                    <span className="text-slate-400 text-xs line-through" aria-label="Giá gốc 38.900.000đ">38.900.000đ</span>
                                </div>
                            </div>
                            <button className="w-full mt-4 bg-primary text-white py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 lg:opacity-0 group-hover:opacity-100 lg:translate-y-2 group-hover:translate-y-0 transition-all duration-300 focus:opacity-100 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary min-h-[44px] cursor-pointer" aria-label="Thêm iPhone 15 Pro Max vào giỏ hàng">
                                <span className="material-icons text-sm" aria-hidden="true">shopping_cart</span>
                                Thêm vào giỏ
                            </button>
                        </article>

                         {/* Product 2 */}
                        <article className="product-card group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 motion-safe:hover:scale-[1.02]">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase" role="status">Mới</span>
                            </div>
                            <div className="relative mb-4 aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden">
                                <Link to="/product/samsung-galaxy-s24-ultra" className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-lg" aria-label="Xem chi tiết Samsung Galaxy S24 Ultra 5G 12GB/256GB">
                                    <img 
                                        alt="Samsung Galaxy S24 Ultra 5G 12GB/256GB" 
                                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMGGLX49EPmQx8qsGlqKckelZCCtPhMLAxYKyvt28We7Fod6h9gh4sofUjCIjL0BXKijDyXiWgncenxy3rkR53hR02upwhvej-O1GVsiHA-B6PZKavv0t_N9XFoTu0jXlVWiaDUJ61I7N69w6xSt2lhpVAuf56GFyiSStbds-RxeyqTt8Z5j6ROTQ_MfyBebI8EmLFPV4a7kEvXx8GKdH7tqstofD8Iz0z_0X-g6aJubJDCEZPnIwvD-sF3kcDQexhylwIBKNDnDE"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <div className="space-y-2">
                                <Link to="/product/samsung-galaxy-s24-ultra" className="block focus:outline-none focus:ring-2 focus:ring-primary rounded">
                                    <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors text-slate-900 dark:text-white">Samsung Galaxy S24 Ultra 5G 12GB/256GB</h3>
                                </Link>
                                <div className="flex items-center gap-1" role="img" aria-label="Đánh giá 4 trên 5 sao">
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-slate-200 text-sm" aria-hidden="true">star</span>
                                    <span className="text-[11px] text-slate-400 ml-1" aria-label="89 đánh giá">(89)</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold text-lg">29.490.000đ</span>
                                    <span className="text-slate-400 text-xs line-through" aria-label="Giá gốc 33.990.000đ">33.990.000đ</span>
                                </div>
                            </div>
                             <button className="w-full mt-4 bg-primary text-white py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 lg:opacity-0 group-hover:opacity-100 lg:translate-y-2 group-hover:translate-y-0 transition-all duration-300 focus:opacity-100 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary min-h-[44px] cursor-pointer" aria-label="Thêm Samsung Galaxy S24 Ultra vào giỏ hàng">
                                <span className="material-icons text-sm" aria-hidden="true">shopping_cart</span>
                                Thêm vào giỏ
                            </button>
                        </article>
                        
                         {/* Product 3 */}
                        <article className="product-card group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 motion-safe:hover:scale-[1.02]">
                            <div className="relative mb-4 aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden">
                                <Link to="/product/google-pixel-8-pro" className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-lg" aria-label="Xem chi tiết Google Pixel 8 Pro 5G 12GB/128GB Quốc Tế">
                                    <img 
                                        alt="Google Pixel 8 Pro 5G 12GB/128GB Quốc Tế" 
                                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAERS1NCI1-5SZ4eBP7cGLaEJxfbl5pBdW0om894ia5GFDZ4VgnEkIk1p_QiGNbyq8-8IeuTFuXusEqLajLRaRZYMTfHmuiVan-thboU536UbJ-lMmJwScT2Kxr_sscKaWUUbW0bYAUqjHYRbvaB9bH-dCWb6wTNOawlmNicUB48zrtXvJ0y1MkbFss6TklDwALuD4BphhjY45Rxpfo_P2gdNO1GBkNetgvL0aS6nRDNtvPuqDAsYbgKEMxfPE2zrqP5H556qtq1z4"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <div className="space-y-2">
                                <Link to="/product/google-pixel-8-pro" className="block focus:outline-none focus:ring-2 focus:ring-primary rounded">
                                    <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors text-slate-900 dark:text-white">Google Pixel 8 Pro 5G 12GB/128GB Quốc Tế</h3>
                                </Link>
                                <div className="flex items-center gap-1" role="img" aria-label="Đánh giá 4.5 trên 5 sao">
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star_half</span>
                                    <span className="text-[11px] text-slate-400 ml-1" aria-label="45 đánh giá">(45)</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold text-lg">21.500.000đ</span>
                                </div>
                            </div>
                             <button className="w-full mt-4 bg-primary text-white py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 lg:opacity-0 group-hover:opacity-100 lg:translate-y-2 group-hover:translate-y-0 transition-all duration-300 focus:opacity-100 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary min-h-[44px] cursor-pointer" aria-label="Thêm Google Pixel 8 Pro vào giỏ hàng">
                                <span className="material-icons text-sm" aria-hidden="true">shopping_cart</span>
                                Thêm vào giỏ
                            </button>
                        </article>

                         {/* Product 4 */}
                        <article className="product-card group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 motion-safe:hover:scale-[1.02]">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded" role="status">HOT SALE</span>
                            </div>
                            <div className="relative mb-4 aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden">
                                <Link to="/product/xiaomi-14-ultra" className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-lg" aria-label="Xem chi tiết Xiaomi 14 Ultra 16GB/512GB Leica Optics">
                                    <img 
                                        alt="Xiaomi 14 Ultra 16GB/512GB Leica Optics" 
                                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuArst6P33D3JYgGX_3N1_qR4MK6aSjNRY6vORyJaucUHkfnHqFratnwEjCy3oq9mb0a3xT9WwrRpS9PHOHpjqF4E9cEEARZncqaIdXDlFZoH5W3O6t2kHq5nN8stWz5sCZ-qenkA1YxiIAb1UicWaZAhUatVIezEh5NTt5Z93wKYbXzpJDDXRrzY4Ro95cbMPyWnwtaPr9xbGYP7vkbasx0JP7Pr40zIDMqi0rb9Z1_QQ2p6QVdoEIk_UYJZ47xEXVPBHyJlIbhORw"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <div className="space-y-2">
                                <Link to="/product/xiaomi-14-ultra" className="block focus:outline-none focus:ring-2 focus:ring-primary rounded">
                                    <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors text-slate-900 dark:text-white">Xiaomi 14 Ultra 16GB/512GB Leica Optics</h3>
                                </Link>
                                <div className="flex items-center gap-1" role="img" aria-label="Đánh giá 5 trên 5 sao">
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="material-icons text-yellow-400 text-sm" aria-hidden="true">star</span>
                                    <span className="text-[11px] text-slate-400 ml-1" aria-label="210 đánh giá">(210)</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold text-lg">26.990.000đ</span>
                                    <span className="text-slate-400 text-xs line-through" aria-label="Giá gốc 31.990.000đ">31.990.000đ</span>
                                </div>
                            </div>
                             <button className="w-full mt-4 bg-primary text-white py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 lg:opacity-0 group-hover:opacity-100 lg:translate-y-2 group-hover:translate-y-0 transition-all duration-300 focus:opacity-100 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary min-h-[44px] cursor-pointer" aria-label="Thêm Xiaomi 14 Ultra vào giỏ hàng">
                                <span className="material-icons text-sm" aria-hidden="true">shopping_cart</span>
                                Thêm vào giỏ
                            </button>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Category;
