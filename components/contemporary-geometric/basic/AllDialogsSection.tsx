'use client';

import React, { useState } from 'react';

export default function AllDialogsSection() {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showRegistrationDialog, setShowRegistrationDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-offwhite border border-main/10 rounded-lg shadow-sm">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-display font-light text-main mb-2">AllDialogs</h3>
          <p className="text-main/70 text-sm sm:text-base">
            Dialog components for user interactions, confirmations, and form submissions.
          </p>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => setShowConfirmDialog(true)}
              className="bg-page rounded-lg p-4 border border-main/10 hover:border-magenta/30 hover:shadow-md transition-all text-left"
            >
              <h4 className="font-medium text-main mb-2">Confirm Dialog</h4>
              <p className="text-xs text-main/60">Confirmation actions with danger variant</p>
            </button>
            <button
              onClick={() => setShowRegistrationDialog(true)}
              className="bg-page rounded-lg p-4 border border-main/10 hover:border-magenta/30 hover:shadow-md transition-all text-left"
            >
              <h4 className="font-medium text-main mb-2">Registration Dialog</h4>
              <p className="text-xs text-main/60">Modal registration form</p>
            </button>
            <button
              onClick={() => setShowPaymentDialog(true)}
              className="bg-page rounded-lg p-4 border border-main/10 hover:border-magenta/30 hover:shadow-md transition-all text-left"
            >
              <h4 className="font-medium text-main mb-2">Payment Form Dialog</h4>
              <p className="text-xs text-main/60">Create/edit payment records</p>
            </button>
          </div>
        </div>

        {/* Confirm Dialog */}
        {showConfirmDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowConfirmDialog(false)} />
            <div className="relative bg-offwhite rounded-2xl shadow-xl max-w-md w-full p-6 border border-main/10">
              <h4 className="text-lg font-display font-light text-main mb-2">Delete Payment</h4>
              <p className="text-sm text-main/70 mb-6">
                Are you sure you want to delete this payment? This action cannot be undone.
              </p>
              <div className="flex flex-col-reverse sm:flex-row gap-3">
                <button
                  onClick={() => setShowConfirmDialog(false)}
                  className="flex-1 bg-transparent border-2 border-magenta text-magenta rounded-full px-6 py-2 font-medium hover:bg-magenta hover:text-offwhite transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowConfirmDialog(false)}
                  className="flex-1 bg-red-600 text-offwhite rounded-full px-6 py-2 font-medium hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Registration Dialog */}
        {showRegistrationDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowRegistrationDialog(false)} />
            <div className="relative bg-offwhite rounded-2xl shadow-xl max-w-md w-full p-6 border border-main/10 max-h-[90vh] overflow-y-auto">
              <h4 className="text-lg font-display font-light text-main mb-4">Create Account</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-main mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="user@example.com"
                    readOnly
                    className="w-full px-4 py-2 bg-page border border-main/20 rounded-md text-main/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-2">
                    Password <span className="text-magenta">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-offwhite border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-magenta"
                    placeholder="Min 8 characters"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-2">
                    Confirm Password <span className="text-magenta">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-offwhite border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-magenta"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowRegistrationDialog(false)}
                    className="flex-1 bg-transparent border-2 border-magenta text-magenta rounded-full px-6 py-2 font-medium hover:bg-magenta hover:text-offwhite transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-magenta text-offwhite rounded-full px-6 py-2 font-medium hover:bg-magenta-alt transition-colors"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Payment Form Dialog */}
        {showPaymentDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowPaymentDialog(false)} />
            <div className="relative bg-offwhite rounded-2xl shadow-xl max-w-md w-full p-6 border border-main/10 max-h-[90vh] overflow-y-auto">
              <h4 className="text-lg font-display font-light text-main mb-4">Payment Form</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-main mb-2">
                    Application ID <span className="text-magenta">*</span>
                  </label>
                  <select className="w-full px-4 py-2 bg-offwhite border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-magenta">
                    <option>Select Application</option>
                    <option>APP001</option>
                    <option>APP002</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-2">
                    Amount <span className="text-magenta">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-2 bg-offwhite border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-magenta"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-2">
                    Status <span className="text-magenta">*</span>
                  </label>
                  <select className="w-full px-4 py-2 bg-offwhite border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-magenta">
                    <option>pending</option>
                    <option>completed</option>
                    <option>failed</option>
                    <option>refunded</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowPaymentDialog(false)}
                    className="flex-1 bg-transparent border-2 border-magenta text-magenta rounded-full px-6 py-2 font-medium hover:bg-magenta hover:text-offwhite transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-magenta text-offwhite rounded-full px-6 py-2 font-medium hover:bg-magenta-alt transition-colors"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
