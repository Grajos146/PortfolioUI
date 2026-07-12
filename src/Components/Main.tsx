import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ProfileImg from '../assets/2.jpg'

const Main = () => {
  const skills = ['React.js', 'TypeScript', 'C# .NET', 'SQL'];

  return (
    <section className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-10 mx-auto px-6 lg:px-0 text-slate-950 dark:text-slate-100 py-10">
      
      <div className='w-full lg:basis-7/12 min-w-0 py-4 text-center lg:text-left'>
        <div className='space-y-2 w-full'>
          
          <div className='flex animate-fade-down items-center justify-center lg:justify-start gap-3 mb-6 w-fit mx-auto lg:mx-0 bg-white/30 dark:bg-slate-800/40 backdrop-blur-md border border-indigo-700/40 dark:border-slate-500/30 shadow-xs shadow-blue-700/40 rounded-full px-4 py-2 transition duration-300'>
            <div className='relative flex items-center justify-center w-2 h-2'>
              <div className='absolute w-full h-full rounded-full border-2 border-green-500 animate-ping'></div>
              <div className='w-2 h-2 rounded-full bg-green-500'></div>
            </div>
            <p className='text-indigo-600 dark:text-indigo-200 uppercase font-bold text-xs flex mx-auto tracking-wider'>Available for new projects</p>
          </div>

          <h1 className='uppercase animate-fade-in font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl fraunces wrap-break-word whitespace-normal leading-none'>
            Joshua
          </h1>
          <h1 className='uppercase animate-fade-in font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent [-webkit-text-stroke:1.5px_indigo] md:[-webkit-text-stroke:2px_indigo] dark:[-webkit-text-stroke:2px_indigo] fraunces wrap-break-word whitespace-normal leading-none mt-1'>
            Babatunde
          </h1>

          <p className='text-slate-600 animate-fade-right dark:text-slate-300 font-medium my-6 text-base sm:text-lg tracking-wide'>
            FullStack Developer
          </p>
          <p className='text-slate-600 animate-fade-right dark:text-slate-300 leading-relaxed text-sm sm:text-base max-w-xl mx-auto lg:mx-0'>
            I build end-to-end web applications — beautiful TypeScript frontends paired with clean, scalable C# .NET APIs. Turning complex problems into elegant, production-ready code.
          </p>
          
          {/* Action Buttons */}
          <div className='flex flex-col animate-fade-up sm:flex-row items-center justify-center lg:justify-start gap-4 my-8 w-full max-w-md mx-auto lg:mx-0'>
            <div className='btn-fill-top-down w-full sm:w-auto flex items-center justify-center rounded-lg gap-2 px-6 py-3.5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition duration-300'>
              <a className='text-white text-sm font-semibold' href="#projects">View My Work</a>
              <BsArrowRight strokeWidth={0.5} size={16} className='text-white font-semibold'/>
            </div>

            <div className='btn-fill-top-down-transparent w-full sm:w-auto flex items-center justify-center group ring-1 ring-indigo-800/10 dark:ring-indigo-400/30 hover:ring-indigo-800 hover:text-white rounded-lg px-6 py-3.5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition duration-300'>
              <a href="#contact" className='text-sm text-slate-900 dark:text-slate-100 transition duration-300 w-full text-center'>Say Hello</a>
            </div>
          </div>

        </div>

        <hr className='border-0 my-8 lg:hidden bg-gray-900/10 dark:bg-slate-600/20 h-px w-full' />
      </div>

      {/* ========= Profile Card =========== */}
      <div className='w-full animate-fade-left max-w-md lg:max-w-110 lg:basis-5/12 min-w-0 bg-white dark:bg-slate-900 border border-slate-300/40 dark:border-slate-700/70 rounded-[20px] p-5 sm:p-6 shadow-[0px_3px_8px_rgba(0,0,0,0.12)] transition-all duration-400 self-center'>

        {/* ============ Image Area ============ */}
        <div className='relative w-full aspect-square sm:h-80 md:h-96 lg:h-80 mb-6 rounded-[14px] border border-slate-200/80 dark:border-slate-700 overflow-hidden'>
          <img src={ProfileImg} className="w-full h-full object-cover object-top block" alt="Joshua Babatunde Portfolio Visual" />
        </div>

        {/* Card Metadata */}
        <div className='space-y-3.5'>
          <p className='font-semibold text-lg'>Joshua Babatunde</p>
          <p className='text-gray-500 dark:text-slate-400 text-sm font-medium'>FullStack Developer - Nigeria</p>

          <div className='mt-4 flex flex-wrap gap-2'>
            {skills.map((skill) => (
              <span key={skill} className='text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200 bg-gray-600/10 dark:bg-slate-800 rounded-md px-3 py-1.5'>
                {skill}
              </span>
            ))}
          </div>

          <div className='flex items-center justify-between gap-3 mt-5 bg-green-300/10 dark:bg-emerald-500/10 rounded-lg ring-1 ring-green-500/20 dark:ring-emerald-400/20 px-4 py-2.5'>
            <div className='flex items-center gap-2 py-1'>
              <div className='relative flex items-center justify-center w-2 h-2'>
                <div className='absolute w-full h-full rounded-full border-2 border-green-500 animate-ping'></div>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
              </div>
              <p className='text-green-500 dark:text-emerald-300 font-bold text-xs tracking-wide'>Open to work</p>
            </div>
            
            <p className='text-gray-500 dark:text-slate-300 text-xs font-medium'>Remote</p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Main