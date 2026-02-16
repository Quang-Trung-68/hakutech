import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const EmailVerification = () => {
    const [email] = useState('user@example.com'); // Mock email from user data
    const [resendDisabled, setResendDisabled] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setResendDisabled(false);
        }
    }, [countdown]);

    const handleResendEmail = () => {
        // Mock API call to resend verification email
        console.log('Resending verification email to:', email);
        setResendDisabled(true);
        setCountdown(60); // 60 seconds cooldown
    };

    return (
        <main id="main-content" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem xác thực email
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
                    {/* Icon */}
                    <div className="mx-auto w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mb-8 shadow-inner animate-pulse">
                        <span className="material-icons text-5xl text-primary" aria-hidden="true">mark_email_unread</span>
                    </div>

                    {/* Title */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                            Xác thực Email
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium mb-2">
                            Chúng tôi đã gửi mã xác nhận đến
                        </p>
                        <p className="text-lg font-black text-primary bg-primary/5 px-4 py-2 rounded-xl inline-block border border-primary/10">
                            {email}
                        </p>
                    </div>

                    {/* Message Box */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl text-left border border-slate-100 dark:border-slate-700 mb-8">
                        <h2 className="font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                            <span className="material-icons text-primary text-lg" aria-hidden="true">tips_and_updates</span>
                            Tiếp theo là gì?
                        </h2>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                            <li className="flex items-start gap-3">
                                <span className="w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">1</span>
                                <span>Kiểm tra hộp thư đến của bạn (bao gồm thư rác)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">2</span>
                                <span>Nhấn vào nút "Xác nhận địa chỉ Email"</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">3</span>
                                <span>Bạn sẽ tự động được chuyển về HakuTech</span>
                            </li>
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4">
                        <button
                            onClick={handleResendEmail}
                            disabled={resendDisabled}
                            className={`w-full py-4 px-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer min-h-[56px] ${
                                resendDisabled
                                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed shadow-none'
                                    : 'bg-primary text-white hover:bg-primary/90 shadow-primary/20'
                            }`}
                        >
                            {resendDisabled ? `Gửi lại sau ${countdown}s` : 'Gửi lại email xác thực'}
                        </button>
                        
                        <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                             <button
                                onClick={() => navigate('/account/profile')}
                                className="text-xs font-black text-slate-400 dark:text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
                            >
                                Thay đổi địa chỉ email?
                            </button>
                            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                Đã xác thực? <Link to="/login" className="font-black text-primary hover:underline underline-offset-4 ml-1">Đăng nhập</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EmailVerification;
