'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { Article } from '@/lib/types';

export default function LogsPreview() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLogs() {
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('published', true)
                .eq('category', 'log')
                .order('created_at', { ascending: false })
                .limit(5);

            if (!error && data) {
                setArticles(data);
            }
            setLoading(false);
        }
        fetchLogs();
    }, []);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.');
    };

    return (
        <section id="logs" className="max-w-4xl mx-auto px-6 py-24">
            <div className="flex items-center gap-4 mb-16">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                <h2 className="text-2xl font-black text-white px-4 italic flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    实战日志 LIVE
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
            </div>

            {loading ? (
                <div className="text-center text-gray-500">加载中...</div>
            ) : articles.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                    <p>暂无日志</p>
                    <a href="/admin/articles/new" className="text-emerald-500 text-sm hover:underline mt-2 inline-block">
                        创建第一篇日志 →
                    </a>
                </div>
            ) : (
                <div className="space-y-12 border-l border-white/10 ml-4 pl-8 md:ml-0 md:pl-0">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/article/${article.id}`}
                            className="flex flex-col md:flex-row gap-4 md:gap-8 relative group cursor-pointer"
                        >
                            <div className="md:w-32 text-xs text-gray-500 font-mono md:text-right pt-1 shrink-0 group-hover:text-emerald-400 transition-colors">
                                {formatDate(article.created_at)}
                            </div>
                            <div className="relative pb-8 md:pl-8 md:border-l border-white/10">
                                <div className="absolute md:-left-[37px] top-1.5 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] ring-4 ring-black"></div>
                                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
                                    {article.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                                    {article.excerpt || article.content?.slice(0, 150) + '...'}
                                    {article.tags && article.tags.length > 0 && (
                                        <span className="block mt-2 text-xs text-emerald-500/50">
                                            {article.tags.map(tag => `#${tag}`).join(' ')}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}
