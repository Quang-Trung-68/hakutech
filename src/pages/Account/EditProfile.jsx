import React, { useState } from 'react';
import AccountSidebar from './AccountSidebar';

const EditProfile = () => {
    const [profile, setProfile] = useState({
        fullName: 'Haku User',
        email: 'user@haku.com',
        phone: '0987654321',
        gender: 'male',
        birthday: '1995-01-01'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock API call
        console.log('Update profile:', profile);
        alert('Cập nhật thông tin thành công!');
    };

    return (
        <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-inter py-10 sm:py-20">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để chỉnh sửa hồ sơ
            </a>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <AccountSidebar />

                    {/* Main Content */}
                    <div className="flex-1 animate-fadeIn">
                        <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl px-8 py-10 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-white dark:border-slate-800" aria-labelledby="profile-heading">
                            <div className="mb-10 text-center sm:text-left border-b border-slate-100 dark:border-slate-800 pb-8">
                                <h1 id="profile-heading" className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Hồ sơ của tôi</h1>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">Quản lý và cập nhật thông tin cá nhân để bảo mật tài khoản</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="flex flex-col-reverse lg:flex-row gap-12 sm:gap-16">
                                 {/* Form Fields */}
                                <div className="flex-grow space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label htmlFor="fullName" className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Họ và tên</label>
                                            <div className="relative group">
                                                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl" aria-hidden="true">person</span>
                                                <input 
                                                    id="fullName"
                                                    type="text" 
                                                    name="fullName" 
                                                    value={profile.fullName} 
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white outline-none"
                                                    placeholder="Nhập họ tên"
                                                    aria-required="true"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3 opacity-80">
                                            <div className="flex items-center justify-between ml-1">
                                                <label htmlFor="email" className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Địa chỉ Email</label>
                                                <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-widest">Đã xác thực</span>
                                            </div>
                                            <div className="relative">
                                                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600 transition-colors text-xl" aria-hidden="true">mail</span>
                                                <input 
                                                    id="email"
                                                    type="email" 
                                                    name="email" 
                                                    value={profile.email} 
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-100 dark:bg-slate-800/30 border-2 border-transparent rounded-2xl font-bold text-sm text-slate-400 dark:text-slate-600 italic cursor-not-allowed outline-none"
                                                    disabled
                                                    aria-disabled="true"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between ml-1">
                                                <label htmlFor="phone" className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Số điện thoại</label>
                                                <button type="button" className="text-[10px] font-black text-primary hover:underline underline-offset-4 uppercase tracking-widest">Thay đổi</button>
                                            </div>
                                            <div className="relative group">
                                                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl" aria-hidden="true">phone_iphone</span>
                                                <input 
                                                    id="phone"
                                                    type="tel" 
                                                    name="phone" 
                                                    value={profile.phone} 
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white outline-none"
                                                    placeholder="Nhập số điện thoại"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label htmlFor="birthday" className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Ngày sinh</label>
                                            <div className="relative group">
                                                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl" aria-hidden="true">cake</span>
                                                <input 
                                                    id="birthday"
                                                    type="date" 
                                                    name="birthday"
                                                    value={profile.birthday}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <fieldset className="space-y-4 pt-4">
                                        <legend className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 mb-4">Giới tính</legend>
                                        <div className="flex flex-wrap gap-4 sm:gap-6">
                                            {[
                                                { id: 'male', label: 'Nam', icon: 'male' },
                                                { id: 'female', label: 'Nữ', icon: 'female' },
                                                { id: 'other', label: 'Khác', icon: 'transgender' }
                                            ].map((option) => (
                                                <label key={option.id} className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all cursor-pointer select-none ${profile.gender === option.id ? 'bg-primary/5 border-primary text-primary shadow-lg shadow-primary/5 scale-105' : 'bg-white dark:bg-slate-800/50 border-slate-50 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-slate-200'}`}>
                                                    <input 
                                                        type="radio" 
                                                        name="gender" 
                                                        value={option.id} 
                                                        checked={profile.gender === option.id} 
                                                        onChange={handleChange}
                                                        className="hidden"
                                                    />
                                                    <span className="material-icons text-xl">{option.icon}</span>
                                                    <span className="text-sm font-black uppercase tracking-widest">{option.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </fieldset>

                                    <div className="pt-10 flex flex-col sm:flex-row gap-4">
                                        <button 
                                            type="submit" 
                                            className="px-10 py-4 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary/90 focus:ring-4 focus:ring-primary/40 transition-all shadow-xl shadow-primary/20 active:scale-95"
                                        >
                                            Lưu thay đổi
                                        </button>
                                        <button 
                                            type="reset"
                                            className="px-10 py-4 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm font-black uppercase tracking-widest rounded-2xl hover:bg-slate-100 transition-all active:scale-95"
                                        >
                                            Hủy bỏ
                                        </button>
                                    </div>
                                </div>

                                 {/* Avatar Upload */}
                                <aside className="w-full lg:w-72 shrink-0 flex flex-col items-center lg:border-l border-slate-100 dark:border-slate-800 pl-0 lg:pl-12 py-4">
                                    <div className="relative group mb-8">
                                        <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl bg-slate-50 dark:bg-slate-800">
                                            <img 
                                                src="https://ui-avatars.com/api/?name=Haku+Tech&background=0da2e7&color=fff&size=512" 
                                                alt="Avatar hiện tại" 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <span className="material-icons text-4xl text-white mb-2" aria-hidden="true">add_a_photo</span>
                                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Thay đổi ảnh</span>
                                            </div>
                                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" aria-label="Tải ảnh đại diện mới" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4 text-center">
                                        <button type="button" className="w-full px-6 py-3 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all shadow-sm">
                                            Chọn từ máy tính
                                        </button>
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Định dạng hỗ trợ</p>
                                            <p className="text-[11px] font-medium text-slate-400">Dung lượng tối đa 2MB. JPG, PNG, WEBP.</p>
                                        </div>
                                    </div>
                                </aside>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EditProfile;
