import React from 'react'

const ProjectCard = ({ title , description , image }) => {
    return (
        <div className='max-w-sm overflow-hidden bg-bgColor shadow-xl shadow-slate-800 rounded'>
            {
                image && (
                    <img 
                    className='w-full h-42 object-cover rounded'
                    src={image}
                    alt={title}
                    />
                )
            }
            <div className='px-6 py-4 mt-2'>
                <h3 className='px-4 text-xl md:text-2xl font-semibold leading-normal'>{title}</h3>
                <p className='px-4 text-sm leading-tight py-2'>{description}</p>
            </div>
            <div className='p-2 md:p-4 flex gap-2 md:gap-4'>
                <button className='md:mt-8 text-black/85 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#05a3ae]'>Demo</button>
                <button className='md:mt-8 text-black/85 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#05a3ae]'>Source Code</button>
            </div>
        </div>
        )
}

export default ProjectCard