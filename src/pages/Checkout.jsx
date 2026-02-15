import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Simple Header */}
            <header className="bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="container mx-auto px-6 h-20 flex items-center">
                    <Link to="/" className="text-2xl font-bold tracking-tight text-primary flex items-center gap-2">
                        <span className="material-icons text-3xl">terminal</span>
                        HakuTech
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-6 py-10 flex-grow">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Checkout Form (65%) */}
                    <div className="lg:w-[65%] space-y-8">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Thông tin thanh toán và giao hàng</h1>
                            <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Họ và tên</label>
                                        <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" placeholder="Nguyễn Văn A" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Số điện thoại</label>
                                        <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" placeholder="0901 234 567" type="tel" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Email</label>
                                        <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" placeholder="email@example.com" type="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Tỉnh / Thành phố</label>
                                        <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3">
                                            <option>Chọn tỉnh thành</option>
                                            <option>Hà Nội</option>
                                            <option>TP. Hồ Chí Minh</option>
                                            <option>Đà Nẵng</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Quận / Huyện</label>
                                        <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3">
                                            <option>Chọn quận huyện</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Địa chỉ cụ thể</label>
                                        <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" placeholder="Số nhà, tên đường, phường/xã..." type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Shipping Method */}
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Phương thức vận chuyển</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label className="relative flex items-center p-6 bg-white dark:bg-slate-900/50 border-2 border-primary rounded-xl cursor-pointer shadow-sm group">
                                    <input defaultChecked className="absolute h-0 w-0 opacity-0" name="shipping" type="radio" value="standard" />
                                    <span className="material-icons text-primary mr-4 text-3xl">local_shipping</span>
                                    <div className="flex-1">
                                        <p className="font-semibold text-slate-900 dark:text-white">Giao hàng tiêu chuẩn</p>
                                        <p className="text-sm text-slate-500">Dự kiến nhận hàng trong 3-5 ngày</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-slate-900 dark:text-white">30.000đ</p>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <span className="material-icons text-primary text-sm">check_circle</span>
                                    </div>
                                </label>
                                <label className="relative flex items-center p-6 bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer shadow-sm hover:border-primary/50 transition-colors">
                                    <input className="absolute h-0 w-0 opacity-0" name="shipping" type="radio" value="express" />
                                    <span className="material-icons text-slate-400 group-hover:text-primary mr-4 text-3xl">speed</span>
                                    <div className="flex-1">
                                        <p className="font-semibold text-slate-900 dark:text-white">Giao hàng hỏa tốc</p>
                                        <p className="text-sm text-slate-500">Dự kiến nhận hàng trong 24h</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-slate-900 dark:text-white">55.000đ</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* Payment Method */}
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Phương thức thanh toán</h2>
                            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 shadow-sm">
                                <label className="flex items-center p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <input defaultChecked className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="payment" type="radio" />
                                    <div className="flex items-center ml-4 flex-1">
                                        <span className="material-icons text-slate-500 mr-3">payments</span>
                                        <span className="font-medium text-slate-900 dark:text-white">Thanh toán khi nhận hàng (COD)</span>
                                    </div>
                                </label>
                                <label className="flex items-center p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <input className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="payment" type="radio" />
                                    <div className="flex items-center ml-4 flex-1">
                                        <span className="material-icons text-slate-500 mr-3">account_balance</span>
                                        <span className="font-medium text-slate-900 dark:text-white">Chuyển khoản ngân hàng</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <img className="h-6 opacity-80" alt="Vietcombank logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsifWvSQazfjUBGcFxVjqGq4fsasbCph_l7-yj_qxc6_f1aVSDemgWWnTIv4CFbFutP4yB1CZf5kE9DGKETb_6Ob6P1gCO5MiT7qoBu26Ml6nz0-zeWJorEsZmswSeMu_G97n7jYaaBVBgXkTDuqaFKHgdbW-q8-cGpOvWE1ZkTBE4xes0-sfy-4uw1G_C7ibp42kS4YBeA5g0nnLS_r4Y27WvzW9pNYSAzDz3w5n1lSjkgoOkoVQNacHFjNUlq5e30NWr3X6_yaU" />
                                        <img className="h-6 opacity-80" alt="Techcombank logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV45iuHNsdAZaSyijWrQNypCm3DcKPna0rQ25_gfEm9BPqNb0B79_ALDW8yGZ9qHlF2fomp-XAwJBBs_N8xDdiSI4wuNk7645wK5EC5oCP_Mfoe0F88IvOJ7LgkNQ6fVe2ihguB1kpvbD2d5dHlgidxnJGnDvav3v_WT-nx-GTslF7Rc2hUllFIEqAvh_6NS9jVZj3qm4FFq6TWMEzhIWV_-el5pdaszYreMT5bMuYJ7AR2EdpSHZA4F-gGfIjQxJS5CaR_DtUCDA" />
                                    </div>
                                </label>
                                <label className="flex items-center p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <input className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="payment" type="radio" />
                                    <div className="flex items-center ml-4 flex-1">
                                        <span className="material-icons text-slate-500 mr-3">credit_card</span>
                                        <span className="font-medium text-slate-900 dark:text-white">Thẻ tín dụng / Ghi nợ</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <img className="h-5" alt="Visa card logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiQaBkF2sqgxj85IXzkwi-YwGcOLJEmp2wNGAl5vvxuir9er_abHUxOmiQggflQCvOTP2iX7qermlHD6fH3jI5S_Kwt7rYv5uHg3fQyxtVf8Ek7uliYoYEU5J5LGC4kLacdwQsNzwsaYGs-_GvM455FJe-QWVdxi_INEsPqFYdTG5UgG5CYLQkkcVCebuNXUGukOSBkqefZjZasqH6O39ZNlKPtH5CzuNLc9ZRDyitFtTg7ARL2a45d8NwoBn3TCiAkQPsySO83f0" />
                                        <img className="h-5" alt="Mastercard logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQAghVl0210uYsLdK8bFRI1D7fblQ5undDG24nv-oFuJagwD6_z3TMW968wPOmXaRBT9Yq8Ocv8NDk264EHHfhPd-trbxAXfkmvrZmGCVuHGsU8Uyg2fvOr1VMXtpqjXIrOOI12xfo33eztPeOS1npxh9DHmjGluMzqI_8KOreD6CH2rz6ZdI-ng4eet1XZSLo-6whUyBkr5RJ7z4_V037dcd-pKUoP6Y1Rk5dmEq5HeYiqqZny5SPzHGjplOQ9iW87vLN3Mh7XvY" />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Order Summary (35%) */}
                    <div className="lg:w-[35%]">
                        <div className="sticky top-28">
                            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg p-6 overflow-hidden">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Đơn hàng của bạn</h2>
                                {/* Product List */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex gap-4">
                                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg flex-shrink-0 relative">
                                            <img className="w-full h-full object-cover rounded-lg" alt="Mechanical gaming keyboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjLswg_45tqf6FG4pgZQrtwfZy4X-3WLrtS4cJ4tbGYoZ4H86bdhTQ_wJSpHubCTrEOzEP0DBjFTMsdUzinTM6S5BQwkhBo0iBqigPLifVW9fHirRkcydhO6fPkGjDKtNN3f-7PkwYZcZPzARkPTECW6kQ4nqB3Z9mVoAJWYBEQ4etsVNTEl6ORGgyB8KsI3n7wj2B6OBEX_uIfkl-zVH6keo9-53KYQMTOQ5NqXHj8yq0vVOMujfclnpjVkh5DqcnUWO7WcmrNnU" />
                                            <span className="absolute -top-2 -right-2 bg-slate-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">1</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-2">Bàn phím cơ không dây HakuTech K8 Pro RGB</p>
                                            <p className="text-sm text-slate-500">Space Grey / Gateron Blue</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">2.490.000đ</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg flex-shrink-0 relative">
                                            <img className="w-full h-full object-cover rounded-lg" alt="Wireless gaming mouse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg6-jGXBcWY89Ne1aigUJi_ZCjEuaJ83jW_2so9wu33qM0gOXvC3lC0uKEbPkTQR7T3_HikKS-sIFe1A0KmElahYNFevpQhr4TZBF2QwfTKxr8rhb3irhKkD1BdKYwk1JizFRO9bxvF4M7RMeFPKjAjAIlP0yv635zkFTz0i-ikLme_aAUBr4mz2GQb_BszG9FuokYmZR4IRlq6W5KH9DjeS97VXPOfoQ5cxILCtASeCCiL5Lbeal_qCwQ_sqqxG7gbmrp5HwgUOQ" />
                                            <span className="absolute -top-2 -right-2 bg-slate-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">1</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-2">Chuột gaming HakuTech Precision X1</p>
                                            <p className="text-sm text-slate-500">Midnight Black</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">1.150.000đ</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Price Breakdown */}
                                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                        <span>Tạm tính</span>
                                        <span>3.640.000đ</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                        <span>Phí vận chuyển</span>
                                        <span>30.000đ</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <span className="text-slate-900 dark:text-white">Tổng cộng</span>
                                        <span className="text-primary">3.670.000đ</span>
                                    </div>
                                </div>
                                {/* CTA */}
                                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg mt-8 transition-colors flex items-center justify-center gap-2 shadow-md shadow-primary/20">
                                    Đặt hàng
                                    <span className="material-icons">arrow_forward</span>
                                </button>
                                {/* Trust Elements */}
                                <div className="mt-6 space-y-4">
                                    <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                        <span className="material-icons text-emerald-500 text-base">verified_user</span>
                                        Cam kết bảo mật thông tin
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-10">
                <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
                    <p>© 2024 HakuTech - Nền tảng công nghệ hàng đầu. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Checkout;
