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
        <Toaster position="top-center" expand={false} richColors  />
      <h1 className='text-3xl flex justify-center underline mb-5 text-green-500'>Contact Me.</h1>

      <div className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0">

        <div className='md:w-2/3'>
          <form action="" className='bg-gray-800 ml-5 p-6 rounded-lg shadow-md space-y-4 border border-white'>
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name :</label>
              <input value={name} onChange={e=>setName(e.target.value)}  type="text" placeholder='Name' className='text-slate-700 w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
              {error.name && <p className="text-red-500">{error.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email :</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder='example@gmail.com' className="text-slate-700 w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              {error.email && <p className="text-red-500">{error.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message :</label>
              <textarea value={message} onChange={e=>setMessage(e.target.value)} name="message" id="" placeholder='Message' className="text-slate-700 w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={5} required></textarea>
              {error.message && <p className="text-red-500">{error.message}</p>}
            </div>
            <div className="flex justify-center">
              <button  onClick={handleSumbit}
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r to-gradient-rose from-gradient-blue text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                ) : null}
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className='w-full md:relative md:top-24 md:w-1/3 flex flex-row md:flex-col justify-center md:justify-start items-center space-x-6 md:space-x-0 md:space-y-6'>
                    <Link href='https://www.instagram.com/sree.hari.ek/' className="hover:scale-110 transition duration-200">
                        <IconBrandInstagram className="w-8 h-8 text-white hover:text-rose-500 duration-200"/>
                    </Link>
                    <Link href='https://github.com/ek-sree?tab=repositories' className="hover:scale-110 transition duration-200">
                        <IconBrandGithub className="w-8 h-8 text-white hover:text-slate-500 transition duration-200"/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/sreehari-ek' className="hover:scale-110 transition duration-200">
                        <IconBrandLinkedin className="w-8 h-8 text-white hover:text-indigo-400 transition duration-200"/>
                    </Link>
                    <Link  href='https://wa.me/9562605265?text=Hello%2C%20I%20am%20a%20' className="hover:scale-110 transition duration-200">
                        <IconBrandWhatsapp className="w-8 h-8 text-white hover:text-green-500 transition duration-200"/>
                    </Link>
                </div>

      </div>
    </div>
  )
}

export default Contact
