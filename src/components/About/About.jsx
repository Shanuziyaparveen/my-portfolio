import React from 'react'
import AboutImg from "../../assets/about.png"
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
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend developer</h1>
                                <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Dolorem, molestias omnis. Suscipit 
                                    facilis libero deleniti, possimus placeat molestiae 
                                    excepturi quae non cum illo autem, 
                                    fugiat porro ullam tenetur aperiam! Et.</p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                        <GoArrowRight size={30} className="mt-1"/>
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend developer</h1>
                                <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Dolorem, molestias omnis. Suscipit 
                                    facilis libero deleniti.</p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                        <GoArrowRight size={30} className="mt-1"/>
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database developer</h1>
                                <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Dolorem, molestias omnis. Suscipit 
                                    facilis libero deleniti, possimus placeat molestiae 
                                    excepturi.</p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About