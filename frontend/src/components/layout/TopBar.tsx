"use client";

import React from 'react';
import {
    Search,
    Bell,
    User,
    Settings,
    ShieldCheck,
    ChevronDown
} from 'lucide-react';

export function TopBar() {
    return (
        <header className="h-16 border-b border-enterprise-border bg-white sticky top-0 z-10 w-full pl-64">
            <div className="h-full flex items-center justify-between px-8">
                <div className="flex items-center gap-4 flex-1 max-w-xl">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-enterprise-text-secondary" />
                        <input
                            type="text"
                            placeholder="Search cases, invoices, or DCA performance..."
                            className="w-full bg-slate-50 border border-enterprise-border rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-fedex-purple/20 transition-all"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="relative p-2 text-enterprise-text-secondary hover:bg-gray-50 rounded-full transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>

                    <div className="h-8 w-px bg-enterprise-border"></div>

                    <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold text-enterprise-text-primary">John Matthews</p>
                            <p className="text-xs text-fedex-purple font-medium bg-fedex-purple/5 px-2 py-0.5 rounded flex items-center gap-1 justify-end">
                                <ShieldCheck className="w-3 h-3" />
                                FedEx Admin
                            </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-enterprise-border flex items-center justify-center text-fedex-purple group-hover:bg-slate-200 transition-colors">
                            <User className="w-6 h-6" />
                        </div>
                        <ChevronDown className="w-4 h-4 text-enterprise-text-secondary group-hover:text-enterprise-text-primary transition-colors" />
                    </div>
                </div>
            </div>
        </header>
    );
}
