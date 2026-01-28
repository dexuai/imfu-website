import { FileText, GraduationCap, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Solutions() {
    const solutions = [
        {
            icon: <FileText className="w-8 h-8 text-emerald-500" />,
            color: "emerald",
            title: "医疗 AI 实战产品",
            desc: "基于20年法规经验，通过AI自动化生成TR技术文档及临床评价，缩短30%申报周期。",
            linkText: "了解方案",
            href: "#"
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
            color: "blue",
            title: "AI 助教系列产品",
            desc: "针对儿童科学教育的AI辅助系统，将抽象原理具象化，实现真正的启发式教学。",
            linkText: "获取软件",
            href: "/assistant"
        },
        {
            icon: <Cpu className="w-8 h-8 text-purple-500" />,
            color: "purple",
            title: "硬件 AI 开发方案",
            desc: "提供负压系统、应急救援等场景的AI硬件集成方案，让物理世界拥有大脑。",
            linkText: "实验室案例",
            href: "#"
        }
    ];

    return (
        <section id="solutions" className="max-w-7xl mx-auto px-6 py-24 relative">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-white mb-4">核心业务与产品</h2>
                <p className="text-gray-500">基于真实场景的 AI 落地实践</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutions.map((item, index) => (
                    <div key={index} className="glass p-10 rounded-[2.5rem] transition-all duration-300 group hover:-translate-y-2">
                        <div className={`w-14 h-14 bg-${item.color}-500/10 rounded-2xl flex items-center justify-center mb-8 border border-${item.color}-500/20 group-hover:bg-${item.color}-500/20 transition-colors`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-8 text-sm">{item.desc}</p>
                        <Link href={item.href} className={`inline-flex items-center text-sm font-black text-${item.color}-500 uppercase tracking-widest hover:text-${item.color}-400 transition-colors`}>
                            {item.linkText} <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
