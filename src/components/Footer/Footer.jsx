import React from 'react'
import { MdEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"


const Footer = () => {
    return (
        <div id='Footer' className='flex justify-around bg-[#05a3ae] text-black/85 p-10 md:p-12 items-center'>
            <div>
                <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
                <h3 className='text-sm md:text-2xl font-normal'>Feel Free To Reach Out</h3>
            </div>
            <ul className='text-sm md:text-xl'>
                <li className='flex gap-1 items-center'>
                    <MdEmail />
                    shanuziyacp@gmail.com
                </li>
                <li className='flex gap-1 items-center'>
                    <CiLinkedin />
                    linkedin.com/username
                </li>
                <li className='flex gap-1 items-center'>
                    <FaGithub />
                    https://github.com/Shanuziyaparveen
                </li>
            </ul>
        </div>
        )
}

export default Footer