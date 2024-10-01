import React, { useState, useEffect } from 'react';
import { useSpring, useTrail, animated } from '@react-spring/web'; // Import react-spring
import Company_Logo from '../Assets/Logo_Luytens.png';
import JobGene from '../Assets/Logo.png';

const sections = [
  "CV Headline",
  "Resume",
  "Work Experience",
  "Education Details",
  "Online Presence",
  "Skills",
  "Courses & Certifications",
  "Projects",
  "Awards & Achievements",
  "Personal Details",
  "Languages",
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  
  // Animation for left and right divs
  const leftDivAnim = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 200,
  });
  
  const rightDivAnim = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 200,
  });

  // Trail animation for nav items (each item enters from the top)
  const [trail, api] = useTrail(sections.length, () => ({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  }));

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            setActiveSection(section.toLowerCase().replace(/\s+/g, '-'));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(section);
    }
  };

  return (
    <div>
      {/* First Div with animations */}
      <div className='w-full bg-zinc-50 h-[120px] flex items-start justify-between '>
        <animated.div style={leftDivAnim}>
          <img src={JobGene} alt="" className='w-60' />
        </animated.div>
        <animated.div style={rightDivAnim} className='flex items-center mt-8 flex-col mr-24'>
          <img src={Company_Logo} alt="" className='w-16 ' />
          <h1 className='text-1xl font-semibold'>Powered by LTS</h1>
        </animated.div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 flex overflow-x-auto whitespace-nowrap bg-white p-2 space-x-4 border-b border-white-700 custom-scrollbar z-10">
        {trail.map((style, index) => (
          <animated.button
            key={sections[index]}
            style={style} // Apply trail animation to each nav button
            className={`text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-200 ${
              activeSection === sections[index].toLowerCase().replace(/\s+/g, '-') ? 'bg-blue-700' : ''
            }`}
            onClick={() => handleClick(sections[index].toLowerCase().replace(/\s+/g, '-'))}
          >
            {sections[index]}
          </animated.button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
