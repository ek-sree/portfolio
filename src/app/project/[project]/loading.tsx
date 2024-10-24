"use client";

import React from 'react';

const ProjectPageSkeleton: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start mb-4">
        <div className="bg-neutral-400/20 w-24 h-9 rounded-xl animate-pulse" />
      </div>

      <div className="flex flex-col items-center gap-2 mb-6 sm:mb-8">
        <div className="bg-neutral-400/20 h-10 w-3/4 rounded-lg animate-pulse" />
        <div className="bg-neutral-400/20 h-6 w-1/2 rounded-lg animate-pulse" />
      </div>

      <div className="mt-10 sm:mt-20 flex justify-center gap-4">
        <div className="bg-indigo-500/20 w-24 h-10 rounded-lg animate-pulse" />
        <div className="bg-purple-600/20 w-24 h-10 rounded-lg animate-pulse" />
      </div>

      <div className="mt-10 sm:mt-20">
        <div className="bg-neutral-400/20 h-7 w-48 mb-4 animate-pulse" />
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={`tech-${index}`}
              className="bg-green-500/20 h-10 rounded-md animate-pulse"
            />
          ))}
        </div>
      </div>

      <div className="mt-10 sm:mt-20">
        <div className="bg-neutral-400/20 h-7 w-48 mb-4 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`arch-${index}`}
              className="bg-slate-500/20 h-10 rounded-md animate-pulse"
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="bg-neutral-400/20 h-7 w-48 mb-4 animate-pulse" />
        <ul className="ml-8 md:ml-16 space-y-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <li
              key={`feature-${index}`}
              className="bg-neutral-400/20 h-6 w-3/4 rounded animate-pulse"
            />
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <div className="bg-neutral-400/20 h-7 w-48 mb-4 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`screenshot-${index}`}
              className="relative w-full h-64 sm:h-72 lg:h-80 bg-neutral-400/20 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPageSkeleton;