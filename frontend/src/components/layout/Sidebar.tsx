"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Briefcase,
    ShieldCheck,
    BarChart3,
    Settings,
    HelpCircle,
    Menu,
    ChevronRight,
    LogOut,
    Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Case Management', icon: Briefcase, href: '/cases' },
    { name: 'DCA Portal', icon: Users, href: '/portal' },
    { name: 'Governance & SLA', icon: ShieldCheck, href: '/governance' },
    { name: 'Analytics', icon: BarChart3, href: '/analytics' },
];

const secondaryNavItems = [
    { name: 'Settings', icon: Settings, href: '/settings' },
    { name: 'Help Center', icon: HelpCircle, href: '/help' },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-screen flex-col border-r border-enterprise-border bg-white w-64 fixed left-0 top-0">
            <div className="flex h-16 items-center px-6 border-b border-enterprise-border">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-fedex-purple rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">F</span>
                    </div>
                    <span className="font-bold text-lg tracking-tight text-fedex-purple">FedEx <span className="text-fedex-orange">Intelligence</span></span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
                <div>
                    <h3 className="px-2 mb-4 text-xs font-semibold text-enterprise-text-secondary uppercase tracking-wider">
                        Main Menu
                    </h3>
                    <nav className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors group",
                                        isActive
                                            ? "bg-fedex-purple/10 text-fedex-purple"
                                            : "text-enterprise-text-secondary hover:bg-gray-50 hover:text-enterprise-text-primary"
                                    )}
                                >
                                    <item.icon className={cn(
                                        "w-5 h-5",
                                        isActive ? "text-fedex-purple" : "text-enterprise-text-secondary group-hover:text-enterprise-text-primary"
                                    )} />
                                    {item.name}
                                    {isActive && <ChevronRight className="ml-auto w-4 h-4" />}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div>
                    <h3 className="px-2 mb-4 text-xs font-semibold text-enterprise-text-secondary uppercase tracking-wider">
                        Support
                    </h3>
                    <nav className="space-y-1">
                        {secondaryNavItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-enterprise-text-secondary hover:bg-gray-50 hover:text-enterprise-text-primary transition-colors"
                            >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="p-4 border-t border-enterprise-border">
                <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </div>
    );
}
