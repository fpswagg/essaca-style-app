import React from 'react';

export default function ExampleSection() {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-8 bg-panel border-2 border-neon/30 rounded-lg shadow-lg">
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-display font-light text-main drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">Example</h3>
        <p className="text-main/70 text-sm sm:text-base">
          A clean, minimal section that demonstrates the structure. Simple and elegant with clear visual hierarchy.
        </p>
        <div className="mt-4 p-4 bg-page rounded-lg border-2 border-main/5">
          <p className="text-main/60 text-xs sm:text-sm">
            This is a demonstration of the component structure following the @implementation guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
