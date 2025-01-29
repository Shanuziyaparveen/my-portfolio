import React from 'react'
import AboutImg from "../../assets/About.png"
import { GoArrowRight } from "react-icons/go"
const About = () => {
    return (
        <div id='#About' className='text-black/75 md:flex overflow-hidden items-center md:flex-wrap md:justify-center
        bg-[#05a3ae] shadow-xl mx-0 bg-opacity-30 rounded-lg p-12'>
            <div>
                <h2 className='text-2xl md:text-4xl font-poppins mb-2'>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                    <img className="md:h-80 rounded" src={AboutImg} alt="About Img" />
                    <ul className='ml-5'>
                        <div className='flex gap-3 py-4'>
                            <GoArrowRight size={30} className="mt-1"/>
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    As a frontend developer, I have a deep understanding of creating responsive, user-friendly interfaces using technologies like React.js, JavaScript, HTML, and CSS. My goal is to deliver engaging experiences for users through intuitive designs.
                                </p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <GoArrowRight size={30} className="mt-1"/>
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    With experience in Node.js and Express.js, I build scalable and secure server-side applications. I ensure efficient handling of data and authentication systems, while integrating with databases like MongoDB and SQL for optimized performance.
                                </p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <GoArrowRight size={30} className="mt-1"/>
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    I specialize in both NoSQL and SQL databases, particularly MongoDB and SQL. My experience ensures efficient data storage, retrieval, and management, focusing on security and optimization for large-scale applications.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default About