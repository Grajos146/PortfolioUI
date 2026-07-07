import { useEffect, useState } from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isHeroVisible, setIsHeroVisible] = useState(true);

    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      const isDark = storedTheme ? storedTheme === 'dark' : prefersDark;

      document.documentElement.classList.toggle('dark', isDark);
      setIsDarkMode(isDark);
    }, []);

    useEffect(() => {
      const heroSection = document.querySelector('#hero');
      if (!heroSection) return;

      const observer = new IntersectionObserver(
        ([entry]) => setIsHeroVisible(entry.isIntersecting),
        { rootMargin: '-1px 0px 0px 0px', threshold: 0.1 }
      );

      document.documentElement.classList.toggle('dark', isDarkMode);
      observer.observe(heroSection);
      return () => observer.disconnect();
    }, [isDarkMode]);
    
    const NavLinks = 
    [
        { name: "Home", path:"/"},
        { name: "About", path:"/about"},
        { name: "Projects", path:"/projects"},
        { name: "Contact", path:"/contact"}
    ];

    const toggleMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', newMode);
    }

    
  const navbarClass = isHeroVisible
    ? 'bg-transparent'
    : 'bg-white/80 dark:bg-slate-900/80 shadow-md backdrop-blur-xl border-b border-slate-200/30 dark:border-slate-800/30';

  return (
    <nav className={`animate-fade-in transition-all px-5 md:px-10 lg:px-20 duration-300 ${navbarClass}`}>


      <section className='flex items-center py-4 max-w-7xl mx-auto justify-between'>
             {/* Brand Name */}

      <div className="flex items-baseline -mt-6">
          <h1 className='text-xl font-bold dark:text-slate-300 text-slate-900'>Grajos</h1>
          <span className='text-5xl text-indigo-600 leading-none'>.</span>
      </div>

      {/* Container for NavLinks, Toggle Button  */}
      {/* Replaced fixed space-x-7 with responsive flex gaps (gap-3 sm:gap-7) to optimize mobile real estate */}
      <div className='flex items-center gap-3 sm:gap-7 space-x-0'>

        {/* Navlinks */}

        <div className='max-md:hidden flex items-center space-x-7'>
          {NavLinks.map(link => (
            <Link key={link.name} to={link.path} className='text-indigo-900 dark:text-slate-200 py-1 text-sm font-medium hover-underline transition duration-300'>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Toggle Button */}
        <div>
          <button
            onClick={toggleMode}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700 dark:text-slate-200" />}
          </button>
        </div>

        {/* Added hidden max-md utility target layer block to prevent action button clashes with mobile burger toggles */}
        <div className='max-md:hidden btn-fill-top-down py-2 px-4 flex items-center justify-center rounded-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition duration-300'>
          <Link to="/contact" className='text-white text-sm  transition duration-300'>
            Hire Me
          </Link>
        </div>

      </div>

      {/* Mobile View (Hamburger Menu) */}
      <div className='md:hidden flex items-center z-50'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-900 dark:text-slate-200 focus:outline-hidden">
            {isMenuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
      </div>

      {/* Dropdown Menu for Mobile View */}
      {isMenuOpen && ( 
        // Adjusted absolute positioning coordinates (top-16 right-6) to snap perfectly in place alongside mobile layout safety parameters
        <div className='absolute top-16 right-6 bg-white/95 dark:bg-slate-900/95 border border-slate-200/50 dark:border-slate-800/80 backdrop-blur-md rounded-xl shadow-xl p-4 flex flex-col space-y-3 w-52 animate-fade-in'>
          {NavLinks.map(link => (
            <Link key={link.name} to={link.path} className='text-indigo-900 dark:text-slate-200 py-1.5 px-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition duration-200' onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          
          {/* Mobile fall-through display button link rendering inside hidden toggle viewport panels */}
          <Link to="/contact" className='bg-indigo-800 py-2.5 px-4 text-center rounded-md text-white text-sm font-semibold shadow-xs hover:bg-indigo-700 transition duration-200' onClick={() => setIsMenuOpen(false)}>
            Hire Me
          </Link>
        </div>
      )}
        
      </section>
 

    </nav>
  )
}

export default Navbar;