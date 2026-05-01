export function FinalCTA() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Ready to get your team AI-ready?
          </h2>
          <p className="mt-4 text-base text-gray-300">
            Speak to our AI consultant now. Get a custom AI roadmap for your business in 5 minutes.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark bg-brand-green rounded-xl hover:bg-brand-green-dark transition-colors shadow-lg shadow-brand-green/25"
            >
              Talk to Our AI Consultant
            </a>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Prefer a human? <span className="underline underline-offset-2">Schedule a call with one of our experts</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-gray-500">
            Powered by Great Learning — trusted by 14M+ professionals worldwide.
          </div>
        </div>
      </div>
    </section>
  );
}
