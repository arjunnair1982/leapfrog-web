export function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-green-light text-brand-green-dark text-xs font-medium mb-6">
            AI Training & Implementation — Built for Your Industry
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight leading-tight">
            Get your team AI-ready in 30 days
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Industry-specific AI training and hands-on implementation support for teams of 5–50.
            Talk to our AI consultant to get a plan built for your business.
          </p>

          <div className="mt-8">
            <button
              onClick={onOpen}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-green rounded-xl hover:bg-brand-green-dark transition-colors shadow-lg shadow-brand-green/25"
            >
              Talk to Our AI Consultant
            </button>
            <p className="mt-3 text-sm text-gray-400">
              No sign-up needed. Takes 5 minutes.
            </p>
          </div>

          <div className="mt-12 text-xs text-gray-400">
            Powered by Great Learning — 14M+ learners across 170 countries
          </div>
        </div>

        {/* 3-Step Visual */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { step: "1", label: "Talk", desc: "5-min AI conversation", color: "bg-brand-green" },
              { step: "2", label: "Train", desc: "30-day team program", color: "bg-brand-green/80" },
              { step: "3", label: "Implement", desc: "Guided deployment", color: "bg-brand-green/60" }
            ].map((item, i) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.color} rounded-full flex items-center justify-center text-white text-lg font-bold mb-3`}>
                  {item.step}
                </div>
                <div className="text-sm font-semibold text-dark">{item.label}</div>
                <div className="text-xs text-gray-500 mt-1 text-center">{item.desc}</div>
              </div>
            ))}
          </div>
          {/* Connector lines */}
          <div className="hidden sm:flex justify-center -mt-12 mb-6 relative z-[-1]">
            <div className="flex items-center w-2/3">
              <div className="h-0.5 bg-brand-green/20 flex-1" />
              <div className="h-0.5 bg-brand-green/20 flex-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
