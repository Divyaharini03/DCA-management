"use client";

import React from 'react';
import {
    ShieldCheck,
    AlertOctagon,
    Zap,
    Clock,
    Search,
    ChevronRight,
    Filter,
    BarChart4
} from 'lucide-react';
import { Card } from '@/components/ui/Cards';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const dcaMetrics = [
    { name: 'Alpha Recovery', compliance: 98.4, violations: 2, avgResponse: '1.2h', recoveryRate: 48.2 },
    { name: 'Omega Debt', compliance: 82.5, violations: 14, avgResponse: '8.4h', recoveryRate: 35.1 },
    { name: 'Prime Collections', compliance: 94.2, violations: 5, avgResponse: '2.5h', recoveryRate: 42.8 },
    { name: 'Global Asset Mgmt', compliance: 99.1, violations: 1, avgResponse: '0.8h', recoveryRate: 52.4 },
];

export default function GovernancePage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-enterprise-text-primary uppercase tracking-tight">SLA & Compliance Monitoring</h1>
                    <p className="text-enterprise-text-secondary mt-1">Audit DCA performance, adherence to FedEx guidelines, and regulatory compliance.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-enterprise-border rounded-lg text-sm font-semibold text-enterprise-text-primary hover:bg-slate-50 transition-colors">
                        Run Audit Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-emerald-500">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 rounded-xl">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-enterprise-text-secondary uppercase">Compliance Score</p>
                            <h3 className="text-2xl font-bold text-enterprise-text-primary">93.8% <span className="text-xs text-emerald-600 font-bold ml-1">+1.2%</span></h3>
                        </div>
                    </div>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-50 rounded-xl">
                            <AlertOctagon className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-enterprise-text-secondary uppercase">Active Violations</p>
                            <h3 className="text-2xl font-bold text-enterprise-text-primary">22</h3>
                        </div>
                    </div>
                </Card>

                <Card className="border-l-4 border-l-fedex-purple">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-fedex-purple/5 rounded-xl">
                            <Clock className="w-6 h-6 text-fedex-purple" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-enterprise-text-secondary uppercase">Avg DCA Response</p>
                            <h3 className="text-2xl font-bold text-enterprise-text-primary">3.2h <span className="text-xs text-fedex-purple font-bold ml-1">Optimized</span></h3>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Main Monitoring Table */}
            <Card title="DCA Provider Performance Benchmarking" subtitle="Real-time compliance and response analytics">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-enterprise-border">
                                <th className="px-2 py-4 text-xs font-bold text-enterprise-text-secondary uppercase">DCA Name</th>
                                <th className="px-2 py-4 text-xs font-bold text-enterprise-text-secondary uppercase text-center">Compliance %</th>
                                <th className="px-2 py-4 text-xs font-bold text-enterprise-text-secondary uppercase text-center">Open Violations</th>
                                <th className="px-2 py-4 text-xs font-bold text-enterprise-text-secondary uppercase text-center">Avg Response</th>
                                <th className="px-2 py-4 text-xs font-bold text-enterprise-text-secondary uppercase text-center">Recovery Rate</th>
                                <th className="px-2 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {dcaMetrics.map((dca) => (
                                <tr key={dca.name} className="hover:bg-slate-50 transition-colors">
                                    <td className="py-5 px-2">
                                        <span className="text-sm font-bold text-enterprise-text-primary">{dca.name}</span>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            <span className="text-[10px] text-enterprise-text-secondary uppercase font-bold tracking-tight">Active Provider</span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-2">
                                        <div className="flex flex-col items-center gap-1.5">
                                            <span className={cn(
                                                "text-sm font-bold",
                                                dca.compliance > 95 ? "text-emerald-600" : dca.compliance > 90 ? "text-amber-600" : "text-red-600"
                                            )}>{dca.compliance}%</span>
                                            <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                <div
                                                    className={cn(
                                                        "h-full rounded-full",
                                                        dca.compliance > 95 ? "bg-emerald-500" : dca.compliance > 90 ? "bg-amber-500" : "bg-red-500"
                                                    )}
                                                    style={{ width: `${dca.compliance}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-2 text-center">
                                        <span className={cn(
                                            "px-3 py-1 rounded-lg font-bold text-sm",
                                            dca.violations > 10 ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"
                                        )}>{dca.violations}</span>
                                    </td>
                                    <td className="py-5 px-2 text-center text-sm font-medium text-enterprise-text-primary">
                                        {dca.avgResponse}
                                    </td>
                                    <td className="py-5 px-2 text-center text-sm font-bold text-fedex-purple">
                                        {dca.recoveryRate}%
                                    </td>
                                    <td className="py-5 px-2 text-right">
                                        <button className="text-xs font-bold text-fedex-purple hover:underline bg-fedex-purple/5 px-3 py-1.5 rounded-lg">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card title="Alerts & Violations" subtitle="Recent policy or SLA breaches" action={<button className="text-xs text-enterprise-text-secondary font-bold uppercase hover:text-fedex-purple transition-colors">Clear All</button>}>
                    <div className="space-y-4">
                        <div className="flex gap-4 p-4 border border-red-100 bg-red-50/30 rounded-xl relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                            <div className="p-3 bg-red-100 rounded-xl h-fit">
                                <AlertOctagon className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-red-900 leading-none">Serious SLA Breach: Omega Debt</p>
                                <p className="text-xs text-red-700 mt-2 font-medium">14 cases have no contact updates for 5+ business days. Recovery probability decreased by 12%.</p>
                                <div className="flex items-center gap-3 mt-4">
                                    <button className="text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-3 py-1.5 rounded-lg active:scale-95 transition-transform">Auto-Escalate</button>
                                    <span className="text-[10px] font-bold text-red-700 uppercase">2 mins ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 p-4 border border-amber-100 bg-amber-50/30 rounded-xl relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
                            <div className="p-3 bg-amber-100 rounded-xl h-fit">
                                <Clock className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-amber-900 leading-none">Warning: Delayed Response Target</p>
                                <p className="text-xs text-amber-700 mt-2 font-medium">Alpha Recovery avg response time increased by 45 mins this week. Capacity threshold near limit.</p>
                                <div className="flex items-center gap-3 mt-4">
                                    <button className="text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-white px-3 py-1.5 rounded-lg active:scale-95 transition-transform">Notify Manager</button>
                                    <span className="text-[10px] font-bold text-amber-700 uppercase">1 hour ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card title="Capacity Optimization" subtitle="AI suggest redistributing case load">
                    <div className="flex flex-col items-center py-4">
                        <div className="w-full space-y-5">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs font-bold uppercase text-enterprise-text-secondary tracking-wider">
                                    <span>Alpha Recovery Capacity</span>
                                    <span className="text-fedex-purple font-black">92%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                                    <div className="bg-fedex-purple h-full" style={{ width: '92%' }}></div>
                                </div>
                                <p className="text-[10px] text-red-500 font-bold flex items-center gap-1 uppercase">
                                    <Zap className="w-2.5 h-2.5" /> Nearing overload - Performance may drop
                                </p>
                            </div>

                            <div className="space-y-2 pt-2">
                                <div className="flex items-center justify-between text-xs font-bold uppercase text-enterprise-text-secondary tracking-wider">
                                    <span>Global Asset Capacity</span>
                                    <span className="text-emerald-500 font-black">45%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                                    <div className="bg-emerald-500 h-full" style={{ width: '45%' }}></div>
                                </div>
                                <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 uppercase">
                                    High efficiency - Room for 500+ cases
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 p-4 border border-fedex-purple/20 bg-fedex-purple/5 rounded-2xl w-full">
                            <div className="flex items-start gap-3">
                                <BarChart4 className="w-5 h-5 text-fedex-purple mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-fedex-purple">AI Smart Allocation Recommendation</h4>
                                    <p className="text-xs text-enterprise-text-secondary mt-1 leading-relaxed">System suggests moving 150 high-priority cases from <strong>Alpha</strong> to <strong>Global Asset</strong>. Predicted recovery improvement: <strong>+8.4% ($1.2M)</strong>.</p>
                                </div>
                            </div>
                            <button className="w-full mt-4 py-2.5 bg-fedex-purple text-white text-xs font-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-fedex-purple/20">Execute Redistribution Flow</button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
