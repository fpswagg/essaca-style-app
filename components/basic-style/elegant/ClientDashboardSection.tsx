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
    <section className="max-w-4xl mx-auto p-8 sm:p-10 bg-cta border border-main/10 rounded-lg shadow-sm">
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="text-xl font-display font-light text-main mb-2">Client Dashboard</h3>
          <p className="text-main/70 text-sm sm:text-base">
            Main interface for applicants to view and manage their application status.
          </p>
        </div>

        {/* Application Card */}
        <div className="bg-page rounded-lg p-8 border border-main/10">
          <div className="mb-5">
            <h4 className="text-lg font-display font-light text-main mb-1">
              Application #{application.id.slice(0, 8)}
            </h4>
            <p className="text-sm text-main/70">Status: {statusLabels[application.status] || application.status}</p>
          </div>

          <div className="space-y-4 mb-8">
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

          <button className="w-full bg-burgundy text-cta rounded-full px-6 py-3 text-sm font-medium hover:bg-burgundy-alt transition-colors">
            View Details
          </button>
        </div>
      </div>
    </section>
  );
}
