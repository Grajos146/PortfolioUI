import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section id="footer" className="w-full bg-gray-100  dark:bg-slate-600/10  border-t border-t-gray-300 overflow-hidden py-10 text-slate-600 dark:text-slate-400">
      
      <div className="flex flex-col px-5 md:px-10 lg:px-20 max-w-7xl justify-between mx-auto md:flex-row md:items-baseline">
              {/* Brand Logo */}
      <div className="flex items-baseline md:-mt-6">
        <h1 className='text-md font-bold dark:text-slate-300 text-slate-900'>Grajos</h1>
        <span className='text-4xl text-indigo-600 leading-none'>.</span>
      </div>

      {/* Copyright Notice */}
      <p className="text-xs text-center md:text-left">
        &copy; 2026 <span className="font-bold">Joshua Babatunde</span>. Built with React.ts and Tailwind CSS, and a .NET backend.
      </p>

      {/* Social Links Container */}
      <div className="flex items-center space-x-2">
        <Link to="https://github.com/Grajos146" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub Profile">
          {/* GitHub Icon */}
          <BsGithub className="text-2xl" />
        </Link>

        <Link to="https://www.linkedin.com/in/joshua-babatunde-8592a43b0" target="_blank" rel="noopener noreferrer" className="ml-4 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="LinkedIn Profile">
          {/* LinkedIn Icon */}
          <BsLinkedin className="text-2xl"/>
        </Link>
      </div>
      

      </div>
    </section>
  )
}

export default Footer