import React, { useState } from 'react';
import AccountSidebar from './AccountSidebar';

const ChangePassword = () => {
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState({ type: '', content: '' });
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage({ type: '', content: '' });

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setMessage({ type: 'error', content: 'Mật khẩu xác nhận không khớp!' });
            return;
        }

        if (passwordData.currentPassword === '') {
            setMessage({ type: 'error', content: 'Vui lòng nhập mật khẩu hiện tại.' });
            return;
        }
        
        if (passwordData.newPassword.length < 8) {
            setMessage({ type: 'error', content: 'Mật khẩu mới phải có ít nhất 8 ký tự.' });
            return;
        }

        // Mock API call
        console.log('Changing password:', passwordData);
        setMessage({ type: 'success', content: 'Mật khẩu của bạn đã được cập nhật thành công!' });
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    };

    return (
        <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-inter py-10 sm:py-20">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để đổi mật khẩu
            </a>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <AccountSidebar />

                    {/* Main Content */}
                    <div className="flex-1 animate-fadeIn">
                        <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-white dark:border-slate-800 max-w-2xl" aria-labelledby="password-heading">
                            <div className="mb-10 text-center sm:text-left border-b border-slate-100 dark:border-slate-800 pb-8">
                                <h1 id="password-heading" className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Đổi mật khẩu</h1>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">Để bảo vệ tài khoản, chúng tôi khuyến nghị bạn nên đổi mật khẩu định kỳ 3 - 6 tháng một lần.</p>
                            </div>

                            {message.content && (
                                <div className={`p-5 mb-10 rounded-2xl text-sm font-bold flex items-center gap-4 animate-shake overflow-hidden relative border ${
                                    message.type === 'success' 
                                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' 
                                        : 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20'
                                }`}>
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${message.type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                                    <span className="material-icons text-xl" aria-hidden="true">
                                        {message.type === 'success' ? 'verified' : 'report_problem'}
                                    </span>
                                    {message.content}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-8" aria-label="Form thay đổi mật khẩu">
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label htmlFor="currentPassword" className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Mật khẩu hiện tại</label>
                                        <div className="relative group">
                                            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl" aria-hidden="true">lock_open</span>
                                            <input 
                                                id="currentPassword"
                                                type={showPasswords.current ? "text" : "password"} 
                                                name="currentPassword" 
                                                value={passwordData.currentPassword} 
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-14 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white outline-none"
                                                placeholder="Nhập mật khẩu đang sử dụng"
                                                aria-required="true"
                                            />
                                            <button 
                                                type="button" 
                                                onClick={() => togglePasswordVisibility('current')}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
                                                aria-label={showPasswords.current ? "Ẩn mật khẩu hiện tại" : "Hiện mật khẩu hiện tại"}
                                            >
                                                <span className="material-icons text-xl">{showPasswords.current ? 'visibility_off' : 'visibility'}</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="newPassword" className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Mật khẩu mới</label>
                                        <div className="relative group">
                                            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl" aria-hidden="true">lock</span>
                                            <input 
                                                id="newPassword"
                                                type={showPasswords.new ? "text" : "password"} 
                                                name="newPassword" 
                                                value={passwordData.newPassword} 
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-14 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white outline-none"
                                                placeholder="Tối thiểu 8 ký tự"
                                                required
                                            />
                                            <button 
                                                type="button" 
                                                onClick={() => togglePasswordVisibility('new')}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
                                                aria-label={showPasswords.new ? "Ẩn mật khẩu mới" : "Hiện mật khẩu mới"}
                                            >
                                                <span className="material-icons text-xl">{showPasswords.new ? 'visibility_off' : 'visibility'}</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="confirmPassword" className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Xác nhận mật khẩu mới</label>
                                        <div className="relative group">
                                            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl" aria-hidden="true">verified_user</span>
                                            <input 
                                                id="confirmPassword"
                                                type={showPasswords.confirm ? "text" : "password"} 
                                                name="confirmPassword" 
                                                value={passwordData.confirmPassword} 
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-14 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white outline-none"
                                                placeholder="Nhập lại mật khẩu mới"
                                                required
                                            />
                                            <button 
                                                type="button" 
                                                onClick={() => togglePasswordVisibility('confirm')}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
                                                aria-label={showPasswords.confirm ? "Ẩn xác nhận mật khẩu mới" : "Hiện xác nhận mật khẩu mới"}
                                            >
                                                <span className="material-icons text-xl">{showPasswords.confirm ? 'visibility_off' : 'visibility'}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <Link to="/forgot-password" size="sm" className="text-[11px] font-black uppercase tracking-widest text-primary hover:underline underline-offset-4">
                                        Quên mật khẩu?
                                    </Link>
                                    <button 
                                        type="submit" 
                                        className="w-full sm:w-auto px-12 py-4 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary/90 focus:ring-4 focus:ring-primary/40 transition-all shadow-xl shadow-primary/20 active:scale-95"
                                    >
                                        Cập nhật mật khẩu
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ChangePassword;
