'use client';

import React from 'react';
import { Quote } from 'lucide-react';

export default function OldFuStory() {
    return (
        <section className="relative py-24 px-8 bg-brand-dark overflow-hidden">
            {/* Background Pattern - Circuit/Logic subtle overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Visual / Avatar Placeholder */}
                    <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-brand-blue to-brand-dark border-4 border-white/10 flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover opacity-50 mix-blend-overlay"></div>
                            <span className="text-6xl font-black text-white/20 group-hover:text-white/40 transition-colors">老傅</span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-white">老傅 (Lao Fu)</h3>
                            <p className="text-sm text-gray-400">25年医械研发老兵 / 初中生家长</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-2/3">
                        <Quote className="w-12 h-12 text-brand-blue/30 mb-6" />

                        <h2 className="text-3xl font-bold text-white mb-8 leading-tight">
                            我不想帮你孩子考满分，<br />
                            我想帮他建立一套<span className="text-brand-yellow">底层思考模型</span>。
                        </h2>

                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                            <p>
                                做了 25 年医疗器械，我习惯了给设备写说明书。但当我面对初二女儿的物理题时，我发现：
                                <span className="text-white font-medium">孩子不需要说明书，她需要的是一套发现问题的系统。</span>
                            </p>
                            <p>
                                我把这套“老兵逻辑”写进了 <span className="text-brand-blue font-medium">德旭AI·老傅陪读助手</span>。
                                它不提供直接的答案，就像一个严谨的工程师同事，和你一起拆解问题，直到你真正“看懂”题目背后的逻辑回路。
                            </p>
                            <p>
                                这就是我给孩子的礼物，也是给所有希望孩子“像工程师一样思考”的家庭的礼物。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
