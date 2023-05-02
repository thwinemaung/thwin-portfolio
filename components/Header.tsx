import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex sticky p-5 top-0 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
          className='flex flex-row items-center'
        >
            <SocialIcon url='https://www.linkedin.com/in/thwinemaung/' style={{ height: 40, width: 40 }} className='cursor-pointer' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://github.com/thwinemaung' style={{ height: 40, width: 40 }} className='cursor-pointer' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.facebook.com/thwinemaung' style={{ height: 40, width: 40 }} className='cursor-pointer' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.instagram.com/thwinemaung/' style={{ height: 40, width: 40 }} className='cursor-pointer' fgColor='gray' bgColor='transparent' />
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
          className='flex flex-row items-center text-gray-300 cursor-pointer'
        >
          
          <SocialIcon url='#contact' style={{ height: 45, width: 45 }} className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
          <Link href="#contact">
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
          </Link>
        </motion.div>
    </header>
  )
}