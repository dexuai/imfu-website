'use client';

import { FlaskConical } from 'lucide-react';

export default function LabAdminPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">实验室管理</h1>

            <div className="bg-gray-900 border border-white/10 rounded-2xl p-12 text-center">
                <FlaskConical className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <p className="text-gray-400 mb-2">AI Demo 管理功能</p>
                <p className="text-gray-600 text-sm">将在后续版本中添加，用于管理实验室页面的 Demo 展示</p>
            </div>
        </div>
    );
}
