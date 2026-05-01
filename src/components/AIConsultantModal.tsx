"use client";

import { useState, useCallback } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  note: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  note?: string;
}

export function AIConsultantModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    note: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = useCallback(
    (name: string, value: string): string | undefined => {
      switch (name) {
        case "name":
          if (!value.trim()) return "Name is required";
          if (value.trim().length < 2) return "Name must be at least 2 characters";
          return undefined;
        case "phone": {
          const cleaned = value.replace(/[\s\-()]/g, "");
          if (!cleaned) return "Phone number is required";
          if (!/^\+?[\d]{7,15}$/.test(cleaned)) return "Enter a valid phone number (7-15 digits)";
          return undefined;
        }
        case "email":
          if (!value.trim()) return "Email is required";
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
          return undefined;
        case "note":
          if (!value.trim()) return "Please tell us about your sector and use case";
          if (value.trim().length < 10) return "Please provide a bit more detail (at least 10 characters)";
          return undefined;
        default:
          return undefined;
      }
    },
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    const newTouched: Record<string, boolean> = {};

    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setIsSubmitted(true);
    } catch {
      setErrors({ name: "Something went wrong. Please try again." });
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", phone: "", email: "", note: "" });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 id="modal-title" className="text-xl font-bold text-dark">
              You&apos;re all set!
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Thanks, {formData.name}. Our AI consultant will reach you shortly at{" "}
              <span className="font-medium text-dark">{formData.phone}</span>.
            </p>
            <p className="mt-2 text-xs text-gray-400">
              Keep your phone nearby. We&apos;ll connect within 5 minutes.
            </p>
            <button
              onClick={() => {
                handleReset();
                onClose();
              }}
              className="mt-6 inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-brand-green rounded-lg hover:bg-brand-green-dark transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          /* Form */
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 id="modal-title" className="text-xl font-bold text-dark">
                Talk to Our AI Consultant
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Share a few details and we&apos;ll connect you right away.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. John Smith"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors outline-none ${
                    touched.name && errors.name
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : "border-gray-200 bg-gray-50 focus:border-brand-green focus:bg-white"
                  }`}
                  aria-invalid={!!(touched.name && errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {touched.name && errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. +1 555 123 4567"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors outline-none ${
                    touched.phone && errors.phone
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : "border-gray-200 bg-gray-50 focus:border-brand-green focus:bg-white"
                  }`}
                  aria-invalid={!!(touched.phone && errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {touched.phone && errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. john@company.com"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors outline-none ${
                    touched.email && errors.email
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : "border-gray-200 bg-gray-50 focus:border-brand-green focus:bg-white"
                  }`}
                  aria-invalid={!!(touched.email && errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Note */}
              <div>
                <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
                  Your sector &amp; use case
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Logistics — we need help with route optimization and dispatch automation"
                  rows={3}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors outline-none resize-none ${
                    touched.note && errors.note
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : "border-gray-200 bg-gray-50 focus:border-brand-green focus:bg-white"
                  }`}
                  aria-invalid={!!(touched.note && errors.note)}
                  aria-describedby={errors.note ? "note-error" : undefined}
                />
                {touched.note && errors.note && (
                  <p id="note-error" className="mt-1 text-xs text-red-500">{errors.note}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 text-sm font-semibold text-white bg-brand-green rounded-lg hover:bg-brand-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-green/25"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Connecting...
                  </span>
                ) : (
                  "Connect Me Now"
                )}
              </button>

              <p className="text-xs text-center text-gray-400">
                Takes 1 minute. No spam, we promise.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
