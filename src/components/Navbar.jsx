import {Home,Projects,Contact,AboutMe} from "../routes/Page"
import {useState, useEffect, useRef} from "react";

function Navbar(){
  const home=useRef(null);
  const projects=useRef(null);
  const contact=useRef(null); 
  const aboutMe=useRef(null);

  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    home,
    projects,
    contact,
    aboutMe
  };

  const scrollToSection=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop-40,
      behavior:"smooth",
      
    })
  }
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust threshold as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return(
  
  <>
          <div className="relative z-10">
            <div className="fixed h-[40px] pl-4 pr-4 top-0 left-0 right-0 flex justify-between md:justify-around bg-black">
            <button onClick={()=>scrollToSection(home)} 
            className={`relative ${
              activeSection === 'home' ? 'text-purple-500' : ''
            } hover:text-purple-500 `}>Home
              {activeSection === 'home' && (
              <div className="absolute left-1/2 transform-translate-x-1/2 bottom-0 w-1/2 h-0.5 bg-purple-500 transition-all duration-300"></div>
            )}</button>
            <button onClick={()=>scrollToSection(aboutMe)}
            className={`relative ${
              activeSection === 'aboutMe' ? 'text-purple-500' : ''
            } hover:text-purple-500 `}>About
              {activeSection === 'aboutMe' && (
              <div className="absolute left-1/2 transform-translate-x-1/2 bottom-0 w-1/2 h-0.5 bg-purple-500 transition-all duration-300"></div>
            )}</button>
            <button onClick={()=>scrollToSection(projects)} 
            className={`relative ${
              activeSection === 'projects' ? 'text-purple-500' : ''
            } hover:text-purple-500 `}>Projects
              {activeSection === 'projects' && (
              <div className="absolute left-1/2 transform-translate-x-1/2 bottom-0 w-1/2 h-0.5 bg-purple-500 transition-all duration-300"></div>
            )}</button>
            <button onClick={()=>scrollToSection(contact)} 
            className={`relative ${
                activeSection === 'contact' ? 'text-purple-500' : ''
              } hover:text-purple-500 `}>Contact Me
                {activeSection === 'contact' && (
              <div className="absolute left-1/2 transform-translate-x-1/2 bottom-0 w-1/2 h-0.5 bg-purple-500 transition-all duration-300"></div>
            )}</button>
            </div>
          </div>
          <div ref={home} id="home" className="home">
            <Home ref={home} />
          </div>
          <div ref={aboutMe} id="aboutMe" className="aboutMe">
             <AboutMe ref={aboutMe} />
          </div>
          <div ref={projects} id="projects" className="projects">
            <Projects ref={projects} />        
          </div>
          <div ref={contact} id="contact" className="contact">
            <Contact ref={contact} />
          </div>
  </>
    )
}

export default Navbar;