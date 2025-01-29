import React from 'react'
import avatarImg from "../../assets/avatar.png"


const Home = () => {
    return (
        <div className='text-black/75 flex w-full justify-between items-start p-10 md:p-20'>
            <div className=' md:w-2/4 md:pt-10'>
                <h1 className='text-3xl md:text-6xl font-poppins flex leading-normal tracking-tighter'>Hello, I am Shanuziya Parveen</h1>
                <p className='text-sm md:text-2xl tracking-tight'>A highly motivated and results-driven Web Developer with expertise in the MERN stack,
                seeking opportunities as a Full Stack Developer, Frontend Developer, or Backend Developer to utilize my skills in building efficient, scalable, and user-centric applicatio</p>
               
                <br/>
                <a
                    href="mailto:shanuziyacp@gmail.com?subject=Contact%20Request&body=Hello,%20I%20would%20like%20to%20get%20in%20touch."
                    className='mt-5 md:md-10 py-2 px-3 text-sm md:text-xl md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#05a3ae]'
                >
                    Contact Me
                </a>
            </div>
            <div className='flex justify-center items-center'>
                <img className='rounded md:w-2/3' src={avatarImg} alt="" />
            </div>
        </div>
        )
}

export default Home