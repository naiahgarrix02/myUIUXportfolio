import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between md:p-[60px] p-5'>
        {/* <div>
            <ul className='text-left text-[16px] font-[Satoshi] font-thin'>
                <li className='active'>home.</li>
                <li>about.</li>
                <li>skillset & tools.</li>
                <li>projects.</li>
                <li>testimonials.</li>
            </ul>
        </div> */}
        <div>
            <img src="/images/logo.png" alt="logo" className='w-[120px] md:w-[187px]'/>
        </div>
        <div>
            <button className='border border-white rounded-full h-fit md:px-6 md:py-3 md:text-[16px] text-[12px] py-2 px-4 font-[Satoshi] font-regular lg:hover:bg-white lg:hover:text-black'>contact me.</button>
        </div>
    </div>
  )
}

export default Header