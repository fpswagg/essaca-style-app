'use client';

import React, { useState } from 'react';

export default function AllDialogsSection() {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showRegistrationDialog, setShowRegistrationDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-panel border border-neon/50 rounded-none shadow-sm">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-xl font-display font-light text-main mb-2 font-mono">AllDialogs</h3>
          <p className="text-main/70 text-sm sm:text-base font-mono">
            Dialog components for user interactions, confirmations, and form submissions.
          </p>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => setShowConfirmDialog(true)}
              className="bg-page rounded-none p-4 border border-neon/50 hover:border-neon/30 hover:shadow-md transition-all text-left"
            >
              <h4 className="font-medium text-main mb-2 font-mono">Confirm Dialog</h4>
              <p className="text-xs text-main/60 font-mono">Confirmation actions with danger variant</p>
            </button>
            <button
              onClick={() => setShowRegistrationDialog(true)}
              className="bg-page rounded-none p-4 border border-neon/50 hover:border-neon/30 hover:shadow-md transition-all text-left"
            >
              <h4 className="font-medium text-main mb-2 font-mono">Registration Dialog</h4>
              <p className="text-xs text-main/60 font-mono">Modal registration form</p>
            </button>
            <button
              onClick={() => setShowPaymentDialog(true)}
              className="bg-page rounded-none p-4 border border-neon/50 hover:border-neon/30 hover:shadow-md transition-all text-left"
            >
              <h4 className="font-medium text-main mb-2 font-mono">Payment Form Dialog</h4>
              <p className="text-xs text-main/60 font-mono">Create/edit payment records</p>
            </button>
          </div>
        </div>

        {showConfirmDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowConfirmDialog(false)} />
            <div className="relative bg-panel rounded-2xl shadow-xl max-w-md w-full p-6 border border-neon/50 max-h-[90vh] overflow-y-auto">
              <h4 className="text-lg font-display font-light text-main mb-2 font-mono">Delete Payment</h4>
              <p className="text-sm text-main/70 mb-6 font-mono">
                Are you sure you want to delete this payment? This action cannot be undone.
              </p>
              <div className="flex flex-col-reverse sm:flex-row gap-3">
                <button
                  onClick={() => setShowConfirmDialog(false)}
                  className="flex-1 bg-transparent border-2 bg-neon text-neon rounded-none px-6 py-2 font-medium hover:bg-neon hover:text-page transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowConfirmDialog(false)}
                  className="flex-1 bg-red-600 text-page rounded-none px-6 py-2 font-medium hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {showRegistrationDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowRegistrationDialog(false)} />
            <div className="relative bg-panel rounded-2xl shadow-xl max-w-md w-full p-6 border border-neon/50 max-h-[90vh] overflow-y-auto">
              <h4 className="text-lg font-display font-light text-main mb-4 font-mono">Create Account</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-main mb-2 font-mono">Email</label>
                  <input
                    type="email"
                    defaultValue="user@example.com"
                    readOnly
                    className="w-full px-4 py-2 bg-page border border-main/20 rounded-md text-main/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-2 font-mono">
                    Password <span className="text-neon">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-panel border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-neon font-mono"
                    placeholder="Min 8 characters"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-2 font-mono">
                    Confirm Password <span className="text-neon">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-panel border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-neon font-mono"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowRegistrationDialog(false)}
                    className="flex-1 bg-transparent border-2 bg-neon text-neon rounded-none px-6 py-2 font-medium hover:bg-neon hover:text-page transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-neon text-page rounded-none px-6 py-2 font-medium hover:bg-electric transition-colors"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showPaymentDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowPaymentDialog(false)} />
            <div className="relative bg-panel rounded-2xl shadow-xl max-w-md w-full p-6 border border-neon/50 max-h-[90vh] overflow-y-auto">
              <h4 className="text-lg font-display font-light text-main mb-4 font-mono">Payment Form</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-main mb-2 font-mono">
                    Application ID <span className="text-neon">*</span>
                  </label>
                  <select className="w-full px-4 py-2 bg-panel border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-neon font-mono">
                    <option>Select Application</option>
                    <option>APP001</option>
                    <option>APP002</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-2 font-mono">
                    Amount <span className="text-neon">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-2 bg-panel border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-neon font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-2 font-mono">
                    Status <span className="text-neon">*</span>
                  </label>
                  <select className="w-full px-4 py-2 bg-panel border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-neon font-mono">
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
                    className="flex-1 bg-transparent border-2 bg-neon text-neon rounded-none px-6 py-2 font-medium hover:bg-neon hover:text-page transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-neon text-page rounded-none px-6 py-2 font-medium hover:bg-electric transition-colors"
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
