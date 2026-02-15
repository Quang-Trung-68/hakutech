import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <React.Fragment>
            {/* Featured Post Hero */}
            <section className="relative w-full h-[550px] overflow-hidden">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPpOrk3lI5coRNykTLRGqiah_QKU0qhIF_fZe-0nSS__63V3t6g0YO-xRm4gpeIrw2zZdqPUV8leVXXptziTwlpp0SxOb_HgTfiKypd6DXZVcyT5B4jImT-uCviyKjx1LzBvuYutoP8TsBkICaTvtTYdxFR3FeYC1uOuH0_smSGIG1LOB5b18IkRHrQrEwII7L8vcyNjQODRYWtej9L730457XEGMcWF78L0dvlGQ-N9_ZqGzRto3RGxW3KEB3XHgskhcLq55aeSw" alt="Featured Post" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded mb-4">Đánh giá</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Đánh giá chi tiết iPhone 15 Pro Max sau 6 tháng: Sự lựa chọn hoàn hảo hay chỉ là nhất thời?
                        </h1>
                        <p className="text-slate-200 text-lg mb-8 line-clamp-2">
                            Sau nửa năm trải nghiệm thực tế, hãy cùng HakuTech nhìn lại những ưu và nhược điểm thực sự của chiếc flagship nhà Apple. Liệu khung viền Titan có bền như quảng cáo?
                        </p>
                        <div className="flex items-center gap-6">
                            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-primary/20">Đọc thêm</button>
                            <div className="flex items-center gap-3 text-white/80 text-sm">
                                <img className="w-10 h-10 rounded-full border-2 border-primary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCttb41lm1oK-zpDkIRMSu5E9H792U6oEojvl1jDzjz5D6S4hq03qaNUa5uS3yBRCM-vsjeReQHGGHI6E_uzQH1tsR_S3hXS60d0YxfsECzvvqouayx4a7Ovv8N_wTFN6WS4w6XstxEIVmzXQSR4kvWsHWzxBOW6-a-T-zyk2XBBNT2wM4PNnhqeyuwRF7lceSioUnzsxIhCB6x0LtNHTPrHGs6ElwJOTvuwyWZYwd-QshOA-rrDL4GbJgQ3QR5v6cK0kDk5koRIdI" alt="Author" />
                                <span>Minh Quân • 15/05/2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content Feed (70%) */}
                    <div className="lg:w-2/3 space-y-12">
                        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                            <h2 className="text-2xl font-bold">Bài viết mới nhất</h2>
                            <div className="flex gap-2">
                                <button className="p-1 text-primary"><span className="material-icons">grid_view</span></button>
                                <button className="p-1 text-slate-400 hover:text-slate-600"><span className="material-icons">view_list</span></button>
                            </div>
                        </div>
                        {/* Blog Post Cards */}
                        <div className="grid grid-cols-1 gap-10">
                            {/* Post 1 */}
                            <article className="flex flex-col md:flex-row gap-6 group">
                                <div className="md:w-2/5 overflow-hidden rounded-xl">
                                    <img className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSYx99ioX8f1mIQnhmOvEP6BOEv9o2GoQu-6CaicVQx2NsiFmC3kwWXbhHxaK0o5uOwQCTrGVhE2sfknsql8z_kfp7XeaUbqe31X9T9beS7K26_Yyqczcwited-PZHkhlksvuNRz64Bu0PLysoc-vRIL2K4E3TevCAp_zCeAStUHf5ATg-1y5qMBj_dQRqbM8mcHbXZXbKSgv_7QxK3ExBMgZgxjvuJpw-aUhO3s3IDCMQ-hhCY3phNpILi2ZL807V_RFIU_x7ci4" alt="Laptop" />
                                </div>
                                <div className="md:w-3/5 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-bold text-primary uppercase">Thủ thuật</span>
                                        <span className="text-slate-400 text-xs">18/05/2024</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                                        <Link to="#">Top 5 Laptop chuyên đồ họa đáng mua nhất năm 2024 trong tầm giá 30 triệu</Link>
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                        Tìm kiếm một chiếc laptop vừa mạnh mẽ để render 3D vừa đủ mỏng nhẹ để mang đi làm là điều không hề dễ dàng. Dưới đây là danh sách được các chuyên gia HakuTech bình chọn...
                                    </p>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <span className="text-xs font-medium text-slate-500">Tác giả: <strong>Trần Anh</strong></span>
                                    </div>
                                </div>
                            </article>
                            {/* Post 2 */}
                            <article className="flex flex-col md:flex-row gap-6 group">
                                <div className="md:w-2/5 overflow-hidden rounded-xl">
                                    <img className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0tLJCrvQC-9boZK8ihAdbRwxrr_yhuzAjgsUla4hvHuNIUi0TbJqoFY3LZ3E-qq4Z04pnsJWqQ691OVHL2bjzCTwVsj76YKiCwYgo9Hz5mLuFbs7r4MByutYA8xtc2e6pikyzDB4lCwAuAm9b9b_txMBzPWtDbKm-e4aCPHI_oA_kKcWIjiSjfo29lb42lnkQKzdiXI2BWj1TzRMODAqi38NzKCH2P3kPCh-_WV7kWeWsSZ3nG0XKJOzKdXuUzeNKoPS94WPU9O8" alt="Headphones" />
                                </div>
                                <div className="md:w-3/5 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-bold text-primary uppercase">Tin tức</span>
                                        <span className="text-slate-400 text-xs">17/05/2024</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                                        <Link to="#">Sony bất ngờ hé lộ phiên bản giới hạn của WH-1000XM5 với màu sắc cực ấn tượng</Link>
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                        Mới đây, Sony đã công bố một phiên bản màu sắc đặc biệt cho dòng tai nghe chống ồn đầu bảng của mình. Hãy cùng chiêm ngưỡng những hình ảnh đầu tiên của siêu phẩm này...
                                    </p>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <span className="text-xs font-medium text-slate-500">Tác giả: <strong>Khánh Linh</strong></span>
                                    </div>
                                </div>
                            </article>
                            {/* Post 3 */}
                            <article className="flex flex-col md:flex-row gap-6 group">
                                <div className="md:w-2/5 overflow-hidden rounded-xl">
                                    <img className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCduB5NLoFXgyi-J-DZch5Y3fbE5t4HEXfTZ4Nu7XJhjUhjmTk8c7P4qtFsUzRmaUmzISlmXAQiF_Wmvu9BPt7SEDOtJkj4bt2Oo0Hq_4zHGaFhRt6VLF8TXM9jnm8V7V4zGDMuh8AoXPlPGiyMJHVq_U0h_CuMeXdViHp4SNpI_Yp24X6RvlhT7JMtmt2ptOlDg2idnGg3h864qQ5xQ9Z0vHDg1_vV5CglfbIvNk55luIEBCCSQ-UB7LYxssgL8lGV48k42h0nDjc" alt="Tablet" />
                                </div>
                                <div className="md:w-3/5 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-bold text-primary uppercase">Xu hướng</span>
                                        <span className="text-slate-400 text-xs">16/05/2024</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                                        <Link to="#">Sự lên ngôi của các thiết bị màn hình gập trong năm 2024: Đã đến lúc để chuyển đổi?</Link>
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                        Không còn là những món đồ chơi xa xỉ cho dân công nghệ, điện thoại gập đang dần trở nên phổ biến hơn với mức giá dễ tiếp cận và độ bền được cải thiện đáng kể...
                                    </p>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <span className="text-xs font-medium text-slate-500">Tác giả: <strong>Lê Hoàng</strong></span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 pt-12">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-100 transition-colors">
                                <span className="material-icons text-sm">chevron_left</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-colors">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-colors">3</button>
                            <span className="px-2 text-slate-400">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-colors">10</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-100 transition-colors">
                                <span className="material-icons text-sm">chevron_right</span>
                            </button>
                        </div>
                    </div>
                    {/* Sidebar (30%) */}
                    <aside className="lg:w-1/3 space-y-10">
                        {/* Search */}
                        <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h3 className="text-lg font-bold mb-4">Tìm kiếm bài viết</h3>
                            <div className="relative">
                                <input className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary" placeholder="Bạn muốn tìm gì..." type="text" />
                                <button className="absolute right-2 top-2 w-8 h-8 bg-primary text-white rounded-md flex items-center justify-center">
                                    <span className="material-icons text-sm">search</span>
                                </button>
                            </div>
                        </div>
                        {/* Categories */}
                        <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h3 className="text-lg font-bold mb-4">Danh mục bài viết</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "Tin tức công nghệ", count: 24 },
                                    { name: "Đánh giá sản phẩm", count: 18 },
                                    { name: "Thủ thuật & Mẹo hay", count: 32 },
                                    { name: "Xu hướng thị trường", count: 12 }
                                ].map((cat, idx) => (
                                    <li key={idx}>
                                        <Link to="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 group transition-all">
                                            <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary font-medium">{cat.name}</span>
                                            <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">{cat.count}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Popular Posts */}
                        <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h3 className="text-lg font-bold mb-6">Bài viết phổ biến</h3>
                            <div className="space-y-6">
                                {[
                                    { title: "Cách tối ưu pin cho iPhone chạy iOS 17 hiệu quả", views: "1.2k", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm41MK98uO1_ar8TznLRPqQIgH_a38hFRd4srQzF0ZayX3Hx1u_GBVs3N0RDiJtBSImeALHZP_yOcWfWrjdC_IT-deUHweCqRRd8z80lRr1aVafJ0ci_-SWmIyyvZ1El_LeohD3D5zR4G3fhc-mxNDMLWd780-nyzSapvXAejbCahQjniNL2P3n6qfM0-pl6rNFJvSv8yyBlJzoNzEMFNDY-ZHiFMc62CpMHWdHOWfOFWMvZtmh-SV5SPchBAgeETLEHehh768Zfg" },
                                    { title: "Build PC gaming 15 triệu chơi mượt mọi game AAA", views: "850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsVpisOYgT-KLFkvIUaLkgZdt-FOPH_1m5_ixoBJJK_WUVAeu3eNBsBcdLXinarzBAjPHYHVIPWwZNMKah5wpndi3_0cjQi3Xgn9OiTLFBqbAWxq4-AGdCioTiSV0rVKRs7xudgFUVf2Xhl6xq2m9x4odV4KRX-qXSOuGctLPyj09KBBpnDWox68RdES7K81L9uxkdrY-PRCnjcp52eFy7YWJk9l8Z9ec9w475J-0vB0ohw0kGV9wRnjMoYoPJ6wp5Ks6olu_bedg" },
                                    { title: "Tại sao Apple Watch vẫn là vua của smartwatch?", views: "2.4k", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqawbK674AvtrHecH8FS3EhKdzDX7erkoQXWSDPA0zQNkgtF0sl7tg4U3sGHn6ExR54xPKG0KQ0MggYpOsRecC17duwwIQr_f62mISfozPR-qUk0P0Cg0LOcbMriQinbgWol_9T1Y6brdkMOwQVL_d3SqloYAevh0Y1MgHiEs0mDuS9fo8HapZvVwnDrTFD-hj-XXNa5WwYcJog8RaiAvkDsnFhfRy7Lr_1nYRhGqDfp3cWG9TKXzAUXjxDXAWFElqaFX_pQQBnqg" }
                                ].map((post, idx) => (
                                    <Link key={idx} to="#" className="flex gap-4 group">
                                        <img className="w-16 h-16 rounded-lg object-cover flex-shrink-0" src={post.img} alt="Post" />
                                        <div>
                                            <h4 className="text-sm font-bold group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
                                            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{post.views} lượt xem</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* Newsletter */}
                        <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                            <div className="relative z-10 text-center">
                                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
                                    <span className="material-icons text-3xl">mail</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Đăng ký nhận tin</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Nhận thông báo về các bài đánh giá công nghệ mới nhất hàng tuần.</p>
                                <form className="space-y-3">
                                    <input className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary" type="email" placeholder="Email của bạn..." />
                                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all shadow-md">Tham gia ngay</button>
                                </form>
                                <p className="text-[10px] text-slate-400 mt-4 italic">* Chúng tôi cam kết không spam hộp thư của bạn.</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Blog;
