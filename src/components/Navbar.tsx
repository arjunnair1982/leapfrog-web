"use client";

import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-bold text-dark">Leapfrog</span>
            </a>
            <span className="hidden sm:block text-xs text-gray-500 border-l border-gray-300 pl-3">
              AI Training & Implementation for Small Business
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs text-gray-400">
              Powered by <span className="font-semibold text-gray-600">Great Learning</span>
            </span>
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-green rounded-lg hover:bg-brand-green-dark transition-colors"
            >
              Talk to Our AI Consultant
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <p className="text-xs text-gray-400 pb-2">
                Powered by <span className="font-semibold text-gray-600">Great Learning</span>
              </p>
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-brand-green rounded-lg hover:bg-brand-green-dark transition-colors"
              >
                Talk to Our AI Consultant
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
