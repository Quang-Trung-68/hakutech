import React from 'react';

const StoreSystem = () => {
    return (
        <main id="main-content" className="flex h-[calc(100vh-80px)] overflow-hidden bg-slate-50 dark:bg-slate-950 font-inter">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem danh sách cửa hàng
            </a>

            {/* Sidebar List */}
            <aside className="w-full lg:w-[40%] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col z-20 shadow-2xl lg:shadow-none" aria-labelledby="store-list-heading">
                {/* Search Header */}
                <header className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <h1 id="store-list-heading" className="text-2xl sm:text-3xl font-black mb-6 text-slate-900 dark:text-white flex items-center gap-3 tracking-tight">
                        <span className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                            <span className="material-icons" aria-hidden="true">storefront</span>
                        </span>
                        Hệ thống cửa hàng
                    </h1>
                    <div className="relative group">
                        <input 
                            className="w-full pl-12 pr-14 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none" 
                            placeholder="Tìm theo quận, tên đường..." 
                            type="search" 
                            aria-label="Tìm kiếm địa chỉ cửa hàng"
                        />
                        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" aria-hidden="true">search</span>
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-slate-700 rounded-xl text-slate-500 hover:text-primary shadow-sm border border-slate-100 dark:border-slate-600 transition-all hover:scale-105" aria-label="Bộ lọc tìm kiếm">
                            <span className="material-icons text-xl">tune</span>
                        </button>
                    </div>
                    {/* Filter Tags */}
                    <nav className="flex gap-2 mt-6 overflow-x-auto pb-2 no-scrollbar" aria-label="Lọc cửa hàng theo thành phố">
                        <button className="flex-shrink-0 px-4 py-2 bg-slate-900 dark:bg-primary text-white rounded-xl text-xs font-black whitespace-nowrap shadow-lg shadow-slate-200 dark:shadow-primary/20 transition-all active:scale-95" aria-current="true">Tất cả (24)</button>
                        <button className="flex-shrink-0 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-xs font-black whitespace-nowrap transition-all focus:ring-2 focus:ring-primary">Hà Nội (12)</button>
                        <button className="flex-shrink-0 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-xs font-black whitespace-nowrap transition-all focus:ring-2 focus:ring-primary">TP.HCM (8)</button>
                        <button className="flex-shrink-0 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-xs font-black whitespace-nowrap transition-all focus:ring-2 focus:ring-primary">Đà Nẵng (4)</button>
                    </nav>
                </header>

                {/* Store List */}
                <ul className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-6 no-scrollbar" role="list">
                     {/* Store Item 1 (Active) */}
                    <li className="bg-white dark:bg-slate-800 p-6 rounded-3xl border-2 border-primary shadow-xl shadow-primary/5 cursor-pointer transition-all relative overflow-hidden group focus-within:ring-4 focus-within:ring-primary/20">
                        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-2xl shadow-lg" role="status">Đang mở cửa</div>
                        <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2 tracking-tight">HakuTech Thái Hà</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-start gap-2 leading-relaxed">
                            <span className="material-icons text-primary text-lg" aria-hidden="true">location_on</span>
                            102 Thái Hà, Quận Đống Đa, Hà Nội
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-bold text-slate-600 dark:text-slate-300 mb-6 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                                <span className="material-icons text-emerald-500 text-base" aria-hidden="true">call</span>
                                <a href="tel:02435338888" className="hover:text-primary transition-colors focus:ring-2 focus:ring-primary rounded">024.3533.8888</a>
                            </div>
                            <div className="hidden sm:block h-3 w-px bg-slate-300 dark:bg-slate-700"></div>
                            <div className="flex items-center gap-2">
                                <span className="material-icons text-blue-500 text-base" aria-hidden="true">schedule</span>
                                8:00 - 21:00
                            </div>
                        </div>
                        <div className="flex gap-3">
                             <button className="flex-1 bg-primary text-white text-sm font-black py-3 rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 min-h-[44px]">Chỉ đường</button>
                             <button className="flex-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-white border-2 border-slate-100 dark:border-slate-600 text-sm font-black py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-600 transition-all active:scale-95 min-h-[44px]">Chi tiết</button>
                        </div>
                    </li>

                    {/* Store Item 2 */}
                    <li className="bg-white dark:bg-slate-800/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:bg-white dark:hover:bg-slate-800 cursor-pointer transition-all group focus-within:ring-4 focus-within:ring-primary/20">
                         <div className="flex justify-between items-start mb-2">
                            <h3 className="font-black text-xl text-slate-900 dark:text-white group-hover:text-primary transition-colors tracking-tight">HakuTech Cầu Giấy</h3>
                            <span className="text-[10px] font-black text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-full uppercase tracking-widest border border-emerald-200 dark:border-emerald-800" role="status">Mở cửa</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-start gap-2 leading-relaxed">
                            <span className="material-icons text-slate-400 text-lg group-hover:text-primary transition-colors" aria-hidden="true">location_on</span>
                            215 Cầu Giấy, Quận Cầu Giấy, Hà Nội
                        </p>
                         <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                             <div className="flex items-center gap-2">
                                <span className="material-icons text-sm" aria-hidden="true">call</span>
                                024.3767.9999
                            </div>
                             <div className="h-3 w-px bg-slate-300 dark:bg-slate-700"></div>
                             <div className="flex items-center gap-1">
                                <span className="material-icons text-sm" aria-hidden="true">navigation</span>
                                Cách bạn 3.5km
                             </div>
                        </div>
                    </li>

                    {/* Store Item 3 */}
                    <li className="bg-white dark:bg-slate-800/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:bg-white dark:hover:bg-slate-800 cursor-pointer transition-all group focus-within:ring-4 focus-within:ring-primary/20">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-black text-xl text-slate-900 dark:text-white group-hover:text-primary transition-colors tracking-tight">HakuTech Xã Đàn</h3>
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full tracking-wider border border-slate-200 dark:border-slate-700" role="status">8:00 - 22:00</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-start gap-2 leading-relaxed">
                            <span className="material-icons text-slate-400 text-lg group-hover:text-primary transition-colors" aria-hidden="true">location_on</span>
                            450 Xã Đàn, Quận Đống Đa, Hà Nội
                        </p>
                        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                                <span className="material-icons text-sm" aria-hidden="true">call</span>
                                024.3572.6666
                            </div>
                            <div className="h-3 w-px bg-slate-300 dark:bg-slate-700"></div>
                             <div className="flex items-center gap-1">
                                <span className="material-icons text-sm" aria-hidden="true">navigation</span>
                                Cách bạn 5.2km
                             </div>
                        </div>
                    </li>
                </ul>
                {/* Footer of Sidebar */}
                <footer className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    Hiển thị 3 trên 24 cửa hàng toàn quốc
                </footer>
            </aside>

            {/* Map Section */}
            <section className="hidden lg:block w-[60%] bg-slate-200 dark:bg-slate-700 relative h-full" aria-label="Bản đồ vị trí cửa hàng">
                <img 
                    className="w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-normal dark:grayscale dark:invert" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNn_EQUTNb9A9Cw4PQ-11so3vuQDiyayns13Ok-l3qeiQpGI6b_P63W2Lmibs0BzJR97mLpwbuylWYqVaVu4Es16ncgGpATvt3LXTnryRJvh_RyVVumGhH1GDRU40hz95MovP-lYz59R1cHHGqwVxQVCzUmMlWHU0aqofIwG0FT3uR2DajCW_EzENd1eVusVLb3GzErXkU2kx0r3Pq0KF0lfvoT30SnCj6QAz4vtubCNdBgqn2C4PTeUJV_kc19n35z6PwbAwi34M" 
                    alt="Bản đồ tương tác hiển thị vị trí các chi nhánh HakuTech" 
                />
                
                {/* Map Pins (Visual only for demonstration) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <span className="material-icons text-6xl text-primary drop-shadow-2xl animate-bounce" aria-hidden="true">location_on</span>
                </div>
                <div className="absolute top-1/3 left-1/3">
                    <button className="material-icons text-4xl text-slate-600 drop-shadow-xl hover:text-primary cursor-pointer transition-all hover:scale-125 focus:ring-4 focus:ring-primary/40 rounded-full" aria-label="Cửa hàng HakuTech Cầu Giấy">location_on</button>
                </div>
                <div className="absolute bottom-1/3 right-1/4">
                    <button className="material-icons text-4xl text-slate-600 drop-shadow-xl hover:text-primary cursor-pointer transition-all hover:scale-125 focus:ring-4 focus:ring-primary/40 rounded-full" aria-label="Cửa hàng HakuTech Chi nhánh Nam Từ Liêm">location_on</button>
                </div>

                {/* Map Controls */}
                <div className="absolute bottom-10 right-10 flex flex-col gap-3">
                    <div className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                        <button className="w-12 h-12 flex items-center justify-center font-black text-xl text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border-b border-slate-100 dark:border-slate-700" aria-label="Phóng to bản đồ">+</button>
                        <button className="w-12 h-12 flex items-center justify-center font-black text-xl text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors" aria-label="Thu nhỏ bản đồ">-</button>
                    </div>
                    <button className="w-12 h-12 bg-primary text-white rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-all hover:rotate-12 active:scale-95" aria-label="Định vị vị trí của tôi">
                        <span className="material-icons" aria-hidden="true">my_location</span>
                    </button>
                </div>

                {/* Info Overlay */}
                <div className="absolute top-10 right-10 max-w-xs bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white/20 dark:border-slate-700 shadow-2xl">
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">Đang chọn</p>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">HakuTech Thái Hà</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Phục vụ khách hàng từ năm 2014, là chi nhánh flagship lớn nhất khu vực miền Bắc.</p>
                </div>
            </section>
        </main>
    );
};

export default StoreSystem;
