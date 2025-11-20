import React from 'react';
import ProjectRow from './ProjectRow';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    // Split text AFTER DOM is available
    const projectSplit = new SplitText('#projects-text', { type: 'lines' });

    // Main timeline triggered when section enters viewport
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects-section',
        start: 'top 80%', // starts a bit earlier for smoothness
      },
    });

    // Animate text lines
    scrollTimeline.from(projectSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.1,
    });

    // Fade in project row after text
    scrollTimeline.from(
      '.project-row',
      {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
      },
      '-=0.5' // overlap timing slightly
    );
  }, []);

  return (
    <div id="projects-section" className="mt-5 ml-5 mr-5 md:mt-[60px] md:ml-[60px] md:mr-[60px]">
      <h1 className="text-[20px] md:text-[40px] font-regular mt-9 greyish text-center pb-[15px]">
        featured projects.
      </h1>

      <p
        id="projects-text"
        className="font-[Satoshi] text-[14px] md:text-[18px] font-regular text-center"
      >
        Here are a few of my designs, showcasing <br />my abilities and my 
        approach to User Interface and User Experience Design.
      </p>

      {/* Add project-row class for GSAP targeting */}
      <div className="project-row mt-[50px]">
        <ProjectRow />
      </div>
    </div>
  );
};

export default Projects;
