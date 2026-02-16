import React, { useState } from 'react';
import AccountSidebar from './AccountSidebar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [user] = useState({
        fullName: 'Haku User',
        email: 'user@haku.com',
        phone: '0987654321',
        avatar: 'https://ui-avatars.com/api/?name=Haku+Tech&background=0da2e7&color=fff',
        memberSince: '2024-01-01',
        totalOrders: 15,
        totalSpent: '25,500,000đ'
    });

    const [recentOrders] = useState([
        { id: '#HKT-123456', date: '2024-02-15', total: '15,000,000đ', status: 'delivered', statusText: 'Đã giao' },
        { id: '#HKT-123455', date: '2024-02-10', total: '5,500,000đ', status: 'shipping', statusText: 'Đang giao' },
        { id: '#HKT-123454', date: '2024-02-05', total: '2,500,000đ', status: 'processing', statusText: 'Đang xử lý' }
    ]);

    const getStatusClass = (status) => {
        switch (status) {
            case 'pending': return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
            case 'processing': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
            case 'shipping': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
            case 'delivered': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
            case 'cancelled': return 'bg-rose-500/10 text-rose-600 border-rose-500/20';
            default: return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
        }
    };

    return (
        <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-inter py-10 sm:py-20">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem bảng điều khiển
            </a>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <AccountSidebar />

                    {/* Main Content */}
                    <div className="flex-1 space-y-10 animate-fadeIn">
                        {/* Welcome Header */}
                        <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-white dark:border-slate-800 p-8 sm:p-12 overflow-hidden relative group" aria-labelledby="welcome-heading">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="text-center md:text-left">
                                    <h1 id="welcome-heading" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                                        Xin chào, <span className="text-primary">{user.fullName.split(' ')[0]}!</span>
                                    </h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium max-w-lg leading-relaxed">
                                        Chào mừng bạn quay trở lại. Bạn đang có <span className="font-black text-slate-900 dark:text-white">02</span> đơn hàng đang trên đường vận chuyển tới tay bạn.
                                    </p>
                                </div>
                                <Link to="/account/orders" className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 flex items-center gap-2">
                                    <span className="material-icons text-xl" aria-hidden="true">receipt_long</span>
                                    Xem tất cả đơn hàng
                                </Link>
                            </div>
                        </section>

                        {/* Quick Stats */}
                        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Thống kê tài khoản">
                            {[
                                { label: 'Tổng đơn hàng', value: user.totalOrders, icon: 'shopping_bag', color: 'blue' },
                                { label: 'Tổng chi tiêu', value: user.totalSpent, icon: 'payments', color: 'emerald' },
                                { label: 'Đang giao', value: '02', icon: 'local_shipping', color: 'orange' }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 dark:shadow-none border border-slate-50 dark:border-slate-800 flex items-center gap-6 group hover:border-primary/30 transition-all">
                                    <div className={`w-16 h-16 rounded-3xl bg-${stat.color}-500/10 text-${stat.color}-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <span className="material-icons text-3xl" aria-hidden="true">{stat.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">{stat.label}</p>
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{stat.value}</h3>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* Recent Orders Table */}
                        <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-100 dark:shadow-none border border-slate-50 dark:border-slate-800 overflow-hidden" aria-labelledby="recent-orders-heading">
                            <div className="px-10 py-8 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
                                <h3 id="recent-orders-heading" className="font-black text-xl text-slate-900 dark:text-white tracking-tight">Đơn hàng gần đây</h3>
                                <Link to="/account/orders" className="text-[11px] font-black uppercase tracking-widest text-primary hover:underline underline-offset-4 decoration-2">Xem tất cả</Link>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50/30 dark:bg-slate-800/10">
                                            <th className="pl-10 pr-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Mã đơn hàng</th>
                                            <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Ngày đặt</th>
                                            <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tổng tiền</th>
                                            <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Trạng thái</th>
                                            <th className="pl-6 pr-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Chi tiết</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all">
                                                <td className="pl-10 pr-6 py-6 font-black text-sm text-slate-900 dark:text-white">
                                                    <Link to={`/account/orders/${order.id.replace('#', '')}`} className="hover:text-primary transition-colors">
                                                        {order.id}
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-6 text-sm font-bold text-slate-500 dark:text-slate-400">{order.date}</td>
                                                <td className="px-6 py-6 font-black text-sm text-slate-900 dark:text-white">{order.total}</td>
                                                <td className="px-6 py-6">
                                                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusClass(order.status)}`} role="status">
                                                        {order.statusText}
                                                    </span>
                                                </td>
                                                <td className="pl-6 pr-10 py-6 text-right">
                                                    <Link to={`/account/orders/${order.id.replace('#', '')}`} className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all inline-flex items-center justify-center shadow-inner group-hover:scale-110" aria-label={`Xem chi tiết đơn hàng ${order.id}`}>
                                                        <span className="material-icons text-xl" aria-hidden="true">chevron_right</span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Account Info + Default Address */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                             {/* Personal Info */}
                            <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-100 dark:shadow-none border border-slate-50 dark:border-slate-800 p-10" aria-labelledby="personal-info-heading">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 id="personal-info-heading" className="font-black text-xl text-slate-900 dark:text-white tracking-tight">Thông tin cá nhân</h3>
                                    <Link to="/account/profile" className="w-10 h-10 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-inner" aria-label="Chỉnh sửa thông tin cá nhân">
                                        <span className="material-icons text-lg" aria-hidden="true">edit</span>
                                    </Link>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                            <span className="material-icons text-slate-400 group-hover:text-primary text-xl" aria-hidden="true">person</span>
                                        </div>
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{user.fullName}</span>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                            <span className="material-icons text-slate-400 group-hover:text-primary text-xl" aria-hidden="true">mail</span>
                                        </div>
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{user.email}</span>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                            <span className="material-icons text-slate-400 group-hover:text-primary text-xl" aria-hidden="true">phone_iphone</span>
                                        </div>
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{user.phone}</span>
                                    </div>
                                </div>
                            </section>

                             {/* Default Address */}
                            <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-100 dark:shadow-none border border-slate-50 dark:border-slate-800 p-10" aria-labelledby="shipping-info-heading">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 id="shipping-info-heading" className="font-black text-xl text-slate-900 dark:text-white tracking-tight">Địa chỉ nhận hàng</h3>
                                    <button className="w-10 h-10 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-inner" aria-label="Chỉnh sửa địa chỉ mặc định">
                                        <span className="material-icons text-lg" aria-hidden="true">location_on</span>
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-lg w-max mb-4">Mặc định</p>
                                    <p className="font-black text-lg text-slate-900 dark:text-white tracking-tight">{user.fullName}</p>
                                    <div className="space-y-2">
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">Toà nhà Landmark 81, 720A Điện Biên Phủ</p>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh</p>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-black mt-4">SĐT: {user.phone}</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
