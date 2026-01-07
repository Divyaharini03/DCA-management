"use client";

import React from 'react';
import {
    Users,
    Clock,
    DollarSign,
    CheckCircle2,
    MessageSquare,
    Phone,
    FileCheck,
    CalendarCheck
} from 'lucide-react';
import { Card, StatCard } from '@/components/ui/Cards';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const assignedCases = [
    { id: 'FEX-001', customer: 'Amazon Services', amount: '$15,400', deadline: 'Today', priority: 'High', lastContact: '2 days ago' },
    { id: 'FEX-003', customer: 'Walmart Corp', amount: '$8,200', deadline: 'Tomorrow', priority: 'Medium', lastContact: '5 days ago' },
    { id: 'FEX-008', customer: 'FedEx Office Local', amount: '$1,200', deadline: 'Jan 30', priority: 'Low', lastContact: 'Never' },
    { id: 'FEX-012', customer: 'Stark Industries', amount: '$124,000', deadline: 'URGENT', priority: 'High', lastContact: '1 hour ago' },
];

export default function DCAPortalPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-enterprise-text-primary">DCA Agent Portal</h1>
                    <p className="text-enterprise-text-secondary mt-1">Manage your assigned recovery cases and update progress.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-fedex-purple text-[10px] text-white flex items-center justify-center font-bold">+4</div>
                    </div>
                    <span className="text-xs font-bold text-enterprise-text-secondary uppercase">Omega Debt Team</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="My Assigned Cases" value="24" icon={Users} color="bg-fedex-purple" />
                <StatCard title="PTP Amount" value="$84.2k" icon={DollarSign} color="bg-emerald-500" />
                <StatCard title="Avg Handling Time" value="1.4 days" icon={Clock} color="bg-amber-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card title="Priority Actions" subtitle="Sorted by SLA deadline and recovery probability">
                        <div className="space-y-4">
                            {assignedCases.map((c) => (
                                <div key={c.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-enterprise-border rounded-2xl hover:bg-slate-50 transition-colors group cursor-pointer">
                                    <div className="flex gap-4">
                                        <div className={cn(
                                            "w-12 h-12 rounded-xl flex items-center justify-center font-black",
                                            c.priority === 'High' ? "bg-red-50 text-red-600" : "bg-fedex-purple/5 text-fedex-purple"
                                        )}>
                                            {c.id.split('-')[1]}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-enterprise-text-primary underline-offset-4 group-hover:underline">{c.customer}</h4>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-[10px] font-bold text-enterprise-text-secondary uppercase">{c.id}</span>
                                                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-tight">{c.amount}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0 flex items-center gap-6">
                                        <div className="text-right hidden sm:block">
                                            <p className="text-[10px] font-bold text-enterprise-text-secondary uppercase">Deadline</p>
                                            <p className={cn("text-xs font-bold", c.deadline === 'URGENT' ? "text-red-500" : "text-enterprise-text-primary")}>{c.deadline}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 bg-white border border-enterprise-border rounded-lg hover:bg-slate-100 transition-colors" title="Contact Customer">
                                                <Phone className="w-4 h-4 text-enterprise-text-secondary" />
                                            </button>
                                            <button className="p-2 bg-white border border-enterprise-border rounded-lg hover:bg-slate-100 transition-colors" title="Add Remark">
                                                <MessageSquare className="w-4 h-4 text-enterprise-text-secondary" />
                                            </button>
                                            <button className="px-4 py-2 bg-fedex-purple text-white rounded-lg text-xs font-bold shadow-md hover:bg-fedex-purple/90 transition-all">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button className="w-full py-2 text-sm font-bold text-fedex-purple hover:underline">View All Active Cases</button>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card title="Recent Remarks">
                            <div className="space-y-4">
                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-xs text-enterprise-text-secondary italic">"Customer mentioned billing discrepancy in INV-44582. Sent to FedEx supervisor for review."</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-[10px] font-bold text-fedex-purple">Amazon Svcs</span>
                                        <span className="text-[10px] font-medium text-enterprise-text-secondary whitespace-nowrap">2 hrs ago</span>
                                    </div>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-xs text-enterprise-text-secondary italic">"Left voicemail for secondary contact. PTP expected by EOW."</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-[10px] font-bold text-fedex-purple">Walmart Corp</span>
                                        <span className="text-[10px] font-medium text-enterprise-text-secondary whitespace-nowrap">Jan 26, 2:30 PM</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card title="My Performance">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-enterprise-text-secondary">Recovery Target</span>
                                    <span className="text-sm font-bold">$120k / $200k</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-emerald-500 h-full w-[60%]"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div className="p-3 bg-slate-50 rounded-xl text-center">
                                        <p className="text-[10px] font-bold text-enterprise-text-secondary uppercase">Ranking</p>
                                        <p className="text-lg font-black text-fedex-purple">#4</p>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-xl text-center">
                                        <p className="text-[10px] font-bold text-enterprise-text-secondary uppercase">SLA Adherence</p>
                                        <p className="text-lg font-black text-emerald-600">99%</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="space-y-6">
                    <Card className="bg-slate-900 text-white border-none shadow-xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Upcoming Follow-ups</h3>
                        </div>

                        <div className="space-y-5">
                            {[
                                { time: '14:30', name: 'Global Logistics', type: 'Call' },
                                { time: '16:00', name: 'TechFlow Systems', type: 'Email' },
                                { time: 'Tomorrow', name: 'Oceanic Retail', type: 'Settlement' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span className="text-xs font-bold text-slate-500 w-12">{item.time}</span>
                                    <div>
                                        <p className="text-sm font-bold text-white leading-none">{item.name}</p>
                                        <p className="text-[10px] text-slate-400 mt-1 uppercase font-black">{item.type}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
                            <CalendarCheck className="w-4 h-4" /> Open Full Schedule
                        </button>
                    </Card>

                    <Card title="Quick Actions">
                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-fedex-purple/5 transition-colors border border-slate-100 group">
                                <FileCheck className="w-5 h-5 text-fedex-purple group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase text-enterprise-text-secondary">Upload Proof</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-fedex-purple/5 transition-colors border border-slate-100 group">
                                <MessageSquare className="w-5 h-5 text-fedex-purple group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase text-enterprise-text-secondary">Bulk Remark</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-fedex-purple/5 transition-colors border border-slate-100 group">
                                <Phone className="w-5 h-5 text-fedex-purple group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase text-enterprise-text-secondary">Dialer Sync</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-fedex-purple/5 transition-colors border border-slate-100 group">
                                <CheckCircle2 className="w-5 h-5 text-fedex-purple group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase text-enterprise-text-secondary">Bulk Closures</span>
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
