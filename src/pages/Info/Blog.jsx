import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <main id="main-content" className="bg-white dark:bg-slate-950 font-inter selection:bg-primary/30">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem tin tức
            </a>

            {/* Featured Post Hero */}
            <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden" aria-labelledby="featured-blog-title">
                <div className="absolute inset-0">
                    <img 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPpOrk3lI5coRNykTLRGqiah_QKU0qhIF_fZe-0nSS__63V3t6g0YO-xRm4gpeIrw2zZdqPUV8leVXXptziTwlpp0SxOb_HgTfiKypd6DXZVcyT5B4jImT-uCviyKjx1LzBvuYutoP8TsBkICaTvtTYdxFR3FeYC1uOuH0_smSGIG1LOB5b18IkRHrQrEwII7L8vcyNjQODRYWtej9L730457XEGMcWF78L0dvlGQ-N9_ZqGzRto3RGxW3KEB3XHgskhcLq55aeSw" 
                        alt="Hình ảnh đại diện bài viết iPhone 15 Pro Max" 
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                </div>
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 sm:pb-20">
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-lg mb-4 shadow-lg shadow-primary/20" role="status">Đánh giá chuyên sâu</span>
                        <h1 id="featured-blog-title" className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                            Đánh giá chi tiết iPhone 15 Pro Max sau 6 tháng: <span className="text-primary">Sự lựa chọn hoàn hảo?</span>
                        </h1>
                        <p className="text-slate-200 text-base sm:text-lg mb-8 line-clamp-3 max-w-2xl hidden sm:block">
                            Sau nửa năm trải nghiệm thực tế, hãy cùng HakuTech nhìn lại những ưu và nhược điểm thực sự của chiếc flagship nhà Apple. Liệu khung viền Titan có bền như quảng cáo?
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl shadow-primary/30 active:scale-95 min-h-[44px] cursor-pointer focus:ring-4 focus:ring-primary/40">
                                Đọc bài viết ngay
                            </button>
                            <div className="flex items-center gap-3 text-white/90 text-sm font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                                <img className="w-10 h-10 rounded-full border-2 border-primary/50 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCttb41lm1oK-zpDkIRMSu5E9H792U6oEojvl1jDzjz5D6S4hq03qaNUa5uS3yBRCM-vsjeReQHGGHI6E_uzQH1tsR_S3hXS60d0YxfsECzvvqouayx4a7Ovv8N_wTFN6WS4w6XstxEIVmzXQSR4kvWsHWzxBOW6-a-T-zyk2XBBNT2wM4PNnhqeyuwRF7lceSioUnzsxIhCB6x0LtNHTPrHGs6ElwJOTvuwyWZYwd-QshOA-rrDL4GbJgQ3QR5v6cK0kDk5koRIdI" alt="Minh Quân" />
                                <span>Minh Quân • 15/05/2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                <div className="flex flex-col lg:flex-row gap-12 sm:gap-16">
                    {/* Main Content Feed */}
                    <section className="lg:w-2/3 space-y-12 sm:space-y-16" aria-labelledby="latest-posts-heading">
                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-6">
                            <h2 id="latest-posts-heading" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Bài viết mới nhất</h2>
                            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl" role="group" aria-label="Lựa chọn kiểu hiển thị">
                                <button className="p-2 bg-white dark:bg-slate-700 shadow-sm rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-primary min-h-[40px]" aria-label="Xem dạng lưới">
                                    <span className="material-icons text-xl" aria-hidden="true">grid_view</span>
                                </button>
                                <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[40px]" aria-label="Xem dạng danh sách">
                                    <span className="material-icons text-xl" aria-hidden="true">view_list</span>
                                </button>
                            </div>
                        </div>

                        {/* Blog Post List */}
                        <div className="grid grid-cols-1 gap-12 sm:gap-16">
                            {[
                                { 
                                    cat: "Thủ thuật", 
                                    date: "18/05/2024", 
                                    title: "Top 5 Laptop chuyên đồ họa đáng mua nhất năm 2024 trong tầm giá 30 triệu", 
                                    desc: "Tìm kiếm một chiếc laptop vừa mạnh mẽ để render 3D vừa đủ mỏng nhẹ để mang đi làm là điều không hề dễ dàng. Dưới đây là danh sách được các chuyên gia HakuTech bình chọn...",
                                    author: "Trần Anh",
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSYx99ioX8f1mIQnhmOvEP6BOEv9o2GoQu-6CaicVQx2NsiFmC3kwWXbhHxaK0o5uOwQCTrGVhE2sfknsql8z_kfp7XeaUbqe31X9T9beS7K26_Yyqczcwited-PZHkhlksvuNRz64Bu0PLysoc-vRIL2K4E3TevCAp_zCeAStUHf5ATg-1y5qMBj_dQRqbM8mcHbXZXbKSgv_7QxK3ExBMgZgxjvuJpw-aUhO3s3IDCMQ-hhCY3phNpILi2ZL807V_RFIU_x7ci4"
                                },
                                { 
                                    cat: "Tin tức", 
                                    date: "17/05/2024", 
                                    title: "Sony bất ngờ hé lộ phiên bản giới hạn của WH-1000XM5 với màu sắc cực ấn tượng", 
                                    desc: "Mới đây, Sony đã công bố một phiên bản màu sắc đặc biệt cho dòng tai nghe chống ồn đầu bảng của mình. Hãy cùng chiêm ngưỡng những hình ảnh đầu tiên của siêu phẩm này...",
                                    author: "Khánh Linh",
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0tLJCrvQC-9boZK8ihAdbRwxrr_yhuzAjgsUla4hvHuNIUi0TbJqoFY3LZ3E-qq4Z04pnsJWqQ691OVHL2bjzCTwVsj76YKiCwYgo9Hz5mLuFbs7r4MByutYA8xtc2e6pikyzDB4lCwAuAm9b9b_txMBzPWtDbKm-e4aCPHI_oA_kKcWIjiSjfo29lb42lnkQKzdiXI2BWj1TzRMODAqi38NzKCH2P3kPCh-_WV7kWeWsSZ3nG0XKJOzKdXuUzeNKoPS94WPU9O8"
                                },
                                { 
                                    cat: "Xu hướng", 
                                    date: "16/05/2024", 
                                    title: "Sự lên ngôi của các thiết bị màn hình gập trong năm 2024: Đã đến lúc để chuyển đổi?", 
                                    desc: "Không còn là những món đồ chơi xa xỉ cho dân công nghệ, điện thoại gập đang dần trở nên phổ biến hơn với mức giá dễ tiếp cận và độ bền được cải thiện đáng kể...",
                                    author: "Lê Hoàng",
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCduB5NLoFXgyi-J-DZch5Y3fbE5t4HEXfTZ4Nu7XJhjUhjmTk8c7P4qtFsUzRmaUmzISlmXAQiF_Wmvu9BPt7SEDOtJkj4bt2Oo0Hq_4zHGaFhRt6VLF8TXM9jnm8V7V4zGDMuh8AoXPlPGiyMJHVq_U0h_CuMeXdViHp4SNpI_Yp24X6RvlhT7JMtmt2ptOlDg2idnGg3h864qQ5xQ9Z0vHDg1_vV5CglfbIvNk55luIEBCCSQ-UB7LYxssgL8lGV48k42h0nDjc"
                                }
                            ].map((post, idx) => (
                                <article key={idx} className="flex flex-col md:flex-row gap-8 group">
                                    <div className="md:w-[40%] overflow-hidden rounded-2xl shadow-lg shadow-slate-200 dark:shadow-none bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
                                        <img 
                                            className="w-full h-64 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                                            src={post.img} 
                                            alt={post.title} 
                                            loading="lazy" 
                                        />
                                    </div>
                                    <div className="md:w-[60%] flex flex-col justify-center space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-lg" role="status">{post.cat}</span>
                                            <span className="text-slate-400 text-xs font-bold">{post.date}</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                                            <Link to="#" className="focus:outline-none focus:underline underline-offset-4 decoration-2">{post.title}</Link>
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                                            {post.desc}
                                        </p>
                                        <div className="flex items-center justify-between pt-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                                    <span className="material-icons text-xs text-slate-500" aria-hidden="true">person</span>
                                                </div>
                                                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Tác giả: <span className="text-slate-900 dark:text-white">{post.author}</span></span>
                                            </div>
                                            <Link to="#" className="text-primary font-black text-xs uppercase flex items-center gap-1 hover:gap-2 transition-all" aria-label={`Đọc tiếp bài viết ${post.title}`}>
                                                Đọc thêm <span className="material-icons text-xs">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination */}
                        <nav className="flex items-center justify-center gap-3 pt-12 sm:pt-20" aria-label="Phân trang danh sách bài viết">
                            <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Trang trước">
                                <span className="material-icons text-xl" aria-hidden="true">chevron_left</span>
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white font-black shadow-lg shadow-primary/30 min-h-[44px]" aria-current="page" aria-label="Trang 1">1</button>
                            <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Chuyển sang trang 2">2</button>
                            <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Chuyển sang trang 3">3</button>
                            <span className="px-2 text-slate-400 font-bold" aria-hidden="true">...</span>
                            <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Chuyển sang trang 10">10</button>
                            <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Trang sau">
                                <span className="material-icons text-xl" aria-hidden="true">chevron_right</span>
                            </button>
                        </nav>
                    </section>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3 space-y-12">
                        {/* Search */}
                        <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none" aria-labelledby="sidebar-search-heading">
                            <h3 id="sidebar-search-heading" className="text-xl font-black text-slate-900 dark:text-white mb-6">Tìm bài viết</h3>
                            <form className="relative group">
                                <input 
                                    className="w-full pl-6 pr-14 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-900 rounded-2xl transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none" 
                                    placeholder="Bạn muốn tìm gì..." 
                                    type="search"
                                    aria-label="Nhập từ khóa tìm kiếm bài viết"
                                />
                                <button className="absolute right-2 top-2 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform cursor-pointer" aria-label="Thực hiện tìm kiếm">
                                    <span className="material-icons" aria-hidden="true">search</span>
                                </button>
                            </form>
                        </section>

                        {/* Categories */}
                        <nav className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none" aria-labelledby="sidebar-cats-heading">
                            <h3 id="sidebar-cats-heading" className="text-xl font-black text-slate-900 dark:text-white mb-6">Danh mục</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: "Tin tức công nghệ", count: 24 },
                                    { name: "Đánh giá sản phẩm", count: 18 },
                                    { name: "Thủ thuật & Mẹo hay", count: 32 },
                                    { name: "Xu hướng thị trường", count: 12 }
                                ].map((cat, idx) => (
                                    <li key={idx}>
                                        <Link to="#" className="flex items-center justify-between p-4 rounded-2xl hover:bg-primary/5 group transition-all focus:outline-none focus:ring-2 focus:ring-primary">
                                            <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary font-bold transition-colors">{cat.name}</span>
                                            <span className="text-[11px] font-black bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-500 group-hover:bg-primary/20 group-hover:text-primary transition-all" aria-label={`${cat.count} bài viết`}>{cat.count}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Popular Posts */}
                        <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none" aria-labelledby="sidebar-popular-heading">
                            <h3 id="sidebar-popular-heading" className="text-xl font-black text-slate-900 dark:text-white mb-8">Phổ biến</h3>
                            <div className="space-y-8">
                                {[
                                    { title: "Cách tối ưu pin cho iPhone chạy iOS 17 hiệu quả", views: "1.2k", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm41MK98uO1_ar8TznLRPqQIgH_a38hFRd4srQzF0ZayX3Hx1u_GBVs3N0RDiJtBSImeALHZP_yOcWfWrjdC_IT-deUHweCqRRd8z80lRr1aVafJ0ci_-SWmIyyvZ1El_LeohD3D5zR4G3fhc-mxNDMLWd780-nyzSapvXAejbCahQjniNL2P3n6qfM0-pl6rNFJvSv8yyBlJzoNzEMFNDY-ZHiFMc62CpMHWdHOWfOFWMvZtmh-SV5SPchBAgeETLEHehh768Zfg" },
                                    { title: "Build PC gaming 15 triệu chơi mượt mọi game AAA", views: "850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsVpisOYgT-KLFkvIUaLkgZdt-FOPH_1m5_ixoBJJK_WUVAeu3eNBsBcdLXinarzBAjPHYHVIPWwZNMKah5wpndi3_0cjQi3Xgn9OiTLFBqbAWxq4-AGdCioTiSV0rVKRs7xudgFUVf2Xhl6xq2m9x4odV4KRX-qXSOuGctLPyj09KBBpnDWox68RdES7K81L9uxkdrY-PRCnjcp52eFy7YWJk9l8Z9ec9w475J-0vB0ohw0kGV9wRnjMoYoPJ6wp5Ks6olu_bedg" },
                                    { title: "Tại sao Apple Watch vẫn là vua của smartwatch?", views: "2.4k", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqawbK674AvtrHecH8FS3EhKdzDX7erkoQXWSDPA0zQNkgtF0sl7tg4U3sGHn6ExR54xPKG0KQ0MggYpOsRecC17duwwIQr_f62mISfozPR-qUk0P0Cg0LOcbMriQinbgWol_9T1Y6brdkMOwQVL_d3SqloYAevh0Y1MgHiEs0mDuS9fo8HapZvVwnDrTFD-hj-XXNa5WwYcJog8RaiAvkDsnFhfRy7Lr_1nYRhGqDfp3cWG9TKXzAUXjxDXAWFElqaFX_pQQBnqg" }
                                ].map((post, idx) => (
                                    <Link key={idx} to="#" className="flex gap-5 group focus:outline-none focus:ring-2 focus:ring-primary rounded-xl p-1">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-100 dark:border-slate-800">
                                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={post.img} alt={`Hình đại diện ${post.title}`} loading="lazy" />
                                        </div>
                                        <div className="space-y-1 py-1">
                                            <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">{post.title}</h4>
                                            <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 font-black uppercase tracking-widest" aria-label={`${post.views} lượt xem`}>
                                                <span className="material-icons text-xs" aria-hidden="true">visibility</span>
                                                {post.views} Views
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Newsletter */}
                        <section className="bg-primary group relative p-8 sm:p-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/30" aria-labelledby="sidebar-news-heading">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-125"></div>
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-xl text-white rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/20">
                                    <span className="material-icons text-4xl" aria-hidden="true">mail</span>
                                </div>
                                <h3 id="sidebar-news-heading" className="text-2xl font-black text-white mb-3">Đăng ký nhận tin</h3>
                                <p className="text-sm text-primary-50 font-bold mb-8 leading-relaxed">Đừng bỏ lỡ các bài đánh giá công nghệ mới nhất hàng tuần.</p>
                                <form className="space-y-3">
                                    <div className="relative">
                                        <input 
                                            className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-sm font-bold text-white placeholder:text-white/60 focus:ring-4 focus:ring-white/20 outline-none transition-all" 
                                            type="email" 
                                            placeholder="Email của bạn..." 
                                            aria-label="Nhập địa chỉ email để đăng ký nhận tin"
                                            required
                                        />
                                    </div>
                                    <button className="w-full bg-white text-primary font-black py-4 rounded-2xl transition-all shadow-xl hover:bg-primary-50 active:scale-95 cursor-pointer min-h-[44px]">
                                        Tham gia ngay
                                    </button>
                                </form>
                                <p className="text-[10px] text-primary-100 mt-6 font-bold opacity-80 italic" aria-hidden="true">* No spam. Just pure tech insights.</p>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default Blog;
