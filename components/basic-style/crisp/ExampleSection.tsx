import React from 'react';

export default function ExampleSection() {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-cta border-2 border-main/20 rounded-md shadow-sm">
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-display font-light text-main">Example</h3>
        <p className="text-main/70 text-sm sm:text-base">
          A clean, minimal section that demonstrates the structure. Simple and elegant with clear visual hierarchy.
        </p>
        <div className="mt-4 p-4 bg-page rounded-md border-2 border-main/5">
          <p className="text-main/60 text-xs sm:text-sm">
            This is a demonstration of the component structure following the @implementation guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
