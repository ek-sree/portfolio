"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; 

export default function ResumePage() {
  const router = useRouter();

  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', disableContextMenu);
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <div className="relative p-6">
      <button
        onClick={goBack}
        className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Back
      </button>

      <div className="pdf-container mt-8 mx-auto" style={{ width: '90%', height: 'auto', overflow: 'auto' }}>
        <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
          <Viewer fileUrl="/resume/Sreehari E K.pdf" />
        </Worker>
      </div>
    </div>
  );
}
