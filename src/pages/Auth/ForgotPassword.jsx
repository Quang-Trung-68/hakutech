import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock send reset link logic
        console.log('Sending reset link to:', email);
        setIsSubmitted(true);
    };

    return (
        <main id="main-content" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để đặt lại mật khẩu
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

                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-white dark:border-slate-800">
                    {!isSubmitted ? (
                        <>
                            <div className="mb-10 text-center">
                                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                                    Quên mật khẩu?
                                </h1>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed px-4">
                                    Nhập địa chỉ Email của bạn để nhận đường dẫn khôi phục mật khẩu.
                                </p>
                            </div>

                            <form className="space-y-8" onSubmit={handleSubmit} aria-label="Form lấy lại mật khẩu">
                                <div>
                                    <label htmlFor="email-address" className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3 ml-1">
                                        Địa chỉ Email
                                    </label>
                                    <div className="relative group">
                                        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" aria-hidden="true">mail</span>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none block w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none"
                                            placeholder="user@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            aria-required="true"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-4 px-4 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 dark:focus:ring-offset-slate-950 transition-all shadow-xl shadow-primary/20 active:scale-95 cursor-pointer min-h-[56px]"
                                >
                                    Gửi link khôi phục
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-4 animate-fadeIn">
                            <div className="w-20 h-20 bg-emerald-500/10 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <span className="material-icons text-4xl" aria-hidden="true">check_circle</span>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Yêu cầu đã được gửi</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium mb-10 leading-relaxed">
                                Chúng tôi đã gửi một liên kết đặt lại mật khẩu tới <span className="text-slate-900 dark:text-white font-black">{email}</span>. Vui lòng kiểm tra hộp thư của bạn.
                            </p>
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="w-full py-4 text-xs font-black uppercase tracking-widest text-primary border-2 border-primary/10 rounded-2xl hover:bg-primary/5 transition-all active:scale-95"
                            >
                                Gửi lại email khác
                            </button>
                        </div>
                    )}

                    <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
                        <Link to="/login" className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-primary transition-all group">
                            <span className="material-icons text-sm transition-transform group-hover:-translate-x-1" aria-hidden="true">arrow_back</span>
                            Quay lại Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ForgotPassword;
