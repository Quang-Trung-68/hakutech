import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-inter selection:bg-primary/30">
            {/* Skip Link */}
            <a href="#main-checkout" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg">
                Bỏ qua để đi đến nội dung thanh toán
            </a>

            {/* Simple Premium Header */}
            <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                    <Link to="/" className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary rounded px-2" aria-label="HakuTech - Về trang chủ">
                        <span className="material-icons text-primary text-3xl transition-transform motion-safe:group-hover:rotate-12">terminal</span>
                        HakuTech
                    </Link>
                    <div className="hidden sm:flex items-center gap-4 text-sm text-slate-500 font-medium">
                        <span className="text-primary font-bold">Thanh toán</span>
                        <span className="material-icons text-xs">chevron_right</span>
                        <span>Hoàn tất</span>
                    </div>
                </div>
            </header>

            <main id="main-checkout" className="container mx-auto px-4 sm:px-6 py-6 sm:py-12 flex-grow">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Column: Checkout Form (65%) */}
                    <div className="lg:w-[65%] space-y-10">
                        <section aria-labelledby="shipping-info-heading">
                            <h1 id="shipping-info-heading" className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                Thông tin giao hàng
                            </h1>
                            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="full-name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Họ và tên <span className="text-red-500" aria-hidden="true">*</span></label>
                                        <input 
                                            id="full-name"
                                            required
                                            aria-required="true"
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3.5 outline-none transition-all placeholder:text-slate-400" 
                                            placeholder="Nguyễn Văn A" 
                                            type="text" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-slate-700 dark:text-slate-300">Số điện thoại <span className="text-red-500" aria-hidden="true">*</span></label>
                                        <input 
                                            id="phone"
                                            required
                                            aria-required="true"
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3.5 outline-none transition-all placeholder:text-slate-400" 
                                            placeholder="0901 234 567" 
                                            type="tel" 
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Email nhận thông tin <span className="text-red-500" aria-hidden="true">*</span></label>
                                        <input 
                                            id="email"
                                            required
                                            aria-required="true"
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3.5 outline-none transition-all placeholder:text-slate-400" 
                                            placeholder="antigravity@example.com" 
                                            type="email" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="province" className="text-sm font-bold text-slate-700 dark:text-slate-300">Tỉnh / Thành phố <span className="text-red-500" aria-hidden="true">*</span></label>
                                        <select 
                                            id="province"
                                            required
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3.5 outline-none appearance-none cursor-pointer transition-all"
                                        >
                                            <option value="">Chọn tỉnh thành</option>
                                            <option value="HN">Hà Nội</option>
                                            <option value="HCM">TP. Hồ Chí Minh</option>
                                            <option value="DN">Đà Nẵng</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="district" className="text-sm font-bold text-slate-700 dark:text-slate-300">Quận / Huyện <span className="text-red-500" aria-hidden="true">*</span></label>
                                        <select 
                                            id="district"
                                            required
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3.5 outline-none appearance-none cursor-pointer transition-all"
                                        >
                                            <option value="">Chọn quận huyện</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label htmlFor="address" className="text-sm font-bold text-slate-700 dark:text-slate-300">Địa chỉ cụ thể <span className="text-red-500" aria-hidden="true">*</span></label>
                                        <input 
                                            id="address"
                                            required
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3.5 outline-none transition-all placeholder:text-slate-400" 
                                            placeholder="Sô 1, đường ABC, phường/xã..." 
                                            type="text" 
                                        />
                                    </div>
                                </form>
                            </div>
                        </section>

                        {/* Shipping Method */}
                        <section aria-labelledby="shipping-method-heading">
                            <fieldset>
                                <legend id="shipping-method-heading" className="text-22xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                    Phương thức vận chuyển
                                </legend>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <label className="relative flex items-center p-5 sm:p-6 bg-white dark:bg-slate-900 border-2 border-primary rounded-2xl cursor-pointer shadow-md shadow-primary/5 group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary transition-all">
                                        <input defaultChecked className="absolute opacity-0" name="shipping" type="radio" value="standard" />
                                        <span className="material-icons text-primary mr-4 text-4xl" aria-hidden="true">local_shipping</span>
                                        <div className="flex-1">
                                            <p className="font-bold text-slate-900 dark:text-white">Giao hàng tiêu chuẩn</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Dự kiến nhận 3-5 ngày</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-black text-slate-900 dark:text-white">30.000đ</p>
                                        </div>
                                        <div className="absolute top-3 right-3">
                                            <span className="material-icons text-primary text-xl" aria-hidden="true">check_circle</span>
                                        </div>
                                    </label>
                                    <label className="relative flex items-center p-5 sm:p-6 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl cursor-pointer hover:border-primary/40 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary transition-all shadow-sm">
                                        <input className="absolute opacity-0" name="shipping" type="radio" value="express" />
                                        <span className="material-icons text-slate-400 group-hover:text-primary mr-4 text-4xl transition-colors" aria-hidden="true">bolt</span>
                                        <div className="flex-1">
                                            <p className="font-bold text-slate-900 dark:text-white">Giao hỏa tốc (24h)</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Nội thành trong ngày</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-black text-slate-900 dark:text-white">55.000đ</p>
                                        </div>
                                    </label>
                                </div>
                            </fieldset>
                        </section>

                        {/* Payment Method */}
                        <section aria-labelledby="payment-method-heading">
                            <fieldset>
                                <legend id="payment-method-heading" className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                    Phương thức thanh toán
                                </legend>
                                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 shadow-sm">
                                    <label className="flex items-center p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary">
                                        <input defaultChecked className="w-6 h-6 text-primary border-slate-300 focus:ring-primary cursor-pointer" name="payment" type="radio" value="cod" />
                                        <div className="flex items-center ml-4 flex-1">
                                            <span className="material-icons text-slate-500 dark:text-slate-400 mr-3" aria-hidden="true">payments</span>
                                            <span className="font-bold text-slate-900 dark:text-white">Tiền mặt khi nhận hàng (COD)</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary">
                                        <input className="w-6 h-6 text-primary border-slate-300 focus:ring-primary cursor-pointer" name="payment" type="radio" value="bank" />
                                        <div className="flex items-center ml-4 flex-1">
                                            <span className="material-icons text-slate-500 dark:text-slate-400 mr-3" aria-hidden="true">account_balance</span>
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">Chuyển khoản / QR Code</p>
                                                <div className="flex gap-2 mt-1">
                                                    <img className="h-5 grayscale hover:grayscale-0 transition-all" alt="Vietcombank logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsifWvSQazfjUBGcFxVjqGq4fsasbCph_l7-yj_qxc6_f1aVSDemgWWnTIv4CFbFutP4yB1CZf5kE9DGKETb_6Ob6P1gCO5MiT7qoBu26Ml6nz0-zeWJorEsZmswSeMu_G97n7jYaaBVBgXkTDuqaFKHgdbW-q8-cGpOvWE1ZkTBE4xes0-sfy-4uw1G_C7ibp42kS4YBeA5g0nnLS_r4Y27WvzW9pNYSAzDz3w5n1lSjkgoOkoVQNacHFjNUlq5e30NWr3X6_yaU" />
                                                    <img className="h-5 grayscale hover:grayscale-0 transition-all" alt="Techcombank logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV45iuHNsdAZaSyijWrQNypCm3DcKPna0rQ25_gfEm9BPqNb0B79_ALDW8yGZ9qHlF2fomp-XAwJBBs_N8xDdiSI4wuNk7645wK5EC5oCP_Mfoe0F88IvOJ7LgkNQ6fVe2ihguB1kpvbD2d5dHlgidxnJGnDvav3v_WT-nx-GTslF7Rc2hUllFIEqAvh_6NS9jVZj3qm4FFq6TWMEzhIWV_-el5pdaszYreMT5bMuYJ7AR2EdpSHZA4F-gGfIjQxJS5CaR_DtUCDA" />
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                    <label className="flex items-center p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary">
                                        <input className="w-6 h-6 text-primary border-slate-300 focus:ring-primary cursor-pointer" name="payment" type="radio" value="card" />
                                        <div className="flex items-center ml-4 flex-1">
                                            <span className="material-icons text-slate-500 dark:text-slate-400 mr-3" aria-hidden="true">credit_card</span>
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">Thẻ tín dụng (Thanh toán online)</p>
                                                <div className="flex gap-2 mt-1">
                                                    <img className="h-5" alt="Visa card support" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiQaBkF2sqgxj85IXzkwi-YwGcOLJEmp2wNGAl5vvxuir9er_abHUxOmiQggflQCvOTP2iX7qermlHD6fH3jI5S_Kwt7rYv5uHg3fQyxtVf8Ek7uliYoYEU5J5LGC4kLacdwQsNzwsaYGs-_GvM455FJe-QWVdxi_INEsPqFYdTG5UgG5CYLQkkcVCebuNXUGukOSBkqefZjZasqH6O39ZNlKPtH5CzuNLc9ZRDyitFtTg7ARL2a45d8NwoBn3TCiAkQPsySO83f0" />
                                                    <img className="h-5" alt="Mastercard support" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQAghVl0210uYsLdK8bFRI1D7fblQ5undDG24nv-oFuJagwD6_z3TMW968wPOmXaRBT9Yq8Ocv8NDk264EHHfhPd-trbxAXfkmvrZmGCVuHGsU8Uyg2fvOr1VMXtpqjXIrOOI12xfo33eztPeOS1npxh9DHmjGluMzqI_8KOreD6CH2rz6ZdI-ng4eet1XZSLo-6whUyBkr5RJ7z4_V037dcd-pKUoP6Y1Rk5dmEq5HeYiqqZny5SPzHGjplOQ9iW87vLN3Mh7XvY" />
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </fieldset>
                        </section>
                    </div>

                    {/* Right Column: Order Summary (35%) */}
                    <aside className="lg:w-[35%]">
                        <div className="sticky top-28">
                            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl p-6 sm:p-8 overflow-hidden" aria-labelledby="order-summary-heading">
                                <h2 id="order-summary-heading" className="text-xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">Đơn hàng của bạn</h2>
                                
                                {/* Product List */}
                                <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto no-scrollbar" role="list">
                                    <div className="flex gap-4 group" role="listitem">
                                        <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-2xl flex-shrink-0 relative border border-slate-100 dark:border-slate-700">
                                            <img className="w-full h-full object-contain p-2" alt="Wireless K8 Pro Keyboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjLswg_45tqf6FG4pgZQrtwfZy4X-3WLrtS4cJ4tbGYoZ4H86bdhTQ_wJSpHubCTrEOzEP0DBjFTMsdUzinTM6S5BQwkhBo0iBqigPLifVW9fHirRkcydhO6fPkGjDKtNN3f-7PkwYZcZPzARkPTECW6kQ4nqB3Z9mVoAJWYBEQ4etsVNTEl6ORGgyB8KsI3n7wj2B6OBEX_uIfkl-zVH6keo9-53KYQMTOQ5NqXHj8yq0vVOMujfclnpjVkh5DqcnUWO7WcmrNnU" loading="eager" />
                                            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full font-black shadow-lg" role="status" aria-label="Số lượng 1">1</span>
                                        </div>
                                        <div className="flex-1 min-w-0 py-1">
                                            <p className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-2 leading-snug">HakuTech K8 Pro RGB Wireless</p>
                                            <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">Gateron Blue / Space Grey</p>
                                        </div>
                                        <div className="text-right py-1">
                                            <p className="text-sm font-black text-slate-900 dark:text-white">2.490.000đ</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 group" role="listitem">
                                        <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-2xl flex-shrink-0 relative border border-slate-100 dark:border-slate-700">
                                            <img className="w-full h-full object-contain p-2" alt="Gaming Precision X1 Mouse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg6-jGXBcWY89Ne1aigUJi_ZCjEuaJ83jW_2so9wu33qM0gOXvC3lC0uKEbPkTQR7T3_HikKS-sIFe1A0KmElahYNFevpQhr4TZBF2QwfTKxr8rhb3irhKkD1BdKYwk1JizFRO9bxvF4M7RMeFPKjAjAIlP0yv635zkFTz0i-ikLme_aAUBr4mz2GQb_BszG9FuokYmZR4IRlq6W5KH9DjeS97VXPOfoQ5cxILCtASeCCiL5Lbeal_qCwQ_sqqxG7gbmrp5HwgUOQ" loading="lazy" />
                                            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full font-black shadow-lg" role="status" aria-label="Số lượng 1">1</span>
                                        </div>
                                        <div className="flex-1 min-w-0 py-1">
                                            <p className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-2 leading-snug">HakuTech Precision X1 Gaming</p>
                                            <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">Midnight Black</p>
                                        </div>
                                        <div className="text-right py-1">
                                            <p className="text-sm font-black text-slate-900 dark:text-white">1.150.000đ</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Price Breakdown */}
                                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400 font-medium">
                                        <span>Tạm tính</span>
                                        <span className="text-slate-900 dark:text-white">3.640.000đ</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400 font-medium">
                                        <span>Phí vận chuyển</span>
                                        <span className="text-slate-900 dark:text-white font-bold">30.000đ</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xl font-black pt-6 border-t border-slate-100 dark:border-slate-800 transition-all">
                                        <span className="text-slate-900 dark:text-white">Tổng cộng</span>
                                        <span className="text-primary text-2xl" aria-live="polite">3.670.000đ</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4.5 rounded-2xl mt-10 transition-all group flex items-center justify-center gap-3 shadow-xl shadow-primary/30 active:scale-[0.98] min-h-[56px] cursor-pointer">
                                    Xác nhận đặt hàng
                                    <span className="material-icons motion-safe:group-hover:translate-x-1 transition-transform" aria-hidden="true">rocket_launch</span>
                                </button>

                                {/* Trust Metrics */}
                                <div className="mt-8 flex flex-col items-center gap-3 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                        <span className="material-icons text-base" aria-hidden="true">verified_user</span>
                                        Bảo mật thông tin 100%
                                    </div>
                                    <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center px-4 leading-relaxed">Dữ liệu của bạn được mã hóa và bảo vệ theo tiêu chuẩn SSL quốc tế.</p>
                                </div>
                            </section>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Simple footer for focus */}
            <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">© 2024 HakuTech - Ecosystem of Quality. All rights reserved.</p>
                    <div className="flex gap-8 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <Link to="/help" className="hover:text-primary transition-colors">Trợ giúp</Link>
                        <Link to="/policy" className="hover:text-primary transition-colors">Chính sách</Link>
                        <Link to="/privacy" className="hover:text-primary transition-colors">Bảo mật</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Checkout;
