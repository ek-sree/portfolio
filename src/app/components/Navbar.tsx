import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-slate-700'>
      <ul className='flex absolute top-10 left-[38rem] items-center justify-center gap-4 p-4 rounded-3xl font-serif text-slate-400 cursor-pointer border-4 border-transparent bg-gradient-to-r'>
        <li className='hover:text-slate-300'>Home</li>
        <li className='hover:text-slate-300'>Project</li>
        <li className='hover:text-slate-300'>Skills</li>
        <li className='hover:text-slate-300'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
