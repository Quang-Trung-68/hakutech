import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <main id="main-content" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-inter overflow-hidden relative">
            {/* Background Decorative Blurs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>

            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem thông báo lỗi
            </a>

            <div className="max-w-xl w-full animate-fadeIn relative z-10">
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-white dark:border-slate-800 text-center">
                    {/* Error Illustration */}
                    <div className="relative mb-12 flex justify-center">
                        <span className="text-[12rem] sm:text-[15rem] font-black text-slate-100 dark:text-slate-800/30 leading-none select-none">404</span>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                             <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 text-primary rounded-[2.5rem] flex items-center justify-center shadow-inner animate-bounce mb-2">
                                <span className="material-icons text-5xl sm:text-7xl" aria-hidden="true">explore_off</span>
                            </div>
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="mb-12">
                        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                            Lạc đường rồi bạn ơi!
                        </h1>
                        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md mx-auto">
                            Trang bạn đang tìm kiếm có thể đã tuyệt chủng hoặc đang đi du lịch ở một vũ trụ khác.
                        </p>
                    </div>

                    {/* Quick navigation links */}
                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <Link to="/category" className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all group shadow-sm focus:ring-4 focus:ring-primary/20 outline-none">
                            <span className="material-icons text-slate-400 group-hover:text-primary mb-3 block text-3xl transition-colors" aria-hidden="true">grid_view</span>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">Sản phẩm</span>
                        </Link>
                        <Link to="/promotions" className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all group shadow-sm focus:ring-4 focus:ring-primary/20 outline-none">
                            <span className="material-icons text-slate-400 group-hover:text-primary mb-3 block text-3xl transition-colors" aria-hidden="true">local_fire_department</span>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">Khuyến mãi</span>
                        </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/"
                            className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-8 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 min-h-[56px]"
                        >
                            <span className="material-icons text-xl" aria-hidden="true">home</span>
                            Về trang chủ
                        </Link>
                        <button
                            onClick={() => navigate(-1)}
                            className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-8 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-white text-sm font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95 min-h-[56px] cursor-pointer"
                        >
                            <span className="material-icons text-xl" aria-hidden="true">arrow_back</span>
                            Quay lại
                        </button>
                    </div>
                </div>
                
                {/* Support Footer */}
                <div className="mt-10 text-center">
                    <p className="text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
                        Cần trợ giúp? <Link to="/support" className="text-primary font-black hover:underline underline-offset-4">Ghé thăm trung tâm hỗ trợ</Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
