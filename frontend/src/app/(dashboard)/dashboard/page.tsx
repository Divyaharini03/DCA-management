"use client";

import React from 'react';
import {
    TrendingUp,
    DollarSign,
    Users,
    AlertCircle,
    FileText,
    Clock,
    ArrowUpRight,
    MoreHorizontal
} from 'lucide-react';
import { StatCard, Card } from '@/components/ui/Cards';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend, Cell, PieChart, Pie
} from 'recharts';
import { cn } from '@/lib/utils';

const recoveryData = [
    { month: 'Jul', amount: 4.2 },
    { month: 'Aug', amount: 3.8 },
    { month: 'Sep', amount: 5.1 },
    { month: 'Oct', amount: 4.9 },
    { month: 'Nov', amount: 6.2 },
    { month: 'Dec', amount: 5.8 },
];

const ageingData = [
    { range: '0-30 Days', value: 45, color: '#4D148C' },
    { range: '31-60 Days', value: 30, color: '#6366F1' },
    { range: '61-90 Days', value: 15, color: '#F59E0B' },
    { range: '90+ Days', value: 10, color: '#EF4444' },
];

const priorityCases = [
    { id: 'INV-2024-001', name: 'Global Logistics Inc', amount: '$42,500', score: 94, risk: 'High', status: 'In Progress' },
    { id: 'INV-2024-005', name: 'TechFlow Systems', amount: '$12,800', score: 88, risk: 'Medium', status: 'Negotiating' },
    { id: 'INV-2024-012', name: 'Oceanic Retail', amount: '$6,200', score: 72, risk: 'Low', status: 'Promised' },
    { id: 'INV-2024-018', name: 'Stellar Manufacturing', amount: '$24,000', score: 91, risk: 'High', status: 'DCA Assigned' },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-2xl font-bold text-enterprise-text-primary">Executive Overview</h1>
                <p className="text-enterprise-text-secondary mt-1">Real-time recovery intelligence and DCA performance metrics.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Overdue"
                    value="$12.4M"
                    change="8.2%"
                    trend="up"
                    icon={FileText}
                    color="bg-fedex-purple shadow-fedex-purple/20"
                />
                <StatCard
                    title="Total Recovered"
                    value="$5.8M"
                    change="12.5%"
                    trend="up"
                    icon={DollarSign}
                    color="bg-emerald-500 shadow-emerald-500/20"
                />
                <StatCard
                    title="Recovery Rate"
                    value="46.8%"
                    change="2.4%"
                    trend="up"
                    icon={TrendingUp}
                    color="bg-blue-500 shadow-blue-500/20"
                />
                <StatCard
                    title="Active Breaches"
                    value="14"
                    change="3"
                    trend="down"
                    icon={AlertCircle}
                    color="bg-red-500 shadow-red-500/20"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recovery Trend Graph */}
                <Card className="lg:col-span-2" title="Recovery Trend" subtitle="Monthly recovery amount in Millions ($)">
                    <div className="h-[300px] min-h-[300px] w-full pt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={recoveryData}>
                                <defs>
                                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4D148C" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#4D148C" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="month"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#64748B', fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#64748B', fontSize: 12 }}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', borderColor: '#E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="amount"
                                    stroke="#4D148C"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorAmount)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Ageing Bucket */}
                <Card title="Ageing Distribution" subtitle="Portfolio split by invoice age">
                    <div className="h-[300px] min-h-[300px] w-full flex flex-col items-center justify-center">
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={ageingData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {ageingData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="w-full mt-4 space-y-2">
                            {ageingData.map((item) => (
                                <div key={item.range} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                                        <span className="text-enterprise-text-secondary">{item.range}</span>
                                    </div>
                                    <span className="font-bold text-enterprise-text-primary">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>

            {/* High Priority Table */}
            <Card
                title="High Priority Cases"
                subtitle="AI predicted high probability recovery targets"
                action={<button className="text-fedex-purple text-sm font-bold flex items-center gap-1 hover:underline">View All <ArrowUpRight className="w-4 h-4" /></button>}
            >
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-enterprise-border">
                                <th className="text-left py-4 text-xs font-semibold text-enterprise-text-secondary uppercase">Case ID</th>
                                <th className="text-left py-4 text-xs font-semibold text-enterprise-text-secondary uppercase">Customer</th>
                                <th className="text-left py-4 text-xs font-semibold text-enterprise-text-secondary uppercase">Amount</th>
                                <th className="text-left py-4 text-xs font-semibold text-enterprise-text-secondary uppercase text-center">AI Score</th>
                                <th className="text-left py-4 text-xs font-semibold text-enterprise-text-secondary uppercase">Status</th>
                                <th className="py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {priorityCases.map((c) => (
                                <tr key={c.id} className="group hover:bg-slate-50 transition-colors">
                                    <td className="py-4 text-sm font-medium text-fedex-purple">{c.id}</td>
                                    <td className="py-4">
                                        <div className="text-sm font-bold text-enterprise-text-primary">{c.name}</div>
                                        <div className="text-xs text-enterprise-text-secondary">Expedited Shipping Account</div>
                                    </td>
                                    <td className="py-4 text-sm font-bold text-enterprise-text-primary">{c.amount}</td>
                                    <td className="py-4 text-center">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-emerald-100 bg-emerald-50 text-emerald-700 text-xs font-bold">
                                            {c.score}
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <span className={cn(
                                            "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                            c.risk === 'High' ? "bg-red-50 text-red-700" :
                                                c.risk === 'Medium' ? "bg-orange-50 text-orange-700" :
                                                    "bg-emerald-50 text-emerald-700"
                                        )}>
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="py-4 text-right px-2 text-enterprise-text-secondary">
                                        <button className="p-1 hover:bg-slate-200 rounded transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
