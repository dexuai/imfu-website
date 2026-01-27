'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { Article } from '@/lib/types';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function EditArticlePage() {
    const router = useRouter();
    const params = useParams();
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({
        title: '',
        slug: '',
        category: 'log',
        excerpt: '',
        content: '',
        published: false,
    });

    useEffect(() => {
        async function fetchArticle() {
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('id', params.id)
                .single();

            if (error) {
                console.error('Error fetching article:', error);
                router.push('/admin/articles');
            } else if (data) {
                setForm({
                    title: data.title,
                    slug: data.slug,
                    category: data.category,
                    excerpt: data.excerpt || '',
                    content: data.content || '',
                    published: data.published,
                });
            }
            setLoading(false);
        }
        fetchArticle();
    }, [params.id, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        const { error } = await supabase
            .from('articles')
            .update(form)
            .eq('id', params.id);

        if (error) {
            console.error('Error updating article:', error);
            alert('更新失败：' + error.message);
        } else {
            router.push('/admin/articles');
        }
        setSaving(false);
    };

    if (loading) {
        return <div className="text-gray-400">加载中...</div>;
    }

    return (
        <div>
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/articles"
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-3xl font-bold text-white">编辑文章</h1>
            </div>

            <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">标题</label>
                    <input
                        type="text"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                    />
                </div>

                {/* Slug */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">URL Slug</label>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500">imfu.ai/blog/</span>
                        <input
                            type="text"
                            value={form.slug}
                            onChange={(e) => setForm({ ...form, slug: e.target.value })}
                            required
                            className="flex-1 px-4 py-3 bg-gray-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                        />
                    </div>
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">分类</label>
                    <select
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                    >
                        <option value="log">实战日志</option>
                        <option value="study">知识库</option>
                        <option value="blog">博客</option>
                    </select>
                </div>

                {/* Excerpt */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">摘要</label>
                    <textarea
                        value={form.excerpt}
                        onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                        rows={2}
                        className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 resize-none"
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">内容 (Markdown)</label>
                    <textarea
                        value={form.content}
                        onChange={(e) => setForm({ ...form, content: e.target.value })}
                        rows={15}
                        className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 font-mono text-sm"
                    />
                </div>

                {/* Publish Toggle */}
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="published"
                        checked={form.published}
                        onChange={(e) => setForm({ ...form, published: e.target.checked })}
                        className="w-5 h-5 rounded border-white/20 bg-gray-900 text-emerald-500 focus:ring-emerald-500"
                    />
                    <label htmlFor="published" className="text-gray-300">
                        已发布
                    </label>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl font-medium transition-colors"
                    >
                        <Save className="w-5 h-5" />
                        {saving ? '保存中...' : '保存修改'}
                    </button>
                    <Link
                        href="/admin/articles"
                        className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
                    >
                        取消
                    </Link>
                </div>
            </form>
        </div>
    );
}
