import React from 'react';

export default function ExampleSection() {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-panel border border-neon/50 rounded-none shadow-sm">
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-display font-light text-main font-mono">Example</h3>
        <p className="text-main/70 text-sm sm:text-base font-mono">
          A clean, minimal section that demonstrates the structure. Simple and elegant with clear visual hierarchy.
        </p>
        <div className="mt-4 p-4 bg-page rounded-md border border-main/5">
          <p className="text-main/60 text-xs sm:text-sm font-mono">
            This is a demonstration of the component structure following the @implementation guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
