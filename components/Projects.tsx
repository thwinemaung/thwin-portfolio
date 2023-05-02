import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({ }: Props) {
  // const projects = [1, 2, 3, 4, 5]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {/* {projects.map((project, i) => ( */}
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.div
            initial={{
              y: -200,
              opacity: 0
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1.2
            }}
            viewport={{
              once: true
            }}
          >
            <Image src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" width={300} height={250} alt='' />
          </motion.div>
          
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-2xl md:text-3xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>
                {/* Case Study {i+1} of {projects.length}: */}
                Case Study 1 of 3:
              </span>{" "}
              Netflix Clone
            </h4>
            <p className='text-base md:text-lg text-center md:text-left'>
              Netflix clone web application where the user can log-in/out, search and filter the movies they like.
              <br />
              Tech used: React, Tailwind, Next.js, Prisma, MongoDB, Vercel
            </p>
          </div>
        </div>
        
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.div
            initial={{
              y: -200,
              opacity: 0
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1.2
            }}
            viewport={{
              once: true
            }}
          >
            <Image src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" width={300} height={250} alt='' />
          </motion.div>
          
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-2xl md:text-3xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>
                {/* Case Study {i+1} of {projects.length}: */}
                Case Study 2 of 3:
              </span>{" "}
              Slot Machine
            </h4>
            <p className='text-base md:text-lg text-center md:text-left'>
              Netflix clone web application where the user can log-in/out, search and filter the movies they like.
              <br />
              Tech used: React, Tailwind, Next.js, Prisma, MongoDB, Vercel
            </p>
          </div>
        </div>

      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  )
}