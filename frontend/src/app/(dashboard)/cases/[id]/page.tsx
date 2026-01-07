"use client";

import React from 'react';
import {
    ArrowLeft,
    User,
    FileText,
    History,
    Upload,
    ShieldAlert,
    Brain,
    MessageSquare,
    CheckCircle2,
    Clock,
    ExternalLink,
    ChevronRight
} from 'lucide-react';
import { Card } from '@/components/ui/Cards';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CaseDetailPage({ params }: { params: { id: string } }) {
    const caseId = params.id;

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center gap-4">
                <Link href="/cases" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <ArrowLeft className="w-5 h-5 text-enterprise-text-secondary" />
                </Link>
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-enterprise-text-primary">Case {caseId}</h1>
                        <Badge variant="purple">DCA Assigned</Badge>
                    </div>
                    <p className="text-sm text-enterprise-text-secondary mt-0.5">Assigned to Omega Debt Recovery • Updated 2 hours ago</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Details */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Customer Profile */}
                    <Card title="Customer Profile" action={<button className="text-fedex-purple text-sm font-bold">Edit Info</button>}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 border border-enterprise-border flex items-center justify-center text-fedex-purple">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-enterprise-text-primary">Amazon Services</h3>
                                        <p className="text-xs text-enterprise-text-secondary uppercase font-semibold">Strategic Enterprise Account</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                                        <span className="text-enterprise-text-secondary">Account ID</span>
                                        <span className="font-semibold text-enterprise-text-primary">ACC-77412-BM</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                                        <span className="text-enterprise-text-secondary">Email</span>
                                        <span className="font-semibold text-enterprise-text-primary">finance@amazon.com</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                                        <span className="text-enterprise-text-secondary">Phone</span>
                                        <span className="font-semibold text-enterprise-text-primary">+1 (555) 124-9000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                <h4 className="text-xs font-bold text-enterprise-text-secondary uppercase mb-3">Address</h4>
                                <p className="text-sm text-enterprise-text-primary leading-relaxed">
                                    1200 12th Ave S, Ste 1200<br />
                                    Seattle, WA 98144<br />
                                    United States
                                </p>
                                <button className="mt-4 text-xs font-bold text-fedex-purple flex items-center gap-1 hover:underline">
                                    <ExternalLink className="w-3 h-3" /> View in CRM
                                </button>
                            </div>
                        </div>
                    </Card>

                    {/* Invoices */}
                    <Card title="Invoice Details" subtitle="Outstanding billing items for this case">
                        <div className="overflow-x-auto -mx-6">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50">
                                    <tr className="border-y border-enterprise-border">
                                        <th className="px-6 py-3 text-[10px] font-bold text-enterprise-text-secondary uppercase">Invoice #</th>
                                        <th className="px-6 py-3 text-[10px] font-bold text-enterprise-text-secondary uppercase">Issued</th>
                                        <th className="px-6 py-3 text-[10px] font-bold text-enterprise-text-secondary uppercase">Due</th>
                                        <th className="px-6 py-3 text-[10px] font-bold text-enterprise-text-secondary uppercase">Amount</th>
                                        <th className="px-6 py-3 text-[10px] font-bold text-enterprise-text-secondary uppercase">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-bold text-fedex-purple underline cursor-pointer">INV-44582</td>
                                        <td className="px-6 py-4 text-sm text-enterprise-text-secondary text-nowrap">Dec 12, 2025</td>
                                        <td className="px-6 py-4 text-sm text-red-500 font-medium text-nowrap">Jan 12, 2026</td>
                                        <td className="px-6 py-4 text-sm font-bold text-enterprise-text-primary">$15,400.00</td>
                                        <td className="px-6 py-4 truncate">
                                            <Badge variant="warning">Overdue</Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    {/* Activity Timeline */}
                    <Card title="Activity Log" subtitle="History of actions and updates">
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                            <div className="relative flex items-start group">
                                <div className="absolute left-0 w-10 h-10 bg-emerald-100 border-4 border-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm z-10 transition-transform group-hover:scale-110">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div className="ml-14 pt-1">
                                    <p className="text-sm font-bold text-enterprise-text-primary">Marked Contacted</p>
                                    <p className="text-xs text-enterprise-text-secondary mt-1">DCA Agent Sarah Chen reached out to primary contact. Promise to pay response received.</p>
                                    <span className="text-[10px] font-medium text-enterprise-text-secondary mt-2 inline-block">Today • 10:45 AM</span>
                                </div>
                            </div>

                            <div className="relative flex items-start group">
                                <div className="absolute left-0 w-10 h-10 bg-fedex-purple/10 border-4 border-white rounded-full flex items-center justify-center text-fedex-purple shadow-sm z-10 transition-transform group-hover:scale-110">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div className="ml-14 pt-1">
                                    <p className="text-sm font-bold text-enterprise-text-primary">DCA Assigned</p>
                                    <p className="text-xs text-enterprise-text-secondary mt-1">Case automatically assigned to Omega Debt Recovery based on AI performance matching.</p>
                                    <span className="text-[10px] font-medium text-enterprise-text-secondary mt-2 inline-block">Jan 24, 2026 • 09:15 AM</span>
                                </div>
                            </div>

                            <div className="relative flex items-start group">
                                <div className="absolute left-0 w-10 h-10 bg-slate-100 border-4 border-white rounded-full flex items-center justify-center text-slate-600 shadow-sm z-10 transition-transform group-hover:scale-110">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="ml-14 pt-1">
                                    <p className="text-sm font-bold text-enterprise-text-primary">Case Opened</p>
                                    <p className="text-xs text-enterprise-text-secondary mt-1">System flagged invoice as high probability for collection delay.</p>
                                    <span className="text-[10px] font-medium text-enterprise-text-secondary mt-2 inline-block">Jan 22, 2026 • 02:30 PM</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-2 border border-enterprise-border rounded-lg text-sm text-enterprise-text-secondary hover:bg-slate-50 transition-colors">
                            Load More Activity
                        </button>
                    </Card>
                </div>

                {/* Right Column - AI & Actions */}
                <div className="space-y-6">
                    {/* AI Insights Panel */}
                    <div className="bg-gradient-to-br from-fedex-purple to-purple-800 rounded-2xl p-6 text-white shadow-xl shadow-fedex-purple/30 overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <Brain className="w-6 h-6" />
                            <h3 className="text-lg font-bold">Recovery AI Insights</h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                <p className="text-[10px] font-bold uppercase tracking-wider opacity-70">Recovery Probability</p>
                                <div className="flex items-end gap-2 mt-1">
                                    <span className="text-3xl font-bold">84%</span>
                                    <span className="text-sm text-emerald-400 font-bold mb-1 flex items-center gap-0.5">High <ChevronRight className="w-3 h-3 rotate-[270deg]" /></span>
                                </div>
                                <div className="mt-3 w-full bg-white/20 h-1 rounded-full overflow-hidden">
                                    <div className="bg-white h-full" style={{ width: '84%' }}></div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="p-2 bg-white/10 rounded-lg h-fit">
                                        <ShieldAlert className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold">Risk of Escalation</h4>
                                        <p className="text-xs opacity-80 mt-1">Customer has history of late payment with current DCA. Recommend supervisor intervention if not paid by Friday.</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="p-2 bg-white/10 rounded-lg h-fit">
                                        <MessageSquare className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold">Recommended Action</h4>
                                        <p className="text-xs opacity-80 mt-1">Offer 5% discount for immediate wire transfer. AI predicts 92% acceptance rate for this account.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-white text-fedex-purple font-bold rounded-xl text-sm transition-transform active:scale-95 shadow-md">
                                Generate AI Demand Letter
                            </button>
                        </div>
                    </div>

                    {/* DCA Status Panel */}
                    <Card title="Update Status">
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-enterprise-text-secondary uppercase">Current Status</label>
                                <select className="mt-1 w-full p-2.5 bg-slate-50 border border-enterprise-border rounded-lg text-sm font-medium focus:ring-2 focus:ring-fedex-purple/20 outline-none">
                                    <option>Contacted</option>
                                    <option>Negotiating</option>
                                    <option>Promise to Pay</option>
                                    <option>DCA Escalated</option>
                                    <option>Closed - Recovered</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-enterprise-text-secondary uppercase">Remarks</label>
                                <textarea className="mt-1 w-full p-2.5 bg-slate-50 border border-enterprise-border rounded-lg text-sm focus:ring-2 focus:ring-fedex-purple/20 outline-none h-24" placeholder="Enter case updates..."></textarea>
                            </div>
                            <button className="btn-primary w-full">Update Record</button>
                        </div>
                    </Card>

                    {/* Document Section */}
                    <Card title="Documents">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 border border-dashed border-enterprise-border rounded-xl group hover:border-fedex-purple cursor-pointer transition-colors bg-slate-50/50">
                                <div className="flex items-center gap-3">
                                    <FileText className="w-5 h-5 text-fedex-purple" />
                                    <div>
                                        <p className="text-sm font-bold text-enterprise-text-primary">MasterInvoicing_Jan.pdf</p>
                                        <p className="text-[10px] text-enterprise-text-secondary">2.4 MB • System Generated</p>
                                    </div>
                                </div>
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-enterprise-border rounded-xl text-sm font-bold text-enterprise-text-secondary hover:bg-slate-50 transition-colors">
                                <Upload className="w-4 h-4" /> Upload Proof of Pay
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
