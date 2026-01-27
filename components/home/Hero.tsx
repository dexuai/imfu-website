'use client';

import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <header className="relative overflow-hidden max-w-7xl mx-auto px-8 py-24 md:py-32 text-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase bg-emerald-400/5 rounded-full border border-emerald-400/20 backdrop-blur-md animate-fade-in">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                20年行业底蕴 · 软硬结合开发 · 一人公司实战
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-8xl font-black mb-8 text-white leading-[1.1] tracking-tight">
                不只是 AI 工具，<br />
                更是基于业务的<span className="text-gradient-main">解决方案</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-12 font-light">
                我是 <span className="text-white font-medium">老傅</span>。我将医疗器械高管的管理经验、硬核的软硬件开发能力，<br className="hidden md:block" />
                与前沿 AI 技术深度融合，解决真实世界的效率难题。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link href="#solutions" className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold transition-all hover:scale-105 active:scale-95 overflow-hidden">
                    <span className="relative z-10">查看实战方案</span>
                    <div className="absolute inset-0 bg-emerald-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>

                <Link href="#logs" className="glass-card px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2">
                    关注开发日志
                </Link>
            </div>

            <div className="mt-20 animate-bounce text-gray-600 flex justify-center">
                <ArrowDown />
            </div>
        </header>
    );
}
