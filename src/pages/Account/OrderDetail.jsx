import React, { useState } from 'react';
import AccountSidebar from './AccountSidebar';
import { useParams, Link } from 'react-router-dom';

const OrderDetail = () => {
    const { id } = useParams();
    
    // Mock order data based on ID
    const [order] = useState({
        id: id || '123456',
        date: '15/02/2024 14:30',
        paymentMethod: 'Thanh toán khi nhận hàng (COD)',
        shippingAddress: {
            name: 'Haku User',
            phone: '0987654321',
            address: 'Toà nhà Landmark 81, 720A Điện Biên Phủ, Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh'
        },
        status: 'delivered',
        statusText: 'Đã giao hàng thành công',
        steps: [
            { label: 'Đặt hàng thành công', date: '15/02 14:30', completed: true },
            { label: 'Đã xác nhận thanh toán', date: '15/02 15:00', completed: true },
            { label: 'Đã bàn giao vận chuyển', date: '16/02 08:00', completed: true },
            { label: 'Giao hàng thành công', date: '17/02 10:00', completed: true },
        ],
        items: [
            { 
                id: 1,
                name: 'iPhone 15 Pro Max 256GB - Titan Tự Nhiên',
                price: '34,990,000đ',
                originalPrice: '36,990,000đ',
                quantity: 1,
                total: '34,990,000đ',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYCEYMFJJle5yhFFUrfHk9FAhvAErI1cC9tVnTOpZPGlyg2gSb0Yo435x1vkiez8Dn5wrVq7buAMmuKxR4RDcLUpl-XXIXDCgXVkNPRjxDkYETUeMei5u75ljo7HyUUctXG9PK_8PDARs9UIHrdFaV4RBU4FswZVn5Pke1GAs9mIl9zUiosMhF6Gpl8i_okap9Strbg2HG7AlE8ASvELkPxo2beWZ08YmFdy2wBGLGv9IGUkns8ZSz4ckcrOAx2BRE_YLx55ktGno'
            },
            { 
                id: 2,
                name: 'Ốp lưng Clear Case with MagSafe',
                price: '1,290,000đ',
                originalPrice: '1,590,000đ',
                quantity: 1,
                total: '1,290,000đ',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5Za4AioYBlErPppiVRiAsuVROkWBTXPt7Br2Kiw0QcEFa1hnPhFtmga3I_JvEPu4ig3y2pj_ORckNkpw3BKmgHebZ_pblhqoVJfsLNxytcHxJZFYkxHvOaO-QKrvhJKgxmUwQtXg6Db7Eo_NbuAbjbJoRw4v5OVI1GN_vmGLFdikpIOUZgR9yAub06YXfvD4LykNo51x0YHPgxgtBNz57plUeexxRYLJIYDAirk3oizXb8Irp0zlZlRC5SrrXlOashX6jcO-PGaE'
            }
        ],
        subtotal: '36,280,000đ',
        shippingFee: 'Miễn phí',
        discount: '-280,000đ',
        total: '36,000,000đ'
    });

    return (
        <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-inter py-10 sm:py-20">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem chi tiết đơn hàng
            </a>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <AccountSidebar />

                    {/* Main Content */}
                    <div className="flex-1 animate-fadeIn">
                        <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-white dark:border-slate-800 overflow-hidden" aria-labelledby="order-detail-heading">
                            {/* Header */}
                            <header className="px-8 sm:px-12 py-10 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <div className="flex items-center gap-6">
                                    <Link to="/account/orders" className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center shadow-inner group" aria-label="Quay lại danh sách đơn hàng">
                                        <span className="material-icons transition-transform group-hover:-translate-x-1" aria-hidden="true">arrow_back</span>
                                    </Link>
                                    <div>
                                        <div className="flex items-center flex-wrap gap-3 mb-1">
                                            <h1 id="order-detail-heading" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Chi tiết đơn hàng #{order.id}</h1>
                                            <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-600 px-4 py-1.5 rounded-full border border-emerald-500/10" role="status">{order.statusText}</span>
                                        </div>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Ngày đặt hàng: <span className="text-slate-900 dark:text-white font-bold">{order.date}</span></p>
                                    </div>
                                </div>
                                <button className="px-8 py-4 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center gap-2">
                                    <span className="material-icons text-xl" aria-hidden="true">restart_alt</span>
                                    Mua lại đơn này
                                </button>
                            </header>

                             {/* Order Status Stepper */}
                            <section className="px-8 sm:px-12 py-12 bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800" aria-label="Tình trạng đơn hàng">
                                <div className="relative">
                                     {/* Progress Path Background */}
                                    <div className="absolute top-6 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full hidden lg:block" aria-hidden="true"></div>
                                     {/* Progress Path Active */}
                                    <div className="absolute top-6 left-0 w-full h-1 bg-emerald-500 rounded-full hidden lg:block shadow-sm shadow-emerald-500/20" aria-hidden="true"></div>

                                    <div className="flex justify-between flex-col lg:flex-row gap-12 lg:gap-0 relative z-10">
                                        {order.steps.map((step, index) => (
                                            <div key={index} className="flex lg:flex-col items-center gap-6 lg:gap-4 flex-1">
                                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-4 shadow-xl transition-all duration-500 ${step.completed ? 'bg-emerald-500 border-white dark:border-slate-900 text-white scale-110' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-300'}`}>
                                                    {step.completed ? <span className="material-icons text-xl">check</span> : <span className="text-sm font-black">{index + 1}</span>}
                                                </div>
                                                <div className="text-left lg:text-center px-2">
                                                    <p className={`text-xs font-black uppercase tracking-widest mb-1 ${step.completed ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>{step.label}</p>
                                                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">{step.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                             {/* Info Grid (Address & Payment) */}
                             <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 sm:px-12 py-10 border-b border-slate-100 dark:border-slate-800">
                                <article className="bg-slate-50/50 dark:bg-slate-800/30 p-8 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-800 relative group overflow-hidden">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                     <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                                        <span className="material-icons text-lg">location_on</span>
                                        Địa chỉ nhận hàng
                                    </h3>
                                    <div className="relative z-10 space-y-3">
                                        <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{order.shippingAddress.name}</p>
                                        <p className="text-sm font-black text-slate-600 dark:text-slate-300">SĐT: {order.shippingAddress.phone}</p>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">{order.shippingAddress.address}</p>
                                    </div>
                                </article>
                                
                                <article className="bg-slate-50/50 dark:bg-slate-800/30 p-8 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-800 flex flex-col justify-center relative group overflow-hidden">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                     <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-6 flex items-center gap-2">
                                        <span className="material-icons text-lg">account_balance_wallet</span>
                                        Phương thức thanh toán
                                    </h3>
                                    <p className="relative z-10 text-base font-black text-slate-900 dark:text-white tracking-tight">{order.paymentMethod}</p>
                                    <p className="mt-2 text-xs font-medium text-slate-500 flex items-center gap-2">
                                        <span className="material-icons text-sm text-emerald-500">verified</span>
                                        An toàn & Bảo mật
                                    </p>
                                </article>
                             </section>

                            {/* Products Section */}
                            <section className="px-8 sm:px-12 py-10" aria-label="Danh sách sản phẩm">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 ml-2">Sản phẩm trong đơn hàng</h3>
                                <div className="space-y-6">
                                    {order.items.map((item) => (
                                        <article key={item.id} className="group flex flex-col sm:flex-row items-center gap-8 p-6 rounded-[2rem] hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-none">
                                            <div className="relative shrink-0">
                                                <div className="absolute -inset-2 bg-slate-100 dark:bg-slate-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <div className="relative w-28 h-28 bg-white border border-slate-50 dark:border-slate-700 rounded-2xl p-3 flex items-center justify-center">
                                                    <img src={item.img} alt={item.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                                                </div>
                                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900">
                                                    x{item.quantity}
                                                </div>
                                            </div>
                                            <div className="flex-grow text-center sm:text-left">
                                                <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 leading-tight max-w-lg line-clamp-2">{item.name}</h4>
                                                <p className="text-xs font-black uppercase tracking-widest text-primary shrink-0">Bảo hành 12 tháng HakuCare+</p>
                                            </div>
                                            <div className="text-center sm:text-right shrink-0">
                                                <p className="text-xl font-black text-primary mb-1">{item.total}</p>
                                                <p className="text-sm text-slate-400 line-through font-bold opacity-60">{item.originalPrice}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>

                             {/* Pricing Summary */}
                            <footer className="bg-slate-50/80 dark:bg-slate-800/50 px-8 sm:px-12 py-10 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex justify-end">
                                    <div className="w-full sm:w-1/2 lg:w-2/5 space-y-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px]">Tạm tính</span>
                                            <span className="font-black text-slate-900 dark:text-white">{order.subtotal}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px]">Phí vận chuyển</span>
                                            <span className="font-black text-emerald-500 uppercase text-[10px] tracking-widest">{order.shippingFee}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px]">Giảm giá voucher</span>
                                            <span className="font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-3 py-1 rounded-lg">{order.discount}</span>
                                        </div>
                                        <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                            <span className="text-lg font-black text-slate-900 dark:text-white tracking-widest uppercase">Tổng thanh toán</span>
                                            <div className="text-right">
                                                <span className="text-3xl font-black text-primary tracking-tighter block">{order.total}</span>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Đã bao gồm VAT</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pt-10 flex flex-col gap-3">
                                             <button className="w-full py-4 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-primary border-2 border-slate-100 dark:border-slate-700 rounded-2xl hover:border-primary/30 transition-all active:scale-95 flex items-center justify-center gap-2">
                                                <span className="material-icons text-xl">contact_support</span>
                                                Cần hỗ trợ đơn hàng này?
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default OrderDetail;
