import { FlaskConical, ExternalLink } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function LabPage() {
    const demos = [
        {
            title: '医疗法规检索 Demo',
            description: '基于 AI 的医疗器械法规快速检索工具，支持自然语言查询。',
            status: '开发中',
            color: 'emerald',
        },
        {
            title: '硬件开发辅助脚本',
            description: 'AI 驱动的 STM32 代码生成与调试助手。',
            status: '规划中',
            color: 'blue',
        },
        {
            title: '凸透镜成像模拟',
            description: '物理教学演示：光学原理可视化实验。',
            status: '原型阶段',
            color: 'purple',
        },
    ];

    return (
        <>
            <div className="glow-bg"></div>

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-400/5 rounded-full border border-purple-400/20">
                    <FlaskConical className="w-4 h-4" />
                    实验室
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    硬核实验室
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    这里是老傅的 AI 技术试验场。所有的想法在这里孵化、验证，然后变成真正的产品。
                </p>
            </section>

            {/* Demos Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {demos.map((demo, index) => (
                        <div
                            key={index}
                            className="group bg-gray-900/50 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className={`px-3 py-1 text-xs font-medium rounded-full bg-${demo.color}-500/20 text-${demo.color}-400`}>
                                    {demo.status}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                {demo.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {demo.description}
                            </p>
                            <button
                                disabled
                                className="flex items-center gap-2 text-sm text-gray-500 cursor-not-allowed"
                            >
                                即将上线 <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
