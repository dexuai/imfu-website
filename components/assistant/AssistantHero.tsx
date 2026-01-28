'use client';

import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function AssistantHero() {
    return (
        <header className="relative overflow-hidden w-full px-8 py-24 md:py-32 text-center">
            {/* Background Glow - Blue for Tech/Logic */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/20 blur-[120px] rounded-full"></div>
            </div>

            {/* Badge - Dark Gray & Tech Blue */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-brand-blue uppercase bg-brand-dark/50 rounded-full border border-brand-blue/20 backdrop-blur-md animate-fade-in">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
                德旭AI·老傅陪读助手
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-[1.1] tracking-tight">
                拒绝拍照搜题，<br />
                让孩子真正<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-orange-400">“开窍”</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-10 max-w-4xl mx-auto">
                25年研发专家打造的<span className="text-brand-blue font-bold">苏格拉底式 AI 助教</span>
            </h2>

            {/* Features Badge Row */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-gray-400">
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> 不给答案·引导提问
                </span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> 全科覆盖·逻辑溯源
                </span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span> 长期记忆·思维周报
                </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link href="#features" className="group relative px-8 py-4 bg-brand-blue text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-lg shadow-brand-blue/25">
                    <span className="relative z-10 flex items-center gap-2">
                        立即让老傅陪你读一课
                        <ArrowDown className="w-4 h-4 -rotate-90" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
            </div>

            <div className="mt-20 animate-bounce text-gray-600 flex justify-center">
                <ArrowDown />
            </div>
        </header>
    );
}
