import React from 'react'

const About = () => {
  return (
    <div className='ml-[60px] mr-[60px] mt-[60px]'>
      <div className='flex flex-row justify-between'>
        <p className='text-[48px] font-[Satoshi] font-regular leading-[56px] mt-[36px]'>I specialize in creating user interfaces that balance aesthetics and<br />
        usability, sculpting pixel-perfect and functional designs that deliver <br />
        seamless user experiences.</p>

        <h1 className='text-[40px] font-regular mt-[36px] greyish'>about.</h1>
      </div>

      <div className='mt-[90px] flex flex-row gap-50'>
        <div>
            <h1 className='text-[200px] leading-50 tracking-[-15px]'>3+</h1>
            <p className='text-[24px] font-[Satoshi] font-light'>years of Experience</p>
        </div>
        
        <div>
            <h1 className='text-[200px] leading-50 tracking-[-15px]'>10+</h1>
            <p className='text-[24px] font-[Satoshi] font-light'>projects worked on</p>
        </div>

        
        <div>
            <h1 className='text-[200px] leading-50 tracking-[-15px]'>5+</h1>
            <p className='text-[24px] font-[Satoshi] font-light'>satisfied clients & companies</p>
        </div>
      </div>
    </div>
  )
}

export default About