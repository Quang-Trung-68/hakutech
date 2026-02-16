import React from 'react';
import { Link } from 'react-router-dom';

const TechNews = () => {
    return (
        <main id="main-content" className="bg-white dark:bg-slate-950 font-inter selection:bg-primary/30">
            {/* Skip Link */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg shadow-2xl"
            >
                Bỏ qua để xem tin công nghệ
            </a>

            {/* Breaking News Ticker */}
            <div className="bg-slate-950 text-white py-3 px-4 sm:px-8 overflow-hidden relative flex items-center gap-6 border-b border-slate-800" aria-label="Tin mới nhất">
                <span className="bg-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap animate-pulse">Hot News</span>
                <div className="whitespace-nowrap animate-marquee text-xs font-bold text-slate-300">
                    iPhone 16 Pro lộ diện với thiết kế camera mới độc đáo • Samsung Galaxy Z Fold 6 sẽ mỏng hơn và nhẹ hơn • Windows 12 dự kiến tích hợp AI sâu rộng ra mắt năm 2025 • HakuTech mở rộng hệ thống bảo hành toàn quốc
                </div>
            </div>

            {/* Hero Carousel Section */}
            <section className="relative w-full h-[500px] sm:h-[650px] md:h-[750px] overflow-hidden group" aria-labelledby="tech-news-hero-heading">
                <div className="absolute inset-0">
                    <img 
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3kZ2_5v6n0K_Qc8hFq1aEw7rS9oT0yU3iVWPx4lC6dM5bH8kG2jNfR7sL0qPp1zO4tYvwuX3mEJA9h6lK5c8nB7gD4fH0rVkLT9sW2O1mP3xYQi5UvJ6bC8lGz4hQ9wR7fykA2o0dE3pS6mN8tL5vW1jF0r4Pq9sK3lH6zO2nMVQ8y7wJ9oT4g5lR0kE1hP3sW7nL9vK5jM8oQ6rP0tS9yU3vX1wF4nL7h2mJ6kQ9rT5oP3lK8jH2gN0dE7rL4vW1yH6xO0mP9s" 
                        alt="Đặc khu công nghệ AI trên Smartphone" 
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 md:p-20 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6 shadow-xl" role="status">
                        Tiêu điểm công nghệ
                    </span>
                    <h1 id="tech-news-hero-heading" className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
                        Cuộc đua AI trên Smartphone: <br className="hidden sm:block" /> Khi phần cứng đã bão hòa
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-10 max-w-3xl drop-shadow-lg font-medium leading-relaxed hidden sm:block">
                        Năm 2024 đánh dấu bước ngoặt khi các ông lớn công nghệ không còn đua nhau về Megapixel hay Ram, mà tập trung vào trí tuệ nhân tạo. Điều này sẽ thay đổi cách chúng ta sử dụng điện thoại ra sao?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <button className="bg-primary text-white px-10 py-4.5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all active:scale-95 min-h-[56px] cursor-pointer focus:ring-4 focus:ring-primary/40">
                            Đọc phân tích chuyên sâu
                        </button>
                        <div className="flex items-center gap-4 text-white/80 text-sm font-bold bg-white/5 backdrop-blur-lg px-5 py-3 rounded-2xl border border-white/10">
                            <span className="material-icons text-primary" aria-hidden="true">visibility</span>
                            <span>12,450 Lượt xem</span>
                        </div>
                    </div>
                </div>
                {/* Carousel Navigation (Visual demonstration) */}
                <div className="absolute bottom-10 right-10 flex gap-4">
                    <button className="w-14 h-14 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl text-white flex items-center justify-center hover:bg-primary transition-all active:scale-90 shadow-2xl focus:ring-4 focus:ring-primary/40" aria-label="Bài trước">
                        <span className="material-icons text-2xl" aria-hidden="true">chevron_left</span>
                    </button>
                    <button className="w-14 h-14 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl text-white flex items-center justify-center hover:bg-primary transition-all active:scale-90 shadow-2xl focus:ring-4 focus:ring-primary/40" aria-label="Bài tiếp theo">
                        <span className="material-icons text-2xl" aria-hidden="true">chevron_right</span>
                    </button>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
                    {/* Left Column (Main Feed) */}
                    <div className="lg:col-span-8 space-y-20 sm:space-y-24">

                        {/* Section: Reviews */}
                        <section aria-labelledby="reviews-heading">
                            <div className="flex items-center justify-between mb-12 sm:mb-16">
                                <div className="space-y-2">
                                    <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Đánh giá chuyên sâu</h2>
                                    <div className="w-20 h-2 bg-primary rounded-full"></div>
                                </div>
                                <Link to="#" className="text-sm font-black text-primary uppercase tracking-widest hover:underline decoration-2 underline-offset-8 transition-all px-2 min-h-[44px] flex items-center" aria-label="Xem tất cả bài đánh giá">Xem tất cả</Link>
                            </div>
                            <div className="space-y-12 sm:space-y-16">
                                {[
                                    { 
                                        title: "Review ASUS ROG Zephyrus G14 (2024): Đỉnh cao Ultra-Portable Gaming", 
                                        desc: "Thiết kế mới hoàn toàn bằng nhôm CNC, màn hình OLED tuyệt đẹp và hiệu năng mạnh mẽ từ Ryzen 8000 Series. Chiếc laptop gaming mỏng nhẹ nhất thế giới có gì?", 
                                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9sM4W3O7Lh1yN0vP2kR4jT6qU8oI5lE3bC1wG9aZ7mF2xH4rK0vL6nO3qJ8sP5yT2lK1wG7mH4xJ0vL2nO9qK8sR5yU0wG4mI1xJ5vK3nO8qL7sR2yT9vK1wG6mH0xJ4vL3nO7qK5sR8yT1wG3mI2xJ9vK6nO4qL1sR0yT7vK9wG5mH2xJ8vL1nO6qK3sR9yT4wG1mI0xJ7vK2nO5qL8sR3yT6vK0wG8mH3xJ9vL4nO2qK7sR1yT5wG2mI4xJ6vK0nO8qL3sR9",
                                        score: "4.8/5"
                                    },
                                    { 
                                        title: "Trên tay Samsung Galaxy Fit3: Smartband ngon nhất tầm giá?", 
                                        desc: "Màn hình lớn tiệm cận smartwatch, pin 13 ngày và thiết kế nhôm sang trọng. Liệu đây có phải là đối thủ xứng tầm của Xiaomi Band 8 Pro trong năm nay?", 
                                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHr9K1lM6O2wP5qN8jR3vT9sU4oK0lD8bA2vF1jZ6nG2xH3rL9vK5nO1qM7sR4yT2lJ0wG6mH8xK3vN7qP5sR9yU2wG1mI4xJ0vL6nO3qK8sR5yT7lK9wG2mI1xJ4vL3nO8qK5sR0yT4lK6wG9mI2xJ7vL1nO6qK3sR9yT2lK8wG5mI0xJ3vL2nO5qK8sR4yT7lK1wG0mI6xJ9vL4nO2qK7sR1yT5wG2mI4xJ6vK0nO8qL3sR9yT",
                                        score: "4.5/5"
                                    },
                                    { 
                                        title: "Đánh giá Sony WF-1000XM5: Vẫn là vua chống ồn, nhưng có một số rào cản", 
                                        desc: "Kích thước nhỏ gọn hơn, chất âm cải thiện, nhưng cảm giác đeo và eartips bọt biển vẫn là rào cản với một số người dùng có ống tai nhỏ.", 
                                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2nK5L8vH1rW5mP9xJ3wS0oT6uV8pM2lE5cI7wG0aZ4nH1xJ6vL3nO9qK5sR2yT8vK4wF1jI3xJ0vN7qL2sR9yT5vK6wG3mI1xJ8vL4nO2qK7sR1yT5wG2mI4xJ6vK0nO8qL3sR9yT2lK8wG5mI0xJ3vL2nO5qK8sR4yT7lK1wG0mI6xJ9vL4nO2qK7sR1yT5wG2mI4xJ6vK0nO8qL3sR0",
                                        score: "4.6/5"
                                    }
                                ].map((review, idx) => (
                                    <article key={idx} className="flex flex-col md:flex-row gap-8 sm:gap-10 group bg-white dark:bg-slate-900/50 p-4 sm:p-0 rounded-3xl sm:rounded-none hover:shadow-2xl sm:hover:shadow-none transition-all">
                                        <div className="md:w-1/3 overflow-hidden rounded-3xl shadow-xl shadow-slate-100 dark:shadow-none bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
                                            <img 
                                                className="w-full h-56 sm:h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
                                                src={review.img} 
                                                alt={`Hình đại diện bài đánh giá ${review.title}`} 
                                                loading="lazy" 
                                            />
                                        </div>
                                        <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="flex text-amber-400" role="img" aria-label={`Đánh giá ${review.score}`}>
                                                    <span className="material-icons text-sm">star</span>
                                                    <span className="material-icons text-sm">star</span>
                                                    <span className="material-icons text-sm">star</span>
                                                    <span className="material-icons text-sm">star</span>
                                                    <span className="material-icons text-sm">star_half</span>
                                                </div>
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded-lg border border-slate-100 dark:border-slate-800">Review</span>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight tracking-tight">
                                                <Link to="#" className="focus:outline-none focus:underline underline-offset-4 decoration-2">{review.title}</Link>
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 md:line-clamp-3 font-medium">{review.desc}</p>
                                            <div className="flex items-center justify-between pt-2">
                                                <div className="flex items-center gap-3">
                                                    <img className="w-8 h-8 rounded-full border border-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCttb41lm1oK-zpDkIRMSu5E9H792U6oEojvl1jDzjz5D6S4hq03qaNUa5uS3yBRCM-vsjeReQHGGHI6E_uzQH1tsR_S3hXS60d0YxfsECzvvqouayx4a7Ovv8N_wTFN6WS4w6XstxEIVmzXQSR4kvWsHWzxBOW6-a-T-zyk2XBBNT2wM4PNnhqeyuwRF7lceSioUnzsxIhCB6x0LtNHTPrHGs6ElwJOTvuwyWZYwd-QshOA-rrDL4GbJgQ3QR5v6cK0kDk5koRIdI" alt="Minh Khôi" loading="lazy" />
                                                    <div className="flex flex-col">
                                                        <span className="text-[11px] font-black text-slate-900 dark:text-white">Minh Khôi</span>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Editor • 2 ngày trước</span>
                                                    </div>
                                                </div>
                                                <Link to="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-inner" aria-label={`Xem chi tiết bài đánh giá ${review.title}`}>
                                                    <span className="material-icons text-lg" aria-hidden="true">chevron_right</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                        {/* Section: News Grid */}
                        <section aria-labelledby="latest-news-grid-heading">
                            <div className="space-y-2 mb-12 sm:mb-16">
                                <h2 id="latest-news-grid-heading" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Tin mới cập nhật</h2>
                                <div className="w-20 h-2 bg-primary rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { title: "NVIDIA ra mắt card RTX 50 Series: Bước nhảy vọt về hiệu năng AI", time: "2 giờ trước", tag: "Hardware" },
                                    { title: "iOS 18 sẽ là bản cập nhật lớn nhất lịch sử với sự hỗ trợ của Gemini", time: "5 giờ trước", tag: "Mobile" },
                                    { title: "Google Photos miễn phí tính năng Magic Editor cho mọi người", time: "8 giờ trước", tag: "Software" },
                                    { title: "SpaceX Starship bay thử lần 4 thành công rực rỡ", time: "12 giờ trước", tag: "Tech" }
                                ].map((news, idx) => (
                                    <article key={idx} className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all hover:-translate-y-2 focus-within:ring-4 focus-within:ring-primary/20">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-lg" role="status">{news.tag}</span>
                                            <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold">
                                                <span className="material-icons text-sm" aria-hidden="true">schedule</span>
                                                <span>{news.time}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-black mb-6 text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight tracking-tight">
                                            <Link to="#" className="outline-none focus:underline">{news.title}</Link>
                                        </h3>
                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Sơ lược tin tức</span>
                                            <span className="material-icons text-slate-200 group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true">east</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Column (Sidebar) */}
                    <aside className="lg:col-span-4 space-y-12 sm:space-y-16">
                        {/* Trending Topics */}
                        <section className="bg-slate-950 dark:bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-none" aria-labelledby="trending-heading">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <h3 id="trending-heading" className="text-xl font-black text-white mb-8 flex items-center gap-3">
                                <span className="w-10 h-10 bg-red-500/20 text-red-500 rounded-xl flex items-center justify-center">
                                    <span className="material-icons text-xl" aria-hidden="true">whatshot</span>
                                </span>
                                Chủ đề nóng
                            </h3>
                            <nav className="flex flex-wrap gap-2" aria-label="Các từ khóa xu hướng">
                                {["#iPhone16Pro", "#ArtificialIntelligence", "#RTX5090", "#GalaxyZFold6", "#Windows12AI", "#MacBookProM3", "#Starship", "#Gaming2024"].map((tag, idx) => (
                                    <Link key={idx} to="#" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[11px] font-black text-slate-300 hover:text-primary hover:bg-white/10 hover:border-primary/50 transition-all focus:ring-2 focus:ring-primary outline-none">
                                        {tag}
                                    </Link>
                                ))}
                            </nav>
                        </section>

                        {/* Top Read This Week */}
                        <section className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none" aria-labelledby="top-read-heading">
                            <h3 id="top-read-heading" className="text-xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Đọc nhiều tuần này</h3>
                            <div className="space-y-8">
                                {[
                                    { title: "Cách cài Windows 11 không cần TPM 2.0 mới nhất 2024", views: "25k" },
                                    { title: "Top 10 game AAA đáng mong đợi cuối năm nay", views: "18k" },
                                    { title: "So sánh Snapdragon 8 Gen 4 và Apple A18 Pro", views: "15k" },
                                    { title: "Lộ diện thiết kế PlayStation 5 Pro cực chất", views: "12k" }
                                ].map((item, idx) => (
                                    <Link key={idx} to="#" className="flex gap-6 items-start group focus:ring-2 focus:ring-primary rounded-xl p-1 outline-none">
                                        <span className="text-4xl font-black text-slate-100 dark:text-slate-800 leading-none group-hover:text-primary transition-colors pr-2" aria-hidden="true">{idx + 1}</span>
                                        <div className="space-y-2">
                                            <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight tracking-tight">{item.title}</h4>
                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <span className="material-icons text-xs" aria-hidden="true">trending_up</span>
                                                {item.views} Lượt xem
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Editor's Choice - Highlight Card */}
                        <section className="relative rounded-[2.5rem] overflow-hidden group h-[28rem] sm:h-[32rem] shadow-2xl shadow-primary/10 border-4 border-white dark:border-slate-800" aria-label="Góc nhìn biên tập viên">
                            <img 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-125" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHr9K1lM6O2wP5qN8jR3vT9sU4oK0lD8bA2vF1jZ6nG2xH3rL9vK5nO1qM7sR4yT2lJ0wG6mH8xK3vN7qP5sR9yU2wG1mI4xJ0vL6nO3qK8sR5yT7lK9wG2mI1xJ4vL3nO8qK5sR0yT4lK6wG9mI2xJ7vL1nO6qK3sR9yT2lK8wG5mI0xJ3vL2nO5qK8sR4yT7lK1wG0mI6xJ9vL4nO2qK7sR1yT5wG2mI4xJ6vK0nO8qL3sR9yT" 
                                alt="Biên tập viên bình luận về tương lai công nghệ không dây" 
                                loading="lazy" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-10">
                                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 w-max shadow-xl" role="status">Video Discussion</span>
                                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight tracking-tight">Tại sao Apple đang dần loại bỏ cổng sạc vật lý?</h3>
                                <p className="text-slate-300 text-sm font-medium line-clamp-3 mb-8 opacity-90 leading-relaxed">Một tương lai không dây hoàn toàn đang được kiến tạo, nhưng liệu hạ tầng công nghệ hiện tại đã đủ đáp ứng nhu cầu khắt khe của người dùng chuyên nghiệp?</p>
                                <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all active:scale-95 cursor-pointer max-w-max min-h-[44px]">
                                    <span className="material-icons text-lg" aria-hidden="true">play_arrow</span>
                                    Xem ngay
                                </button>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default TechNews;
