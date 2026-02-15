import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <React.Fragment>
            {/* Search Hero Section */}
            <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-white dark:from-primary/20 dark:via-background-dark dark:to-background-dark py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDovhJzS_hQr7yHE3WKXHnBJfDqb57PLJTeRN29ur0O8DiKzdn495k1tvEA8vEmJsVSHrS-Jf_d9wx5DXsz4hbcAq264qiK9eW4rwfLASCjhg6eFVgFkwZQEMCtIhyh2_CXU5ZftlvQVH4IyeRkuipFYSLsX9KKgGvGySDHzSU5LsF9laE8CgXum1OUTxqnA91rX4UUf81np-9s-PXpGIpaSigMg958PEq7jLxvGUprhmZRyrx2D1vFz4_o7XXCmg0Vz_NPsClKLaM" alt="Background pattern" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white mb-6 leading-tight">
                        Chúng tôi có thể giúp gì cho bạn?
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                        Tìm kiếm giải pháp nhanh chóng cho các vấn đề kỹ thuật, thông tin bảo hành và quản lý đơn hàng.
                    </p>
                    <div className="relative max-w-3xl mx-auto group">
                        <input className="w-full pl-14 pr-32 py-5 rounded-xl border-none shadow-xl focus:ring-4 focus:ring-primary/20 bg-white dark:bg-slate-800 dark:text-white text-lg placeholder:text-slate-400" placeholder="Nhập câu hỏi, sản phẩm hoặc từ khóa (ví dụ: Bảo hành iPhone 15)" type="text" />
                        <span className="material-icons absolute left-5 top-1/2 -translate-y-1/2 text-primary text-3xl">search</span>
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-md">
                            Tìm kiếm
                        </button>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                        <span>Xu hướng:</span>
                        <Link to="#" className="hover:text-primary underline">Tra cứu đơn hàng</Link>
                        <Link to="#" className="hover:text-primary underline">Thay pin MacBook</Link>
                        <Link to="#" className="hover:text-primary underline">Chính sách trả góp 0%</Link>
                    </div>
                </div>
            </section>

            {/* Quick Links Grid */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <Link to="#" className="group bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-icons text-3xl">local_shipping</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Trạng thái đơn hàng</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Theo dõi hành trình và thời gian dự kiến giao hàng của bạn.</p>
                    </Link>
                    {/* Card 2 */}
                    <Link to="#" className="group bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-icons text-3xl">assignment_return</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Chính sách đổi trả</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Tìm hiểu quy định đổi mới hoặc hoàn tiền trong vòng 30 ngày.</p>
                    </Link>
                    {/* Card 3 */}
                    <Link to="#" className="group bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-icons text-3xl">verified_user</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Trung tâm bảo hành</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Hệ thống trạm sửa chữa ủy quyền chính hãng trên toàn quốc.</p>
                    </Link>
                    {/* Card 4 */}
                    <Link to="#" className="group bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-icons text-3xl">settings_suggest</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Hướng dẫn thiết lập</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Video và bài viết hướng dẫn sử dụng sản phẩm mới mua.</p>
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Câu hỏi thường gặp</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                         {/* Simple FAQ Items (without complex accordion state for simplicity in extracted component, user can expand later) */}
                        {[
                            { q: "Làm thế nào để theo dõi đơn hàng của tôi?", a: "Bạn có thể theo dõi đơn hàng bằng cách đăng nhập vào tài khoản HakuTech, chọn 'Đơn hàng của tôi'. Hoặc sử dụng mã vận đơn được gửi qua Email/SMS để tra cứu trực tiếp trên website của đối vận chuyển." },
                            { q: "Chính sách bảo hành của Apple tại HakuTech như thế nào?", a: "Tất cả sản phẩm Apple chính hãng mua tại HakuTech đều được hưởng chế độ bảo hành 12 tháng tại các Trung tâm Bảo hành ủy quyền của Apple (AASP) trên toàn quốc. Chúng tôi cũng hỗ trợ gửi máy đi bảo hành miễn phí cho khách hàng." },
                            { q: "Tôi có thể hủy đơn hàng đã thanh toán không?", a: "Đơn hàng có thể hủy trước khi trạng thái chuyển sang 'Đang giao hàng'. Tiền sẽ được hoàn lại vào tài khoản thanh toán ban đầu của bạn trong vòng 3-5 ngày làm việc tùy thuộc vào ngân hàng." },
                            { q: "HakuTech có hỗ trợ trả góp qua thẻ tín dụng không?", a: "Có, chúng tôi hỗ trợ trả góp 0% qua thẻ tín dụng của hơn 25 ngân hàng liên kết. Thủ tục nhanh chóng, không cần xét duyệt hồ sơ, chỉ cần hạn mức thẻ của bạn còn đủ giá trị sản phẩm." }
                        ].map((faq, idx) => (
                             <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                                <details className="group">
                                    <summary className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer list-none">
                                        <span className="font-semibold text-lg group-hover:text-primary transition-colors">{faq.q}</span>
                                        <span className="material-icons text-slate-400 group-hover:text-primary transition-transform group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-700 pt-4">
                                        <p>{faq.a}</p>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <button className="text-primary font-bold hover:underline">Xem tất cả câu hỏi thường gặp</button>
                    </div>
                </div>
            </section>

             {/* Contact Options */}
             <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Vẫn cần sự trợ giúp?</h2>
                    <p className="text-slate-500 dark:text-slate-400">Đội ngũ kỹ thuật viên của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {/* Phone */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center">
                        <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <span className="material-icons text-3xl">headset_mic</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">Gọi cho chúng tôi</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Hotline miễn phí (8:00 - 22:00)</p>
                        <span className="text-2xl font-black text-primary">1800-8888</span>
                    </div>
                    {/* Email */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center">
                        <div className="w-16 h-16 bg-orange-500/10 text-orange-600 rounded-full flex items-center justify-center mb-6">
                            <span className="material-icons text-3xl">alternate_email</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">Gửi Email</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Phản hồi trong vòng 2 giờ</p>
                        <a href="mailto:support@hakutech.vn" className="text-lg font-bold text-primary hover:underline">support@hakutech.vn</a>
                    </div>
                    {/* Chat */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center">
                         <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                            <span className="material-icons text-3xl">forum</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">Chat trực tuyến</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Hỗ trợ tức thì qua cửa sổ chat</p>
                        <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
                            Bắt đầu Chat
                        </button>
                    </div>
                    {/* Stores */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center">
                        <div className="w-16 h-16 bg-purple-500/10 text-purple-600 rounded-full flex items-center justify-center mb-6">
                            <span className="material-icons text-3xl">storefront</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">Tìm cửa hàng</h4>
                         <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Hơn 50 chi nhánh toàn quốc</p>
                        <button className="flex items-center gap-2 font-bold text-primary hover:text-primary/80">
                            Xem bản đồ cửa hàng <span className="material-icons text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
             </section>

             {/* Map/Location Placeholder */}
             <section className="max-w-7xl mx-auto px-4 mb-20">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNn_EQUTNb9A9Cw4PQ-11so3vuQDiyayns13Ok-l3qeiQpGI6b_P63W2Lmibs0BzJR97mLpwbuylWYqVaVu4Es16ncgGpATvt3LXTnryRJvh_RyVVumGhH1GDRU40hz95MovP-lYz59R1cHHGqwVxQVCzUmMlWHU0aqofIwG0FT3uR2DajCW_EzENd1eVusVLb3GzErXkU2kx0r3Pq0KF0lfvoT30SnCj6QAz4vtubCNdBgqn2C4PTeUJV_kc19n35z6PwbAwi34M" alt="Store Locator Map" />
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl max-w-sm text-center">
                            <span className="material-icons text-primary text-4xl mb-2">location_on</span>
                            <h5 className="text-xl font-bold mb-2">Tìm chi nhánh gần bạn nhất</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Nhập địa chỉ của bạn để tìm cửa hàng HakuTech trong bán kính 5km.</p>
                            <div className="flex gap-2">
                                <input className="flex-1 rounded-lg border-slate-200 text-sm" placeholder="Nhập quận/huyện..." type="text" />
                                <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold">Tìm</button>
                            </div>
                        </div>
                     </div>
                </div>
             </section>

        </React.Fragment>
    );
};

export default Support;
