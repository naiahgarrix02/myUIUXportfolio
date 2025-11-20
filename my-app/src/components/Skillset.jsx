import React, { useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Skillset = () => {
  useGSAP(() => {
    // Animate text when in view
    const skillsetSplit = new SplitText('#skillset-text', { type: 'words' });
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#skillset-section',
        start: 'top center'
      }
    });

    scrollTimeline.from(skillsetSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: 'expo.out',
      stagger: 0.02,
      delay: 0.2
    });
  }, []);

  useEffect(() => {
    // Floating animation for icons
    const icons = gsap.utils.toArray('.floating-icon');

    icons.forEach((icon, i) => {
      gsap.to(icon, {
        y: gsap.utils.random(-15, 15), // vertical range
        x: gsap.utils.random(-10, 10), // slight horizontal drift
        duration: gsap.utils.random(3, 5), // random speed for natural feel
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.3 // staggered start for smooth motion
      });
    });
  }, []);

  return (
    <div
      className='ml-5 mr-5 mt-15 mb-12 md:ml-[60px] md:mr-[60px] md:mt-[60px] md:mb-[109px] flex flex-col justify-between'
      id='skillset-section'
    >
      <h1 className='text-[20px] md:text-[40px] font-regular mt-9 greyish'>
        skillset & tools.
      </h1>

      <div className='flex flex-col md:flex-row justify-between'>
        <h1
          id='skillset-text'
          className='text-[60px] md:text-[200px] font-[Satoshi] font-regular tracking-[-3px] leading-14 md:leading-[170px] mt-9 md:tracking-[-15px]'
        >
          ui/ux <span className='greyish'>branding</span>
          <br />
          graphic design
        </h1>

        <div className='grid grid-cols-2 gap-3 md:gap-6'>
          <div>
            <img
              src='/images/figma.png'
              alt='figma'
              className='floating-icon inline-block w-[86px] h-[86px] md:w-[188px] md:h-[188px] lg:grayscale-100 lg:hover:grayscale-0 transition duration-300 md:hover:scale-110 md:hover:rotate-3'
            />
          </div>
          <div>
            <img
              src='/images/photoshop.png'
              alt='photoshop'
              className='floating-icon inline-block w-[86px] h-[86px] md:w-[188px] md:h-[188px] lg:grayscale-100 lg:hover:grayscale-0 transition duration-300 md:hover:scale-110 md:hover:rotate-3'
            />
          </div>
          <div>
            <img
              src='/images/illustrator.png'
              alt='illustrator'
              className='floating-icon inline-block w-[86px] h-[86px] md:w-[188px] md:h-[188px] lg:grayscale-100 lg:hover:grayscale-0 transition duration-300 md:hover:scale-110 md:hover:rotate-3'
            />
          </div>
          <div>
            <img
              src='/images/frame.png'
              alt='frame'
              className='floating-icon inline-block w-[86px] h-[86px] md:w-[188px] md:h-[188px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
