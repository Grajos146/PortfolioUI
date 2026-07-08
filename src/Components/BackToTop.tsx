import { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const bufferFromBottom = 250;

      const nearBottom = scrollTop + viewportHeight >= fullHeight - bufferFromBottom;
      setIsVisible(nearBottom);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{ position: 'fixed' }}
      className={`bottom-6 right-6 z-1000 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-indigo-600 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_14px_36px_rgba(0,0,0,0.3)] ${isVisible ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'}`}
      aria-label="Back to top"
    >
      <BsArrowUp size={24} />
    </button>
  );
};

export default BackToTop
