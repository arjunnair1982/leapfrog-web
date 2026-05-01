export function SocialProof() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Great Learning Credibility */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
            Backed by Great Learning
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-xl mx-auto">
            Leapfrog is powered by Great Learning — one of the world's most trusted names in professional education.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { value: "14M+", label: "Learners" },
              { value: "170+", label: "Countries" },
              { value: "12", label: "Years of Training" },
              { value: "8,000+", label: "Industry Mentors" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-brand-green-dark">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentor Network */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-dark text-center mb-8">
            Learn from people who've done it
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Sarah M.", role: "Ops Director, Logistics", company: "Mid-size freight co." },
              { name: "David K.", role: "Marketing Lead, Retail", company: "D2C brand, 30 employees" },
              { name: "Priya R.", role: "Finance Head, Healthcare", company: "Multi-clinic group" }
            ].map((mentor) => (
              <div
                key={mentor.name}
                className="p-5 rounded-xl bg-white border border-gray-100 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-3 flex items-center justify-center text-gray-500 text-sm font-semibold">
                  {mentor.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="text-sm font-medium text-dark">{mentor.name}</div>
                <div className="text-xs text-gray-500 mt-1">{mentor.role}</div>
                <div className="text-xs text-gray-400 mt-0.5">{mentor.company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilot Results Placeholder */}
        <div className="mt-12 max-w-xl mx-auto text-center">
          <div className="p-6 rounded-xl bg-white border border-gray-200">
            <div className="text-sm font-medium text-dark">Early Results</div>
            <p className="mt-2 text-xs text-gray-500">
              &ldquo;Reduced our quoting time by 60% in the first month.&rdquo;
            </p>
            <div className="mt-2 text-xs text-gray-400">— Pilot participant, Professional Services</div>
          </div>
        </div>
      </div>
    </section>
  );
}
