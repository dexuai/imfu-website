'use client';

import { useEffect, useState } from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { Article } from '@/lib/types';

export default function StudyPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArticles() {
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('published', true)
                .eq('category', 'study')
                .order('created_at', { ascending: false });

            if (!error && data) {
                setArticles(data);
            }
            setLoading(false);
        }
        fetchArticles();
    }, []);

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('zh-CN');
    };

    return (
        <>
            <div className="glow-bg"></div>

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-400/5 rounded-full border border-blue-400/20">
                    <BookOpen className="w-4 h-4" />
                    知识库
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    学习与成长
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    针对"一人公司"的提效教程、AI 工具实操指南，以及行业解决方案深度拆解。
                </p>
            </section>

            {/* Articles List */}
            <section className="max-w-4xl mx-auto px-6 pb-24">
                {loading ? (
                    <div className="text-center text-gray-500 py-12">加载中...</div>
                ) : articles.length === 0 ? (
                    <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-12 text-center">
                        <p className="text-gray-500 mb-4">知识库暂无文章</p>
                        <Link href="/admin/articles/new" className="text-emerald-500 hover:underline text-sm">
                            创建第一篇知识库文章 →
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {articles.map((article) => (
                            <Link
                                key={article.id}
                                href={`/article/${article.id}`}
                                className="block group bg-gray-900/50 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-gray-900 transition-all"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm line-clamp-2">
                                            {article.excerpt || article.content?.slice(0, 120) + '...'}
                                        </p>
                                        <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                                            <span>{formatDate(article.created_at)}</span>
                                            {article.tags && article.tags.length > 0 && (
                                                <span className="text-emerald-500/50">
                                                    {article.tags.slice(0, 3).map(tag => `#${tag}`).join(' ')}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all mt-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}
