import React from 'react';
import { Link } from 'react-router-dom';

const StoreSystem = () => {
    return (
        <main className="flex h-[calc(100vh-80px)] overflow-hidden bg-slate-50 dark:bg-background-dark">
            {/* Sidebar List */}
            <aside className="w-full lg:w-[40%] bg-white dark:bg-background-dark border-r border-slate-200 dark:border-slate-800 flex flex-col z-20 shadow-xl lg:shadow-none">
                {/* Search Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-background-dark">
                    <h1 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="material-icons text-primary">storefront</span>
                        Hệ thống cửa hàng
                    </h1>
                    <div className="relative">
                        <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white placeholder:text-slate-400 font-medium" placeholder="Tìm theo quận, tên đường..." type="text" />
                        <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white dark:bg-slate-700 rounded-lg text-slate-500 hover:text-primary shadow-sm border border-slate-100 dark:border-slate-600 transition-colors">
                            <span className="material-icons text-lg">tune</span>
                        </button>
                    </div>
                    {/* Filter Tags */}
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                        <button className="flex-shrink-0 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold whitespace-nowrap">Tất cả (24)</button>
                        <button className="flex-shrink-0 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-xs font-bold whitespace-nowrap transition-colors">Hà Nội (12)</button>
                        <button className="flex-shrink-0 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-xs font-bold whitespace-nowrap transition-colors">TP.HCM (8)</button>
                        <button className="flex-shrink-0 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-xs font-bold whitespace-nowrap transition-colors">Đà Nẵng (4)</button>
                         <button className="flex-shrink-0 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-xs font-bold whitespace-nowrap transition-colors">Gần đây</button>

                    </div>
                </div>

                {/* Store List */}
                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                     {/* Store Item 1 (Active) */}
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-primary shadow-lg cursor-pointer transition-all relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">Đang mở cửa</div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">HakuTech Thái Hà</h3>
                        <p className="text-sm text-slate-500 mb-3 flex items-start gap-1">
                            <span className="material-icons text-sm mt-0.5">location_on</span>
                            102 Thái Hà, Quận Đống Đa, Hà Nội
                        </p>
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400 mb-4 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                            <div className="flex items-center gap-1">
                                <span className="material-icons text-sm text-green-500">call</span>
                                024.3533.8888
                            </div>
                            <div className="h-3 w-px bg-slate-300"></div>
                            <div className="flex items-center gap-1">
                                <span className="material-icons text-sm text-blue-500">schedule</span>
                                8:00 - 21:00
                            </div>
                        </div>
                        <div className="flex gap-2">
                             <button className="flex-1 bg-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">Chỉ đường</button>
                             <button className="flex-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 text-sm font-bold py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">Chi tiết</button>
                        </div>
                    </div>

                    {/* Store Item 2 */}
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-slate-600 cursor-pointer transition-all group">
                         <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">HakuTech Cầu Giấy</h3>
                            <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">Mở cửa</span>
                        </div>
                        <p className="text-sm text-slate-500 mb-3 flex items-start gap-1">
                            <span className="material-icons text-sm mt-0.5">location_on</span>
                            215 Cầu Giấy, Quận Cầu Giấy, Hà Nội
                        </p>
                         <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                             <div className="flex items-center gap-1">
                                <span className="material-icons text-sm">call</span>
                                024.3767.9999
                            </div>
                             <div className="h-3 w-px bg-slate-300"></div>
                             <div>Cách bạn 3.5km</div>
                        </div>
                    </div>

                    {/* Store Item 3 */}
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-slate-600 cursor-pointer transition-all group">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">HakuTech Xã Đàn</h3>
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">8:00 - 22:00</span>
                        </div>
                        <p className="text-sm text-slate-500 mb-3 flex items-start gap-1">
                            <span className="material-icons text-sm mt-0.5">location_on</span>
                            450 Xã Đàn, Quận Đống Đa, Hà Nội
                        </p>
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-1">
                                <span className="material-icons text-sm">call</span>
                                024.3572.6666
                            </div>
                            <div className="h-3 w-px bg-slate-300"></div>
                             <div>Cách bạn 5.2km</div>
                        </div>
                    </div>
                </div>
                {/* Footer of Sidebar */}
                <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
                    Hiển thị 3 trên 24 cửa hàng
                </div>
            </aside>

            {/* Map Section */}
            <section className="hidden lg:block w-[60%] bg-slate-200 dark:bg-slate-700 relative h-full">
                <img className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNn_EQUTNb9A9Cw4PQ-11so3vuQDiyayns13Ok-l3qeiQpGI6b_P63W2Lmibs0BzJR97mLpwbuylWYqVaVu4Es16ncgGpATvt3LXTnryRJvh_RyVVumGhH1GDRU40hz95MovP-lYz59R1cHHGqwVxQVCzUmMlWHU0aqofIwG0FT3uR2DajCW_EzENd1eVusVLb3GzErXkU2kx0r3Pq0KF0lfvoT30SnCj6QAz4vtubCNdBgqn2C4PTeUJV_kc19n35z6PwbAwi34M" alt="Map" />
                {/* Map Pins (Simulated) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <span className="material-icons text-5xl text-primary drop-shadow-2xl animate-bounce">location_on</span>
                </div>
                <div className="absolute top-1/3 left-1/3">
                    <span className="material-icons text-4xl text-slate-600 drop-shadow-xl hover:text-primary cursor-pointer transition-colors">location_on</span>
                </div>
                <div className="absolute bottom-1/3 right-1/4">
                    <span className="material-icons text-4xl text-slate-600 drop-shadow-xl hover:text-primary cursor-pointer transition-colors">location_on</span>
                </div>

                {/* Map Controls */}
                <div className="absolute bottom-8 right-8 flex flex-col gap-2">
                    <button className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold hover:bg-slate-50 dark:hover:bg-slate-700">+</button>
                    <button className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold hover:bg-slate-50 dark:hover:bg-slate-700">-</button>
                    <button className="w-10 h-10 bg-blue-500 rounded-lg shadow-lg text-white flex items-center justify-center mt-2 hover:bg-blue-600">
                        <span className="material-icons text-sm">my_location</span>
                    </button>
                </div>
            </section>
        </main>
    );
};

export default StoreSystem;
