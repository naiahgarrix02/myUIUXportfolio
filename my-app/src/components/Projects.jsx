import React from 'react'
import ProjectRow from './ProjectRow'

const Projects = () => {
  return (
    <div className='mt-[60px] ml-[60px] mr-[60px]'>
      <h1 className='text-[40px] font-regular mt-[36px] greyish text-center pb-[15px]'>featured projects.</h1>
      <p className='font-[Satoshi] text-[18px] font-regular text-center'>Here are a few of my designs, showcasing my abilities and my <br /> 
      approach to User Interface and User Experience Design.</p>
      <ProjectRow />
    </div>
  )
}

export default Projects