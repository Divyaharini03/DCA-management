import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-enterprise-bg">
            <Sidebar />
            <div className="flex flex-col">
                <TopBar />
                <main className="pl-64 flex-1">
                    <div className="p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
