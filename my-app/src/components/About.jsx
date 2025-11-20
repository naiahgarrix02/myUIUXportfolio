import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const aboutSplit = new SplitText('#about-text', { type: 'lines' });
    
    // Main text animations timeline
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-section',
        start: 'top 90%',
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
      stagger: 0.04,
    });

    // Animation for the "about." heading
    scrollTimeline.from('#about-heading', {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'expo.out',
    }, '-=0.5');

    // Animation for the stat descriptions
    scrollTimeline.from('.stat-desc', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.1,
    }, '-=0.3');

    // Independent count up animations for each stat with their own triggers
    const stats = [
      { selector: '.stat-number-1', value: 2, duration: 1.2 },
      { selector: '.stat-number-2', value: 7, duration: 1.2 },
      { selector: '.stat-number-3', value: 5, duration: 1.2 }
    ];

    stats.forEach((stat) => {
      gsap.to(stat.selector, {
        innerText: stat.value,
        duration: stat.duration,
        ease: 'power2.out',
        snap: { innerText: 1 },
        modifiers: {
          innerText: function(innerText) {
            return Math.floor(innerText) + "+";
          }
        },
        scrollTrigger: {
          trigger: stat.selector,
          start: 'top 100%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        }
      });
    });

    return () => {
      aboutSplit.revert();
    };
  }, []);

  return (
    <div className='ml-5 mr-5 mt-5 md:ml-[60px] md:mr-[60px] md:mt-[60px]' id="about-section">
      <div className='flex flex-col-reverse md:flex-row justify-between'>
        <p className='text-[24px] md:hidden font-[Satoshi] font-regular leading-8 mt-9' id="about-text">
          I specialize in creating user interfaces that balance aesthetics and
          usability, creating<br /> pixel-perfect and functional designs that deliver <br />
          seamless user experiences.
        </p>

        <p className='hidden md:block  md:text-[48px] font-[Satoshi] font-regular  md:leading-14 mt-9' id="about-text">
          I specialize in creating user interfaces that balance aesthetics and<br />
          usability, creating pixel-perfect and functional designs that deliver 
          seamless<br /> user experiences.
        </p>

        <h1 className='text-[20px] md:text-[40px] font-regular mt-9 greyish' id="about-heading">about.</h1>
      </div>

      <div className='mt-7 md:mt-[90px] flex flex-row md:gap-50 gap-[50px]'>
        <div>
            <h1 className='text-[56px] md:text-[200px] md:leading-50 md:tracking-[-15px] stat-number-1'>0+</h1>
            <p className='text-[12px] md:text-[24px] font-[Satoshi] font-light stat-desc'>years of Experience</p>
        </div>
        
        <div>
            <h1 className='text-[56px] md:text-[200px] md:leading-50 md:tracking-[-15px] stat-number-2'>0+</h1>
            <p className='text-[12px] md:text-[24px] font-[Satoshi] font-light stat-desc'>projects worked on</p>
        </div>

        <div>
            <h1 className='text-[56px] md:text-[200px] md:leading-50 md:tracking-[-15px] stat-number-3'>0+</h1>
            <p className='text-[12px] md:text-[24px] font-[Satoshi] font-light stat-desc'>satisfied clients & companies</p>
        </div>
      </div>
    </div>
  )
}

export default About