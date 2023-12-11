import React from 'react'
import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import '../CSS/Linksection.css'

export const Linksection = () => {
  return (
    <div className='  w-full flex justify-center items-center'>
        <div className='flex sm:gap-[3rem] gap-7 justify-center items-center logo-gap p-6'>
            <a href='https://auth.geeksforgeeks.org/user/goldi_singh'>
            <SiGeeksforgeeks className=' text-sky-300 sm:text-[50px] text-[35px]'/>
            </a>
            <a href='https://www.linkedin.com/in/goldi-singh-422a23230/'>
            <FaLinkedin className=' text-sky-300 sm:text-[50px] text-[35px]'/>
            </a>
            <a href='https://github.com/Goldisingh14'>
            <FaGithub  className=' text-sky-300 sm:text-[50px] text-[35px]'/>
            </a>
            <a href='https://www.hackerrank.com/profile/01goldichaudhary'>
            <SiHackerrank   className=' text-sky-300 sm:text-[50px] text-[35px]'/>
            </a>
            <a href='mailto:01goldichaudhary@gmail.com'>
            <CgMail  className=' text-sky-300 sm:text-[50px] text-[35px]'/>
            </a>

            

        </div>
    </div>
  )
}
