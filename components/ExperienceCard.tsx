import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <div className='flex'>
      <div className='flex w-screen items-center justify-center'>
        <div className='flex flex-col rounded-lg items-center justify-center space-y-7 w-[500px] md:w-[650px] xl:w-[900px]  flex-shrink-0 snap-center p-10 bg-[#64ffda]/10 hover:opacity-80 opacity-30 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>eHealth Officer</h4>
            <p className='text-[#64ffda] font-semibold text-2xl mt-1'>PSI Myanmar</p>

            <p className='uppercase py-5 text-gray-300'>AUG 2020 - DEC 2022</p>
            <ul className='list-disc space-y-4 ml-5 text-left text-sm md:text-base'>
              <li>
                Designed, developed, and maintained Microsoft Power Apps to assist operation activities such as Attendance Management System and Performance Evaluation System, together with SharePoint Lists or Online Excel as databases, and Power Automate for automating email notification and other scheduling tasks
              </li>
              <li>
                Analyzed and cleaned data sets in Power Query to create data visualization with Power BI
              </li>
              <li>
                Developed chatbots using Pipe Chatbots platform which aim to provide information and self assessment for user&#39;s health concerns
              </li>
              <li>
                Participated in attending DHIS2 courses conducted by the DHIS2 academy and generated weekly and monthly DHIS2 reports to communicate key findings to operation team
              </li>
              <li>
                Explored and learned UI/UX, Python and basic knowledge of Django which are important in implementing potential new projects
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex w-screen items-center justify-center'>
        <div className='flex flex-col rounded-lg items-center justify-center space-y-7 w-[500px] md:w-[650px] xl:w-[900px]  flex-shrink-0 snap-center p-10 bg-[#64ffda]/10 hover:opacity-80 opacity-30 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>Product Engineer</h4>
            <p className='text-[#64ffda] font-semibold text-2xl mt-1'>Myanmar ShweTech Co., Ltd.</p>

            <p className='uppercase py-5 text-gray-300'>AUG 2019 - AUG 2020</p>
            <ul className='list-disc space-y-4 ml-5 text-left text-sm md:text-base'>
              <li>
                Involved in project kick-off meetings to establish a common understanding of the project&#39;s goals, objectives, scope, and expectations, as well as to outline the project plan, timeline, and deliverables
              </li>
              <li>
                Conducted thorough needs analysis and requirements gathering sessions with clients to identify business requirements and develop customized ERP & HRMS solutions
              </li>
              <li>
                Successfully implemented HRMS solutions for multiple organizations, including a nationwide corporation with over 1,000 employees, resulting in increased efficiency and accuracy of HR processes
              </li>
              <li>
                Analyzed client&#39;s requirements and operation flow to implement ERP systems such as Purchasing, Finance, Inventory Management, and etc.
              </li>
              <li>
                Conducted user training and provided ongoing support to ensure successful adoption of ERP & HRMS solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex w-screen items-center justify-center'>
        <div className='flex flex-col rounded-lg items-center justify-center space-y-7 w-[500px] md:w-[650px] xl:w-[900px]  flex-shrink-0 snap-center p-10 bg-[#64ffda]/10 hover:opacity-80 opacity-30 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>Web Developer Intern</h4>
            <p className='text-[#64ffda] font-semibold text-2xl mt-1'>ICT Star Group Myanmar Co., Ltd.</p>

            <p className='uppercase py-5 text-gray-300'>MAY 2018 - JUL 2018</p>
            <ul className='list-disc space-y-4 ml-5 text-left text-sm md:text-base'>
              <li>
                Participated in a research project of a GPS device system and retrieving location data
              </li>
              <li>
                Contributed in developing a job searching web application which aim to provide a bridge between employers and people looking for opportunities
              </li>
              <li>
                Collaborated with a team of developers to implement new features and enhancements to ensure quality and reliability of the application
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}