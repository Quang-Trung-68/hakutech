import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AccountSidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logging out...');
        navigate('/login');
    };

    const menuItems = [
        { path: '/account', label: 'Bảng điều khiển', icon: 'dashboard' },
        { path: '/account/profile', label: 'Thông tin cá nhân', icon: 'person' },
        { path: '/account/password', label: 'Đổi mật khẩu', icon: 'lock_reset' },
        { path: '/account/orders', label: 'Lịch sử đơn hàng', icon: 'receipt_long' },
    ];

    return (
        <aside className="w-full lg:w-80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-white dark:border-slate-800 p-8 h-fit lg:sticky lg:top-24">
            {/* User Profile Summary */}
            <div className="flex flex-col items-center mb-10 text-center">
                <div className="relative group mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-50 dark:bg-slate-800 overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                        <img 
                            src="https://ui-avatars.com/api/?name=Haku+Tech&background=0da2e7&color=fff&size=200" 
                            alt="Ảnh đại diện" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <button className="absolute bottom-1 right-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all border-2 border-white dark:border-slate-900" aria-label="Thay đổi ảnh đại diện">
                         <span className="material-icons text-sm">photo_camera</span>
                    </button>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Haku User</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Thành viên từ 2024</p>
                <div className="mt-4 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Hạng Kim Cương</span>
                </div>
            </div>
            
            {/* Navigation Menu */}
            <nav className="space-y-2" aria-label="Menu tài khoản">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/account'}
                        className={({ isActive }) =>
                            `flex items-center gap-4 px-6 py-4 rounded-2xl text-[13px] font-black uppercase tracking-widest transition-all ${
                                isActive
                                    ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]'
                                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                            }`
                        }
                    >
                        <span className={`material-icons text-xl ${isActive ? 'text-white' : 'text-slate-400'}`} aria-hidden="true">{item.icon}</span>
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-[13px] font-black uppercase tracking-widest text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all active:scale-95 cursor-pointer"
                >
                    <span className="material-icons text-xl" aria-hidden="true">logout</span>
                    Đăng xuất
                </button>
            </div>
        </aside>
    );
};

export default AccountSidebar;
