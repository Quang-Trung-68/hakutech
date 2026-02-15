import React from 'react';
import { Link } from 'react-router-dom';

const TechNews = () => {
    return (
        <React.Fragment>
            {/* Breaking News Ticker (Optional) */}
            <div className="bg-slate-900 text-white py-2 px-4 overflow-hidden relative flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
                <span className="bg-red-600 px-2 py-0.5 rounded animate-pulse">Hot News</span>
                <div className="whitespace-nowrap animate-marquee">
                    iPhone 16 Pro lộ diện với thiết kế camera mới • Samsung Galaxy Z Fold 6 sẽ mỏng hơn đáng kể • Windows 12 dự kiến ra mắt vào năm 2025 với tích hợp AI sâu rộng
                </div>
            </div>

            {/* Hero Carousel */}
            <section className="relative w-full h-[600px] overflow-hidden group">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3kZ2_5v6n0K_Qc8hFq1aEw7rS9oT0yU3iVWPx4lC6dM5bH8kG2jNfR7sL0qPp1zO4tYvwuX3mEJA9h6lK5c8nB7gD4fH0rVkLT9sW2O1mP3xYQi5UvJ6bC8lGz4hQ9wR7fykA2o0dE3pS6mN8tL5vW1jF0r4Pq9sK3lH6zO2nMVQ8y7wJ9oT4g5lR0kE1hP3sW7nL9vK5jM8oQ6rP0tS9yU3vX1wF4nL7h2mJ6kQ9rT5oP3lK8jH2gN0dE7rL4vW1yH6xO0mP9s" alt="Hero News" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-5xl">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded mb-4">Tiêu điểm</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                        Cuộc đua AI trên Smartphone: <br /> Khi phần cứng đã bão hòa
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl drop-shadow-md">
                        Năm 2024 đánh dấu bước ngoặt khi các ông lớn công nghệ không còn đua nhau về Megapixel hay Ram, mà tập trung vào trí tuệ nhân tạo. Điều này sẽ thay đổi cách chúng ta sử dụng điện thoại ra sao?
                    </p>
                    <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors shadow-lg">Đọc phân tích</button>
                </div>
                {/* Carousel Controls */}
                <div className="absolute bottom-8 right-8 flex gap-2">
                    <button className="w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                        <span className="material-icons">chevron_left</span>
                    </button>
                    <button className="w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                        <span className="material-icons">chevron_right</span>
                    </button>
                </div>
            </section>

            {/* Main Content Layout */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column (Content) */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Section: Reviews */}
                        <section>
                            <div className="flex items-center justify-between mb-8 border-l-4 border-primary pl-4">
                                <h2 className="text-3xl font-bold uppercase tracking-wide">Đánh giá chuyên sâu</h2>
                                <Link to="#" className="text-sm font-bold text-primary hover:underline">Xem tất cả</Link>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { title: "Review ASUS ROG Zephyrus G14 (2024): Đỉnh cao Ultra-Portable Gaming", desc: "Thiết kế mới hoàn toàn bằng nhôm CNC, màn hình OLED tuyệt đẹp và hiệu năng mạnh mẽ từ Ryzen 8000 Series.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9sM4W3O7Lh1yN0vP2kR4jT6qU8oI5lE3bC1wG9aZ7mF2xH4rK0vL6nO3qJ8sP5yT2lK1wG7mH4xJ0vL2nO9qK8sR5yU0wG4mI1xJ5vK3nO8qL7sR2yT9vK1wG6mH0xJ4vL3nO7qK5sR8yT1wG3mI2xJ9vK6nO4qL1sR0yT7vK9wG5mH2xJ8vL1nO6qK3sR9yT4wG1mI0xJ7vK2nO5qL8sR3yT6vK0wG8mH3xJ9vL4nO2qK7sR1yT5wG2mI4xJ6vK0nO8qL3sR9" },
                                    { title: "Trên tay Samsung Galaxy Fit3: Smartband ngon nhất tầm giá dưới 2 triệu?", desc: "Màn hình lớn tiệm cận smartwatch, pin 13 ngày và thiết kế nhôm sang trọng. Liệu đây có phải là đối thủ xứng tầm của Xiaomi Band 8 Pro?", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHr9K1lM6O2wP5qN8jR3vT9sU4oK0lD8bA2vF1jZ6nG2xH3rL9vK5nO1qM7sR4yT2lJ0wG6mH8xK3vN7qP5sR9yU2wG1mI4xJ0vL6nO3qK8sR5yT7lK9wG2mI1xJ4vL3nO8qK5sR0yT4lK6wG9mI2xJ7vL1nO6qK3sR9yT2lK8wG5mI0xJ3vL2nO5qK8sR4yT7lK1wG0mI6xJ9vL4nO2qK7sR1yT5wG2mI4xJ6vK0nO8qL3sR9yT" },
                                    { title: "Đánh giá Sony WF-1000XM5: Vẫn là vua chống ồn, nhưng...", desc: "Kích thước nhỏ gọn hơn, chất âm cải thiện, nhưng cảm giác đeo và eartips bọt biển vẫn là rào cản với một số người dùng.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2nK5L8vH1rW5mP9xJ3wS0oT6uV8pM2lE5cI7wG0aZ4nH1xJ6vL3nO9qK5sR2yT8vK4wF1jI3xJ0vN7qL2sR9yT5vK6wG3mI1xJ8vL4nO2qK7sR1yT5wG2mI4xJ6vK0nO8qL3sR9yT2lK8wG5mI0xJ3vL2nO5qK8sR4yT7lK1wG0mI6xJ9vL4nO2qK7sR1yT5wG2mI4xJ6vK0nO8qL3sR0" }
                                ].map((review, idx) => (
                                    <article key={idx} className="flex flex-col md:flex-row gap-8 group">
                                        <div className="md:w-1/3 overflow-hidden rounded-xl">
                                            <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src={review.img} alt={review.title} />
                                        </div>
                                        <div className="md:w-2/3 flex flex-col justify-center">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="flex text-amber-500">
                                                    <span className="material-icons text-sm">star</span>
                                                    <span className="material-icons text-sm">star</span>
                                                    <span className="material-icons text-sm">star</span>
                                                    <span className="material-icons text-sm">star</span>
                                                    <span className="material-icons text-sm">star_half</span>
                                                </div>
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Review</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                                                <Link to="#">{review.title}</Link>
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 text-sm">{review.desc}</p>
                                            <div className="flex items-center gap-2 mt-auto">
                                                <img className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCttb41lm1oK-zpDkIRMSu5E9H792U6oEojvl1jDzjz5D6S4hq03qaNUa5uS3yBRCM-vsjeReQHGGHI6E_uzQH1tsR_S3hXS60d0YxfsECzvvqouayx4a7Ovv8N_wTFN6WS4w6XstxEIVmzXQSR4kvWsHWzxBOW6-a-T-zyk2XBBNT2wM4PNnhqeyuwRF7lceSioUnzsxIhCB6x0LtNHTPrHGs6ElwJOTvuwyWZYwd-QshOA-rrDL4GbJgQ3QR5v6cK0kDk5koRIdI" alt="Author" />
                                                <span className="text-xs font-bold text-slate-500">Minh Khôi</span>
                                                <span className="text-slate-300">•</span>
                                                <span className="text-xs text-slate-400">2 ngày trước</span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                        {/* Section: Latest News Grid */}
                        <section>
                            <div className="flex items-center justify-between mb-8 border-l-4 border-primary pl-4">
                                <h2 className="text-3xl font-bold uppercase tracking-wide">Tin mới cập nhật</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { title: "NVIDIA ra mắt dòng card đồ họa RTX 50 Series vào cuối năm nay?", time: "2 giờ trước" },
                                    { title: "iOS 18 sẽ là bản cập nhật lớn nhất lịch sử iPhone với Gemini AI", time: "5 giờ trước" },
                                    { title: "Google Photos bổ sung tính năng Magic Editor miễn phí cho mọi người dùng", time: "8 giờ trước" },
                                    { title: "SpaceX thử nghiệm thành công Starship lần thứ 4", time: "12 giờ trước" }
                                ].map((news, idx) => (
                                    <article key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                                            <span className="text-xs font-bold text-primary uppercase">Tin nhanh</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-3 hover:text-primary cursor-pointer line-clamp-2">{news.title}</h3>
                                        <div className="flex items-center gap-2 text-slate-400 text-xs">
                                            <span className="material-icons text-sm">schedule</span>
                                            <span>{news.time}</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Column (Sidebar) */}
                    <aside className="lg:col-span-4 space-y-10">
                        {/* Trending Topics */}
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="material-icons text-red-500">whatshot</span>
                                Chủ đề nóng
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["#iPhone16", "#AI", "#ChatGPT", "#RTX5090", "#GalaxyS25", "#Windows12", "#MacBookM3", "#GamePass"].map((tag, idx) => (
                                    <Link key={idx} to="#" className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-all">
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Most Read */}
                        <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-6">Đọc nhiều nhất tuần</h3>
                            <div className="space-y-6 relative">
                                {[
                                    { title: "Hướng dẫn cài đặt Windows 11 không cần TPM 2.0 mới nhất 2024", views: 2500 },
                                    { title: "Top 10 game mobile đồ họa đẹp nhất năm nay", views: 1800 },
                                    { title: "So sánh chip Snapdragon 8 Gen 4 và Apple A18 Pro", views: 1500 },
                                    { title: "Lộ diện thiết kế PlayStation 5 Pro: Quá đẹp!", views: 1200 }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start group">
                                        <span className="text-3xl font-black text-slate-200 dark:text-slate-700 leading-none group-hover:text-primary transition-colors">{idx + 1}</span>
                                        <div>
                                            <h4 className="text-sm font-bold mb-1 hover:text-primary cursor-pointer line-clamp-2">{item.title}</h4>
                                            <span className="text-xs text-slate-400 font-medium">{item.views.toLocaleString()} lượt xem</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Editor's Choice */}
                        <div className="relative rounded-xl overflow-hidden group h-96">
                            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHr9K1lM6O2wP5qN8jR3vT9sU4oK0lD8bA2vF1jZ6nG2xH3rL9vK5nO1qM7sR4yT2lJ0wG6mH8xK3vN7qP5sR9yU2wG1mI4xJ0vL6nO3qK8sR5yT7lK9wG2mI1xJ4vL3nO8qK5sR0yT4lK6wG9mI2xJ7vL1nO6qK3sR9yT2lK8wG5mI0xJ3vL2nO5qK8sR4yT7lK1wG0mI6xJ9vL4nO2qK7sR1yT5wG2mI4xJ6vK0nO8qL3sR9yT" alt="Editor choice" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6">
                                <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur text-white text-[10px] font-bold uppercase rounded mb-2 w-max">Góc nhìn</span>
                                <h3 className="text-xl font-bold text-white mb-2 leading-snug">Tại sao các hãng công nghệ đang dần loại bỏ cổng sạc vật lý?</h3>
                                <p className="text-slate-300 text-xs line-clamp-2 mb-4">Một tương lai không dây hoàn toàn đang đến rất gần, nhưng liệu người dùng đã sẵn sàng?</p>
                                <button className="text-white text-xs font-bold uppercase tracking-wider underline hover:text-primary transition-colors text-left">Đọc ngay</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </React.Fragment>
    );
};

export default TechNews;
