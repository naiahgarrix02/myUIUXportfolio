import React from 'react'
import Header from './Header'

const Hero = () => {
  return (
    <div className='h-[100vh]'>
        <Header />
        <div className='flex flex-row  ml-[60px]'>
            <div>
                <div>
                    <h1 className='text-[250px] font-regular leading-[220px] mt-[36px]'>
                    UI|<span className='greyish'>UX</span><br />DESIGNER.
                    </h1>
                    <p className='ml-[12px] pt-[28px] font-[Satoshi] font-light'>Designing with intention, for usability, clarity, and impact. Creating<br />
                    digital experiences that feel effortless and meaningful.</p>
                </div>
                    
            </div>
      
            {/* <div className='absolute right-0 bottom-0 mr-[30px] w-[610px] h-[869px] overflow-hidden'>
                   <img src="/images/heroimg.png" alt="hero" className='object-contain z-99 scale-0.8 w-full h-full' /> 
                   <div className='absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-b from-transparent to-black' />
            </div> */}
        </div>
        <div className='pt-12 ml-[12px] font-[Satoshi] text-center'>
                    <p>scroll down</p>
                </div>
    </div>
  )
}

export default Hero