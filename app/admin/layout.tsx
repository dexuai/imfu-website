import Link from 'next/link';
import { LayoutDashboard, FileText, Wrench, FlaskConical, LogOut } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-950">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 border-r border-white/10 p-6 flex flex-col">
                <div className="mb-8">
                    <Link href="/" className="text-xl font-black text-white">
                        imfu<span className="text-emerald-500">.ai</span>
                        <span className="block text-xs text-gray-500 font-normal mt-1">管理后台</span>
                    </Link>
                </div>

                <nav className="flex-1 space-y-2">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        控制面板
                    </Link>
                    <Link
                        href="/admin/articles"
                        className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                        <FileText className="w-5 h-5" />
                        文章管理
                    </Link>
                    <Link
                        href="/admin/tools"
                        className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                        <Wrench className="w-5 h-5" />
                        工具导航
                    </Link>
                    <Link
                        href="/admin/lab"
                        className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                        <FlaskConical className="w-5 h-5" />
                        实验室
                    </Link>
                </nav>

                <div className="pt-6 border-t border-white/10">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-400 rounded-lg transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        返回前台
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
