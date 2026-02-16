import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <main id="main-content" className="bg-white dark:bg-slate-950 font-inter selection:bg-primary/30">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem hỗ trợ
            </a>

            {/* Search Hero Section */}
            <section className="relative bg-gradient-to-br from-primary/5 via-transparent to-white dark:from-primary/10 dark:via-transparent dark:to-slate-950 py-20 sm:py-32 overflow-hidden" aria-labelledby="support-hero-title">
                <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay">
                    <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDovhJzS_hQr7yHE3WKXHnBJfDqb57PLJTeRN29ur0O8DiKzdn495k1tvEA8vEmJsVSHrS-Jf_d9wx5DXsz4hbcAq264qiK9eW4rwfLASCjhg6eFVgFkwZQEMCtIhyh2_CXU5ZftlvQVH4IyeRkuipFYSLsX9KKgGvGySDHzSU5LsF9laE8CgXum1OUTxqnA91rX4UUf81np-9s-PXpGIpaSigMg958PEq7jLxvGUprhmZRyrx2D1vFz4_o7XXCmg0Vz_NPsClKLaM" alt="Họa tiết nền trang hỗ trợ" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h1 id="support-hero-title" className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
                        Chúng tôi có thể giúp gì <br className="hidden sm:block" /> cho bạn?
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                        Tìm kiếm giải pháp nhanh chóng cho các vấn đề kỹ thuật, thông tin bảo hành và quản lý đơn hàng chuyên nghiệp.
                    </p>
                    <form className="relative max-w-2xl mx-auto group">
                        <label htmlFor="support-search" className="sr-only">Tìm kiếm trợ giúp</label>
                        <input 
                            id="support-search"
                            className="w-full pl-14 pr-32 py-5 sm:py-6 rounded-3xl border-2 border-transparent shadow-2xl focus:shadow-primary/10 focus:ring-4 focus:ring-primary/20 focus:border-primary/20 bg-white dark:bg-slate-900 dark:text-white text-lg sm:text-xl font-bold placeholder:text-slate-400 outline-none transition-all" 
                            placeholder="Mã đơn hàng, bảo hành..." 
                            type="search" 
                        />
                        <span className="material-icons absolute left-5 top-1/2 -translate-y-1/2 text-primary text-3xl sm:text-4xl drop-shadow-sm" aria-hidden="true">search</span>
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-black hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 cursor-pointer min-h-[44px]">
                            Tìm kiếm
                        </button>
                    </form>
                    <nav className="mt-8 flex flex-wrap justify-center gap-4 text-[11px] sm:text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500" aria-label="Các từ khóa phổ biến">
                        <span>Chủ đề hot:</span>
                        <Link to="#" className="text-slate-600 dark:text-slate-300 hover:text-primary underline decoration-2 underline-offset-4 decoration-primary/30">Tra cứu đơn hàng</Link>
                        <Link to="#" className="text-slate-600 dark:text-slate-300 hover:text-primary underline decoration-2 underline-offset-4 decoration-primary/30">Bảo hành 1 đổi 1</Link>
                        <Link to="#" className="text-slate-600 dark:text-slate-300 hover:text-primary underline decoration-2 underline-offset-4 decoration-primary/30">Trả góp 0%</Link>
                    </nav>
                </div>
            </section>

            {/* Quick Links Grid */}
            <section className="max-w-7xl mx-auto px-4 py-20 sm:py-32" aria-label="Các danh mục hỗ trợ chính">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <Link to="#" className="group bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-slate-100 dark:shadow-none border border-slate-50 dark:border-slate-800 hover:border-primary transition-all hover:-translate-y-2 focus:ring-4 focus:ring-primary/20 outline-none">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                            <span className="material-icons text-3xl" aria-hidden="true">local_shipping</span>
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">Trạng thái vận chuyển</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">Theo dõi hành trình và thời gian dự kiến giao hàng của bạn một cách chính xác.</p>
                    </Link>
                    {/* Card 2 */}
                    <Link to="#" className="group bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-slate-100 dark:shadow-none border border-slate-50 dark:border-slate-800 hover:border-primary transition-all hover:-translate-y-2 focus:ring-4 focus:ring-primary/20 outline-none">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                            <span className="material-icons text-3xl" aria-hidden="true">assignment_return</span>
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">Đổi trả & Hoàn tiền</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">Quy định đổi mới hoặc hoàn tiền trong vòng 30 ngày cho mọi lỗi từ nhà sản xuất.</p>
                    </Link>
                    {/* Card 3 */}
                    <Link to="#" className="group bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-slate-100 dark:shadow-none border border-slate-50 dark:border-slate-800 hover:border-primary transition-all hover:-translate-y-2 focus:ring-4 focus:ring-primary/20 outline-none">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                            <span className="material-icons text-3xl" aria-hidden="true">verified_user</span>
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">Trung tâm Bảo hành</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">Hệ thống trạm sửa chữa ủy quyền chính hãng phân bố trên toàn quốc.</p>
                    </Link>
                    {/* Card 4 */}
                    <Link to="#" className="group bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-slate-100 dark:shadow-none border border-slate-50 dark:border-slate-800 hover:border-primary transition-all hover:-translate-y-2 focus:ring-4 focus:ring-primary/20 outline-none">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                            <span className="material-icons text-3xl" aria-hidden="true">settings_suggest</span>
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">Hướng dẫn Thiết lập</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">Video và thư viện bài viết hướng dẫn sử dụng sản phẩm mới mua tối ưu nhất.</p>
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-slate-50 dark:bg-slate-900/50 py-20 sm:py-32" aria-labelledby="faq-heading">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16 sm:mb-24">
                        <h2 id="faq-heading" className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">Câu hỏi thường gặp</h2>
                        <div className="w-24 h-2 bg-primary mx-auto rounded-full shadow-lg shadow-primary/20"></div>
                    </div>
                    <div className="space-y-6">
                        {[
                            { q: "Làm thế nào để theo dõi đơn hàng của tôi?", a: "Bạn có thể theo dõi đơn hàng bằng cách đăng nhập vào tài khoản HakuTech, chọn 'Đơn hàng của tôi'. Hoặc sử dụng mã vận đơn được gửi qua Email/SMS để tra cứu trực tiếp trên website của đối tác vận chuyển." },
                            { q: "Chính sách bảo hành Apple tại HakuTech?", a: "Tất cả sản phẩm Apple chính hãng mua tại HakuTech đều được hưởng chế độ bảo hành 12 tháng tại các Trung tâm Bảo hành ủy quyền của Apple (AASP) trên toàn quốc. Chúng tôi cũng hỗ trợ gửi máy đi bảo hành miễn phí cho khách hàng." },
                            { q: "Tôi có thể hủy đơn hàng đã thanh toán không?", a: "Đơn hàng có thể hủy trực tiếp trên website trước khi trạng thái chuyển sang 'Đang giao hàng'. Tiền sẽ được hoàn lại vào tài khoản thanh toán ban đầu của bạn trong vòng 3-5 ngày làm việc tùy thuộc vào ngân hàng." },
                            { q: "Hỗ trợ trả góp qua thẻ tín dụng?", a: "Có, chúng tôi hỗ trợ trả góp 0% qua thẻ tín dụng của hơn 25 ngân hàng liên kết. Thủ tục nhanh chóng, không cần xét duyệt hồ sơ, chỉ cần hạn mức thẻ của bạn còn đủ giá trị sản phẩm." }
                        ].map((faq, idx) => (
                             <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg shadow-slate-100 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden group">
                                <details className="group" aria-expanded="false">
                                    <summary className="w-full flex justify-between items-center p-8 text-left focus:outline-none cursor-pointer list-none select-none">
                                        <span className="font-black text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-primary transition-colors pr-4">{faq.q}</span>
                                        <span className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all group-open:rotate-180">
                                            <span className="material-icons" aria-hidden="true">expand_more</span>
                                        </span>
                                    </summary>
                                    <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800 pt-6 animate-fadeIn">
                                        <p className="text-base sm:text-lg leading-relaxed font-medium">{faq.a}</p>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <button className="bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest text-slate-600 dark:text-white hover:bg-primary hover:text-white transition-all focus:ring-4 focus:ring-primary/20 cursor-pointer">
                            Xem tất cả câu hỏi
                        </button>
                    </div>
                </div>
            </section>

             {/* Contact Options */}
             <section className="max-w-7xl mx-auto px-4 py-24 sm:py-32" aria-labelledby="contact-heading">
                <div className="text-center mb-20">
                    <h2 id="contact-heading" className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">Bạn vẫn cần trợ giúp?</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Đội ngũ kỹ thuật viên của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7 qua đa kênh.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {/* Phone */}
                    <article className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center hover:shadow-2xl transition-all shadow-xl shadow-slate-100 dark:shadow-none">
                        <div className="w-20 h-20 bg-emerald-500/10 text-emerald-600 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner">
                            <span className="material-icons text-4xl" aria-hidden="true">headset_mic</span>
                        </div>
                        <h4 className="text-xl font-black mb-3 text-slate-900 dark:text-white">Gọi miễn phí</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 font-medium">Hotline (8:00 - 22:00)</p>
                        <span className="text-3xl font-black text-primary drop-shadow-sm">1800-8888</span>
                    </article>
                    {/* Email */}
                    <article className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center hover:shadow-2xl transition-all shadow-xl shadow-slate-100 dark:shadow-none">
                        <div className="w-20 h-20 bg-orange-500/10 text-orange-600 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner">
                            <span className="material-icons text-4xl" aria-hidden="true">alternate_email</span>
                        </div>
                        <h4 className="text-xl font-black mb-3 text-slate-900 dark:text-white">Gửi Email</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 font-medium">Phản hồi trong 2 giờ</p>
                        <a href="mailto:support@hakutech.vn" className="text-lg font-black text-primary hover:underline transition-all">support@hakutech.vn</a>
                    </article>
                    {/* Chat */}
                    <article className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center hover:shadow-2xl transition-all shadow-xl shadow-slate-100 dark:shadow-none">
                         <div className="w-20 h-20 bg-blue-500/10 text-blue-600 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner">
                            <span className="material-icons text-4xl" aria-hidden="true">forum</span>
                        </div>
                        <h4 className="text-xl font-black mb-3 text-slate-900 dark:text-white">Chat online</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium">Hỗ trợ tức thì trực tuyến</p>
                        <button className="w-full bg-primary text-white py-4 rounded-xl font-black hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 cursor-pointer min-h-[48px]">
                            Bắt đầu Chat
                        </button>
                    </article>
                    {/* Stores */}
                    <article className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center hover:shadow-2xl transition-all shadow-xl shadow-slate-100 dark:shadow-none">
                        <div className="w-20 h-20 bg-purple-500/10 text-purple-600 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner">
                            <span className="material-icons text-4xl" aria-hidden="true">storefront</span>
                        </div>
                        <h4 className="text-xl font-black mb-3 text-slate-900 dark:text-white">Ghé cửa hàng</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium">Hơn 50 chi nhánh toàn quốc</p>
                        <Link to="/stores" className="flex items-center gap-2 font-black text-primary uppercase text-xs tracking-widest hover:gap-3 transition-all min-h-[44px]">
                            Xem bản đồ <span className="material-icons text-sm" aria-hidden="true">arrow_forward</span>
                        </Link>
                    </article>
                </div>
             </section>

             {/* Map/Location Section */}
             <section className="max-w-7xl mx-auto px-4 pb-24 sm:pb-32" aria-labelledby="map-overlay-title">
                <div className="relative h-[28rem] sm:h-[32rem] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 shadow-primary/5">
                    <img 
                        className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply dark:mix-blend-luminosity" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNn_EQUTNb9A9Cw4PQ-11so3vuQDiyayns13Ok-l3qeiQpGI6b_P63W2Lmibs0BzJR97mLpwbuylWYqVaVu4Es16ncgGpATvt3LXTnryRJvh_RyVVumGhH1GDRU40aqofIwG0FT3uR2DajCW_EzENd1eVusVLb3GzErXkU2kx0r3Pq0KF0lfvoT30SnCj6QAz4vtubCNdBgqn2C4PTeUJV_kc19n35z6PwbAwi34M" 
                        alt="Bản đồ định vị cửa hàng HakuTech" 
                    />
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center p-4">
                        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full text-center border border-white/20 dark:border-slate-800">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="material-icons text-4xl" aria-hidden="true">location_on</span>
                            </div>
                            <h5 id="map-overlay-title" className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Tìm chi nhánh gần bạn</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-base mb-8 font-medium">Nhập khu vực của bạn để tìm cửa hàng HakuTech trong bán kính 5km một cách tự động.</p>
                            <form className="flex gap-3">
                                <label htmlFor="map-input" className="sr-only">Nhập quận huyện</label>
                                <input 
                                    id="map-input"
                                    className="flex-1 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 px-5 text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/20 focus:border-primary/20 outline-none" 
                                    placeholder="Nhập quận/huyện..." 
                                    type="text" 
                                />
                                <button className="bg-primary text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-primary/20 hover:scale-105 transition-all text-sm active:scale-95 cursor-pointer">Tìm</button>
                            </form>
                        </div>
                     </div>
                </div>
             </section>
        </main>
    );
};

export default Support;
