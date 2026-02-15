import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <main className="container mx-auto px-6 py-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                <Link className="hover:text-primary" to="/">Trang chủ</Link>
                <span className="material-icons text-xs">chevron_right</span>
                <span className="text-slate-900 dark:text-slate-200 font-medium">Smartphone</span>
            </nav>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Sidebar Filters */}
                <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-6">
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-lg mb-4 flex items-center justify-between">
                            Bộ lọc
                            <span className="material-icons text-slate-400">filter_list</span>
                        </h3>
                        {/* Brands */}
                        <div className="mb-8">
                            <button className="flex items-center justify-between w-full font-semibold text-sm mb-4">
                                Thương hiệu
                                <span className="material-icons text-xs">expand_less</span>
                            </button>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-sm group-hover:text-primary transition-colors">Apple</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-sm group-hover:text-primary transition-colors">Samsung</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-sm group-hover:text-primary transition-colors">Xiaomi</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-sm group-hover:text-primary transition-colors">Oppo</span>
                                </label>
                            </div>
                        </div>
                        {/* Price Range */}
                        <div className="mb-8">
                            <button className="flex items-center justify-between w-full font-semibold text-sm mb-4">
                                Khoảng giá
                                <span className="material-icons text-xs">expand_less</span>
                            </button>
                            <div className="px-2">
                                <div className="h-1 bg-slate-200 dark:bg-slate-700 relative rounded-full mb-6">
                                    <div className="absolute left-0 right-1/4 h-full bg-primary rounded-full"></div>
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer"></div>
                                    <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer"></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="w-full text-xs py-1.5 px-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded text-center" type="text" defaultValue="0đ"/>
                                    <span className="text-slate-400">-</span>
                                    <input className="w-full text-xs py-1.5 px-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded text-center" type="text" defaultValue="50.000.000đ"/>
                                </div>
                            </div>
                        </div>
                        {/* RAM */}
                        <div className="mb-8">
                            <button className="flex items-center justify-between w-full font-semibold text-sm mb-4">
                                Dung lượng RAM
                                <span className="material-icons text-xs">expand_less</span>
                            </button>
                            <div className="grid grid-cols-2 gap-2">
                                <label className="flex items-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded cursor-pointer hover:border-primary transition-all">
                                    <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-xs">4GB</span>
                                </label>
                                <label className="flex items-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded cursor-pointer hover:border-primary transition-all">
                                    <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-xs">8GB</span>
                                </label>
                                <label className="flex items-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded cursor-pointer hover:border-primary transition-all">
                                    <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-xs">16GB</span>
                                </label>
                                <label className="flex items-center gap-2 p-2 border border-slate-200 dark:border-slate-700 rounded cursor-pointer hover:border-primary transition-all">
                                    <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-xs">24GB</span>
                                </label>
                            </div>
                        </div>
                        {/* Storage */}
                        <div className="mb-2">
                            <button className="flex items-center justify-between w-full font-semibold text-sm mb-4">
                                Bộ nhớ trong
                                <span className="material-icons text-xs">expand_less</span>
                            </button>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-sm group-hover:text-primary transition-colors">128GB</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-sm group-hover:text-primary transition-colors">256GB</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-sm group-hover:text-primary transition-colors">512GB</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/>
                                    <span className="text-sm group-hover:text-primary transition-colors">1TB</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>
                {/* Main Product Area */}
                <div className="flex-1">
                    {/* Top Title & Sort */}
                    <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Điện thoại thông minh</h1>
                            <p className="text-sm text-slate-500">Hiển thị 1 - 12 trên 148 sản phẩm</p>
                        </div>
                        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
                            <span className="text-sm text-slate-500 whitespace-nowrap">Sắp xếp theo:</span>
                            <select className="border-none bg-transparent text-sm font-semibold focus:ring-0 cursor-pointer pr-8">
                                <option>Phổ biến nhất</option>
                                <option>Giá thấp đến cao</option>
                                <option>Giá cao đến thấp</option>
                                <option>Mới nhất</option>
                            </select>
                        </div>
                    </div>
                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {/* Product 1 */}
                        <div className="product-card group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">GIẢM 10%</span>
                            </div>
                            <div className="relative mb-4 aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden">
                                <Link to="/product/iphone-15-pro-max">
                                    <img alt="iPhone 15 Pro Max" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoFTddTO_E4S5mQP0U0i8mW2cHjffhr2FiAMlv1ErXMxcaFMCn3HBEIw-osaf9xHDgJp-FKVOO0zI6T_TElfFtwKSJwZV4U7nzjqvqCx2QPirQl7mqHsSpOUXWo0s23rjBtCGPdDAxLny2qFfGYy0iMU6bARNUmNMw5DmcHq7TZ5htFt6gMKrhJeI6Y6_3epmegDs2TrWGVVr8OlP66Oo2-OwQc41o90y-zwg6lkqP31U3hxN2UcQ56bi9foTTe1gNDlcaxwkuN78"/>
                                </Link>
                            </div>
                            <div className="space-y-2">
                                <Link to="/product/iphone-15-pro-max">
                                    <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">iPhone 15 Pro Max 256GB - Chính hãng VN/A</h3>
                                </Link>
                                <div className="flex items-center gap-1">
                                    <span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span>
                                    <span className="text-[11px] text-slate-400 ml-1">(124)</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold text-lg">34.990.000đ</span>
                                    <span className="text-slate-400 text-xs line-through">38.900.000đ</span>
                                </div>
                            </div>
                            <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg text-sm font-semibold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <span className="material-icons text-sm">shopping_cart</span>
                                Thêm vào giỏ
                            </button>
                        </div>

                         {/* Product 2 */}
                        <div className="product-card group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Mới</span>
                            </div>
                            <div className="relative mb-4 aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden">
                                <img alt="Samsung Galaxy S24 Ultra" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMGGLX49EPmQx8qsGlqKckelZCCtPhMLAxYKyvt28We7Fod6h9gh4sofUjCIjL0BXKijDyXiWgncenxy3rkR53hR02upwhvej-O1GVsiHA-B6PZKavv0t_N9XFoTu0jXlVWiaDUJ61I7N69w6xSt2lhpVAuf56GFyiSStbds-RxeyqTt8Z5j6ROTQ_MfyBebI8EmLFPV4a7kEvXx8GKdH7tqstofD8Iz0z_0X-g6aJubJDCEZPnIwvD-sF3kcDQexhylwIBKNDnDE"/>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">Samsung Galaxy S24 Ultra 5G 12GB/256GB</h3>
                                <div className="flex items-center gap-1">
                                    <span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-slate-200 text-sm">star</span>
                                    <span className="text-[11px] text-slate-400 ml-1">(89)</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold text-lg">29.490.000đ</span>
                                    <span className="text-slate-400 text-xs line-through">33.990.000đ</span>
                                </div>
                            </div>
                             <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg text-sm font-semibold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <span className="material-icons text-sm">shopping_cart</span>
                                Thêm vào giỏ
                            </button>
                        </div>
                        
                         {/* Product 3 */}
                        <div className="product-card group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="relative mb-4 aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden">
                                <img alt="Google Pixel 8 Pro" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAERS1NCI1-5SZ4eBP7cGLaEJxfbl5pBdW0om894ia5GFDZ4VgnEkIk1p_QiGNbyq8-8IeuTFuXusEqLajLRaRZYMTfHmuiVan-thboU536UbJ-lMmJwScT2Kxr_sscKaWUUbW0bYAUqjHYRbvaB9bH-dCWb6wTNOawlmNicUB48zrtXvJ0y1MkbFss6TklDwALuD4BphhjY45Rxpfo_P2gdNO1GBkNetgvL0aS6nRDNtvPuqDAsYbgKEMxfPE2zrqP5H556qtq1z4"/>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">Google Pixel 8 Pro 5G 12GB/128GB Quốc Tế</h3>
                                <div className="flex items-center gap-1">
                                    <span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star_half</span>
                                    <span className="text-[11px] text-slate-400 ml-1">(45)</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold text-lg">21.500.000đ</span>
                                </div>
                            </div>
                             <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg text-sm font-semibold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <span className="material-icons text-sm">shopping_cart</span>
                                Thêm vào giỏ
                            </button>
                        </div>

                         {/* Product 4 */}
                        <div className="product-card group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">HOT SALE</span>
                            </div>
                            <div className="relative mb-4 aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden">
                                <img alt="Xiaomi 14 Ultra" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArst6P33D3JYgGX_3N1_qR4MK6aSjNRY6vORyJaucUHkfnHqFratnwEjCy3oq9mb0a3xT9WwrRpS9PHOHpjqF4E9cEEARZncqaIdXDlFZoH5W3O6t2kHq5nN8stWz5sCZ-qenkA1YxiIAb1UicWaZAhUatVIezEh5NTt5Z93wKYbXzpJDDXRrzY4Ro95cbMPyWnwtaPr9xbGYP7vkbasx0JP7Pr40zIDMqi0rb9Z1_QQ2p6QVdoEIk_UYJZ47xEXVPBHyJlIbhORw"/>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">Xiaomi 14 Ultra 16GB/512GB Leica Optics</h3>
                                <div className="flex items-center gap-1">
                                    <span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span>
                                    <span className="text-[11px] text-slate-400 ml-1">(210)</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold text-lg">26.990.000đ</span>
                                    <span className="text-slate-400 text-xs line-through">31.990.000đ</span>
                                </div>
                            </div>
                             <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg text-sm font-semibold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <span className="material-icons text-sm">shopping_cart</span>
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Category;
