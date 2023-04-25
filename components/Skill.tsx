import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  directionLeft?: boolean
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{
          x: directionLeft ? -150 : 200,
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        className=''
      >
        <Image src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png" alt='' width={96} height={96} className='w-24 h-24 rounded-full border border-gray-500 object-cover md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </motion.div>

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  )
}