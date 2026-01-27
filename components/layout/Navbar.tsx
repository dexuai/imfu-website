'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                    imfu<span className="text-emerald-500">.ai</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex space-x-10 text-sm font-medium text-gray-400">
                    <Link href="/study" className="hover:text-emerald-400 transition-colors">知识库</Link>
                    <Link href="/nav" className="hover:text-emerald-400 transition-colors">工具导航</Link>
                    <Link href="/#solutions" className="hover:text-emerald-400 transition-colors">实战案例</Link>
                    <Link href="/lab" className="hover:text-emerald-400 transition-colors">硬核实验室</Link>
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <a
                        href="#wechat"
                        className="hidden sm:block bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5"
                    >
                        联系老傅
                    </a>
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full glass border-b border-white/5 p-6 flex flex-col gap-4 animate-fade-in">
                    <Link href="/study" className="text-gray-300 hover:text-emerald-400 font-medium">知识库</Link>
                    <Link href="/nav" className="text-gray-300 hover:text-emerald-400 font-medium">工具导航</Link>
                    <Link href="/lab" className="text-gray-300 hover:text-emerald-400 font-medium">硬核实验室</Link>
                </div>
            )}
        </nav>
    );
}
