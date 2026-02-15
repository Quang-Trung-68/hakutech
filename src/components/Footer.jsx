import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <span className="text-primary text-3xl font-extrabold tracking-tight">Haku<span className="text-white">Tech</span></span>
                        <p className="text-sm leading-relaxed">
                            Hệ thống bán lẻ thiết bị công nghệ hàng đầu Việt Nam. Chúng tôi mang đến những sản phẩm chất lượng và trải nghiệm mua sắm tuyệt vời nhất.
                        </p>
                        <div className="flex space-x-4">
                            <a className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                                <i className="material-icons text-xl">facebook</i>
                            </a>
                            <a className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                                <i className="material-icons text-xl">camera_alt</i>
                            </a>
                            <a className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                                <i className="material-icons text-xl">play_circle</i>
                            </a>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="space-y-6">
                        <h5 className="text-white font-bold text-lg">HakuTech</h5>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-primary transition-colors" href="#">Về chúng tôi</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Hệ thống cửa hàng</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Tuyển dụng</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Tin tức công nghệ</a></li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="space-y-6">
                        <h5 className="text-white font-bold text-lg">Chính sách</h5>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-primary transition-colors" href="#">Chính sách bảo hành</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Chính sách đổi trả</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Giao hàng &amp; Thanh toán</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Bảo mật thông tin</a></li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="space-y-6">
                        <h5 className="text-white font-bold text-lg">Hỗ trợ khách hàng</h5>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-primary transition-colors" href="#">Tra cứu đơn hàng</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Hướng dẫn mua hàng</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Câu hỏi thường gặp</a></li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-primary text-sm">call</span>
                                <span className="text-white font-bold">1900 1234</span>
                            </li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h5 className="text-white font-bold text-lg">Đăng ký nhận tin</h5>
                        <p className="text-sm">Nhận ngay voucher 100k cho đơn hàng đầu tiên.</p>
                        <div className="flex flex-col gap-3">
                            <input className="bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-sm focus:ring-primary focus:border-primary text-white" placeholder="Email của bạn" type="email"/>
                            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 rounded-lg text-sm transition-all">Đăng ký</button>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2024 HakuTech. Tất cả quyền được bảo lưu.</p>
                    <div className="flex gap-6">
                        <img alt="Visa/Mastercard icons" className="h-6 grayscale opacity-50" data-alt="Payment provider logos horizontal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQYFChruSJRoxtZoG9x9i5IfPJ4VVGpOR1Et-NB19yiZi0G61keb_5rN1KaED6z-2LXq-iRdvnHYqgQfBYtv8m6gYvacEHgDRRgYjuBQwD9ucoYbj-BnK59BmcfQ0NW0jNcoizGj_0fN9gBThT9CvGNMm-pjuBq6j440KqvnNGRf3xABSYTvkTTU0x0kkUsmD9hK8-OqOCCtw3bMz0dRkF1fSs1u1BC3MSq3TN5kyUEZMA1nHmvFbpf4jryIstF2QJmrCEIb19WnU"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
