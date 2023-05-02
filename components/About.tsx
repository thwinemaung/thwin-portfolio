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
      className='h-screen flex flex-col relative text-center max-w-7xl md:text-left md:flex-row px-5 justify-evenly mx-auto items-center'
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
          className='-mb-32 md:mb-0 flex-shrink-0'
        >
          <Image src={AboutImg} alt='' className='w-36 h-36 rounded-full object-cover md:rounded-lg md:w-56 md:h-72 xl:w-[300px] xl:h-[400px]'/>
        </motion.div>
        {/* className='-mb-20 md:mb-0 w-56 h-56 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]' */}
        <div className='-mb-16 px-0 md:px-14 md:mb-0 xl:mb-0'>
          <h4 className='mb-10 text-4xl font-semibold'>
            Here is a{" "}
            <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
            background
          </h4>
          <p className='text-base text-left'>
            Hello! My name is Thwin and I enjoy creating things that live on the internet. I am a passionate individual with a keen interest in web development and data analysis. My interest in these fields began during my academic studies and professional journey. Since then, I have gained my skills through various projects and professional experiences.

            Throughout my professional career, my work primarily focused on data analysis and visualization. However, at the same time, I have been doing projects and case studies on web development {"(and occasionally designing)"}.
            <br/>
            Here are a few technologies I{"'"}ve been working with recently:
            <br/>
          </p>
          <div className='flex ml-10 space-x-20'>
            {/* flex list-disc ml-10 space-x-10 */}
            <ul className='list-disc'>
              <li>Power BI</li>
              <li>Power Apps</li>
            </ul>
            <ul className='list-disc'>
              <li>React.js</li>
              <li>Next.js</li>
            </ul>
            <ul className='list-disc'>
              <li>SQL</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>

    </motion.div>
  )
}