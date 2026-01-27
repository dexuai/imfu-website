'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, FileText, Wrench, FlaskConical, LogOut } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        // Check auth status
        supabase.auth.getUser().then(({ data: { user } }) => {
            if (!user) {
                router.push('/login');
            } else {
                setUser(user);
                setLoading(false);
            }
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                router.push('/login');
            }
        });

        return () => subscription.unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="text-gray-500">验证中...</div>
            </div>
        );
    }

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

                <div className="pt-6 border-t border-white/10 space-y-2">
                    <div className="px-4 py-2 text-xs text-gray-600 truncate">
                        {user?.email}
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-400 rounded-lg transition-colors w-full"
                    >
                        <LogOut className="w-5 h-5" />
                        退出登录
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
