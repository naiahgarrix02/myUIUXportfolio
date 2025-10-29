import React from 'react'

const Card = (props) => {
  return (
    <div className="p-[3px] rounded-[16px] bg-gradient-to-t from-black to-white  w-[429px] h-[259px]">
      <div className="bg-[#303030] rounded-[13px] p-8 h-full w-full">
        <p className="text-[16px] font-[Satoshi] font-light text-white">
          {props.text}
        </p>
        <div className="flex flex-row items-center gap-4">
          
          <div>
            <h1 className="text-[16px] font-regular mt-[12px] text-white">
              {props.name}
            </h1>
            <p className="text-[14px] font-[Satoshi] font-light text-gray-300">
              {props.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
