import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#181819] p-[60px] mt-[80px]'>
      <div className='flex flex-col items-start pb-10'>
        {/* <h1 className='font-general text-[24px] text-right'>CONTACT ME</h1> */}
        <div className='flex flex-col gap-[-200px] greyish  '>
          <a href="mailto:bendametey@gmail.com"><p className='font-[Satoshi] text-[80px] hover:text-white'>email</p></a>
          <a href="https://www.linkedin.com/in/benaiah-nii-abeka-odametey/" target='blank'><p className='font-[Satoshi] text-[80px] hover:text-white'>linkedIn</p></a>
          <a href="https://github.com/naiahgarrix02" target='blank'><p className='font-[Satoshi] text-[80px] hover:text-white'>github</p></a>
        </div>
      
      </div>
      {/* <p className='text-[185px] font-general text-center'>BENAIAH<span className='greyish'>ODAMETEY</span></p> */}
      <hr className='greyish'/>
      <div className='flex flex-row pt-12 justify-between'>
        <p className='text-left greyish '>© 2025. All rights reserved.</p>
        <p className='text-right greyish'>Benaiah Odametey</p>
      </div>
    </div>
  )
}

export default Footer