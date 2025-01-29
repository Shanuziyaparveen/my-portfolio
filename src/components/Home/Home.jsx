import React from 'react'
import avatarImg from "../../assets/avatar.png"


const Home = () => {
    return (
        <div className='text-black/75 flex w-full justify-between items-start p-10 md:p-20'>
            <div className=' md:w-2/4 md:pt-10'>
                <h1 className='text-3xl md:text-6xl font-poppins flex leading-normal tracking-tighter'>Welcome To LuneLand</h1>
                <p className='text-sm md:text-2xl tracking-tight'>Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Deserunt nam consequatur 
                    libero quo beatae dignissimos.</p>
                    <button className='mt-5 md:md-10 py-2 px-3 text-sm md:text-xl md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105
                    font-semibold rounded-3xl bg-[#05a3ae]'>Contact Me</button>
            </div>
            <div className='flex justify-center items-center'>
                <img className='rounded md:w-2/3' src={avatarImg} alt="" />
            </div>
        </div>
        )
}

export default Home