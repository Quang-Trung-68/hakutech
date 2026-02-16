import React from 'react';
import { Link } from 'react-router-dom';

const Promotions = () => {
    return (
        <main id="main-content" className="container mx-auto px-4 sm:px-6 py-6 space-y-8 sm:space-y-12">
            {/* Skip to main content link for keyboard navigation */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
            >
                Bỏ qua để xem nội dung chính
            </a>

            {/* Hero Banner */}
            <section className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-[21/9] flex items-center min-h-[300px]" aria-labelledby="promo-hero-title">
                <img 
                    alt="Công nghệ Tech Season Sale rực rỡ với màu sắc hiện đại" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmGX7w4pNiPGqL2RKR5UUqgixQQ434FA7bprXFVKURJtmwGsdw2Kcm6hDjKz2h2b23zJ09o2a1lNzcwVBIETToTF-7Ssa69HKN0Of5TatrbM1p1eNZzYQzfeEvDBbd4HxatYQcZD9HI2fyCBDg39bFWjKbvOZCotkcw82H4hbGvZMQVWSZkZlbFFP4KHpqiSdtXtnTjtenmnoZNvR3UWlqEEP24k-ostQ9mALR5QhHTYXwLf9ro7fq0VxbSa48NDP_sdvi7p_C7kM" 
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                <div className="relative z-10 px-6 sm:px-12 max-w-2xl space-y-4 sm:space-y-6">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full" role="status">Sự kiện lớn nhất năm</span>
                    <h1 id="promo-hero-title" className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">Tech Season <br /><span className="text-primary">Sale - Up to 50%</span></h1>
                    <p className="text-slate-300 text-sm sm:text-lg lg:text-xl">Nâng cấp thiết bị của bạn với mức giá chưa từng có. Cam kết chính hãng 100%.</p>
                    <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                        <button className="px-6 sm:px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 motion-safe:transition-all motion-safe:duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary min-h-[44px]">Săn ngay</button>
                        <button className="px-6 sm:px-8 py-3 bg-white/10 text-white backdrop-blur-md font-bold rounded-lg hover:bg-white/20 motion-safe:transition-all motion-safe:duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white min-h-[44px]">Xem chi tiết</button>
                    </div>
                </div>
            </section>

            {/* Flash Sale Section */}
            <section className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-800" aria-labelledby="flash-sale-title">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center gap-2 text-red-500">
                            <span className="material-icons text-3xl" aria-hidden="true">bolt</span>
                            <h2 id="flash-sale-title" className="text-xl sm:text-2xl font-extrabold uppercase italic">Flash Sale</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">Kết thúc sau:</span>
                            <div className="flex gap-1.5" role="timer" aria-label="Thời gian còn lại của Flash Sale">
                                <span className="bg-slate-800 text-white px-2 py-1 rounded font-bold text-base sm:text-lg">00</span>
                                <span className="text-slate-800 dark:text-white font-bold text-lg" aria-hidden="true">:</span>
                                <span className="bg-slate-800 text-white px-2 py-1 rounded font-bold text-base sm:text-lg">15</span>
                                <span className="text-slate-800 dark:text-white font-bold text-lg" aria-hidden="true">:</span>
                                <span className="bg-primary text-white px-2 py-1 rounded font-bold text-base sm:text-lg animate-pulse">30</span>
                            </div>
                        </div>
                    </div>
                    <Link to="/products" className="text-primary font-bold hover:underline text-sm flex items-center min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary rounded" aria-label="Xem tất cả sản phẩm đang Flash Sale">
                        Xem tất cả <span className="material-icons text-sm" aria-hidden="true">chevron_right</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                    {/* Products 1-6 */}
                    {[
                        { name: "iPhone 15 Pro Max 256GB", price: "28.990.000đ", oldPrice: "34.990.000đ", discount: "-40%", sold: 152, soldPercent: "85%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQZC_lnWrAC0OoFLupzT7gJyJU2huYHVXpgtx33SsU7TilbB0WjVFo5Saf0F_BeITtwOLqsKMS957mRLxCcF8Tu2dps_NuZMih07hbXbc_Denf6EuzcADOfjHUQFgXkoNy2hbcAa-1XRvsED3izRgRzwQbn1r0x0KZG2z6kX1ZN0ZqCvnevLcxY8nWdjJyrbXImIjlAFKcuBjWCDEuVaxM9500seyE6Zi0o8NNAT7-7Smt4YACfGEmme1jSDHpb2aOZoOv8JfoujM" },
                        { name: "iPad Air M2 11 inch Wi-Fi", price: "15.490.000đ", oldPrice: "17.990.000đ", discount: "-25%", sold: 45, soldPercent: "45%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOrAyj5GjEmPgthW3wd1Lj7vW1pIkp1zKgttpFPVotKw4ycG0ViNRZKOLybVKxVD3nw1MvcqBanTcdWhjRSjv2aNi6GqHxkC-9crCipbvxGtQbvuzjSUBWLH3Jl2BzpngFCvillPubGLalbpoXSeWetC2Iipif_oxF77WM1FAyHUm3cr-Wzj_pjXGFDsmaPHCiJy57FzmnF2iMN04syPnNzge9EzCzQt3AJctuUTFQhitP1naWBZkVVOHCCZvCzOVKRZeejWpyJA4" },
                        { name: "HakuWatch Pro Series 9", price: "5.990.000đ", oldPrice: "11.990.000đ", discount: "-50%", sold: "Sắp cháy hàng", soldPercent: "95%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlQS5EWS0WAPBLo5EulVJ32WVebNWCQWGD4U6uLT3x8lAkhi0_ZRzBnD3K4sPP91FT0Gf3p-hfjIrD3ZGKZj8rl2GLwrFXThtude3wzMo-3govjFUBMfb7sHmXjHehjbM8if43fZARKwTCVfeechl55o_5pXuOQa2OUAuw0ZFZUZQVmv3uqxbg-74l4qb7KYS_IxXAF9rdqt8cgPMRK5ACG46QD1-o1sArrSNStGxyAK36PIdyjeSGRJ1L3sW8MkRXFJWyzO_Boj0" },
                        { name: "Sony WH-1000XM5", price: "7.190.000đ", oldPrice: "8.490.000đ", discount: "-15%", sold: 22, soldPercent: "30%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZCUsw39CXfJda0_s9w0pnEt0tTKBBzv22GJYrvGyrZZqxEgWp7ZVTZBK8SuEUj2koiePCX546N5910GgmQosfnEc_wvSkwA7a5F5oN_GHN46JbF2pO2g4Lb-aK-xfkLUfuHB083CZmKmMt7BHYX8uGfEsd2cc2dQA6NTxnOJREpRvmsItKtacHiKsmlipZCuEWVJnAI2S3eqQdg89DhWcJVr7pEj2Qcwlqb1dqJGL0k3EtAEl5bfby1rMcGC070qsikGUFIxRIy0" },
                        { name: "MacBook Air M3 13 inch", price: "27.490.000đ", oldPrice: "29.990.000đ", discount: "-10%", sold: 88, soldPercent: "60%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsf0lbf5yU2__qbGoVXLhVURs11u8CPKVVwJabJop6Zj1K-USIopSi97VG8_CpmJXqB8rROjZKEgvtnf5Qfv5jstv-C-6fL9x0kSuxlU-5rKE-zNR8JghqphZLCL8alqMZ1HII_PARgV_Gz0_O988xiwJvbqZ_J99bLkYCP8CI8Ays5LdTaTa6DuTowDxv_tj4kwKwXdPF8yOrhCs9OaCqlBLqY3VY7Y_ratinYTyY_fRv6SZrmI-_PQOWy9a3D2_t4iTVHzbXPmk" },
                        { name: "Monitor Gaming 27\" QHD", price: "4.590.000đ", oldPrice: "7.290.000đ", discount: "-35%", sold: 12, soldPercent: "20%", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoC281uueKO_I2uHj0CYF5QrV3cWj1hDbNXYhxbMP555KjHLaSPc-6O6z3oGKldHyyat84RyJ5M9WAT2SXbHYzEuZuGaEGLkoOK6Opn3GmnG-19wZPbWHXRfvcrXRjYHDfWExNJOGttV4yrv2Au-jkLFSTYcOq81AGYYnJMTnnqcGELzaC4cqsf-FlQilHEcp7OEmDdCWB_ndZ1-H2jJ_mgZpeFNUrx_agdW3Z1jzKmfMI9gHG6YUlxdmKp5sxzPOIr-RroC1ttHQ" }
                    ].map((item, idx) => (
                        <article key={idx} className="group cursor-pointer">
                            <div className="relative aspect-square bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden mb-3">
                                <img 
                                    alt={item.name} 
                                    className="w-full h-full object-cover motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-500" 
                                    src={item.img} 
                                    loading="lazy"
                                />
                                <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded" role="status">{item.discount}</div>
                            </div>
                            <h3 className="font-semibold text-sm line-clamp-2 mb-1 motion-safe:group-hover:text-primary motion-safe:transition-colors text-slate-900 dark:text-slate-100">{item.name}</h3>
                            <div className="flex items-end gap-2 mb-3">
                                <span className="text-primary font-bold text-base sm:text-lg">{item.price}</span>
                                <span className="text-slate-400 text-xs line-through mb-1" aria-label={`Giá gốc ${item.oldPrice}`}>{item.oldPrice}</span>
                            </div>
                            <div className="space-y-1">
                                <div className="h-4 w-full bg-slate-100 dark:bg-slate-700 rounded-full relative overflow-hidden" role="progressbar" aria-valuenow={item.soldPercent.replace('%', '')} aria-valuemin="0" aria-valuemax="100">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500" style={{ width: item.soldPercent }}></div>
                                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-bold uppercase z-10">{typeof item.sold === 'number' ? `Đã bán ${item.sold}` : item.sold}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Coupons Section */}
            <section className="space-y-6" aria-labelledby="coupons-title">
                <h2 id="coupons-title" className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                    <span className="material-icons text-primary" aria-hidden="true">local_activity</span>
                    Mã giảm giá cực hời
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { title: "Giảm 50.000đ", desc: "Đơn từ 1.000.000đ", code: "GIAM50K", value: "50K", type: "Haku", icon: "" },
                        { title: "Miễn phí vận chuyển", desc: "Toàn quốc đơn từ 0đ", code: "FREESHIP", value: "Free", type: "", icon: "local_shipping" },
                        { title: "Giảm tối đa 1tr", desc: "Dành cho Laptop mới", code: "LAPTOPM3", value: "10%", type: "Tech", icon: "" },
                        { title: "Tặng Tai nghe 0đ", desc: "Hết lượt sử dụng", code: "FREEGIFT", value: "HOT", type: "Gift", icon: "", disabled: true }
                    ].map((voucher, idx) => (
                        <div key={idx} className={`bg-white dark:bg-slate-900 border-2 border-dashed ${voucher.disabled ? 'border-slate-300 dark:border-slate-700 opacity-60' : 'border-primary/30'} rounded-2xl p-4 flex items-center gap-4 relative transition-all duration-200 hover:border-primary/60 shadow-sm`}>
                            <div className={`w-16 h-16 ${voucher.disabled ? 'bg-slate-200 dark:bg-slate-800 text-slate-500 border-slate-300' : 'bg-primary/10 text-primary border-primary/20'} rounded-xl flex flex-col items-center justify-center border flex-shrink-0`} aria-hidden="true">
                                {voucher.icon ? <span className="material-icons">{voucher.icon}</span> : <span className="text-[10px] font-bold uppercase">{voucher.type}</span>}
                                <span className={`text-${voucher.icon ? '[10px]' : 'base'} font-black italic`}>{voucher.value}</span>
                            </div>
                            <div className="flex-grow">
                                <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">{voucher.title}</h4>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{voucher.desc}</p>
                                <div className="flex items-center justify-between gap-2">
                                    <code className={`bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded ${voucher.disabled ? 'text-slate-400 line-through' : 'text-primary'} font-mono text-[11px] font-bold border border-slate-200/50 dark:border-slate-700/50`} aria-label={`Mã: ${voucher.code}`}>{voucher.code}</code>
                                    <button 
                                        className={`text-[10px] ${voucher.disabled ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'} text-white font-bold px-3 py-1.5 rounded uppercase motion-safe:transition-colors min-h-[32px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary`}
                                        disabled={voucher.disabled}
                                        aria-label={voucher.disabled ? 'Mã đã hết lượt sử dụng' : `Sao chép mã ${voucher.code}`}
                                    >
                                        {voucher.disabled ? 'Đã hết' : 'Sao chép'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

             {/* Promotion Categories & Product Grid */}
             <section className="space-y-6 sm:space-y-8" aria-labelledby="cat-deals-title">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 id="cat-deals-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Săn deal theo danh mục</h2>
                    <nav className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl overflow-x-auto no-scrollbar" aria-label="Lọc ưu đãi theo danh mục">
                        <button className="px-5 sm:px-6 py-2 bg-white dark:bg-slate-700 shadow-sm rounded-lg text-primary font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary min-h-[40px] whitespace-nowrap">Smartphone</button>
                        <button className="px-5 sm:px-6 py-2 text-slate-500 dark:text-slate-400 font-bold text-sm hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded-lg min-h-[40px] whitespace-nowrap">Laptop</button>
                        <button className="px-5 sm:px-6 py-2 text-slate-500 dark:text-slate-400 font-bold text-sm hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded-lg min-h-[40px] whitespace-nowrap">Phụ kiện</button>
                        <button className="px-5 sm:px-6 py-2 text-slate-500 dark:text-slate-400 font-bold text-sm hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded-lg min-h-[40px] whitespace-nowrap">Đồ gia dụng</button>
                    </nav>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                         { name: "Samsung Galaxy S24 Ultra 5G 12GB/256GB", price: "26.990.000đ", oldPrice: "33.990.000đ", rating: 4.9, reviews: "1,240", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCapmZvrje36AQo2ep0zknWT4Djw3IBF7nAXJB8Cd8TGD-1YSGI1fwi9_KQjeHlyvMcXms_K6z8wY0KYxoX2nr_DSI9ddKSL8zv_fpCfL6QTvSR1V85MVyFl5DB1GbbiTHvk4ECpZ2js5UohirVuEmNZmuDsd4vku23hHl9RaaOvurDIjpGJA0iQHQOUCd87Qae-H7-jPr561Utvk4GV_UeAGD75vmgoS9gQUGu05JmRxyt1OVahBTvSJL5GgUNxvzMLRSjwxBNyFo" },
                         { name: "Xiaomi 14 5G 12GB/256GB", price: "18.490.000đ", oldPrice: "22.990.000đ", rating: 4.8, reviews: "850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSi4oWEGHWy1b4zOiNe8fdknJhijAdNn7mOtvN_eERewcyV7y0rbtNuSqwPTllqBYapAoOwznf7-fpVAoWBPEZMuuawt5e1Wh-vc1pF5q-Q3fBXVgyIWHaYSkAQy_c8jluZEQtH0pjPBbskxOhxqpWmoHsIL-a0o-7p6Y3dy83s_HhArVTAVGpPesMMBQbW0Vdyh09aXxWW437m5ld8NpHY-B62TkGWIw_8mnTzN3QfFSgNxQ9OIDWjzARa3weJpJOJSrZ0WyEIZc" },
                         { name: "OPPO Reno11 5G 8GB/256GB", price: "9.990.000đ", oldPrice: "10.990.000đ", rating: 4.7, reviews: "430", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrYOFnlpBbJAszNhFvnyHrMPIix5AVqzoftOO0ZZ41D7tsGvRMM0FcGc-6TXynmzbC0ahkhlpABz71EC4gLdnLJZsL0WcSb9s7acVBgf5I7nPqwRcS7TlY-S8JDjdxPjX1B7Auvxru72gYbQ-Mr2ceJM166jS4KY5S6oZKHd5iwUkCsdn9Tz-nT7XfxHwkV7HGOkRHxdNRo0-XfcqvLdF3gzRupdJ_ZWC3oF6sLiXGP5EiRyI4Oyt8Adnuo0hZRK08XH9lOExIors" },
                         { name: "Realme 12 5G Series New Arrival", price: "7.490.000đ", oldPrice: "8.990.000đ", rating: 4.5, reviews: "210", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr_h3mFuoaGOvNRwzlkJVHhr_UAMSLgreK74Pv-SeAo0SMpXOeCb4QLF45vFoWiyjBp-Fmgabtwyq5PaXEZ_yon5_sMfdAu1cwl0Fo1A8bogj4zBUQgbolWPDVo9_cO_dX_qlzd67qMKGy4wyAoeC__JWudRNoiDoDXQSLdoPbdfprDxnGG5DRa4_pFRH5YCWBaF-1C5cAfVudXYNgddd5K0aClpRyAR6eOnggXBbQCCvAKxV_bNheREBxivSec1pwiVWHb-X-DdA" }
                    ].map((item, idx) => (
                        <article key={idx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-xl motion-safe:transition-all motion-safe:duration-300 group relative motion-safe:hover:scale-[1.02] shadow-sm">
                            <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md text-slate-400 hover:text-red-500 cursor-pointer transition-colors focus:ring-2 focus:ring-primary focus:outline-none min-h-[32px]" aria-label="Thêm vào yêu thích">
                                <span className="material-icons text-xl" aria-hidden="true">favorite_border</span>
                            </button>
                            <div className="aspect-[4/3] bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden mb-4">
                                <img 
                                    alt={item.name} 
                                    className="w-full h-full object-cover motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-500" 
                                    src={item.img} 
                                    loading="lazy"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-1" role="img" aria-label={`Đánh giá ${item.rating} sao`}>
                                    <span className="material-icons text-orange-400 text-sm" aria-hidden="true">star</span>
                                    <span className="text-xs font-bold text-slate-900 dark:text-white" aria-hidden="true">{item.rating}</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">({item.reviews} đánh giá)</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white line-clamp-2 min-h-[3rem] text-sm sm:text-base">{item.name}</h3>
                                <div className="flex flex-col">
                                    <span className="text-primary font-extrabold text-xl">{item.price}</span>
                                    <span className="text-slate-400 text-xs sm:text-sm line-through" aria-label={`Giá gốc ${item.oldPrice}`}>{item.oldPrice}</span>
                                </div>
                                <button className="w-full mt-4 py-2.5 border-2 border-primary text-primary font-bold rounded-xl motion-safe:group-hover:bg-primary motion-safe:group-hover:text-white motion-safe:transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]">Thêm vào giỏ</button>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] cursor-pointer" aria-label="Tải thêm 48 sản phẩm khuyến mãi khác">
                        Xem thêm 48 sản phẩm khác
                        <span className="material-icons" aria-hidden="true">expand_more</span>
                    </button>
                </div>
             </section>
        </main>
    );
};

export default Promotions;
