import React from 'react'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='flex relative flex-col text-center min-h-screen justify-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 items-center xl:space-y-0 mx-auto'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#ccd6f6] text-2xl'>
        Skills
      </h3>

      {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current profieciency
      </h3> */}

      <div className='mt-10'>
        <Skill />
        {/* <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill /> */}
      </div>
    </div>
  )
}