import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between p-[60px]'>
        <div>
            <ul className='text-left text-[16px] font-[Satoshi] font-[100]'>
                <li className='active'>home.</li>
                <li>about.</li>
                <li>skillset & tools.</li>
                <li>projects.</li>
                <li>testimonials.</li>
            </ul>
        </div>
        <div>
            <img src="/images/logo.png" alt="logo"/>
        </div>
        <div>
            <button className='border border-white rounded-full h-fit px-12 py-3 text-[16px] font-[Satoshi] font-regular'>contact me.</button>
        </div>
    </div>
  )
}

export default Header