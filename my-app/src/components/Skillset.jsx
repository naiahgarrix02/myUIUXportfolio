import React from 'react'

const Skillset = () => {
  return (
    <div className='ml-[60px] mr-[60px] mt-[60px] mb-[109px] flex flex-col justify-between'>
        <h1 className='text-[40px] font-regular mt-9 greyish'>skillset & tools.</h1>

        <div className='flex flex-row justify-between'>
            <h1 className='text-[200px] font-[Satoshi] font-regular leading-[170px] mt-9 tracking-[-15px]'>ui/ux <span className='greyish'>branding</span>
            <br />graphic design</h1>

            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <img src="/images/figma.png" alt="figma" className='inline-block w-[188px] h-[188px] grayscale-100 hover:grayscale-0 transition duration-300 hover:scale-110'/>
                </div>
                <div>
                    <img src="/images/photoshop.png" alt="photoshop" className='inline-block w-[188px] h-[188px] grayscale-100 hover:grayscale-0 transition duration-300 hover:scale-110'/>
                </div>
                <div>
                    <img src="/images/illustrator.png" alt="illustrator" className='inline-block w-[188px] h-[188px] grayscale-100 hover:grayscale-0 transition duration-300 hover:scale-110'/>
                </div>
                <div>
                    <img src="/images/frame.png" alt="frame" className='inline-block'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skillset