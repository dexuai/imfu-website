import { Compass, ExternalLink, Search } from 'lucide-react';

export default function NavPage() {
    // TODO: Fetch from Supabase
    const tools = [
        { name: 'ChatGPT', category: '对话', url: 'https://chat.openai.com' },
        { name: 'Claude', category: '对话', url: 'https://claude.ai' },
        { name: 'Midjourney', category: '图像', url: 'https://midjourney.com' },
        { name: 'Runway', category: '视频', url: 'https://runway.ml' },
        { name: 'GitHub Copilot', category: '代码', url: 'https://copilot.github.com' },
        { name: 'Cursor', category: '代码', url: 'https://cursor.sh' },
    ];

    return (
        <>
            <div className="glow-bg"></div>

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-orange-400 uppercase bg-orange-400/5 rounded-full border border-orange-400/20">
                    <Compass className="w-4 h-4" />
                    工具导航
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    老傅精选 AI 工具箱
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                    经过实战验证的 AI 工具精选，帮助你快速找到最适合的工具。
                </p>

                {/* Search (placeholder) */}
                <div className="max-w-xl mx-auto">
                    <div className="flex items-center gap-3 px-6 py-4 bg-gray-900 border border-white/10 rounded-2xl">
                        <Search className="w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="搜索工具..."
                            className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                        />
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                        <a
                            key={index}
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-6 bg-gray-900/50 border border-white/10 rounded-2xl hover:border-emerald-500/30 hover:bg-gray-900 transition-all"
                        >
                            <div>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">{tool.category}</span>
                                <h3 className="text-lg font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">
                                    {tool.name}
                                </h3>
                            </div>
                            <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 transition-colors" />
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}
