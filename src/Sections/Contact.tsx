import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import ContactForm from '../Components/ContactForm';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="relative  w-full overflow-hidden px-5 py-16 sm:py-24 md:px-10 lg:px-20">

      <div className="absolute top-[-10%] right-[-10%] w-[320px] sm:w-137.5 md:w-187.5 h-80 sm:h-137.5 md:h-187.5 bg-linear-to-bl from-indigo-500/10 to-purple-500/5 dark:from-indigo-600/10 dark:to-transparent rounded-full blur-[60px] sm:blur-[110px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-62.5 sm:w-100 h-62.5 sm:h-100 bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[50px] sm:blur-[90px] pointer-events-none" />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mx-auto  max-w-7xl">
              <div className="flex flex-col items-center text-center md:text-left ma">
        <span className="uppercase font-black fraunces text-5xl sm:text-6xl md:text-[5rem] animate-fade-down">Let's</span>
        <span className="uppercase font-black fraunces text-5xl sm:text-6xl md:text-[5rem] [-webkit-text-stroke:2px_indigo] text-transparent animate-fade-in">Build</span>
        <span className="uppercase font-black fraunces text-5xl sm:text-6xl md:text-[5rem] animate-fade-up">Together</span>
        <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-xl">Have a project idea, or just want to say hello? I'd love to hear from you!</p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 animate-fade-up">
          <Link to="https://github.com/Grajos146" target="_blank" className="py-4  px-10 sm:px-12 rounded-md ring-1 ring-indigo-600/20 bg-slate-200 dark:bg-indigo-600/10 text-indigo-600 dark:text-white hover:ring-indigo-600 dark:hover:ring-indigo-600/50 hover:-translate-y-1 transition duration-300">
            <BsGithub className="text-2xl" />
          </Link>
          <Link to="https://www.linkedin.com/in/joshua-babatunde-8592a43b0" target="_blank" className="py-4 px-10 sm:px-12 rounded-md ring-1 ring-indigo-600/20  bg-slate-200 dark:bg-indigo-600/10 text-indigo-600 dark:text-white hover:ring-indigo-600 dark:hover:ring-indigo-600/50 hover:-translate-y-1 transition duration-300">
            <BsLinkedin className="text-2xl"/>
          </Link>
          <Link to="https://api.whatsapp.com/send/?phone=2348109771933" target="_blank" className="py-4 px-10 sm:px-12 rounded-md ring-1 ring-indigo-600/20  bg-slate-200 dark:bg-indigo-600/10 text-indigo-600 dark:text-white hover:ring-indigo-600 dark:hover:ring-indigo-600/50 hover:-translate-y-1 transition duration-300">
            <BsWhatsapp className="text-2xl"/>
          </Link>
        </div>
      </div>
      
      <div>
        <ContactForm />
      </div>

      </div>


    </section>
  )
}

export default Contact
