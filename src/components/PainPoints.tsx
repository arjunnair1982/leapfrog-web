export function PainPoints() {
  const painPoints = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "I know AI can help my business but I don't know where to start"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c6.073.009 9.03-2.51 8.974-4.508m0 0c-1.116.009-1.054-.018 0 0zM9 20H4v-2a3 3 0 015.356-1.857M9 20v-2c0-1.1.9-2 2-2s2 .9 2 2v2m0 0h6" />
        </svg>
      ),
      text: "My team is afraid of AI — I need them to understand and adopt it"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "I've tried ChatGPT but can't figure out how to build it into our workflow"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "I want automated AI workflows but have no one internally who knows how"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
            Sound familiar?
          </h2>
          <p className="mt-3 text-base text-gray-500">
            You're not alone. These are the exact challenges we hear from small business leaders every day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 mt-0.5">
                {point.icon}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed italic">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
