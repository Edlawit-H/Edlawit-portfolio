"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  const placeholderColors: Record<string, string> = {
    "currency-converter": "from-indigo-600 to-blue-600",
    "github-search": "from-gray-700 to-gray-900",
    "recipe-sharing": "from-orange-600 to-red-600",
    applyflow: "from-purple-600 to-indigo-600",
  };

  const gradient = placeholderColors[project.id] ?? "from-indigo-600 to-purple-600";

  return (
    <div className="group bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-white/20 text-5xl font-bold select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold rounded-lg border border-white/10 uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        {/* Tech Badge Overlay */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 2).map((t) => (
            <span key={t} className="px-2 py-0.5 bg-white/10 backdrop-blur-md text-white text-[9px] font-medium rounded border border-white/5 uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onOpenModal(project)}
            className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-md shadow-indigo-500/20"
          >
            Details
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl border border-gray-200 dark:border-white/10 transition-all duration-200"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
