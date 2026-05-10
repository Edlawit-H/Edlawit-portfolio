import { personal } from "@/lib/data";

export default function CVSection() {
  return (
    <section id="cv" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-indigo-50 dark:bg-gray-900/30 border border-indigo-100 dark:border-white/5 p-8 sm:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Curriculum Vitae
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Want to know more?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-2">
                Download my full CV to see my complete work history, technical skills, and project experience.
              </p>
              <p className="text-gray-500 text-sm">
                Last updated: May 2026
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center gap-4">
              {/* CV preview card */}
              <div className="w-40 h-52 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-white/10 flex flex-col items-center justify-center gap-3 shadow-2xl shadow-indigo-500/5 dark:shadow-black/40">
                <svg className="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div className="text-center px-4">
                  <p className="text-gray-900 dark:text-white text-xs font-semibold">{personal.name.split(" ")[0]}</p>
                  <p className="text-gray-500 text-xs">CV.pdf</p>
                </div>
                <div className="w-16 h-1 bg-indigo-600/30 dark:bg-indigo-500/30 rounded-full" />
                <div className="w-12 h-1 bg-indigo-600/20 dark:bg-indigo-500/20 rounded-full" />
                <div className="w-14 h-1 bg-indigo-600/20 dark:bg-indigo-500/20 rounded-full" />
              </div>

              {/* Download button */}
              <a
                href="/cv/EDLAWIT_HULUWORK_ABEBE_Resume.pdf"
                download="EDLAWIT_HULUWORK_ABEBE_Resume.pdf"
                className="group flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
