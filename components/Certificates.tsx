"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[number] | null>(null);

  return (
    <section id="certificates" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Certificates
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Verified certifications from recognised platforms that validate my
            skills and commitment to continuous learning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <CertCard key={index} cert={cert} index={index} onClick={() => setSelectedCert(cert)} />
          ))}
        </div>
      </div>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}

function CertModal({
  cert,
  onClose,
}: {
  cert: (typeof certificates)[number];
  onClose: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white pr-4">{cert.title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative flex-1 overflow-auto bg-black/50 p-4 min-h-[50vh] flex items-center justify-center">
          {!imgError ? (
            <Image
              src={cert.image}
              alt={cert.title}
              width={1200}
              height={800}
              className="object-contain max-h-[75vh]"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="text-white/50">Image could not be loaded</div>
          )}
        </div>
      </div>
    </div>
  );
}

function CertCard({
  cert,
  index,
  onClick,
}: {
  cert: (typeof certificates)[number];
  index: number;
  onClick: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  const gradients = [
    "from-indigo-600 to-blue-600",
    "from-purple-600 to-indigo-600",
    "from-blue-600 to-cyan-600",
    "from-violet-600 to-purple-600",
  ];
  const gradient = gradients[index % gradients.length];

  const issuerBadge: Record<string, string> = {
    "Google Developer Group": "GDG",
    "ALX": "ALX",
    "HerCommerce": "HerCommerce",
  };

  return (
    <div 
      className="group bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col cursor-pointer"
      onClick={onClick}
    >
      {/* Certificate preview */}
      <div className="relative h-40 overflow-hidden flex-shrink-0">
        {!imgError ? (
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2`}>
            {/* Certificate icon */}
            <svg className="w-10 h-10 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span className="text-white/40 text-sm font-bold">
              {cert.issuer.slice(0, 3)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Issuer badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-lg">
            {issuerBadge[cert.issuer] ?? cert.issuer}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
          {cert.title}
        </h3>
        {cert.date && (
          <p className="text-gray-500 text-xs mb-4 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {cert.date}
          </p>
        )}

        <div className="mt-auto pt-4">
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-medium rounded-lg transition-colors border border-transparent hover:border-indigo-200 dark:hover:border-indigo-500/30"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View Image
          </button>
        </div>
      </div>
    </div>
  );
}
