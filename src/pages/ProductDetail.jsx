import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);

    return (
        <main className="container mx-auto px-6 py-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                <Link className="hover:text-primary" to="/">Trang chủ</Link>
                <span className="material-icons text-xs">chevron_right</span>
                <Link className="hover:text-primary" to="/category">Smartphone</Link>
                <span className="material-icons text-xs">chevron_right</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">iPhone 15 Pro Max</span>
            </nav>

            {/* Product Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                {/* Left: Gallery Column */}
                <div className="col-span-12 lg:col-span-7 flex flex-col-reverse lg:flex-row gap-6">
                    {/* Thumbnails */}
                    <div className="flex lg:flex-col gap-3 w-full lg:w-20 overflow-x-auto lg:overflow-visible no-scrollbar">
                        <button className="w-20 h-20 rounded-lg border-2 border-primary overflow-hidden flex-shrink-0">
                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Za4AioYBlErPppiVRiAsuVROkWBTXPt7Br2Kiw0QcEFa1hnPhFtmga3I_JvEPu4ig3y2pj_ORckNkpw3BKmgHebZ_pblhqoVJfsLNxytcHxJZFYkxHvOaO-QKrvhJKgxmUwQtXg6Db7Eo_NbuAbjbJoRw4v5OVI1GN_vmGLFdikpIOUZgR9yAub06YXfvD4LykNo51x0YHPgxgtBNz57plUeexxRYLJIYDAirk3oizXb8Irp0zlZlRC5SrrXlOashX6jcO-PGaE" />
                        </button>
                        <button className="w-20 h-20 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-primary/50 transition-colors flex-shrink-0">
                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx6q-PcUz3dSmK1_Hj_zEbLNxIJlvxZPL94j6zKHYwd8yZSwMZr2ToiplFWv7UyJSymcYG63QV9MzEiW4CWWT0lFHY83EQtbEMSlrSRSP6ExiBuht_n43gup3hh4L_NjDXF2MzQNnEI6v_LtrTIFkwGt21CDrlx6WvGEEBJeAog7b8hOLNMo1p5aYHjqETy5BEVs6QMCI_APKIkNls9G01iAWTtriO7ohh7ZL7C8DmR_JVgXEb8fthV-AkDJ08ZMOhUueiqNFn2-g" />
                        </button>
                        <button className="w-20 h-20 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-primary/50 transition-colors flex-shrink-0">
                             <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPcGOQ43sQ6P3mrotEk-J-gADIwQOq5Ze1afREQc3KZGN7IpTooIGQ-yGFXvLCXSmETnZKdxdNNlU7mtEEmHaBj6b8hQvjEaWPXeXgUMs7wYgtfHzEzyuYDn9XqeouwesRDoTxXadFjUlWoxKhRs9Rw_iZVBxNtqWTIKHJeETiZnDdy8gYRgnZ7KsfGpWavxjRgngcCnJdQAQOc_cgZiuzvNGJ2P_laAFqBuP0oTqvqyJr4A1-rrH1HFhiOBnpdeD0vrZl1IDrcaM" />
                        </button>
                    </div>
                    {/* Main Image */}
                    <div className="flex-grow bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden flex items-center justify-center group relative cursor-zoom-in min-h-[400px]">
                        <img className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0te_3wdKQSQ-5wlm-bbYSKIw3RtbFuE8Wga_AjV4WqJm3YenYH32qekoe7CsFYpk7pMEf85vyP3uem-HRnCHhXZhsavtjw9oOhJ0sHbBEapFBp-JUno3wyhHSwY9HyfUBsQrdmw9AG50BVQrKsQuPyngWMBIhSs8WfK1THYUBmvY-FKOSug56_FfUlUoIaYQyxgGTx5rlLS2mKN7l0ikdC_kL0Wh1ILXIKwxsqM8tLEq-feysajF1KmBdyfr3nypCqGbr4BhfDqg" />
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                             <button className="w-10 h-10 bg-white/80 dark:bg-slate-700/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"><span className="material-icons text-slate-800 dark:text-white">zoom_in</span></button>
                        </div>
                    </div>
                </div>
                {/* Right: Info Column */}
                <div className="col-span-12 lg:col-span-5 flex flex-col">
                    <div className="mb-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary w-fit">
                        Mới nhất 2024
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">iPhone 15 Pro Max 256GB - Titan Tự Nhiên</h1>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-1">
                            <span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span><span className="material-icons text-yellow-400 text-sm">star</span>
                        </div>
                        <span className="text-sm text-slate-500 border-l border-slate-300 pl-4">128 Đánh giá</span>
                        <span className="text-sm text-slate-500 border-l border-slate-300 pl-4">3k Đã bán</span>
                    </div>
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-2xl mb-8">
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-extrabold text-primary">34.990.000đ</span>
                            <span className="text-lg text-slate-400 line-through">38.990.000đ</span>
                        </div>
                         <p className="text-sm text-primary font-medium mt-1">Tiết kiệm 4.000.000đ (11%)</p>
                    </div>
                    {/* Colors */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">Màu sắc: Titan Tự Nhiên</label>
                         <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full border-2 border-primary ring-2 ring-primary/20 bg-[#C5C1B1] relative">
                                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full"><span className="material-icons text-[10px]">check</span></span>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-[#35393B]"></button>
                            <button className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-[#2D2E30]"></button>
                             <button className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-[#F2F3EE]"></button>
                        </div>
                    </div>
                    {/* Storage */}
                     <div className="mb-8">
                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">Dung lượng bộ nhớ</label>
                        <div className="grid grid-cols-3 gap-3">
                            <button className="py-3 border-2 border-primary bg-primary/5 text-primary rounded-xl font-bold transition-all">256GB</button>
                            <button className="py-3 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:border-primary transition-all">512GB</button>
                            <button className="py-3 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:border-primary transition-all">1TB</button>
                        </div>
                    </div>
                    {/* Actions */}
                    <div className="flex gap-4 mb-8">
                        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-2">
                            <button className="w-10 h-10 flex items-center justify-center text-slate-500" onClick={() => quantity > 1 && setQuantity(quantity - 1)}><span className="material-icons">remove</span></button>
                            <input className="w-12 bg-transparent border-none text-center font-bold focus:ring-0" type="text" value={quantity} readOnly/>
                            <button className="w-10 h-10 flex items-center justify-center text-slate-500" onClick={() => setQuantity(quantity + 1)}><span className="material-icons">add</span></button>
                        </div>
                        <button className="flex-grow h-14 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2">
                             <span className="material-icons">shopping_cart</span>
                            THÊM VÀO GIỎ
                        </button>
                    </div>
                    <button className="w-full h-14 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl font-bold transition-all mb-8">
                        MUA NGAY - TRẢ GÓP 0%
                    </button>
                    {/* Trust Badges */}
                    <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800 pt-8">
                        <div className="flex flex-col items-center text-center gap-2">
                             <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                                <span className="material-icons">verified</span>
                            </div>
                            <span className="text-xs font-medium">Bảo hành 12 tháng</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                                <span className="material-icons">local_shipping</span>
                            </div>
                            <span className="text-xs font-medium">Giao hàng miễn phí</span>
                        </div>
                         <div className="flex flex-col items-center text-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                                <span className="material-icons">published_with_changes</span>
                            </div>
                            <span className="text-xs font-medium">Đổi trả 30 ngày</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section: Tabs */}
            <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-x-auto">
                    <button 
                        className={`px-8 py-5 text-sm font-bold border-b-2 whitespace-nowrap ${activeTab === 'description' ? 'text-primary border-primary' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-primary transition-colors'}`}
                        onClick={() => setActiveTab('description')}
                    >
                        MÔ TẢ SẢN PHẨM
                    </button>
                    <button 
                         className={`px-8 py-5 text-sm font-bold border-b-2 whitespace-nowrap ${activeTab === 'specs' ? 'text-primary border-primary' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-primary transition-colors'}`}
                         onClick={() => setActiveTab('specs')}
                    >
                        THÔNG SỐ KỸ THUẬT
                    </button>
                    <button 
                         className={`px-8 py-5 text-sm font-bold border-b-2 whitespace-nowrap ${activeTab === 'reviews' ? 'text-primary border-primary' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-primary transition-colors'}`}
                         onClick={() => setActiveTab('reviews')}
                    >
                        ĐÁNH GIÁ (128)
                    </button>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-10">
                     {/* Main Content Left */}
                    <div className="col-span-12 lg:col-span-8">
                    {activeTab === 'description' && (
                        <article className="prose prose-slate dark:prose-invert max-w-none">
                            <h3 className="text-xl font-bold mb-4">Mô tả iPhone 15 Pro Max</h3>
                             <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                iPhone 15 Pro Max là chiếc điện thoại iPhone mạnh mẽ nhất từ trước đến nay với khung vỏ Titan bền bỉ và trọng lượng siêu nhẹ. Nút Action mới thay thế nút gạt rung truyền thống, cho phép bạn tùy chỉnh nhanh các tác vụ yêu thích. Hệ thống camera nâng cấp vượt trội với zoom quang học 5x, giúp bạn bắt trọn mọi khoảnh khắc từ xa một cách sắc nét.
                            </p>
                            <div className="rounded-xl overflow-hidden mb-8">
                                <img className="w-full h-80 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-sAFBhsmnAzq9ZXoh-cPAmm2v7qydAM4cUiMwkXD2SokLwRPEHSYbWFKn3gm1k-6XIkbZkMwQ9Z-gn1M2OWCYCGyUfb1zMkooW4texywvwjRMEMcX77Rk0miC7693TIeNHSZkU1AucIh_vWhYlminoLrSWxIMIEeIA1oyOkwN_xza678aK8gnHhnZjbmNgncHJQS6XOlF_iSS8mTTWbXNQvjuVXe2xnop2dXRFVZ-zIVLquRO9ZLiuz4ZAQjXQTyGAfHvTES3kQY" />
                            </div>
                            <h4 className="text-lg font-bold mb-3">Chip A17 Pro - Quái thú hiệu năng</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Được trang bị chip A17 Pro tiến trình 3nm đầu tiên trong ngành, iPhone 15 Pro Max mang đến hiệu năng đồ họa cực đỉnh, hỗ trợ các tựa game console ngay trên lòng bàn tay.
                            </p>
                        </article>
                    )}
                     {activeTab === 'specs' && (
                        <div className="text-slate-600 dark:text-slate-400">
                             <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Thông số kỹ thuật chi tiết</h3>
                             {/* Simplified specs for this view */}
                             <ul className="list-disc pl-5 space-y-2">
                                 <li>Màn hình: 6.7 inch, Super Retina XDR OLED, 120Hz</li>
                                 <li>Chip: Apple A17 Pro (3nm)</li>
                                 <li>RAM: 8GB</li>
                                 <li>Bộ nhớ trong: 256GB / 512GB / 1TB</li>
                                 <li>Camera sau: 48MP (chính) + 12MP (tele 5x) + 12MP (siêu rộng) + TOF 3D LiDAR</li>
                                 <li>Camera trước: 12MP</li>
                                 <li>Pin: 4422 mAh, Sạc nhanh 20W, MagSafe 15W</li>
                             </ul>
                        </div>
                    )}
                     {activeTab === 'reviews' && (
                        <div className="text-slate-600 dark:text-slate-400">
                             <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Đánh giá từ khách hàng</h3>
                             <p>Chưa có đánh giá nào.</p>
                        </div>
                    )}
                    </div>
                     {/* Specs Column Right */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="text-lg font-bold mb-4">Thông số kỹ thuật</h3>
                            <table className="w-full text-sm">
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    <tr className="py-3 flex justify-between">
                                        <td className="text-slate-500 py-3">Màn hình</td>
                                        <td className="text-slate-900 dark:text-white font-medium py-3 text-right">6.7 inch, Super Retina XDR</td>
                                    </tr>
                                    <tr className="py-3 flex justify-between">
                                        <td className="text-slate-500 py-3">Chipset</td>
                                        <td className="text-slate-900 dark:text-white font-medium py-3 text-right">Apple A17 Pro 6-core</td>
                                    </tr>
                                    <tr className="py-3 flex justify-between">
                                        <td className="text-slate-500 py-3">RAM</td>
                                        <td className="text-slate-900 dark:text-white font-medium py-3 text-right">8 GB</td>
                                    </tr>
                                    <tr className="py-3 flex justify-between">
                                        <td className="text-slate-500 py-3">Camera sau</td>
                                        <td className="text-slate-900 dark:text-white font-medium py-3 text-right">48MP + 12MP + 12MP</td>
                                    </tr>
                                    <tr className="py-3 flex justify-between">
                                        <td className="text-slate-500 py-3">Pin</td>
                                        <td className="text-slate-900 dark:text-white font-medium py-3 text-right">4,422 mAh, Sạc 20W</td>
                                    </tr>
                                    <tr className="py-3 flex justify-between">
                                        <td className="text-slate-500 py-3">Trọng lượng</td>
                                        <td className="text-slate-900 dark:text-white font-medium py-3 text-right">221 g</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="w-full mt-6 py-2 text-primary font-bold border border-primary/20 hover:bg-primary/5 rounded-lg transition-all" onClick={()=>setActiveTab('specs')}>Xem tất cả thông số</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;
