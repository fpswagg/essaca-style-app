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
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-panel border border-neon/50 rounded-none shadow-lg">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-display font-light text-neon mb-2 font-mono drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]">Client Dashboard</h3>
          <p className="text-neon/80 text-sm sm:text-base font-mono">
            Main interface for applicants to view and manage their application status.
          </p>
        </div>

        {/* Application Card */}
        <div className="bg-page rounded-none p-6 border border-neon/50 font-mono">
          <div className="mb-4">
            <h4 className="text-lg font-display font-light text-neon mb-1 drop-shadow-[0_0_6px_rgba(0,255,136,0.6)]">
              Application #{application.id.slice(0, 8)}
            </h4>
            <p className="text-sm text-neon/80">Status: {statusLabels[application.status] || application.status}</p>
          </div>

          <div className="space-y-3 mb-6">
            <div>
              <span className="text-xs text-neon/70">First Year: </span>
              <span className="text-sm text-neon">{application.firstYear ? 'Yes' : 'No'}</span>
            </div>
            <div>
              <span className="text-xs text-neon/70">Submission Date: </span>
              <span className="text-sm text-neon">
                {application.submissionDate || 'Not Submitted'}
              </span>
            </div>
          </div>

          <button className="w-full bg-neon text-page rounded-none px-6 py-3 text-sm font-medium hover:bg-electric transition-colors border border-neon font-mono drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]">
            View Details
          </button>
        </div>
      </div>
    </section>
  );
}
