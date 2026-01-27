import Image from 'next/image';

export default function WeChatCTA() {
    return (
        <section id="wechat" className="max-w-7xl mx-auto px-6 py-16">
            <div className="glass rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border-emerald-500/20 bg-gradient-to-r from-emerald-900/10 to-transparent">
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6">加入老傅的 AI 实战圈</h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
                        不仅交流工具，更探讨如何变现。扫描二维码免费领取 <span className="text-emerald-400 font-bold border-b border-emerald-500/50">《2026 个人高效 AI 工具图谱》</span> 及 AI 助教商业计划书。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-sm flex items-center gap-2">
                            公众号：德旭老傅说AI
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="w-48 h-48 bg-white rounded-[2rem] p-4 shadow-2xl shadow-emerald-500/20 rotate-3 transition-transform hover:rotate-0">
                        <div className="w-full h-full bg-white rounded-xl overflow-hidden flex items-center justify-center relative">
                            {/* Ensure the image exists in public/assets/images */}
                            <Image
                                src="/assets/images/qr_code.png"
                                alt="加入老傅的 AI 实战圈"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <p className="text-xs text-emerald-500/80 font-bold tracking-[0.2em] uppercase">SCAN TO CONNECT</p>
                </div>
            </div>
        </section>
    );
}
