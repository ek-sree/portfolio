'use client'

import Link from 'next/link'
import React, { useState, useCallback } from 'react'
import { ChevronDown, FileText, Download } from 'lucide-react'
import { toast, Toaster } from 'sonner'

const Resume = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const handleEnter = useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId)
    setIsHovered(true)
  }, [timeoutId])

  const handleLeave = useCallback(() => {
    const id = setTimeout(() => {
      setIsHovered(false)
    }, 300)
    setTimeoutId(id)
  }, [])

  const handleDownload = () => {
    try {
      const resumePath = '/resume/Sreehari E K.pdf'

      const link = document.createElement('a')
      link.href = resumePath
      link.setAttribute('download', 'Sreehari E K.pdf')      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading resume:', error)
      toast('Sorry, there was an error downloading the resume. Please try again.')
    }
  }

  return (
    <div className="absolute top-4 right-4 z-10">
      <Toaster expand={false} richColors position='top-center'/>
      <div className="relative">
        <div
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <button className="relative flex items-center gap-2 overflow-hidden border border-green-500 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out group">
            <div className="relative z-20 flex items-center gap-2">
              <span className="text-green-500 group-hover:text-white transition-colors duration-300 ease-in-out">
                Resume
              </span>
              <ChevronDown className="w-4 h-4 text-green-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="absolute inset-0 z-10 bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
          </button>

          {isHovered && (
            <div 
              className="absolute right-0 mt-1 w-48 bg-slate-900 rounded-md shadow-lg border border-gray-200 py-1"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <Link 
                href="/resume"
                className="flex items-center gap-2 px-4 py-2 text-slate-50 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                <FileText className="w-4 h-4" />
                View
              </Link>
              <button 
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 text-slate-50 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200 w-full"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Resume