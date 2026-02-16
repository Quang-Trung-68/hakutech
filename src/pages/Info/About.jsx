import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main id="main-content" className="bg-white dark:bg-slate-950 font-inter selection:bg-primary/30">
            {/* Skip to main content link for keyboard navigation */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-xl"
            >
                Bỏ qua để xem nội dung chính
            </a>

            {/* Hero Section */}
            <section className="relative h-[450px] sm:h-[600px] flex items-center overflow-hidden" aria-labelledby="about-hero-title">
                <div className="absolute inset-0 z-0">
                    <img 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYuNJ-v1NKIP4DAmdRIO_Ba1FxEMQSDf3gBTlDtGNaMp7tdI1kdaf_aoA3_VrC9knUn0gGqf5I5uioHwB6gDpDEv_U_HpooO6tc7kuwiap72D7EqS--BNgjPew61nPQ-a6fIEv5lKxnJYa4sN1DUJH9iOseMvZAi7VVvj5WjtXJbWrPz-HiiWHHcLZfCmn3fjfSTaymrPxo6szyLDwJIfFkGT4U5EBrd5e3mhvJxYJI3-DbTJTNTT7MKXDtEssjXYfJT08fj7kQMo" 
                        alt="Văn phòng làm việc hiện đại của HakuTech với thiết kế tối giản và sáng tạo" 
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent dark:from-slate-950 dark:via-slate-950/70"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-xs sm:text-sm mb-6 uppercase tracking-widest shadow-sm" role="status">
                            Since 2014
                        </span>
                        <h1 id="about-hero-title" className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                            Câu chuyện của <br /><span className="text-primary text-glow">HakuTech</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 max-w-xl">
                            Kiến tạo tương lai công nghệ cho người Việt qua những giải pháp thiết bị thông minh, chính hãng và dịch vụ tận tâm nhất. Chúng tôi không chỉ bán thiết bị, chúng tôi xây dựng phong cách sống hiện đại.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-primary/40 min-h-[44px] cursor-pointer">
                                Khám phá ngay
                            </button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all focus:outline-none focus:ring-4 focus:ring-white/40 min-h-[44px] cursor-pointer">
                                Tìm hiểu thêm
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 sm:py-32 bg-white dark:bg-slate-950" aria-labelledby="foundation-title">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 sm:mb-24">
                        <h2 id="foundation-title" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Nền tảng của chúng tôi</h2>
                        <div className="w-24 h-2 bg-primary mx-auto rounded-full shadow-lg shadow-primary/20"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                        {/* Sứ mệnh */}
                        <article className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                <span className="material-icons text-3xl" aria-hidden="true">rocket_launch</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Sứ mệnh</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                                Mang công nghệ đỉnh cao đến mọi nhà với mức giá tiếp cận nhất, giúp nâng tầm chất lượng cuộc sống cho cộng đồng người dùng Việt Nam qua hệ sinh thái sản phẩm đa dạng.
                            </p>
                        </article>
                        {/* Tầm nhìn */}
                        <article className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                <span className="material-icons text-3xl" aria-hidden="true">visibility</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Tầm nhìn</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                                Trở thành hệ sinh thái bán lẻ công nghệ số 1 tại Việt Nam, tiên phong trong việc ứng dụng công nghệ mới và cá nhân hóa trải nghiệm mua sắm của khách hàng.
                            </p>
                        </article>
                        {/* Giá trị cốt lõi */}
                        <article className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                <span className="material-icons text-3xl" aria-hidden="true">star</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Giá trị cốt lõi</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                                Tận tâm với khách hàng, không ngừng đổi mới sáng tạo, và luôn giữ vững tinh thần chính trực trong mọi hoạt động kinh doanh để xây dựng niềm tin bền vững.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Stats Counter */}
            <section className="py-20 bg-primary text-white relative overflow-hidden" aria-label="Các con số ấn tượng">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { value: "10+", label: "Năm kinh nghiệm" },
                            { value: "500k+", label: "Khách hàng tin dùng" },
                            { value: "20+", label: "Cửa hàng toàn quốc" },
                            { value: "1000+", label: "Sản phẩm chính hãng" }
                        ].map((stat, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="text-4xl sm:text-5xl md:text-6xl font-black drop-shadow-lg">{stat.value}</div>
                                <div className="text-primary-100 font-bold uppercase tracking-widest text-[10px] sm:text-xs opacity-90">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/30 overflow-hidden" aria-labelledby="timeline-title">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 id="timeline-title" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6">Hành trình phát triển</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">Những dấu mốc quan trọng khẳng định vị thế của HakuTech trên thị trường công nghệ.</p>
                    </div>
                    <div className="relative">
                        {/* Timeline Horizontal Line (Desktop) */}
                        <div className="absolute top-[88px] left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 hidden md:block opacity-30" aria-hidden="true"></div>
                        
                        {/* Timeline Vertical Line (Mobile) */}
                        <div className="absolute top-0 left-6 w-1 h-full bg-slate-200 dark:bg-slate-800 md:hidden opacity-30" aria-hidden="true"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                            {[
                                { year: "2014", title: "Thành lập", desc: "Cửa hàng HakuTech đầu tiên ra đời tại Hà Nội với quy mô nhỏ." },
                                { year: "2018", title: "Mở rộng 10 cửa hàng", desc: "Phát triển mạng lưới phủ sóng khắp các tỉnh miền Bắc và miền Trung." },
                                { year: "2021", title: "Chuyển đổi số", desc: "Vận hành nền tảng thương mại điện tử hiện đại, phục vụ khách hàng online." },
                                { year: "2024", title: "Dẫn đầu thị trường", desc: "Trở thành một trong những hệ sinh thái bán lẻ công nghệ hàng đầu." }
                            ].map((item, idx) => (
                                <div key={idx} className="relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0 group">
                                    {/* Year Container (Desktop) */}
                                    <div className="hidden md:flex h-16 items-end pb-4">
                                        <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform duration-300">{item.year}</span>
                                    </div>
                                    
                                    {/* Marker */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary border-4 border-white dark:border-slate-950 shadow-xl z-20 flex items-center justify-center text-white font-bold md:mb-8 group-hover:scale-125 transition-all duration-300">
                                        <span className="material-icons text-sm" aria-hidden="true">circle</span>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex flex-col md:items-center flex-1">
                                        <div className="md:hidden text-2xl font-black text-primary mb-2">{item.year}</div>
                                        <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white md:text-center tracking-tight">{item.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed md:text-center font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 sm:py-32 bg-white dark:bg-slate-950" aria-labelledby="team-title">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 id="team-title" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6">Đội ngũ chủ chốt</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">Những người đứng sau sự phát triển không ngừng của HakuTech, tận tâm mang đến giá trị tốt nhất cho bạn.</p>
                        </div>
                        <Link 
                            to="/team" 
                            className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary rounded px-2"
                            aria-label="Xem tất cả thành viên trong đội ngũ HakuTech"
                        >
                            Xem tất cả đội ngũ <span className="material-icons" aria-hidden="true">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Nguyễn Minh Quân", role: "Founder & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAET4Ko6H6fmi4SKCsNspHLrJw0aNzwDzAkRjEX1QXDW8HTS5n0Og8nZB0_NTP-jYP7bmrsTI4BxomFBUJP3tY1Ik7qD9bzexHHM_cm0TLWVBZfRC-r47N9s44ro9Xd2l1G8jVoR0ht1PQHExbhm0j-pWn2Qjw8Heg_lLVBMetuMrCnARmYTEewr-bhe9UHHz_gyKJ7N8PNv5dPukDcFokOGJ44KyQBkvG2SpFoNsEZcCto1ZVITMqwjfbv-ZAEedFjlkuV5HNvSTM" },
                            { name: "Trần Thanh Hằng", role: "Giám đốc Công nghệ", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8VTP57LZhRwHd26Yoz7YaTR7hQqo78J6KKiJH2xcVye9W45eY6o23cvGG60g3KXB46xAX8IE-C2VVWed_OqO7hCCZbdxlnSr6uUsJVVQEkUX6JBNxiSbCALqwEL_hIMUMsInPSmnVWKBPa-mRGtlCzeJVi6_61P0DZApW4Qwa0ZV66qDZNMemudtxkel620hUs6xPoNqlUHkqxoy7B8roEPK4cGgBRfAp7Ge0xXCQYUdVQhWIyApiG5RuU2Y58ePRP5D9P7AA9Xw" },
                            { name: "Lê Hoàng Nam", role: "Giám đốc Marketing", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0-xppUikH2rVVbN05sO1SxUU_74f5UQ_Uz1f8Qx-XREjO-VYF3nC9lcnwU2oro7_kEZSomSuH18TOTEjK3MiHfLygM2K59GHJFjnLO0Gq2dXvePbfzhU4H79IiQrNE9X7-TnXtAH9jntQwM1p0AtBVHdp-WOS88fNdWWTe0QpDoAJ2oHx5s3glC9mwl8vKug7mq06_tp6jfe-0N9NUtYm0ip0bsOm4RUAt9y96LznHOJ0yrl0g8rc-t37jMP1gZYUqzuwJNi6Yj4" },
                            { name: "Phạm Phương Anh", role: "GĐ Dịch vụ Khách hàng", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8XjUE3x30WbJhp4fW84ohC_uHKB_5pGRokhDwxyucHq34K1zFOSsQbrdgEsOK_qMBW1eyBV1O6stUGNNtPrBGZFdTn24ghBFLEbVVS6op0L-5I9DkND3ciZ26NEjhJk5hdZOVwD3dLoBROX1IGeD5XJU5iewdlFTn6jD6w56LVnOp6wkYRE2BtGXY8B__eaSksEVeXMxeYljYJYb03c68_PudZXY2tgvW62E8GpKrskyCjtNox-ugn02tXRyZi_BPiU-d1G-dN3k" }
                        ].map((member, idx) => (
                            <article key={idx} className="group text-center sm:text-left">
                                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6 shadow-xl border border-slate-100 dark:border-slate-800">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={member.img} alt={`Chân dung ${member.name} - ${member.role}`} loading="lazy" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center sm:justify-start p-8">
                                        <div className="flex gap-4">
                                            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-all cursor-pointer focus:ring-2 focus:ring-white outline-none" aria-label={`Liên kết LinkedIn của ${member.name}`}>
                                                <i className="material-icons text-xl" aria-hidden="true">link</i>
                                            </button>
                                            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-all cursor-pointer focus:ring-2 focus:ring-white outline-none" aria-label={`Email cho ${member.name}`}>
                                                <i className="material-icons text-xl" aria-hidden="true">alternate_email</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{member.name}</h4>
                                <p className="text-primary font-extrabold uppercase tracking-widest text-xs">{member.role}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden" aria-labelledby="cta-heading">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 id="cta-heading" className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Trở thành một phần của HakuTech</h2>
                    <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">Chúng tôi luôn tìm kiếm những tài năng đam mê công nghệ để cùng nhau kiến tạo những giá trị mới. Hãy gia nhập đội ngũ của chúng tôi ngay hôm nay.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary text-white px-10 py-4.5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all focus:ring-4 focus:ring-primary/40 min-h-[56px] cursor-pointer">
                            Gửi hồ sơ ngay
                        </button>
                        <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-10 py-4.5 rounded-2xl font-black text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all focus:ring-4 focus:ring-slate-400/20 min-h-[56px] cursor-pointer">
                            Xem vị trí tuyển dụng
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
