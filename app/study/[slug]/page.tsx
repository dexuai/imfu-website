'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';
import { Article } from '@/lib/types';
import ReactMarkdown from 'react-markdown';

export default function ArticleDetailPage() {
    const params = useParams();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArticle() {
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('slug', params.slug)
                .eq('published', true)
                .single();

            if (!error && data) {
                setArticle(data);
            }
            setLoading(false);
        }
        fetchArticle();
    }, [params.slug]);

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-24 text-center text-gray-500">
                加载中...
            </div>
        );
    }

    if (!article) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                <h1 className="text-2xl font-bold text-white mb-4">文章未找到</h1>
                <Link href="/study" className="text-emerald-500 hover:underline">
                    ← 返回知识库
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="glow-bg"></div>

            <article className="max-w-4xl mx-auto px-6 py-16">
                {/* Back Link */}
                <Link
                    href="/study"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    返回知识库
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(article.created_at)}
                        </div>
                        {article.tags && article.tags.length > 0 && (
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4" />
                                {article.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-emerald max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-emerald-400 prose-strong:text-white prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:border prose-pre:border-white/10">
                    <ReactMarkdown>{article.content || ''}</ReactMarkdown>
                </div>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-white/10">
                    <Link
                        href="/study"
                        className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        查看更多文章
                    </Link>
                </footer>
            </article>
        </>
    );
}
