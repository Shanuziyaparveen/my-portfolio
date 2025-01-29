import React from 'react'
import { FaCss3 ,FaFigma , FaHtml5 , FaJs , FaReact } from "react-icons/fa"

import { SiMongodb } from 'react-icons/si'


const Experience = () => {
    return (
        <div id='Experience' className='bg-[#05a3ae] p-10 md:p-24'>
            <h1 className='text-2xl md:text-4xl font-bold'>Experience</h1>
            <div className='flex flex-wrap items-center justify-around'>
                <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                    <span className='p-3 bg-bgColor bg-opacity-65 flex items-center rounded-2xl'>
                        <FaHtml5 color="#E34F26" size={50} />
                    </span>
                    <span className='p-3 bg-bgColor bg-opacity-65 flex items-center rounded-2xl'>
                        <FaCss3 color="#1572b6" size={50} />
                    </span>
                    <span className='p-3 bg-bgColor bg-opacity-65 flex items-center rounded-2xl'>
                        <FaReact color="#61DAFB" size={50} />
                    </span>
                    <span className='p-3 bg-bgColor bg-opacity-65 flex items-center rounded-2xl'>
                        <FaJs color="#61DF1E" size={50} />
                    </span>
                    <span className='p-3 bg-bgColor bg-opacity-65 flex items-center rounded-2xl'>
                        <FaFigma color="#F24E1E" size={50} />
                    </span>
                    <span className='p-3 bg-bgColor bg-opacity-65 flex items-center rounded-2xl'>
                        <SiMongodb color="#47A248" size={50} />
                    </span>
                </div>
                <div>
                    <div className='flex gap-10 bg-bgColor bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                        <span className='text-black/75'>
                            <h2 className='leading-tight'>Full-Stack Web Development Bootcamp, Brototype</h2>
                            <p className='text-sm leading-tight font-thin'>2024 - Present</p>
                            <ul className='text-sm p-2'>
                                <li>Gained hands-on experience in MERN stack development</li>
                                <li>Built scalable web applications with CRUD operations</li>
                                <li>Worked on authentication systems, deployment, and version control with Git</li>
                            </ul>
                        </span>
                    </div>
                    <div className='flex gap-10 bg-bgColor bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                        <span className='text-black/75'>
                            <h2 className='leading-tight'>Self-Learning (JavaScript, MERN Stack)</h2>
                            <p className='text-sm leading-tight font-thin'>2023 - Present</p>
                            <ul className='text-sm p-2'>
                                <li>Independently learning JavaScript, Node.js, Express.js, MongoDB, React.js</li>
                                <li>Building personal projects to apply theoretical knowledge</li>
                                <li>Learning and implementing version control using Git and GitHub</li>
                                <li>Exploring best practices in coding, problem-solving, and web development</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience