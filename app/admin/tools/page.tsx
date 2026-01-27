'use client';

import { Plus } from 'lucide-react';

export default function ToolsAdminPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">工具导航管理</h1>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors">
                    <Plus className="w-5 h-5" />
                    添加工具
                </button>
            </div>

            <div className="bg-gray-900 border border-white/10 rounded-2xl p-12 text-center">
                <p className="text-gray-500 mb-4">工具管理功能开发中...</p>
                <p className="text-gray-600 text-sm">请先在 Supabase 中运行 schema.sql 创建数据表</p>
            </div>
        </div>
    );
}
