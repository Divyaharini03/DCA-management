"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Mail, Lock, Loader2 } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login delay
        setTimeout(() => {
            router.push('/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
            <div className="w-full max-w-[450px] p-8">
                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 bg-fedex-purple rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-fedex-purple/20">
                        <span className="text-white font-bold text-3xl">F</span>
                    </div>
                    <h1 className="text-2xl font-bold text-enterprise-text-primary">Recovery Intelligence</h1>
                    <p className="text-enterprise-text-secondary mt-2">Enterprise Debt Collection Management</p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-enterprise-border shadow-enterprise-md">
                    <div className="mb-8 text-center">
                        <h2 className="text-xl font-semibold text-enterprise-text-primary">Welcome back</h2>
                        <p className="text-sm text-enterprise-text-secondary mt-1">Please enter your corporate credentials</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-enterprise-text-primary ml-1">Work Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-enterprise-text-secondary" />
                                <input
                                    type="email"
                                    defaultValue="j.matthews@fedex.com"
                                    className="w-full bg-slate-50 border border-enterprise-border rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-fedex-purple/20 transition-all border-l-4 border-l-fedex-purple"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-medium text-enterprise-text-primary">Password</label>
                                <a href="#" className="text-xs text-fedex-purple font-semibold hover:underline">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-enterprise-text-secondary" />
                                <input
                                    type="password"
                                    defaultValue="password123"
                                    className="w-full bg-slate-50 border border-enterprise-border rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-fedex-purple/20 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-fedex-purple text-white py-3 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-fedex-purple/10 hover:bg-fedex-purple/95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign in to Platform"}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-enterprise-border text-center">
                        <p className="text-xs text-enterprise-text-secondary flex items-center justify-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                            Secured by FedEx Corporate SSO
                        </p>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-xs text-enterprise-text-secondary">© 2026 FedEx. Internal Use Only.</p>
                </div>
            </div>
        </div>
    );
}
