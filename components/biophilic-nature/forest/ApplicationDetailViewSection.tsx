import React from 'react';

export default function ApplicationDetailViewSection() {
  const application = {
    id: 'APP001',
    status: 'under_review',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    address: '123 Main St',
    mobilePhone: '+1234567890',
    dateOfBirth: '1990-01-01',
    gender: 'M',
    birthCity: 'New York',
    nationality: 'American',
    lastClassAttended: '12th Grade',
    lastSchoolAttended: 'High School',
    previousDiplomas: 'High School Diploma',
  };

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-cream border-2 border-main/30 rounded-lg shadow-md">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-xl font-display font-light text-main mb-2">ApplicationDetailView</h3>
          <p className="text-main/70 text-sm sm:text-base">
            Comprehensive interface for viewing and editing application information.
          </p>
        </div>

        <div className="mt-4">
          <div className="bg-page rounded-lg p-6 border-2 border-main/30">
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-display font-light text-main mb-1">
                    Application #{application.id}
                  </h4>
                  <p className="text-sm text-main/70">
                    Status: <span className="capitalize">{application.status.replace('_', ' ')}</span>
                  </p>
                </div>
                <button className="bg-olive text-cream rounded-full px-4 py-2 text-sm font-medium hover:bg-earth transition-colors">
                  Edit
                </button>
              </div>
            </div>

            <div className="border-t border-main/30 pt-6 mb-6">
              <h5 className="text-md font-display font-light text-main mb-4">CANDIDAT</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-main/60 mb-1">Last Name</p>
                  <p className="text-sm text-main">{application.lastName}</p>
                </div>
                <div>
                  <p className="text-xs text-main/60 mb-1">First Name</p>
                  <p className="text-sm text-main">{application.firstName}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs text-main/60 mb-1">Address</p>
                  <p className="text-sm text-main">{application.address}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs text-main/60 mb-1">Email</p>
                  <p className="text-sm text-main">{application.email}</p>
                </div>
                <div>
                  <p className="text-xs text-main/60 mb-1">Mobile Phone</p>
                  <p className="text-sm text-main">{application.mobilePhone}</p>
                </div>
                <div>
                  <p className="text-xs text-main/60 mb-1">Date of Birth</p>
                  <p className="text-sm text-main">
                    {new Date(application.dateOfBirth).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-main/60 mb-1">Gender</p>
                  <p className="text-sm text-main">{application.gender}</p>
                </div>
                <div>
                  <p className="text-xs text-main/60 mb-1">Birth City</p>
                  <p className="text-sm text-main">{application.birthCity}</p>
                </div>
                <div>
                  <p className="text-xs text-main/60 mb-1">Nationality</p>
                  <p className="text-sm text-main">{application.nationality}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-main/30 pt-6 mb-6">
              <h5 className="text-md font-display font-light text-main mb-4">CURSUS SCOLAIRE</h5>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-main/60 mb-1">Last Class Attended</p>
                  <p className="text-sm text-main">{application.lastClassAttended}</p>
                </div>
                <div>
                  <p className="text-xs text-main/60 mb-1">Last School Attended</p>
                  <p className="text-sm text-main">{application.lastSchoolAttended}</p>
                </div>
                <div>
                  <p className="text-xs text-main/60 mb-1">Previous Diplomas</p>
                  <p className="text-sm text-main">{application.previousDiplomas}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-main/30 pt-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-blue-900">
                  Your application is under review. You will be notified once a decision is made.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-olive text-cream rounded-full px-4 py-2 text-sm font-medium hover:bg-earth transition-colors">
                  Approve
                </button>
                <button className="flex-1 bg-transparent border-2 border-red-600 text-red-600 rounded-full px-6 py-2 font-medium hover:bg-red-600 hover:text-cta transition-colors">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
