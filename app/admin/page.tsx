'use client';

import { FileText, Wrench, Eye, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
    // TODO: Fetch real stats from Supabase
    const stats = [
        { label: '文章总数', value: '12', icon: FileText, color: 'emerald' },
        { label: '工具数量', value: '24', icon: Wrench, color: 'blue' },
        { label: '本月浏览', value: '1,234', icon: Eye, color: 'purple' },
        { label: '增长率', value: '+15%', icon: TrendingUp, color: 'orange' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">控制面板</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
                            <span className="text-2xl font-bold text-white">{stat.value}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">快速操作</h2>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="/admin/articles/new"
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors"
                    >
                        + 新建文章
                    </a>
                    <a
                        href="/admin/tools/new"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors"
                    >
                        + 添加工具
                    </a>
                </div>
            </div>
        </div>
    );
}
