import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Mật khẩu nhập lại không khớp!');
            return;
        }
        if (!formData.agreeTerms) {
            alert('Bạn cần đồng ý với điều khoản sử dụng!');
            return;
        }
        // Mock register logic
        console.log('Registering with:', formData);
        // Redirect to login or home
        navigate('/login');
    };

    return (
        <main id="main-content" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để đăng ký
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
                            Đăng ký tài khoản
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                            Tham gia cùng HakuTech ngay hôm nay
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleRegister} aria-label="Form đăng ký tài khoản">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="fullName" className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 ml-1">
                                    Họ và tên
                                </label>
                                <div className="relative group">
                                    <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" aria-hidden="true">person</span>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        required
                                        className="appearance-none block w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none"
                                        placeholder="Nguyễn Văn A"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        aria-required="true"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email-address" className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 ml-1">
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
                                        value={formData.email}
                                        onChange={handleChange}
                                        aria-required="true"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="password" className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 ml-1">
                                    Mật khẩu
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
                                        value={formData.password}
                                        onChange={handleChange}
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
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
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

                        <div className="flex items-start gap-3 mt-4 ml-1">
                            <div className="relative flex items-center h-6">
                                <input
                                    id="agreeTerms"
                                    name="agreeTerms"
                                    type="checkbox"
                                    className="h-5 w-5 text-primary focus:ring-4 focus:ring-primary/20 border-2 border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer transition-all checked:bg-primary"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    aria-required="true"
                                />
                            </div>
                            <label htmlFor="agreeTerms" className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-tight select-none cursor-pointer">
                                Tôi đã đọc và đồng ý với <a href="#" className="font-black text-primary hover:underline underline-offset-2">Điều khoản sử dụng</a> và <a href="#" className="font-black text-primary hover:underline underline-offset-2">Chính sách bảo mật</a>
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 dark:focus:ring-offset-slate-950 transition-all shadow-xl shadow-primary/20 active:scale-95 cursor-pointer min-h-[56px]"
                            >
                                Đăng ký ngay
                            </button>
                        </div>
                    </form>
                </div>

                <div className="text-center mt-8 space-y-2 pb-8">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Đã có tài khoản?{' '}
                        <Link to="/login" className="font-black text-primary hover:text-primary/80 focus:outline-none focus:underline underline-offset-4 ml-1">
                            Đăng nhập
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Register;
