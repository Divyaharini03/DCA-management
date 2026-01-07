import React from 'react';
import { cn } from '@/lib/utils';

export function Card({ children, className, title, subtitle, action }: {
    children: React.ReactNode,
    className?: string,
    title?: string,
    subtitle?: string,
    action?: React.ReactNode
}) {
    return (
        <div className={cn("bg-white border border-enterprise-border rounded-2xl shadow-enterprise overflow-hidden", className)}>
            {(title || action) && (
                <div className="px-6 py-4 border-b border-enterprise-border flex items-center justify-between">
                    <div>
                        {title && <h3 className="text-base font-bold text-enterprise-text-primary">{title}</h3>}
                        {subtitle && <p className="text-xs text-enterprise-text-secondary mt-0.5">{subtitle}</p>}
                    </div>
                    {action && <div>{action}</div>}
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}

export function StatCard({ title, value, change, trend, icon: Icon, color }: {
    title: string,
    value: string,
    change?: string,
    trend?: 'up' | 'down' | 'neutral',
    icon: any,
    color: string
}) {
    return (
        <Card className="flex-1">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-enterprise-text-secondary">{title}</p>
                    <h4 className="text-2xl font-bold text-enterprise-text-primary mt-1">{value}</h4>
                    {change && (
                        <div className="flex items-center gap-1 mt-2">
                            <span className={cn(
                                "text-xs font-bold px-1.5 py-0.5 rounded",
                                trend === 'up' ? "text-green-600 bg-green-50" :
                                    trend === 'down' ? "text-red-600 bg-red-50" :
                                        "text-slate-600 bg-slate-50"
                            )}>
                                {trend === 'up' ? '+' : ''}{change}
                            </span>
                            <span className="text-[10px] text-enterprise-text-secondary font-medium">vs last month</span>
                        </div>
                    )}
                </div>
                <div className={cn("p-3 rounded-xl", color)}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
            </div>
        </Card>
    );
}
