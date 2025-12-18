'use client';

import React from 'react';

export default function ClientDashboardSection() {
  const application = {
    id: 'APP00123456',
    status: 'submitted',
    firstYear: true,
    submissionDate: '2024-01-15',
    applicantName: 'John Doe',
    applicantEmail: 'john@example.com',
  };

  const statusLabels: Record<string, string> = {
    draft: 'Draft',
    submitted: 'Submitted',
    under_review: 'Under Review',
    approved: 'Approved',
    rejected: 'Rejected',
  };

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-panel/80 backdrop-blur-sm border border-neon/30 rounded-2xl shadow-lg">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-display font-light text-neon mb-2 drop-shadow-[0_0_6px_rgba(0,255,136,0.3)]">Client Dashboard</h3>
          <p className="text-main/70 text-sm sm:text-base">
            Main interface for applicants to view and manage their application status.
          </p>
        </div>

        {/* Application Card */}
        <div className="bg-page/50 backdrop-blur-sm rounded-xl p-6 border border-neon/30 shadow-md">
          <div className="mb-4">
            <h4 className="text-lg font-display font-light text-neon mb-1 drop-shadow-[0_0_4px_rgba(0,255,136,0.3)]">
              Application #{application.id.slice(0, 8)}
            </h4>
            <p className="text-sm text-main/70">Status: {statusLabels[application.status] || application.status}</p>
          </div>

          <div className="space-y-3 mb-6">
            <div>
              <span className="text-xs text-main/60">First Year: </span>
              <span className="text-sm text-main">{application.firstYear ? 'Yes' : 'No'}</span>
            </div>
            <div>
              <span className="text-xs text-main/60">Submission Date: </span>
              <span className="text-sm text-main">
                {application.submissionDate || 'Not Submitted'}
              </span>
            </div>
          </div>

          <button className="w-full bg-neon/80 text-page rounded-full px-6 py-3 text-sm font-medium hover:bg-electric transition-colors backdrop-blur-sm shadow-[0_0_8px_rgba(0,255,136,0.4)]">
            View Details
          </button>
        </div>
      </div>
    </section>
  );
}
