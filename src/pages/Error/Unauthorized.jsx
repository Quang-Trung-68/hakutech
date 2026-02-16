import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate();

    return (
        <main id="main-content" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem thông báo truy cập
            </a>

            <div className="max-w-xl w-full animate-fadeIn">
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-white dark:border-slate-800 text-center">
                    {/* Access Denied Icon */}
                    <div className="relative mb-12 flex justify-center">
                        <span className="text-[12rem] sm:text-[15rem] font-black text-slate-100 dark:text-slate-800/30 leading-none select-none">401</span>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                             <div className="w-24 h-24 sm:w-32 sm:h-32 bg-amber-500/10 text-amber-600 rounded-[2.5rem] flex items-center justify-center shadow-inner relative overflow-hidden group">
                                <span className="absolute inset-0 bg-amber-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                                <span className="material-icons text-5xl sm:text-7xl relative z-10" aria-hidden="true">lock_person</span>
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-12">
                        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                            Khu vực hạn chế!
                        </h1>
                        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-sm mx-auto">
                            Rất tiếc, bạn cần phải đăng nhập để có thể tham gia vào trải nghiệm chuyên sâu này.
                        </p>
                    </div>

                    {/* Info Card */}
                    <div className="bg-amber-500/[0.03] dark:bg-amber-500/[0.05] p-6 sm:p-8 rounded-[2.5rem] border border-amber-500/10 mb-12 text-left">
                        <h2 className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-black text-xs uppercase tracking-[0.2em] mb-4">
                            <span className="material-icons text-lg" aria-hidden="true">notification_important</span>
                            Quyền lợi khi đăng nhập:
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                                <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                                    <span className="material-icons text-primary text-xs" aria-hidden="true">verified</span>
                                </span>
                                Nhận ưu đãi riêng
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                                <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                                    <span className="material-icons text-primary text-xs" aria-hidden="true">history</span>
                                </span>
                                Xem lịch sử đặt hàng
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                                <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                                    <span className="material-icons text-primary text-xs" aria-hidden="true">shopping_bag</span>
                                </span>
                                Checkout thần tốc
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                                <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                                    <span className="material-icons text-primary text-xs" aria-hidden="true">loyalty</span>
                                </span>
                                Điểm thưởng Haku
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-4">
                        <Link
                            to="/login"
                            className="w-full flex items-center justify-center gap-3 py-4.5 px-8 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 min-h-[56px]"
                        >
                            <span className="material-icons text-xl" aria-hidden="true">key</span>
                            Đăng nhập ngay
                        </Link>
                        <div className="grid grid-cols-2 gap-4">
                            <Link
                                to="/register"
                                className="inline-flex items-center justify-center gap-2 py-4 px-4 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95 min-h-[52px]"
                            >
                                Đăng ký
                            </Link>
                            <button
                                onClick={() => navigate(-1)}
                                className="inline-flex items-center justify-center gap-2 py-4 px-4 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95 min-h-[52px] cursor-pointer"
                            >
                                Quay lại
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Link to="/" className="text-sm font-black text-slate-400 dark:text-slate-500 hover:text-primary transition-colors uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                        <span className="material-icons text-sm" aria-hidden="true">arrow_back</span>
                        Trang chủ HakuTech
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Unauthorized;
