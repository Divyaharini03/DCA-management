"use client";

import React, { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    Plus,
    ChevronDown,
    MoreVertical,
    BrainCircuit,
    Calendar,
    AlertTriangle
} from 'lucide-react';
import { Card } from '@/components/ui/Cards';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const cases = [
    { id: 'FEX-001', customer: 'Amazon Services', invoice: 'INV-44582', amount: '$15,400.00', age: 45, score: 82, risk: 'Low', dca: 'Alpha Recovery', sla: 'On Track', status: 'Pending' },
    { id: 'FEX-002', customer: 'Global Tech Inc', invoice: 'INV-44583', amount: '$42,100.00', age: 92, score: 94, risk: 'High', dca: 'Omega Debt', sla: 'Breached', status: 'Legal' },
    { id: 'FEX-003', customer: 'Walmart Corp', invoice: 'INV-44584', amount: '$8,200.00', age: 31, score: 71, risk: 'Medium', dca: 'Alpha Recovery', sla: 'Warning', status: 'Contacted' },
    { id: 'FEX-004', customer: 'Target Logistics', invoice: 'INV-44585', amount: '$12,800.00', age: 64, score: 88, risk: 'Low', dca: 'Prime Collections', sla: 'On Track', status: 'Promised' },
    { id: 'FEX-005', customer: 'Apple Supply Chain', invoice: 'INV-44586', amount: '$95,000.00', age: 120, score: 98, risk: 'High', dca: 'Omega Debt', sla: 'Breached', status: 'In Analysis' },
    { id: 'FEX-006', customer: 'Tesla Energy', invoice: 'INV-44587', amount: '$22,500.00', age: 15, score: 45, risk: 'Low', dca: '-', sla: 'On Track', status: 'New' },
];

export default function CasesPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-enterprise-text-primary">Case Management</h1>
                    <p className="text-enterprise-text-secondary mt-1">Manage and track all recovery operations across DCAs.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-enterprise-border bg-white rounded-lg text-sm font-semibold text-enterprise-text-secondary hover:bg-slate-50 transition-colors">
                        <Download className="w-4 h-4" /> Export CSV
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-fedex-purple text-white rounded-lg text-sm font-semibold shadow-lg shadow-fedex-purple/20 hover:bg-fedex-purple/90 transition-all">
                        <Plus className="w-4 h-4" /> Create Case
                    </button>
                </div>
            </div>

            <div className="bg-white border border-enterprise-border rounded-2xl shadow-enterprise overflow-hidden">
                {/* Filters Bar */}
                <div className="p-4 border-b border-enterprise-border flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-enterprise-text-secondary" />
                        <input
                            type="text"
                            placeholder="Filter by Customer, ID, or Invoice..."
                            className="w-full bg-white border border-enterprise-border rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-fedex-purple/20 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-3 py-2 border border-enterprise-border bg-white rounded-lg text-sm font-medium text-enterprise-text-secondary hover:text-enterprise-text-primary">
                            <Filter className="w-4 h-4" /> Filters
                        </button>
                        <div className="h-4 w-px bg-slate-300"></div>
                        <div className="flex items-center gap-2 text-sm text-enterprise-text-secondary font-medium">
                            Sort by: <span className="text-fedex-purple cursor-pointer flex items-center">Newest <ChevronDown className="w-3.5 h-3.5 ml-1" /></span>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50 border-b border-enterprise-border">
                                <th className="px-6 py-4 text-xs font-semibold text-enterprise-text-secondary uppercase">Case details</th>
                                <th className="px-6 py-4 text-xs font-semibold text-enterprise-text-secondary uppercase">Amount</th>
                                <th className="px-6 py-4 text-xs font-semibold text-enterprise-text-secondary uppercase">AI Recovery Score</th>
                                <th className="px-6 py-4 text-xs font-semibold text-enterprise-text-secondary uppercase">Risk Level</th>
                                <th className="px-6 py-4 text-xs font-semibold text-enterprise-text-secondary uppercase">Assigned DCA</th>
                                <th className="px-6 py-4 text-xs font-semibold text-enterprise-text-secondary uppercase">SLA Status</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {cases.map((c) => (
                                <tr key={c.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer" onClick={() => window.location.href = `/cases/${c.id}`}>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-fedex-purple group-hover:underline">{c.id}</span>
                                            <span className="text-sm font-bold text-enterprise-text-primary mt-0.5">{c.customer}</span>
                                            <span className="text-xs text-enterprise-text-secondary mt-0.5 flex items-center gap-1.5">
                                                <Calendar className="w-3 h-3" /> {c.age} Days Ageing • {c.invoice}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-bold text-enterprise-text-primary">{c.amount}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-12 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                <div
                                                    className={cn(
                                                        "h-full rounded-full transition-all duration-1000",
                                                        c.score > 80 ? "bg-emerald-500" : c.score > 50 ? "bg-amber-500" : "bg-red-500"
                                                    )}
                                                    style={{ width: `${c.score}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm font-bold text-enterprise-text-primary">{c.score}%</span>
                                        </div>
                                        <span className="text-[10px] text-enterprise-text-secondary flex items-center gap-1 mt-1">
                                            <BrainCircuit className="w-3 h-3 text-fedex-purple" /> AI Probable Recovery
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge
                                            variant={c.risk === 'High' ? 'error' : c.risk === 'Medium' ? 'warning' : 'success'}
                                        >
                                            {c.risk} Risk
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-enterprise-text-primary">
                                        {c.dca}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5">
                                            <div className={cn(
                                                "w-2 h-2 rounded-full",
                                                c.sla === 'On Track' ? "bg-emerald-500" : c.sla === 'Warning' ? "bg-amber-500" : "bg-red-500"
                                            )}></div>
                                            <span className="text-sm font-medium text-enterprise-text-primary">{c.sla}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                                            <MoreVertical className="w-4 h-4 text-enterprise-text-secondary" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination placeholder */}
                <div className="px-6 py-4 bg-slate-50 border-t border-enterprise-border flex items-center justify-between">
                    <span className="text-xs font-medium text-enterprise-text-secondary uppercase">Showing 6 of 1,248 cases</span>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 text-sm font-medium border border-enterprise-border bg-white rounded-md text-enterprise-text-secondary disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1 text-sm font-medium border border-enterprise-border bg-fedex-purple text-white rounded-md">1</button>
                        <button className="px-3 py-1 text-sm font-medium border border-enterprise-border bg-white rounded-md text-enterprise-text-secondary hover:bg-slate-50">2</button>
                        <button className="px-3 py-1 text-sm font-medium border border-enterprise-border bg-white rounded-md text-enterprise-text-secondary hover:bg-slate-50">Next</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-fedex-purple/5 border-fedex-purple/10">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-fedex-purple rounded-xl">
                            <BrainCircuit className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-enterprise-text-primary">FedEx AI Suggestion</h4>
                            <p className="text-sm text-enterprise-text-secondary mt-1">Found 4 new high-risk cases that haven't been assigned to a DCA yet. Allocation recommended for peak recovery.</p>
                            <button className="mt-3 text-sm font-bold text-fedex-purple hover:underline">Review Recommendations →</button>
                        </div>
                    </div>
                </Card>

                <div className="md:col-span-2">
                    <Card className="bg-red-50 border-red-100">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-red-500 rounded-xl">
                                <AlertTriangle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-red-900">Urgent SLA Breaches</h4>
                                <p className="text-sm text-red-700 mt-1">Omega Debt has 12 cases exceeds 90-day threshold without activity. Immediate escalation required for account recovery.</p>
                                <div className="flex items-center gap-4 mt-3">
                                    <button className="text-sm font-bold text-red-700 hover:underline">View Violations</button>
                                    <button className="text-sm font-bold text-red-700 hover:underline">Notify DCA</button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
