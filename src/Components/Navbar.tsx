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

      observer.observe(heroSection);
      return () => observer.disconnect();
    }, []);
    
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
    : 'bg-white/80 dark:bg-slate-900/80 shadow-md backdrop-blur-xl';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 w-full px-4 md:px-8 lg:px-14 transition-colors duration-300 ${navbarClass}`}>

      {/* Brand Name */}

      <div className="flex items-baseline -mt-6">
          <h1 className='text-xl font-bold dark:text-slate-300 text-slate-900'>Grajos</h1>
          <span className='text-5xl text-indigo-600 leading-none'>.</span>
      </div>

      {/* Container for NavLinks, Toggle Button  */}
      <div className='flex items-center space-x-7'>

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

        <div className='bg-indigo-800 py-2 px-4 flex items-center justify-center rounded-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition duration-300'>
          <Link to="/contact" className='text-white text-sm  transition duration-300'>
            Hire Me
          </Link>
        </div>

      </div>

      {/* Mobile View (Hamburger Menu) */}
      <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
      </div>

      {/* Dropdown Menu for Mobile View */}
      {isMenuOpen && ( 
        <div className='absolute top-16 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-md shadow-lg p-4 flex flex-col space-y-2 w-48'>
          {NavLinks.map(link => (
            <Link key={link.name} to={link.path} className='text-indigo-900 dark:text-gray-300 py-1 text-sm font-medium hover-underline transition duration-300' onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      )}

    </nav>



      
  )
}

export default Navbar