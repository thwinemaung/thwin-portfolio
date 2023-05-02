import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import TSImg from '../images/typescript-512x512.png'
import PythonImg from '../images/Python.png'
import JSImg from '../images/Javascript-03.png'
import NodeJSImg from '../images/Nodejs-02.png'
import NextJSImg from '../images/nextjs-logo.png'
import ReactJSImg from '../images/Reactjs-01.png'
import FigmaImg from '../images/Figma-04.png'
import TailwindCSS from '../images/Tailwindcss-01.png'
import MySQLImg from '../images/Mysql-02.png'
import PowerAppsImg from '../images/powerapps.png'
import PowerBIImg from '../images/Microsoft-Power-BI-Logo.png'
import PowerAutomateImg from '../images/PowerAutomate.png'
import DHIS2Img from '../images/dhis2.png'
import KoboImg from '../images/kobo.png'
import TableauImg from '../images/tableau_logo.png'

type Props = {
}

export default function Skill({}: Props) {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: 1.2
      }}
      viewport={{
        once: true
      }}
      className='grid grid-cols-4 gap-5'
    >

      <div className='group relative flex cursor-pointer'>
        <Image src={FigmaImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={JSImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
        {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-24 md:w-24 xl:w-28 xl:h-28 rounded-lg z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-100'>100%</p>
          </div>
        </div> */}
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={ReactJSImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={TSImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={TailwindCSS} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={NextJSImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={NodeJSImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={PythonImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={MySQLImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={PowerAppsImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={PowerBIImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={PowerAutomateImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={TableauImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={DHIS2Img} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

      <div className='group relative flex cursor-pointer'>
        <Image src={KoboImg} alt='' className='w-20 h-20 rounded-lg object-cover md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
      </div>

    </motion.div>

  )
}