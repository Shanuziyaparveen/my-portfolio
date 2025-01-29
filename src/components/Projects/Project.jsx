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
                        title="Real-Time Chat Application"
                        description="Developed a fully functional real-time chat application with instant messaging and user-friendly features. Implemented Socket.IO for real-time communication, JWT-based authentication for secure messaging, and designed a responsive front-end using React.js. The back-end was managed with Node.js, offering a seamless experience with features like read receipts, typing indicators, and real-time updates."
                        demoLink=""
                        sourceCodeLink="https://github.com/Shanuziyaparveen/"
                    />
                </div>
                <div className='py-12 px-8 flex flex-wrap gap-5'>
                    <ProjectCard 
                        image={Fruit}
                        title="Boots Footwears"
                        description="Designed and developed a complete e-commerce website with user and admin functionalities using MongoDB, EJS, Node.js, and Express.js. Integrated Razorpay for payment processing, hosted the website on AWS, and configured Nginx for efficient hosting and load balancing. Aimed at providing a seamless shopping experience with secure payment options and fast performance."
                        demoLink="https://bootsonline.xyz"
                        sourceCodeLink="https://github.com/Shanuziyaparveen/ecommerce-website"
                    />
                </div>
                <div className='py-12 px-8 flex flex-wrap gap-5'>
                    <ProjectCard 
                        image={Coffee}
                        title="SnapGrid - Pinterest Clone"
                        description="Created a Pinterest-like website using MongoDB, Node.js, Express.js, and EJS. The platform allows users to upload and browse image collections with filters and pagination, offering a smooth experience for browsing and organizing images. The website features a user-friendly interface, image upload functionality, and effective filtering for easy browsing."
                        demoLink=""
                        sourceCodeLink="https://github.com/Shanuziyaparveen/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;
