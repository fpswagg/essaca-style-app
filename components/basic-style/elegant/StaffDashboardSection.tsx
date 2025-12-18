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
    <section className="max-w-4xl mx-auto p-8 sm:p-10 bg-cta border border-main/10 rounded-lg shadow-sm">
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="text-xl font-display font-light text-main mb-2">Staff Dashboard</h3>
          <p className="text-main/70 text-sm sm:text-base">
            Dashboard for staff members with access to application review and management tasks.
          </p>
        </div>

        {/* Management Links */}
        <div>
          <h4 className="text-lg font-display font-light text-main mb-5">Management Links</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {managementLinks.map((link) => (
              <div
                key={link.name}
                className="bg-page rounded-lg p-5 border border-main/10 hover:border-burgundy/30 hover:shadow-md transition-all cursor-pointer"
              >
                <h5 className="font-medium text-main mb-1">{link.name}</h5>
                <p className="text-xs sm:text-sm text-main/60">{link.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications List */}
        <div>
          <h4 className="text-lg font-display font-light text-main mb-5">All Applications</h4>
          {applications.length === 0 ? (
            <div className="bg-page rounded-lg p-8 border border-main/10 text-center">
              <p className="text-main/70 mb-2">No Applications</p>
              <p className="text-sm text-main/60">No applications to review</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="bg-page rounded-lg p-5 border border-main/10 hover:border-burgundy/30 hover:shadow-md transition-all"
                >
                  <div className="text-sm font-medium text-burgundy mb-2">Application #{app.id.slice(0, 8)}</div>
                  <div className="text-xs text-main/60 mb-1">Status: {app.status.replace('_', ' ')}</div>
                  <div className="text-sm text-main mb-2">{app.name}</div>
                  <div className="text-xs text-main/60 mb-3">{app.email}</div>
                  <div className="text-xs text-main/60 mb-3">First Year: {app.firstYear ? 'Yes' : 'No'}</div>
                  {app.submissionDate ? (
                    <div className="text-xs text-main/60 mb-3">Submitted: {app.submissionDate}</div>
                  ) : (
                    <div className="text-xs text-main/60 mb-3">Not Submitted</div>
                  )}
                  <button className="w-full bg-burgundy text-cta rounded-full px-4 py-2 text-sm font-medium hover:bg-burgundy-alt transition-colors">
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
