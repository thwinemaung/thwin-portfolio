import React from 'react'
import Image from 'next/image'
import PSIImg from '../images/psi-logo.png'
import JsImg from '../images/js-logo.png'

type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <Image src={PSIImg} alt='' className='w-32 h-32 rounded-lg xl:w-[200px] xl:h-[200px] object-cover object-center' />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>eHealth Officer</h4>
        <p className='font-bold text-2xl mt-1'>PSI Myanmar</p>
        <div className='flex space-x-2 my-2'>
          <Image src={JsImg} alt='' className='h-10 w-10 rounded-full' />
          <Image src={JsImg} alt='' className='h-10 w-10 rounded-full' />
          <Image src={JsImg} alt='' className='h-10 w-10 rounded-full' />
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}