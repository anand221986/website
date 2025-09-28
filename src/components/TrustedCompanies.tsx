// src/components/TrustedCompanies.tsx
import React from "react";

const companies = [
  "TechCorp",
  "StartupXYZ",
  "Enterprise Inc",
  "Innovation Labs",
  "Design Studio",
  "Cloud Solutions",
  "Data Systems",
  "Growth Corp",
  "Future Tech",
  "Digital Works",
];

const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We're proud to partner with innovative companies across various industries.
          </p>
        </div>

        {/* Scrolling Wrapper */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {/* Repeat the list twice for infinite scroll effect */}
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 
                  grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-36 h-12 bg-slate-200 rounded flex items-center justify-center">
                  <span className="text-slate-600 font-semibold text-sm">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
