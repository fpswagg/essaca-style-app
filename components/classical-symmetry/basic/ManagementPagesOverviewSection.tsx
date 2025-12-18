import React from 'react';

export default function ManagementPagesOverviewSection() {
  const managementPages = [
    {
      name: 'Users Management',
      access: 'Admin Only',
      description: 'View all user profiles, update user roles, delete users',
      features: ['User management table', 'Role updates', 'User deletion'],
    },
    {
      name: 'Applications Management',
      access: 'Admin & Staff',
      description: 'View all applications, filter and search applications',
      features: ['Filtered list', 'Search functionality', 'Application details'],
    },
    {
      name: 'Files Management',
      access: 'Admin & Staff',
      description: 'View all uploaded files, filter files by type',
      features: ['File list', 'Type filtering', 'File details'],
    },
    {
      name: 'Payments Management',
      access: 'Admin & Staff',
      description: 'View all payments, create/update/delete payments',
      features: ['Payments table', 'CRUD operations', 'Status filtering'],
    },
    {
      name: 'Test Results Management',
      access: 'Admin & Staff',
      description: 'Manage test results, create/update test results',
      features: ['Test results table', 'Score tracking', 'Link to applications'],
    },
    {
      name: 'Interviews Management',
      access: 'Admin & Staff',
      description: 'Manage interview schedules, view interview history',
      features: ['Interview list', 'Schedule management', 'History view'],
    },
    {
      name: 'Search Candidates',
      access: 'Admin & Staff',
      description: 'Search approved candidates, advanced search filters',
      features: ['Search form', 'Advanced filters', 'Candidate details'],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-marble border border-main/10 rounded-lg shadow-sm">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-display font-light text-main mb-2">ManagementPagesOverview</h3>
          <p className="text-main/70 text-sm sm:text-base">
            Administrative interfaces for managing users, applications, files, payments, and more.
          </p>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {managementPages.map((page) => (
              <div
                key={page.name}
                className="bg-page rounded-lg p-5 border border-main/10 hover:border-column/30 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-main">{page.name}</h4>
                  <span className="text-xs px-2 py-1 bg-column/10 text-column rounded-full">
                    {page.access}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-main/70 mb-3">{page.description}</p>
                <ul className="space-y-1">
                  {page.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-main/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-column rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
