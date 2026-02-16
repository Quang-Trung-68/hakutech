import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

const VerifyEmailSuccess = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        // Mock: Verify the token from URL
        const token = searchParams.get('token');
        console.log('Verifying token:', token);

        // Countdown redirect
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate('/login');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate, searchParams]);

    return (
        <main id="main-content" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem thông báo thành công
            </a>

            <div className="max-w-md w-full animate-fadeIn">
                 {/* Logo / Brand */}
                <div className="text-center mb-10">
                    <Link to="/" className="inline-block focus:outline-none focus:ring-4 focus:ring-primary/20 rounded-2xl p-2 transition-all hover:scale-105">
                        <span className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white">
                            HAKU<span className="text-primary">TECH</span>
                        </span>
                    </Link>
                </div>

                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-white dark:border-slate-800 text-center">
                    {/* Success Icon with Animation */}
                    <div className="mx-auto w-24 h-24 bg-emerald-500/10 text-emerald-600 rounded-[2rem] flex items-center justify-center mb-10 shadow-inner relative">
                        <span className="absolute inset-0 bg-emerald-500/20 rounded-[2rem] animate-ping opacity-20"></span>
                        <span className="material-icons text-5xl relative z-10" aria-hidden="true">verified</span>
                    </div>

                    {/* Title */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                            Xác thực thành công!
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            Email của bạn đã được xác nhận. Chào mừng bạn gia nhập hệ sinh thái HakuTech.
                        </p>
                    </div>

                    {/* Features Unlocked Box */}
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 mb-8 overflow-hidden relative">
                         <div className="absolute -right-4 -top-4 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl"></div>
                         <h2 className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Đã mở khóa tính năng</span>
                        </h2>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300 font-medium">
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-emerald-500 text-lg">check_circle</span>
                                <span>Mua sắm và tích điểm thành viên</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-emerald-500 text-lg">check_circle</span>
                                <span>Theo dõi đơn hàng thời gian thực</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-emerald-500 text-lg">check_circle</span>
                                <span>Nhận ưu đãi độc quyền qua Email</span>
                            </li>
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4">
                        <button
                            onClick={() => navigate('/login')}
                            className="w-full flex justify-center py-4 px-4 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 dark:focus:ring-offset-slate-950 transition-all shadow-xl shadow-primary/20 active:scale-95 cursor-pointer min-h-[56px]"
                        >
                            Đăng nhập ngay
                        </button>
                        <Link
                            to="/"
                            className="w-full inline-block py-4 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-primary transition-all active:scale-95"
                        >
                            Về trang chủ
                        </Link>
                    </div>

                    {/* Auto Redirect Footer */}
                    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                             Chuyển hướng sau <span className="text-primary text-sm">{countdown}s</span>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default VerifyEmailSuccess;
