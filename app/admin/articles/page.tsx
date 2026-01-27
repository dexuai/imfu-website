'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { Article } from '@/lib/types';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles();
    }, []);

    async function fetchArticles() {
        setLoading(true);
        const { data, error } = await supabase
            .from('articles')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching articles:', error);
        } else {
            setArticles(data || []);
        }
        setLoading(false);
    }

    async function togglePublish(article: Article) {
        const { error } = await supabase
            .from('articles')
            .update({ published: !article.published })
            .eq('id', article.id);

        if (!error) {
            fetchArticles();
        }
    }

    async function deleteArticle(id: string) {
        if (!confirm('确定要删除这篇文章吗？')) return;

        const { error } = await supabase.from('articles').delete().eq('id', id);
        if (!error) {
            fetchArticles();
        }
    }

    const getCategoryLabel = (cat: string) => {
        const labels: Record<string, string> = {
            log: '实战日志',
            study: '知识库',
            blog: '博客',
        };
        return labels[cat] || cat;
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">文章管理</h1>
                <Link
                    href="/admin/articles/new"
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    新建文章
                </Link>
            </div>

            {loading ? (
                <div className="text-gray-400">加载中...</div>
            ) : articles.length === 0 ? (
                <div className="text-center py-16 text-gray-500">
                    <p className="mb-4">还没有任何文章</p>
                    <Link href="/admin/articles/new" className="text-emerald-500 hover:underline">
                        创建第一篇文章 →
                    </Link>
                </div>
            ) : (
                <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-800/50">
                            <tr>
                                <th className="text-left p-4 text-gray-400 font-medium">标题</th>
                                <th className="text-left p-4 text-gray-400 font-medium">分类</th>
                                <th className="text-left p-4 text-gray-400 font-medium">状态</th>
                                <th className="text-left p-4 text-gray-400 font-medium">创建时间</th>
                                <th className="text-right p-4 text-gray-400 font-medium">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article) => (
                                <tr key={article.id} className="border-t border-white/5 hover:bg-white/5">
                                    <td className="p-4">
                                        <span className="text-white font-medium">{article.title}</span>
                                        <span className="block text-xs text-gray-500 mt-1">/{article.slug}</span>
                                    </td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                                            {getCategoryLabel(article.category)}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => togglePublish(article)}
                                            className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${article.published
                                                    ? 'bg-emerald-500/20 text-emerald-400'
                                                    : 'bg-gray-700 text-gray-400'
                                                }`}
                                        >
                                            {article.published ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                                            {article.published ? '已发布' : '草稿'}
                                        </button>
                                    </td>
                                    <td className="p-4 text-gray-400 text-sm">
                                        {new Date(article.created_at).toLocaleDateString('zh-CN')}
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/admin/articles/${article.id}`}
                                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => deleteArticle(article.id)}
                                                className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
