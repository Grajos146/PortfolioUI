import './App.css'
import BackToTop from './Components/BackToTop';
import About from './Sections/About'
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';
import Header from './Sections/Header'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects';

function App() {
  
  const observeAnimatedElements = () => {
  const elements = document.querySelectorAll<HTMLElement>(
    '.animate-fade-in, .animate-fade-up, .animate-fade-down, .animate-fade-left, .animate-fade-right'
  );

  if (!('IntersectionObserver' in window) || elements.length === 0) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => observer.observe(element));
};

window.requestAnimationFrame(observeAnimatedElements);

  return (
    
    <>
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
      <BackToTop />
    </>
  )
  
}

export default App
