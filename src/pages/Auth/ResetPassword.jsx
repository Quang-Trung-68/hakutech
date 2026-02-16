import React, { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Mật khẩu nhập lại không khớp!');
            return;
        }

        if (password.length < 8) {
            setError('Mật khẩu phải có ít nhất 8 ký tự.');
            return;
        }

        // Mock password reset logic
        console.log('Resetting password with token:', token, 'New Password:', password);
        setSuccess('Đặt lại mật khẩu thành công!');
        
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    return (
        <main id="main-content" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để đặt lại mật khẩu mới
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
                            Đặt lại mật khẩu
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                            Tạo mật khẩu mới an toàn cho tài khoản của bạn
                        </p>
                    </div>
                    
                    {token ? (
                        <form className="space-y-6" onSubmit={handleSubmit} aria-label="Form đặt mật khẩu mới">
                            {error && (
                                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl text-red-600 dark:text-red-400 text-sm font-bold flex items-center gap-3 animate-shake">
                                    <span className="material-icons text-lg">error_outline</span>
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl text-emerald-600 dark:text-emerald-400 text-sm font-bold flex items-center gap-3">
                                    <span className="material-icons text-lg">check_circle_outline</span>
                                    {success}
                                </div>
                            )}

                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="password" className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 ml-1">
                                        Mật khẩu mới
                                    </label>
                                    <div className="relative group">
                                        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" aria-hidden="true">lock</span>
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="new-password"
                                            required
                                            className="appearance-none block w-full pl-12 pr-14 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none"
                                            placeholder="Tối thiểu 8 ký tự"
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

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 ml-1">
                                        Xác nhận mật khẩu
                                    </label>
                                    <div className="relative group">
                                        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" aria-hidden="true">verified_user</span>
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            autoComplete="new-password"
                                            required
                                            className="appearance-none block w-full pl-12 pr-14 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none"
                                            placeholder="Nhập lại mật khẩu"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            aria-required="true"
                                        />
                                        <button 
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
                                            aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                                        >
                                            <span className="material-icons text-xl">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 dark:focus:ring-offset-slate-950 transition-all shadow-xl shadow-primary/20 active:scale-95 cursor-pointer min-h-[56px]"
                            >
                                Cập nhật mật khẩu
                            </button>
                        </form>
                    ) : (
                        <div className="text-center py-6">
                            <div className="w-20 h-20 bg-rose-500/10 text-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner animate-pulse">
                                <span className="material-icons text-4xl" aria-hidden="true">history</span>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Token hết hạn</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium mb-10 leading-relaxed px-4">
                                Đường dẫn đặt lại mật khẩu của bạn đã hết hạn hoặc không hợp lệ. Vui lòng yêu cầu một đường dẫn mới.
                            </p>
                            <Link to="/forgot-password" className="w-full inline-block py-4 text-xs font-black uppercase tracking-widest text-primary border-2 border-primary/10 rounded-2xl hover:bg-primary/5 transition-all active:scale-95">
                                Gửi lại yêu cầu
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default ResetPassword;
