import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login logic
        console.log('Logging in with:', email, password);
        // Redirect to homepage after login
        navigate('/');
    };

    const handleSocialLogin = (platform) => {
        console.log(`Login with ${platform}`);
    };

    return (
        <main id="main-content" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để đăng nhập
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
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                            Chào mừng trở lại
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                            Đăng nhập để trải nghiệm công nghệ đỉnh cao
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin} aria-label="Form đăng nhập">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="email-address" className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 ml-1">
                                    Email hoặc Số điện thoại
                                </label>
                                <div className="relative group">
                                    <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" aria-hidden="true">mail</span>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="text"
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
                            
                            <div>
                                <div className="flex items-center justify-between mb-2 ml-1">
                                    <label htmlFor="password" className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                        Mật khẩu
                                    </label>
                                    <Link to="/forgot-password" size="sm" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary/80 focus:outline-none focus:underline underline-offset-4">
                                        Quên mật khẩu?
                                    </Link>
                                </div>
                                <div className="relative group">
                                    <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" aria-hidden="true">lock</span>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full pl-12 pr-14 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        aria-required="true"
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
                                        aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                                    >
                                        <span className="material-icons text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 dark:focus:ring-offset-slate-950 transition-all shadow-xl shadow-primary/20 active:scale-95 cursor-pointer min-h-[56px]"
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </form>

                    <div className="mt-10">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
                            </div>
                            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                                <span className="px-4 bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 rounded-full">
                                    Hoặc đăng nhập với
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleSocialLogin('Google')}
                                className="w-full inline-flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-700 rounded-2xl shadow-sm text-xs font-black text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-100 dark:hover:border-slate-600 transition-all uppercase tracking-widest min-h-[48px] cursor-pointer"
                                aria-label="Đăng nhập bằng Google"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                                </svg>
                                Google
                            </button>

                            <button
                                onClick={() => handleSocialLogin('Facebook')}
                                className="w-full inline-flex items-center justify-center gap-3 py-3 px-4 bg-[#1877F2] border-2 border-[#1877F2] rounded-2xl shadow-lg shadow-blue-500/20 text-xs font-black text-white hover:opacity-90 transition-all uppercase tracking-widest min-h-[48px] cursor-pointer"
                                aria-label="Đăng nhập bằng Facebook"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 space-y-2">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Chưa có tài khoản?{' '}
                        <Link to="/register" className="font-black text-primary hover:text-primary/80 focus:outline-none focus:underline underline-offset-4 ml-1">
                            Đăng ký ngay
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Login;
