"use client";

import React from 'react';
import {
    BrainCircuit,
    BarChart3,
    PieChart as PieIcon,
    TrendingUp,
    Target,
    Sparkles,
    Zap,
    ChevronDown
} from 'lucide-react';
import { Card } from '@/components/ui/Cards';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
    LineChart, Line, ComposedChart, Area,
    ScatterChart, Scatter, ZAxis
} from 'recharts';

const predictionData = [
    { day: 'Day 1', prediction: 120, actual: 110 },
    { day: 'Day 10', prediction: 450, actual: 480 },
    { day: 'Day 20', prediction: 820, actual: 790 },
    { day: 'Day 30', prediction: 1200, actual: 1150 },
];

const segmentData = [
    { segment: 'E-commerce', success: 85, vol: 1200 },
    { segment: 'Logistics', success: 92, vol: 800 },
    { segment: 'Tech', success: 78, vol: 1500 },
    { segment: 'Retail', success: 65, vol: 600 },
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-enterprise-text-primary">Predictive Insights</h1>
                    <p className="text-enterprise-text-secondary mt-1">AI-driven forecasting and strategic recovery analysis.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white border border-enterprise-border rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium">
                        Range: <span className="text-fedex-purple flex items-center">Next 30 Days <ChevronDown className="w-4 h-4 ml-1" /></span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-fedex-purple text-white rounded-lg text-sm font-semibold shadow-lg shadow-fedex-purple/20 hover:bg-fedex-purple/90 transition-all">
                        <Sparkles className="w-4 h-4" /> Regenerate AI Models
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-1">
                {[
                    { label: 'Predicted Recovery', val: '$14.2M', icon: Target, trend: '+12%', color: 'text-emerald-600' },
                    { label: 'AI Accuracy', val: '94.2%', icon: BrainCircuit, trend: '+0.4%', color: 'text-fedex-purple' },
                    { label: 'Risk Pipeline', val: '2,481', icon: TrendingUp, trend: '-5%', color: 'text-amber-600' },
                    { label: 'Optimization Gain', val: '$2.1M', icon: Zap, trend: 'Calculated', color: 'text-blue-600' },
                ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-enterprise-border shadow-enterprise group hover:border-fedex-purple/30 transition-all">
                        <div className="flex items-center justify-between">
                            <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-fedex-purple/5 transition-colors">
                                <item.icon className="w-5 h-5 text-enterprise-text-secondary group-hover:text-fedex-purple transition-colors" />
                            </div>
                            <span className={`text-[10px] font-black uppercase ${item.color}`}>{item.trend}</span>
                        </div>
                        <div className="mt-4">
                            <p className="text-xs font-bold text-enterprise-text-secondary uppercase tracking-wider">{item.label}</p>
                            <h3 className="text-2xl font-black text-enterprise-text-primary mt-1">{item.val}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2" title="Predicted vs Actual Recovery" subtitle="30-day look-ahead analysis based on historical patterns">
                    <div className="h-[350px] w-full pt-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={predictionData}>
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    cursor={{ stroke: '#4D148C', strokeWidth: 1, strokeDasharray: '5 5' }}
                                />
                                <Legend verticalAlign="top" align="right" height={36} iconType="circle" />
                                <CartesianGrid stroke="#f1f5f9" vertical={false} strokeDasharray="5 5" />
                                <Area type="monotone" dataKey="prediction" fill="#4D148C" stroke="#4D148C" fillOpacity={0.05} strokeWidth={2} />
                                <Bar dataKey="actual" barSize={20} fill="#FF6E00" radius={[4, 4, 0, 0]} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card title="Success Rate by Industry" subtitle="AI performance tracking by customer segment">
                    <div className="h-[350px] w-full pt-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={segmentData} layout="vertical">
                                <XAxis type="number" hide />
                                <YAxis dataKey="segment" type="category" axisLine={false} tickLine={false} tick={{ fill: '#1E293B', fontSize: 12, fontWeight: 700 }} width={90} />
                                <Tooltip cursor={false} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="success" fill="#4D148C" radius={[0, 4, 4, 0]} barSize={24}>
                                    {segmentData.map((entry, index) => (
                                        <Bar key={`bar-${index}`} fill={entry.success > 80 ? '#10B981' : entry.success > 70 ? '#4D148C' : '#F59E0B'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                        <Zap className="w-5 h-5 text-amber-500 mt-0.5" />
                        <p className="text-xs text-enterprise-text-secondary leading-normal">
                            <strong>Insight:</strong> Retail segment success rate is down 15%. AI recommends increasing automated dunning frequency for these accounts.
                        </p>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card title="Recovery Strategy Recommendation Engine">
                    <div className="space-y-4 pt-2">
                        {[
                            { title: "Legal Escalation Pathway", desc: "411 cases meet the high-threshold legal criteria. Moving to legal now increases recovery odds by 24%.", impact: "$2.4M Impact", color: "bg-red-50 text-red-700", icon: ShieldCircuit },
                            { title: "DCA Reassignment Flow", desc: "Redistribute logistic-heavy cases from Omega to Prime. Prime has 12% higher success in this sector.", impact: "12% Perf Boost", color: "bg-fedex-purple/5 text-fedex-purple", icon: Shuffle },
                            { title: "Strategic Discount Offering", desc: "Send 5% settlement offer to 220 accounts with 'Promise to Pay' status. Predicted 65% cash-in within 48h.", impact: "$800k Cash Flow", color: "bg-emerald-50 text-emerald-700", icon: Banknote },
                        ].map((rec, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 border border-enterprise-border rounded-2xl hover:border-fedex-purple/30 hover:bg-slate-50/50 transition-all cursor-pointer group">
                                <div className={`p-3 rounded-xl ${rec.color.split(' ')[0]}`}>
                                    {/* Re-using some lucide icons manually since I didn't import all */}
                                    <Sparkles className={`w-5 h-5 ${rec.color.split(' ')[1]}`} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-bold text-enterprise-text-primary">{rec.title}</h4>
                                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${rec.color}`}>{rec.impact}</span>
                                    </div>
                                    <p className="text-xs text-enterprise-text-secondary mt-1">{rec.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card title="Portfolio Risk Pipeline" subtitle="Ageing vs Amount Concentration Analysis">
                    <div className="h-[300px] w-full pt-6">
                        {/* Simplified placeholder for a complex scatter chart */}
                        <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis type="number" dataKey="x" name="Amount" unit="$k" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 10 }} />
                                <YAxis type="number" dataKey="y" name="Days" unit="d" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 10 }} />
                                <ZAxis type="number" dataKey="z" range={[60, 400]} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                <Scatter name="Cases" data={[
                                    { x: 10, y: 15, z: 20 }, { x: 45, y: 32, z: 45 }, { x: 90, y: 12, z: 100 },
                                    { x: 25, y: 65, z: 80 }, { x: 75, y: 88, z: 150 }, { x: 120, y: 92, z: 300 },
                                    { x: 15, y: 110, z: 50 }, { x: 55, y: 125, z: 90 }
                                ]} fill="#4D148C" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-[10px] text-enterprise-text-secondary mt-2 text-center uppercase font-bold tracking-widest">X: Invoice Amount • Y: Ageing Days • Bubble: Risk Level</p>
                </Card>
            </div>
        </div>
    );
}

// Dummy components for missing icons to avoid import errors in this session
function ShieldCircuit(props: any) { return <Sparkles {...props} /> }
function Shuffle(props: any) { return <Sparkles {...props} /> }
function Banknote(props: any) { return <Sparkles {...props} /> }
