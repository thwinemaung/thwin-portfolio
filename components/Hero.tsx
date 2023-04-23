import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'
import ProfileImg from '../images/me_img.jpeg'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Thwin",
      "I build things for the web",
      "<HelloWorld />"
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <Image src={ProfileImg} height={144} width={144} alt='' className='relative rounded-full h-36 w-36 mx-auto object-cover' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[15px] pb-2'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-1'>{text}</span>
          <Cursor cursorColor='#F7AB0A'/> 
        </h1>
      
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}