import React from 'react'

const Projects = () => {
  return (
    <div className='mt-[60px] ml-[60px] mr-[60px]'>
      <h1 className='text-[40px] font-regular mt-[36px] greyish text-center pb-[15px]'>featured projects.</h1>
      <p className='font-[Satoshi] text-[18px] font-regular text-center'>Here are a few of my designs, showcasing my abilities and my <br /> 
      approach to User Interface and User Experience Design.</p>

      <div className='mt-[96px] text-[20px]'>
        <div className='flex flex-row justify-between font-[Satoshi] border border-t-2 border-r-0 border-l-0 border-b-0 border-white pt-[10px] items-center pb-[10px]'>
            <div className='flex flex-row gap-80'>
                <p>001</p>
                <p className='w-[134px]'>Ogray's Special</p>
            </div>
            <div className='flex flex-row gap-80'>
                <p>Tema, Ghana</p>
                <p>Lead Designer</p>
            </div>
            <div>
                <img src="/images/arrowsl.png" alt="link1" className='w-[58px] h-[58px]' />
             </div>
        </div>

        <div className='flex flex-row justify-between font-[Satoshi] border border-t-2 border-r-0 border-l-0 border-b-0 border-white pt-[10px] items-center pb-[10px]'>
            <div className='flex flex-row gap-80'>
                <p>002</p>
                <p className='w-[134px]'>Paybee App</p>
            </div>
            <div className='flex flex-row gap-80'>
                <p>Accra, Ghana</p>
                <p>Lead Designer</p>
            </div>
            <div>
                <img src="/images/arrowsl.png" alt="link1" className='w-[58px] h-[58px]' />
             </div>
        </div>

        <div className='flex flex-row justify-between font-[Satoshi] border border-t-2 border-r-0 border-l-0 border-b-0 border-white pt-[10px] items-center pb-[10px]'>
            <div className='flex flex-row gap-80'>
                <p>003</p>
                <p className='w-[134px]'>I&V Electricals</p>
            </div>
            <div className='flex flex-row gap-80'>
                <p>Tema, Ghana</p>
                <p>Lead Designer</p>
            </div>
            <div>
                <img src="/images/arrowsl.png" alt="link1" className='w-[58px] h-[58px]' />
             </div>
        </div>

        <div className='flex flex-row justify-between font-[Satoshi] border border-t-2 border-r-0 border-l-0 border-b-0 border-white pt-[10px] items-center pb-[10px]'>
            <div className='flex flex-row gap-80'>
                <p>004</p>
                <p className='w-[134px]'>AB Pastries</p>
            </div>
            <div className='flex flex-row gap-80'>
                <p>Accra, Ghana</p>
                <p>Lead Designer</p>
            </div>
            <div>
                <img src="/images/arrowsl.png" alt="link1" className='w-[58px] h-[58px]' />
             </div>
        </div>
      </div>
    </div>
  )
}

export default Projects