'use client';

import { ReactNode } from 'react';

interface Feature {
  readonly id: string;
  readonly description?: string;
}

interface FeaturesProps {
  readonly features: readonly Feature[];
  readonly className?: string;
}

export default function Features({ features, className = '' }: Readonly<FeaturesProps>) {
  return (
    <section className={`py-8 px-4 sm:px-6 lg:px-8 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-1 sm:gap-6 md:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-justify text-justify">

              {/* Description */}
              {feature.description && (
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
