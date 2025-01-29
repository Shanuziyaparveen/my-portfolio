import React from 'react'
import ProjectCard from './ProjectCard'
import Food from "../../assets/Food.png"
import Fruit from "../../assets/Fruit.png"
import Coffee from "../../assets/Coffee.png"



const Project = () => {
    return (
        <div id='Projects' className='p-10 md:p-24 text-black/75'>
            <h1 className='text-2xl md:text-4xl text-black font-bold'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                <div className='py-12 px-8 flex flex-wrap gap-5'>
                    <ProjectCard 
                    image={Food}
                    title="Fooddie Poodie"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nam consequatur libero quo beatae dignissimos."
                    />
                </div>
                <div className='py-12 px-8 flex flex-wrap gap-5'>
                    <ProjectCard 
                    image={Fruit}
                    title="Fruit Pruit"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nam consequatur libero quo beatae dignissimos."
                    />
                </div>
                <div className='py-12 px-8 flex flex-wrap gap-5'>
                    <ProjectCard 
                    image={Coffee}
                    title="Coffee Moffee"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nam consequatur libero quo beatae dignissimos."
                    />
                </div>
            </div>
        </div>
    )
}

export default Project