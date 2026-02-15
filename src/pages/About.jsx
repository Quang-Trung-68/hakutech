import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <React.Fragment>
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYuNJ-v1NKIP4DAmdRIO_Ba1FxEMQSDf3gBTlDtGNaMp7tdI1kdaf_aoA3_VrC9knUn0gGqf5I5uioHwB6gDpDEv_U_HpooO6tc7kuwiap72D7EqS--BNgjPew61nPQ-a6fIEv5lKxnJYa4sN1DUJH9iOseMvZAi7VVvj5WjtXJbWrPz-HiiWHHcLZfCmn3fjfSTaymrPxo6szyLDwJIfFkGT4U5EBrd5e3mhvJxYJI3-DbTJTNTT7MKXDtEssjXYfJT08fj7kQMo" alt="Modern tech office" />
                    <div className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/70"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm mb-6 uppercase tracking-widest">Since 2014</span>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Câu chuyện của <br /><span className="text-primary">HakuTech</span></h1>
                        <p className="text-xl text-slate-200 leading-relaxed mb-8">
                            Kiến tạo tương lai công nghệ cho người Việt qua những giải pháp thiết bị thông minh, chính hãng và dịch vụ tận tâm nhất. Chúng tôi không chỉ bán thiết bị, chúng tôi xây dựng phong cách sống hiện đại.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all">Khám phá ngay</button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">Tìm hiểu thêm</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-24 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Nền tảng của chúng tôi</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Sứ mệnh */}
                        <div className="p-8 rounded-xl bg-background-light dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all group">
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-icons text-3xl">rocket_launch</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Sứ mệnh</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Mang công nghệ đỉnh cao đến mọi nhà với mức giá tiếp cận nhất, giúp nâng tầm chất lượng cuộc sống cho cộng đồng người dùng Việt Nam qua hệ sinh thái sản phẩm đa dạng.
                            </p>
                        </div>
                        {/* Tầm nhìn */}
                        <div className="p-8 rounded-xl bg-background-light dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all group">
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-icons text-3xl">visibility</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Tầm nhìn</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Trở thành hệ sinh thái bán lẻ công nghệ số 1 tại Việt Nam, tiên phong trong việc ứng dụng công nghệ mới và cá nhân hóa trải nghiệm mua sắm của khách hàng.
                            </p>
                        </div>
                        {/* Giá trị cốt lõi */}
                        <div className="p-8 rounded-xl bg-background-light dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all group">
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-icons text-3xl">star</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Giá trị cốt lõi</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Tận tâm với khách hàng, không ngừng đổi mới sáng tạo, và luôn giữ vững tinh thần chính trực trong mọi hoạt động kinh doanh để xây dựng niềm tin bền vững.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "10+", label: "Năm kinh nghiệm" },
                            { value: "500k+", label: "Khách hàng tin dùng" },
                            { value: "20+", label: "Cửa hàng toàn quốc" },
                            { value: "1000+", label: "Sản phẩm chính hãng" }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
                                <div className="text-primary-100 font-medium uppercase tracking-wider text-sm opacity-80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-background-light dark:bg-slate-950 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Hành trình phát triển</h2>
                        <p className="text-slate-500 max-w-xl mx-auto">Những dấu mốc quan trọng khẳng định vị thế của HakuTech trên thị trường công nghệ.</p>
                    </div>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 w-full md:h-0.5 md:bg-gradient-to-r md:from-primary md:via-primary md:to-slate-200 -translate-y-1/2 hidden md:block opacity-50"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { year: "2014", title: "Thành lập", desc: "Cửa hàng HakuTech đầu tiên ra đời tại Hà Nội với quy mô nhỏ." },
                                { year: "2018", title: "Mở rộng 10 cửa hàng", desc: "Phát triển mạng lưới phủ sóng khắp các tỉnh miền Bắc và miền Trung." },
                                { year: "2021", title: "Chuyển đổi số", desc: "Vận hành nền tảng thương mại điện tử hiện đại, phục vụ khách hàng online." },
                                { year: "2024", title: "Dẫn đầu thị trường", desc: "Trở thành một trong những hệ sinh thái bán lẻ công nghệ hàng đầu." }
                            ].map((item, idx) => (
                                <div key={idx} className="relative flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className="w-12 h-12 rounded-full bg-primary border-4 border-white dark:border-slate-950 shadow-xl z-10 flex items-center justify-center text-white font-bold mb-6 md:absolute md:top-1/2 md:-translate-y-1/2">
                                        <span className="material-icons text-sm">circle</span>
                                    </div>
                                    <div className="md:pt-16">
                                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                                        <h4 className="font-bold text-lg mb-2 dark:text-white">{item.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Đội ngũ chủ chốt</h2>
                            <p className="text-slate-500">Những người đứng sau sự phát triển không ngừng của HakuTech, tận tâm mang đến giá trị tốt nhất cho bạn.</p>
                        </div>
                        <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                            Xem tất cả đội ngũ <span className="material-icons">arrow_forward</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Nguyễn Minh Quân", role: "Founder & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAET4Ko6H6fmi4SKCsNspHLrJw0aNzwDzAkRjEX1QXDW8HTS5n0Og8nZB0_NTP-jYP7bmrsTI4BxomFBUJP3tY1Ik7qD9bzexHHM_cm0TLWVBZfRC-r47N9s44ro9Xd2l1G8jVoR0ht1PQHExbhm0j-pWn2Qjw8Heg_lLVBMetuMrCnARmYTEewr-bhe9UHHz_gyKJ7N8PNv5dPukDcFokOGJ44KyQBkvG2SpFoNsEZcCto1ZVITMqwjfbv-ZAEedFjlkuV5HNvSTM" },
                            { name: "Trần Thanh Hằng", role: "Giám đốc Công nghệ", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8VTP57LZhRwHd26Yoz7YaTR7hQqo78J6KKiJH2xcVye9W45eY6o23cvGG60g3KXB46xAX8IE-C2VVWed_OqO7hCCZbdxlnSr6uUsJVVQEkUX6JBNxiSbCALqwEL_hIMUMsInPSmnVWKBPa-mRGtlCzeJVi6_61P0DZApW4Qwa0ZV66qDZNMemudtxkel620hUs6xPoNqlUHkqxoy7B8roEPK4cGgBRfAp7Ge0xXCQYUdVQhWIyApiG5RuU2Y58ePRP5D9P7AA9Xw" },
                            { name: "Lê Hoàng Nam", role: "Giám đốc Marketing", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0-xppUikH2rVVbN05sO1SxUU_74f5UQ_Uz1f8Qx-XREjO-VYF3nC9lcnwU2oro7_kEZSomSuH18TOTEjK3MiHfLygM2K59GHJFjnLO0Gq2dXvePbfzhU4H79IiQrNE9X7-TnXtAH9jntQwM1p0AtBVHdp-WOS88fNdWWTe0QpDoAJ2oHx5s3glC9mwl8vKug7mq06_tp6jfe-0N9NUtYm0ip0bsOm4RUAt9y96LznHOJ0yrl0g8rc-t37jMP1gZYUqzuwJNi6Yj4" },
                            { name: "Phạm Phương Anh", role: "GĐ Dịch vụ Khách hàng", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8XjUE3x30WbJhp4fW84ohC_uHKB_5pGRokhDwxyucHq34K1zFOSsQbrdgEsOK_qMBW1eyBV1O6stUGNNtPrBGZFdTn24ghBFLEbVVS6op0L-5I9DkND3ciZ26NEjhJk5hdZOVwD3dLoBROX1IGeD5XJU5iewdlFTn6jD6w56LVnOp6wkYRE2BtGXY8B__eaSksEVeXMxeYljYJYb03c68_PudZXY2tgvW62E8GpKrskyCjtNox-ugn02tXRyZi_BPiU-d1G-dN3k" }
                        ].map((member, idx) => (
                            <div key={idx} className="group">
                                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-6">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={member.img} alt={member.name} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <div className="flex gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
                                                <i className="material-icons text-sm">link</i>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
                                                <i className="material-icons text-sm">alternate_email</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h4>
                                <p className="text-primary font-semibold">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background-light dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Trở thành một phần của HakuTech</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">Chúng tôi luôn tìm kiếm những tài năng đam mê công nghệ để cùng nhau kiến tạo những giá trị mới. Hãy gia nhập đội ngũ của chúng tôi ngay hôm nay.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/40 transition-all">Gửi hồ sơ ngay</button>
                        <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">Xem vị trí tuyển dụng</button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default About;
