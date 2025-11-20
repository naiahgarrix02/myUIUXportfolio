import React from 'react'
import { projectLinks } from '../../constants/index.js'

const ProjectRow = () => {
  return (
    <div className='mt-12'>
    <a className='cursor-pointer project-item'>
        <div className='font-[Satoshi] divide- divide-white '>
            {projectLinks.map((item) => (
                <div
                    key={item.number}
                    className='relative group flex items-center justify-between py-3 border-t border-white md:hover:bg-white px-4 md:hover:text-black'
                >
                    <div className='flex gap-25 md:gap-50'>
                        <p>{item.number}</p>
                        <p className='w-32'>{item.title}</p>
                    </div>

                    <div className='hidden md:flex gap-25 md:gap-50'>
                        <p>{item.location}</p>
                        <p>{item.role}</p>
                    </div>

                    <img 
                        src={item.image}
                        alt={item.title} 
                        className='w-14 h-14 object-cover' />

                        <div className='absolute top-5 right-20 opacity-0 scale-75 translate-y-5 
                          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
                          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 rotate-5'>
            <img
              src={item.source}
              alt={`${item.title} preview`}
              className='w-[400px] h-auto rounded-lg shadow-2xl border border-white/20'
            />
          </div>
                </div>
            ))}
        </div>
        </a>
    </div>
  )
}

export default ProjectRow