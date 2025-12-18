'use client';

import React, { useState } from 'react';

export default function ApplicationFormsSection() {
  const [step, setStep] = useState<'type' | 'form'>('type');
  const [isFirstYear, setIsFirstYear] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    address: '',
    email: '',
    mobilePhone: '',
    dateOfBirth: '',
    gender: '',
    birthCity: '',
    nationality: '',
    lastClassAttended: '',
    lastSchoolAttended: '',
    previousDiplomas: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleTypeSelection = (firstYear: boolean) => {
    setIsFirstYear(firstYear);
    if (firstYear) {
      setStep('form');
    } else {
      alert('Redirecting to instructions page...');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.email || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.mobilePhone) newErrors.mobilePhone = 'Mobile phone is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.birthCity) newErrors.birthCity = 'Birth city is required';
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (!formData.lastClassAttended) newErrors.lastClassAttended = 'Last class attended is required';
    if (!formData.lastSchoolAttended) newErrors.lastSchoolAttended = 'Last school attended is required';
    if (!formData.previousDiplomas) newErrors.previousDiplomas = 'Previous diplomas is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Application submitted successfully!');
    }
  };

  if (step === 'type') {
    return (
      <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-cream border border-main/20 rounded-lg shadow-sm">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-display font-light text-main mb-2">Application Forms</h3>
            <p className="text-main/70 text-sm sm:text-base">
              Comprehensive application form system for creating and managing applications.
            </p>
          </div>

          <div className="bg-page rounded-lg p-6 border border-main/20">
            <h4 className="text-lg font-display font-light text-main mb-4">Are you applying for first year?</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleTypeSelection(true)}
                className="flex-1 bg-olive text-cream rounded-full px-6 py-3 font-medium hover:bg-earth transition-colors"
              >
                Yes, First Year
              </button>
              <button
                onClick={() => handleTypeSelection(false)}
                className="flex-1 bg-transparent border-2 bg-olive text-olive rounded-full px-6 py-3 font-medium hover:bg-olive hover:text-cream transition-colors"
              >
                No, Not First Year
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-cream border border-main/20 rounded-lg shadow-sm">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-xl font-display font-light text-main mb-2">Application Forms</h3>
          <p className="text-main/70 text-sm sm:text-base">
            Comprehensive application form with candidate and academic information.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-page rounded-lg p-6 border border-main/20 space-y-6">
          <div>
            <h4 className="text-lg font-display font-light text-main mb-4 border-b border-main/20 pb-2">
              CANDIDAT (Candidate Information)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-main mb-2">
                  Last Name <span className="text-olive">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                />
                {errors.lastName && <p className="text-xs text-red-600 mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-main mb-2">
                  First Name <span className="text-olive">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                />
                {errors.firstName && <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-main mb-2">
                  Address <span className="text-olive">*</span>
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                />
                {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-main mb-2">
                  Email <span className="text-olive">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-main mb-2">
                  Mobile Phone <span className="text-olive">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.mobilePhone}
                  onChange={(e) => handleInputChange('mobilePhone', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                />
                {errors.mobilePhone && <p className="text-xs text-red-600 mt-1">{errors.mobilePhone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-main mb-2">Date of Birth <span className="text-olive">*</span></label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                />
                {errors.dateOfBirth && <p className="text-xs text-red-600 mt-1">{errors.dateOfBirth}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-main mb-2">Gender <span className="text-olive">*</span></label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                >
                  <option value="">Please Select</option>
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
                {errors.gender && <p className="text-xs text-red-600 mt-1">{errors.gender}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-main mb-2">Birth City <span className="text-olive">*</span></label>
                <input
                  type="text"
                  value={formData.birthCity}
                  onChange={(e) => handleInputChange('birthCity', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                />
                {errors.birthCity && <p className="text-xs text-red-600 mt-1">{errors.birthCity}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-main mb-2">Nationality <span className="text-olive">*</span></label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                />
                {errors.nationality && <p className="text-xs text-red-600 mt-1">{errors.nationality}</p>}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-light text-main mb-4 border-b border-main/20 pb-2">
              CURSUS SCOLAIRE (Academic History)
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-main mb-2">
                  Last Class Attended <span className="text-olive">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastClassAttended}
                  onChange={(e) => handleInputChange('lastClassAttended', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                />
                {errors.lastClassAttended && <p className="text-xs text-red-600 mt-1">{errors.lastClassAttended}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-main mb-2">
                  Last School Attended <span className="text-olive">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastSchoolAttended}
                  onChange={(e) => handleInputChange('lastSchoolAttended', e.target.value)}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                />
                {errors.lastSchoolAttended && <p className="text-xs text-red-600 mt-1">{errors.lastSchoolAttended}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-main mb-2">
                  Previous Diplomas <span className="text-olive">*</span>
                </label>
                <textarea
                  value={formData.previousDiplomas}
                  onChange={(e) => handleInputChange('previousDiplomas', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive resize-y"
                />
                {errors.previousDiplomas && <p className="text-xs text-red-600 mt-1">{errors.previousDiplomas}</p>}
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => setStep('type')}
              className="flex-1 bg-transparent border-2 bg-olive text-olive rounded-full px-6 py-3 font-medium hover:bg-olive hover:text-cream transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-olive text-cream rounded-full px-6 py-3 font-medium hover:bg-earth transition-colors"
            >
              Save Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
