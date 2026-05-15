import { personal } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Bio text */}
          <div className="space-y-6 text-center">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line text-left md:text-center">
              {personal.summary}
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { label: "Location", value: personal.location },
                { label: "Email", value: personal.email, truncate: true },
                { label: "Phone", value: personal.phone },
                { label: "Status", value: "Open to work" },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider font-medium">
                    {item.label}
                  </p>
                  <p className={`text-gray-900 dark:text-gray-200 text-sm font-medium ${item.truncate ? "truncate" : ""}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-10 flex justify-center">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
