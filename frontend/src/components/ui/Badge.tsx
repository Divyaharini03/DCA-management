import React from 'react';
import { cn } from '@/lib/utils';

export function Badge({ children, variant = 'default', className }: {
    children: React.ReactNode,
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'purple',
    className?: string
}) {
    const variants = {
        default: 'bg-slate-100 text-slate-700',
        success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
        warning: 'bg-amber-50 text-amber-700 border border-amber-100',
        error: 'bg-red-50 text-red-700 border border-red-100',
        info: 'bg-blue-50 text-blue-700 border border-blue-100',
        purple: 'bg-purple-50 text-purple-700 border border-purple-100',
    };

    return (
        <span className={cn(
            "px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
}
