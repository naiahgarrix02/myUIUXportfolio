import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const aboutSplit = new SplitText('#about-text', { type: 'lines' });
    
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        markers: false,
      }
    });

    // Animation for the about text lines
    scrollTimeline.from(aboutSplit.lines, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: 'expo.out',
      stagger: 0.02,
    });

    // Animation for the "about." heading
    scrollTimeline.from('#about-heading', {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'expo.out',
    }, '-=0.5');

    // Independent count up animations for each stat
    const statNumbers = [
      { element: '.stat-number-1', target: 3, duration: 1.5 },
      { element: '.stat-number-2', target: 10, duration: 2 },
      { element: '.stat-number-3', target: 5, duration: 1.8 }
    ];

    statNumbers.forEach((stat, index) => {
      scrollTimeline.to(stat.element, {
        innerText: stat.target,
        duration: stat.duration,
        ease: 'power2.out',
        snap: { innerText: 1 },
        modifiers: {
          innerText: function(innerText) {
            return Math.floor(innerText) + "+";
          }
        }
      }, `-=${0.8 - (index * 0.1)}`); // Slight offset but mostly overlapping
    });

    // Animation for the stat descriptions - starts during count-up
    scrollTimeline.from('.stat-desc', {
      opacity: 0,
      y: 30,
      duration: 0.2,
      ease: 'expo.out',
      stagger: 0.1,
    }, '-=1.2');

    return () => {
      aboutSplit.revert();
    };
  }, []);

  return (
    <div className='ml-[60px] mr-[60px] mt-[60px]' id="about-section">
      <div className='flex flex-row justify-between'>
        <p className='text-[48px] font-[Satoshi] font-regular leading-14 mt-9' id="about-text">
          I specialize in creating user interfaces that balance aesthetics and<br />
          usability, sculpting pixel-perfect and functional designs that deliver <br />
          seamless user experiences.
        </p>

        <h1 className='text-[40px] font-regular mt-9 greyish' id="about-heading">about.</h1>
      </div>

      <div className='mt-[90px] flex flex-row gap-50'>
        <div>
            <h1 className='text-[200px] leading-50 tracking-[-15px] stat-number-1'>0+</h1>
            <p className='text-[24px] font-[Satoshi] font-light stat-desc'>years of Experience</p>
        </div>
        
        <div>
            <h1 className='text-[200px] leading-50 tracking-[-15px] stat-number-2'>0+</h1>
            <p className='text-[24px] font-[Satoshi] font-light stat-desc'>projects worked on</p>
        </div>

        <div>
            <h1 className='text-[200px] leading-50 tracking-[-15px] stat-number-3'>0+</h1>
            <p className='text-[24px] font-[Satoshi] font-light stat-desc'>satisfied clients & companies</p>
        </div>
      </div>
    </div>
  )
}

export default About