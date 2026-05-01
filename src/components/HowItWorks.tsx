export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Talk to our AI",
      description: "Have a 5-minute conversation with our AI consultant. It understands your industry, your team size, and your specific workflow challenges — and builds a tailored AI roadmap for you.",
      outcome: "You get a custom AI plan for your business."
    },
    {
      number: "2",
      title: "Train your team",
      description: "Your team gets a 30-day program: self-paced videos, detailed guides, and weekly live mentor sessions. Everyone learns together as a cohort. Built for your sector and function.",
      outcome: "Your team understands and embraces AI."
    },
    {
      number: "3",
      title: "Implement with support",
      description: "A dedicated mentor from your industry guides your team through implementation week by week. You don't just learn AI — you actually deploy it.",
      outcome: "AI is working in your business, delivering results."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
            How it works
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Three steps. No complexity. Just results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-brand-green/20" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center bg-white rounded-xl p-6 border border-gray-100">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-green text-white text-base font-bold mb-5 relative z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-medium text-brand-green-dark">
                  {step.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
