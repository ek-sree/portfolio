"use client";

import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast, Toaster } from 'sonner';

const Contact = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState({
        name:'',
        email:'',
        message:''
    })

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSumbit= async(e:  React.FormEvent)=>{
        e.preventDefault()
        
        let hasError = false;

        const newError = {name:'', email:'', message:''}

        if(name.trim().length < 3){
            newError.name = "Name must be atleast 3 character long";
            hasError=true
        }

        if (!validateEmail(email.trim())) {
            newError.email = 'Please enter a valid email address.';
            hasError = true;
        }
        if(message.trim().length<8){
            newError.message="Message must be atleast 8 character long";
            hasError=true;
        }

        if(hasError){
            setError(newError);
            return;
        }
        setError({name:'',email:'',message:''});
        try {
            setLoading(true)
            const response = await fetch('/api/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                email,
                message,
              }),
            });
        
            const data = await response.json();
        
            if (data.success) {
                setName('')
                setEmail('')
                setMessage('')
                toast.success('Event has been created')
            } else {
              console.error('Error sending email');
            }
          } catch (error) {
            console.error('Error sending email:', error);
          }finally{
            setLoading(false)
          }   
    }


    return (
      <div className='max-w-5xl mx-auto p-8'>
          <Toaster position="top-center" expand={false} richColors />
          
          {/* Enhanced Title with gradient underline */}
          <h1 className='text-4xl font-bold text-center mb-12 inline-block relative w-full
              after:content-[""] after:absolute after:w-1/4 after:h-1 
              after:bg-gradient-to-r after:from-indigo-500 after:to-transparent 
              after:-bottom-4 after:left-1/2 after:-translate-x-1/2'>
              Get in Touch
          </h1>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
              {/* Enhanced Form Section */}
              <div className='md:w-2/3 w-full'>
                  <form className='backdrop-blur-sm bg-gray-800/30 p-8 rounded-2xl shadow-2xl 
                      border border-gray-700/50 space-y-6 hover:border-gray-600/50 
                      transition-all duration-300'>
                      
                      {/* Name Field */}
                      <div className="group">
                          <label className="block text-gray-300 mb-2 text-sm uppercase tracking-wider">
                              Name
                          </label>
                          <input 
                              value={name} 
                              onChange={e => setName(e.target.value)}
                              type="text" 
                              placeholder='Your Name'
                              className='w-full px-4 py-3 bg-gray-900/50 text-white rounded-xl
                                  border border-gray-700/50 focus:border-indigo-500/50
                                  focus:ring-2 focus:ring-indigo-500/20 focus:outline-none
                                  transition-all duration-300 placeholder:text-gray-500'
                          />
                          {error.name && <p className="text-rose-500 text-sm mt-1">{error.name}</p>}
                      </div>

                      {/* Email Field */}
                      <div className="group">
                          <label className="block text-gray-300 mb-2 text-sm uppercase tracking-wider">
                              Email
                          </label>
                          <input 
                              value={email} 
                              onChange={e => setEmail(e.target.value)}
                              type="email" 
                              placeholder='example@email.com'
                              className='w-full px-4 py-3 bg-gray-900/50 text-white rounded-xl
                                  border border-gray-700/50 focus:border-indigo-500/50
                                  focus:ring-2 focus:ring-indigo-500/20 focus:outline-none
                                  transition-all duration-300 placeholder:text-gray-500'
                          />
                          {error.email && <p className="text-rose-500 text-sm mt-1">{error.email}</p>}
                      </div>

                      {/* Message Field */}
                      <div className="group">
                          <label className="block text-gray-300 mb-2 text-sm uppercase tracking-wider">
                              Message
                          </label>
                          <textarea 
                              value={message} 
                              onChange={e => setMessage(e.target.value)}
                              placeholder='Your Message'
                              rows={5}
                              className='w-full px-4 py-3 bg-gray-900/50 text-white rounded-xl
                                  border border-gray-700/50 focus:border-indigo-500/50
                                  focus:ring-2 focus:ring-indigo-500/20 focus:outline-none
                                  transition-all duration-300 placeholder:text-gray-500 resize-none'
                          />
                          {error.message && <p className="text-rose-500 text-sm mt-1">{error.message}</p>}
                      </div>

                      {/* Enhanced Submit Button */}
                      <div className="flex justify-center pt-4">
                          <button
                              onClick={handleSumbit}
                              type="submit"
                              disabled={loading}
                              className="group relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600
                                  rounded-xl text-white font-medium tracking-wide
                                  hover:from-indigo-500 hover:to-purple-500 
                                  transition-all duration-300 hover:scale-105
                                  hover:shadow-lg hover:shadow-indigo-500/25
                                  disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                              {loading ? (
                                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                  </svg>
                              ) : (
                                  <span className="flex items-center gap-2">
                                      Send Message
                                      <svg 
                                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                                          fill="none" 
                                          viewBox="0 0 24 24" 
                                          stroke="currentColor"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                      </svg>
                                  </span>
                              )}
                          </button>
                      </div>
                  </form>
              </div>

              {/* Enhanced Social Links Section */}
              <div className='w-full md:w-1/3 flex flex-row md:flex-col justify-center md:justify-start 
                  items-center gap-8 md:gap-12 p-8 md:sticky md:top-24'>
                  <Link 
                      href='https://www.instagram.com/sree.hari.ek/' 
                      className="group relative p-3 bg-gray-800/30 rounded-xl border border-gray-700/50
                          hover:border-rose-500/50 transition-all duration-300
                          hover:shadow-lg hover:shadow-rose-500/25"
                  >
                      <IconBrandInstagram className="w-8 h-8 text-gray-400 group-hover:text-rose-500 transition-colors duration-300"/>
                  </Link>
                  <Link 
                      href='https://github.com/ek-sree?tab=repositories' 
                      className="group relative p-3 bg-gray-800/30 rounded-xl border border-gray-700/50
                          hover:border-slate-500/50 transition-all duration-300
                          hover:shadow-lg hover:shadow-slate-500/25"
                  >
                      <IconBrandGithub className="w-8 h-8 text-gray-400 group-hover:text-slate-500 transition-colors duration-300"/>
                  </Link>
                  <Link 
                      href='https://www.linkedin.com/in/sreehari-ek' 
                      className="group relative p-3 bg-gray-800/30 rounded-xl border border-gray-700/50
                          hover:border-indigo-500/50 transition-all duration-300
                          hover:shadow-lg hover:shadow-indigo-500/25"
                  >
                      <IconBrandLinkedin className="w-8 h-8 text-gray-400 group-hover:text-indigo-500 transition-colors duration-300"/>
                  </Link>
                  <Link  
                      href='https://wa.me/9562605265?text=Hello%2C%20I%20am%20a%20' 
                      className="group relative p-3 bg-gray-800/30 rounded-xl border border-gray-700/50
                          hover:border-green-500/50 transition-all duration-300
                          hover:shadow-lg hover:shadow-green-500/25"
                  >
                      <IconBrandWhatsapp className="w-8 h-8 text-gray-400 group-hover:text-green-500 transition-colors duration-300"/>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default Contact;
