"use client";

import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A specialized look at the tools and technologies I use to bring complex digital products to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 dark:from-indigo-600/20 dark:to-blue-600/20 text-indigo-700 dark:text-indigo-300 font-bold rounded-2xl border border-indigo-200 dark:border-indigo-500/30 shadow-[0_0_15px_rgba(79,70,229,0.1)] hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
