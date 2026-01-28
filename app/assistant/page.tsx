'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Brain, Cpu, Gamepad2, LineChart, MessageCircleQuestion } from 'lucide-react';

import AssistantHero from '@/components/assistant/AssistantHero';
import OldFuStory from '@/components/home/OldFuStory';

export default function AssistantPage() {
    return (
        <div className="min-h-screen bg-brand-dark text-white font-sans">
            {/* Navigation */}
            <nav className="absolute top-0 left-0 w-full p-6 z-50">
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    返回首页
                </Link>
            </nav>

            <main className="pb-24">
                <AssistantHero />

                {/* Old Fu Story - Integrated below Hero */}
                <OldFuStory />

                <div className="max-w-5xl mx-auto px-6">

                    {/* Feature 1: Socratic Method */}
                    <section className="mb-32 grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full"></div>
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                {/* Mock Chat UI */}
                                <div className="space-y-4 text-sm font-mono">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0"></div>
                                        <div className="bg-gray-800 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-gray-300">
                                            这一点我算不出来，摩擦力怎么求？
                                        </div>
                                    </div>
                                    <div className="flex gap-3 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-brand-blue flex-shrink-0 flex items-center justify-center text-xs font-bold">傅</div>
                                        <div className="bg-brand-blue/20 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl border border-brand-blue/30 text-white">
                                            嘿，别急着套公式。先看看这个物体，它正在动吗？如果它的速度在变慢，那是谁在“拖后腿”？
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0"></div>
                                        <div className="bg-gray-800 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-gray-300">
                                            哦！它在减速，所以是滑动摩擦力，方向向后！
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-6">
                                <MessageCircleQuestion className="w-6 h-6 text-brand-blue" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">苏格拉底式导学</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                AI 助教不是一个只会吐出答案的机器人，而是老傅将自己的“工程思维”封装后的产物。它像一个耐心的导师，通过连续追问，引导孩子自己发现逻辑断点。
                            </p>
                        </div>
                    </section>

                    {/* Feature 2: Logic Disassembly */}
                    <section className="mb-32 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center mb-6">
                                <Cpu className="w-6 h-6 text-brand-yellow" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">把题目拆解为“系统零件”</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                在老傅眼里，题目不是文字游戏，而是运转的系统。我们将复杂的综合题拆解为一个个可视化的变量（零件）。当孩子学会孤立变量分析时，难题自然迎刃而解。
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-yellow/5 blur-3xl rounded-full"></div>
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col gap-4">
                                <div className="flex justify-between items-center p-4 bg-black/40 rounded border border-white/5">
                                    <span className="font-mono text-brand-yellow">Inputs (已知)</span>
                                    <span className="text-sm text-gray-500">v0, t, μ</span>
                                </div>
                                <div className="h-8 flex justify-center">
                                    <div className="w-0.5 h-full bg-white/20"></div>
                                </div>
                                <div className="p-4 bg-brand-blue/10 rounded border border-brand-blue/20 text-center">
                                    <span className="font-mono font-bold text-white">System (黑盒/逻辑)</span>
                                    <div className="text-xs text-brand-blue mt-1">F_net = ma</div>
                                </div>
                                <div className="h-8 flex justify-center">
                                    <div className="w-0.5 h-full bg-white/20"></div>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-black/40 rounded border border-white/5">
                                    <span className="font-mono text-green-400">Output (求解)</span>
                                    <span className="text-sm text-gray-500">Distance (s)</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Feature 3: Long Term Memory */}
                    <section className="mb-32">
                        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="inline-flex p-3 rounded-xl bg-purple-500/20 mb-6">
                                    <LineChart className="w-6 h-6 text-purple-400" />
                                </div>
                                <h2 className="text-3xl font-bold mb-6">思维周报 & 长期记忆</h2>
                                <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                                    系统会记录每一次“卡壳”和每一次“顿悟”。每周生成一份思维诊断报告，不看分数，只看逻辑漏洞是否已填补。
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
                                    <div className="p-4 bg-black/30 rounded-xl border border-white/5">
                                        <div className="text-2xl font-bold text-white mb-1">5</div>
                                        <div className="text-xs text-gray-500 uppercase">逻辑断点修复</div>
                                    </div>
                                    <div className="p-4 bg-black/30 rounded-xl border border-white/5">
                                        <div className="text-2xl font-bold text-white mb-1">12</div>
                                        <div className="text-xs text-gray-500 uppercase">有效追问次数</div>
                                    </div>
                                    <div className="p-4 bg-black/30 rounded-xl border border-white/5">
                                        <div className="text-2xl font-bold text-white mb-1">A+</div>
                                        <div className="text-xs text-gray-500 uppercase">变量敏感度</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="text-center">
                        <h2 className="text-2xl font-bold mb-8">准备好挑战真正的逻辑了吗？</h2>
                        <button className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-brand-blue/25">
                            开始第一次逻辑特训
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
}
