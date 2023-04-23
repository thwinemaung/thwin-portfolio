import React from 'react'
import Image from 'next/image'
import AboutImg from '../images/me.jpg'
import { motion } from 'framer-motion'


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
      className='h-screen flex flex-col relative text-center max-w-7xl md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 text-2xl tracking-[20px] uppercase text-gray-500'>
          About
        </h3>

        <motion.div
          initial={{
            x: -200,
            opacity: 0
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          className='-mb-20 md:mb-0 flex-shrink-0'
        >
          <Image src={AboutImg} alt='' className='w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'/>
        </motion.div>
        {/* className='-mb-20 md:mb-0 w-56 h-56 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]' */}
        <div className='space-y-10 px-0 md:px-14'>
          <h4 className='text-4xl font-semibold'>
            Here is a{" "}
            <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
            background
          </h4>
          <p className='text-base'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quasi aut recusandae! Dolor cumque natus inventore temporibus expedita illum corporis atque quae et quaerat cupiditate nulla, facere labore fuga dolore!
          </p>
        </div>

    </motion.div>
  )
}