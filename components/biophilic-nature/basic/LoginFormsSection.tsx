'use client';

import React, { useState } from 'react';

export default function LoginFormsSection() {
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setStep('password');
    setError(null);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    setError(null);
    // In real app, this would call signIn(email, password)
  };

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-cream border border-main/10 rounded-lg shadow-sm">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-display font-light text-main mb-2">LoginForms</h3>
          <p className="text-main/70 text-sm sm:text-base">
            Two-step login form with email confirmation check and registration integration.
          </p>
        </div>

        <div className="mt-4">
          <div className="max-w-md mx-auto bg-page rounded-lg p-6 border border-main/10">
            {step === 'email' ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-main mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(null);
                    }}
                    className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive"
                    placeholder="Enter your email"
                    autoFocus
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-olive text-cream rounded-full px-6 py-3 font-medium hover:bg-olive-alt transition-colors"
                >
                  Continue
                </button>
              </form>
            ) : (
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <p className="text-sm text-main/70 mb-2">Signing in as: {email}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setStep('email');
                      setPassword('');
                      setError(null);
                    }}
                    className="text-sm text-olive hover:underline mb-4"
                  >
                    ← Back
                  </button>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-main mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError(null);
                      }}
                      className="w-full px-4 py-2 bg-cream border border-main/20 rounded-md text-main focus:outline-none focus:ring-2 focus:ring-olive focus:border-olive pr-10"
                      placeholder="Enter your password"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-main/60 hover:text-main text-sm"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-olive text-cream rounded-full px-6 py-3 font-medium hover:bg-olive-alt transition-colors"
                >
                  Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
