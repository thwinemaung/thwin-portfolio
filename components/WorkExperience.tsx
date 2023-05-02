import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5
      }}
      className='relative h-screen flex flex-col overflow-hidden text-center max-w-full  md:flex-row px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 text-2xl tracking-[20px] uppercase text-gray-500'>
        Experience
      </h3>
      <motion.div
        initial={{
          x: 200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        viewport={{
          once: true
        }}
        className='flex mt-10 overflow-x-scroll w-full space-x-5 p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
      >
        <ExperienceCard />
        {/* <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard /> */}
      </motion.div>
    </motion.div>
  )
}
// w-full flex space-x-5 overflow-x-scroll p-10 snap-x