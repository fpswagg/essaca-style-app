'use client';

import React from 'react';

export default function StaffDashboardSection() {
  const managementLinks = [
    { name: 'Applications Management', href: '/dashboard/admin/applications', description: 'View and manage applications' },
    { name: 'Files Management', href: '/dashboard/admin/files', description: 'Manage uploaded files' },
    { name: 'Payments Management', href: '/dashboard/admin/payments', description: 'View and manage payments' },
    { name: 'Test Results Management', href: '/dashboard/admin/test-results', description: 'Manage test results' },
    { name: 'Search Approved Candidates', href: '/dashboard/admin/search', description: 'Search for approved candidates' },
    { name: 'Interviews Management', href: '/dashboard/admin/interviews', description: 'Manage interview schedules' },
  ];

  const applications = [
    { id: 'APP001', name: 'John Doe', email: 'john@example.com', status: 'submitted', firstYear: true, submissionDate: '2024-01-15' },
    { id: 'APP002', name: 'Jane Smith', email: 'jane@example.com', status: 'under_review', firstYear: false, submissionDate: '2024-01-20' },
    { id: 'APP003', name: 'Bob Johnson', email: 'bob@example.com', status: 'draft', firstYear: true },
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-panel border border-neon/50 rounded-none shadow-lg">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-xl font-display font-light text-neon mb-2 font-mono drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]">Staff Dashboard</h3>
          <p className="text-neon/80 text-sm sm:text-base font-mono">
            Dashboard for staff members with access to application review and management tasks.
          </p>
        </div>

        {/* Management Links */}
        <div>
          <h4 className="text-lg font-display font-light text-neon mb-4 font-mono drop-shadow-[0_0_6px_rgba(0,255,136,0.6)]">Management Links</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {managementLinks.map((link) => (
              <div
                key={link.name}
                className="bg-page rounded-none p-4 border border-neon/50 hover:border-neon transition-all cursor-pointer font-mono"
              >
                <h5 className="font-medium text-neon mb-1 drop-shadow-[0_0_4px_rgba(0,255,136,0.6)]">{link.name}</h5>
                <p className="text-xs sm:text-sm text-neon/60">{link.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications List */}
        <div>
          <h4 className="text-lg font-display font-light text-neon mb-4 font-mono drop-shadow-[0_0_6px_rgba(0,255,136,0.6)]">All Applications</h4>
          {applications.length === 0 ? (
            <div className="bg-page rounded-none p-8 border border-neon/50 text-center font-mono">
              <p className="text-neon/80 mb-2">No Applications</p>
              <p className="text-sm text-neon/60">No applications to review</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="bg-page rounded-none p-4 border border-neon/50 hover:border-neon transition-all font-mono"
                >
                  <div className="text-sm font-medium text-neon mb-2 drop-shadow-[0_0_6px_rgba(0,255,136,0.6)]">Application #{app.id.slice(0, 8)}</div>
                  <div className="text-xs text-neon/70 mb-1">Status: {app.status.replace('_', ' ')}</div>
                  <div className="text-sm text-neon mb-2">{app.name}</div>
                  <div className="text-xs text-neon/70 mb-3">{app.email}</div>
                  <div className="text-xs text-neon/70 mb-3">First Year: {app.firstYear ? 'Yes' : 'No'}</div>
                  {app.submissionDate ? (
                    <div className="text-xs text-neon/70 mb-3">Submitted: {app.submissionDate}</div>
                  ) : (
                    <div className="text-xs text-neon/70 mb-3">Not Submitted</div>
                  )}
                  <button className="w-full bg-neon text-page rounded-none px-4 py-2 text-sm font-medium hover:bg-electric transition-colors border border-neon font-mono drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
