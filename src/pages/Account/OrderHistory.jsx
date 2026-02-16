import React, { useState } from 'react';
import AccountSidebar from './AccountSidebar';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
    const [orders] = useState([
         { 
            id: 'HKT-123456', 
            date: '2024-02-15', 
            total: '15,000,000đ', 
            status: 'delivered', 
            statusText: 'Đã giao thành công',
            items: [
                { name: 'iPhone 15 Pro Max', quantity: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYCEYMFJJle5yhFFUrfHk9FAhvAErI1cC9tVnTOpZPGlyg2gSb0Yo435x1vkiez8Dn5wrVq7buAMmuKxR4RDcLUpl-XXIXDCgXVkNPRjxDkYETUeMei5u75ljo7HyUUctXG9PK_8PDARs9UIHrdFaV4RBU4FswZVn5Pke1GAs9mIl9zUiosMhF6Gpl8i_okap9Strbg2HG7AlE8ASvELkPxo2beWZ08YmFdy2wBGLGv9IGUkns8ZSz4ckcrOAx2BRE_YLx55ktGno' }
            ]
        },
        { 
            id: 'HKT-123455', 
            date: '2024-02-10', 
            total: '5,500,000đ', 
            status: 'shipping', 
            statusText: 'Đang vận chuyển',
            items: [
                { name: 'AirPods Pro 2', quantity: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPcGOQ43sQ6P3mrotEk-J-gADIwQOq5Ze1afREQc3KZGN7IpTooIGQ-yGFXvLCXSmETnZKdxdNNlU7mtEEmHaBj6b8hQvjEaWPXeXgUMs7wYgtfHzEzyuYDn9XqeouwesRDoTxXadFjUlWoxKhRs9Rw_iZVBxNtqWTIKHJeETiZnDdy8gYRgnZ7KsfGpWavxjRgngcCnJdQAQOc_cgZiuzvNGJ2P_laAFqBuP0oTqvqyJr4A1-rrH1HFhiOBnpdeD0vrZl1IDrcaM' }
            ]
        },
        { 
            id: 'HKT-123454', 
            date: '2024-02-05', 
            total: '2,500,000đ', 
            status: 'processing', 
            statusText: 'Đang xử lý',
            items: [
                 { name: 'Sạc dự phòng Anker', quantity: 2, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx6q-PcUz3dSmK1_Hj_zEbLNxIJlvxZPL94j6zKHYwd8yZSwMZr2ToiplFWv7UyJSymcYG63QV9MzEiW4CWWT0lFHY83EQtbEMSlrSRSP6ExiBuht_n43gup3hh4L_NjDXF2MzQNnEI6v_LtrTIFkwGt21CDrlx6WvGEEBJeAog7b8hOLNMo1p5aYHjqETy5BEVs6QMCI_APKIkNls9G01iAWTtriO7ohh7ZL7C8DmR_JVgXEb8fthV-AkDJ08ZMOhUueiqNFn2-g' }
            ]
        },
        { 
            id: 'HKT-123450', 
            date: '2024-01-20', 
            total: '32,000,000đ', 
            status: 'cancelled', 
            statusText: 'Đã hủy',
            items: [
                { name: 'MacBook Air M2', quantity: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU5x3M7tRjEbthjMdvUA17MJ85QemQnyyb7pgzF8IB_62-zM2kIBNNe4TcksJymgC2ep20dxv1JsvAT8VSOCVOnnj4RSktXW6kf0c8bUV75WeNvvJJFHKBiVj_MlFnjvmVAIpYcyaS5vlVUMC9J5myQS7cBt9GjbVqwLJ65hknytOaEXexKZIWyBIAAmEfNzDmHGVFJ6j--oLsIRozB8j-nU8ttKfWuMW3AE77yy7HBG1aIpX6YeLjUUPrQnOKSxsejPATUoJd7yA' }
            ]
        }
    ]);

    const getStatusClass = (status) => {
        switch (status) {
            case 'pending': return 'bg-amber-500/10 text-amber-600 border-amber-500/10';
            case 'processing': return 'bg-blue-500/10 text-blue-600 border-blue-500/10';
            case 'shipping': return 'bg-purple-500/10 text-purple-600 border-purple-500/10';
            case 'delivered': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/10';
            case 'cancelled': return 'bg-rose-500/10 text-rose-600 border-rose-500/10';
            default: return 'bg-slate-500/10 text-slate-600 border-slate-500/10';
        }
    };

    return (
        <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-inter py-10 sm:py-20">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem lịch sử đơn hàng
            </a>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <AccountSidebar />

                    {/* Main Content */}
                    <div className="flex-1 animate-fadeIn">
                        <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-white dark:border-slate-800" aria-labelledby="orders-heading">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-12 border-b border-slate-100 dark:border-slate-800 pb-10">
                                <div className="text-center sm:text-left">
                                    <h1 id="orders-heading" className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Đơn hàng của tôi</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Xem và theo dõi tình trạng các đơn hàng bạn đã đặt</p>
                                </div>
                                
                                <nav className="flex items-center gap-1 p-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-x-auto max-w-full" aria-label="Lọc đơn hàng">
                                    <button className="px-6 py-2.5 bg-white dark:bg-slate-700 shadow-xl shadow-slate-200 dark:shadow-none rounded-[0.9rem] text-xs font-black uppercase tracking-widest text-primary whitespace-nowrap">Tất cả</button>
                                    <button className="px-6 py-2.5 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-primary whitespace-nowrap transition-colors">Đang xử lý</button>
                                    <button className="px-6 py-2.5 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-primary whitespace-nowrap transition-colors">Đã giao</button>
                                    <button className="px-6 py-2.5 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-primary whitespace-nowrap transition-colors">Đã hủy</button>
                                </nav>
                            </div>

                             {/* Orders List */}
                            <div className="space-y-6">
                                {orders.map((order) => (
                                    <article key={order.id} className="group bg-white dark:bg-slate-800/50 rounded-[2rem] border-2 border-slate-50 dark:border-slate-800 hover:border-primary/20 hover:shadow-2xl hover:shadow-slate-100 dark:hover:shadow-none transition-all overflow-hidden">
                                         {/* Card Header */}
                                        <div className="bg-slate-50/50 dark:bg-slate-800/80 px-8 py-6 flex flex-wrap items-center justify-between gap-6 border-b border-slate-50 dark:border-slate-800">
                                            <div className="flex flex-wrap gap-8">
                                                <div className="space-y-1">
                                                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Mã đơn hàng</span>
                                                    <span className="text-sm font-black text-slate-900 dark:text-white">#{order.id}</span>
                                                </div>
                                                <div className="space-y-1">
                                                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Ngày đặt</span>
                                                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{order.date}</span>
                                                </div>
                                                <div className="space-y-1">
                                                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Tổng thanh toán</span>
                                                    <span className="text-sm font-black text-primary">{order.total}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusClass(order.status)}`} role="status">
                                                    {order.statusText}
                                                </span>
                                            </div>
                                        </div>
                                        
                                         {/* Card Content (Items Preview) */}
                                        <div className="p-8">
                                            <div className="flex flex-col sm:flex-row items-center gap-8">
                                                <div className="relative shrink-0">
                                                    <div className="absolute -inset-2 bg-slate-100 dark:bg-slate-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    <div className="relative w-24 h-24 rounded-2xl border-2 border-slate-50 dark:border-slate-700 overflow-hidden bg-white p-2">
                                                        <img src={order.items[0].img} alt={order.items[0].name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow text-center sm:text-left">
                                                    <h4 className="text-base font-black text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">{order.items[0].name}</h4>
                                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                        Số lượng: {order.items[0].quantity} {order.items.length > 1 && <span className="text-primary font-black ml-1">+ {order.items.length - 1} sản phẩm khác</span>}
                                                    </p>
                                                </div>
                                                <div className="flex flex-wrap justify-center gap-3">
                                                    {order.status === 'delivered' && (
                                                        <button className="px-6 py-3 bg-white dark:bg-slate-700 border-2 border-slate-100 dark:border-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-all active:scale-95">Đánh giá ngay</button>
                                                    )}
                                                    <Link to={`/account/orders/${order.id.replace('#', '')}`} className="px-6 py-3 bg-primary/5 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-transparent hover:shadow-primary/20 active:scale-95 flex items-center gap-2">
                                                        <span className="material-icons text-sm" aria-hidden="true">visibility</span>
                                                        Xem chi tiết
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                             {/* Pagination */}
                            <nav className="mt-16 flex justify-center" aria-label="Phân trang">
                                <ul className="flex items-center gap-3">
                                    <li>
                                        <button className="w-12 h-12 flex items-center justify-center rounded-2xl border-2 border-slate-100 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary/20 transition-all disabled:opacity-30" disabled>
                                            <span className="material-icons">chevron_left</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary text-white text-sm font-black shadow-xl shadow-primary/20 scale-110" aria-current="page">1</button>
                                    </li>
                                    <li>
                                        <button className="w-12 h-12 flex items-center justify-center rounded-2xl border-2 border-slate-100 dark:border-slate-800 text-slate-500 font-bold hover:bg-slate-50 transition-all">2</button>
                                    </li>
                                    <li>
                                        <button className="w-12 h-12 flex items-center justify-center rounded-2xl border-2 border-slate-100 dark:border-slate-800 text-slate-500 font-bold hover:bg-slate-50 transition-all">3</button>
                                    </li>
                                    <li>
                                        <button className="w-12 h-12 flex items-center justify-center rounded-2xl border-2 border-slate-100 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary/20 transition-all">
                                            <span className="material-icons">chevron_right</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default OrderHistory;
