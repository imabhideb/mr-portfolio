import React from 'react'
import ai_virtual_assistance from '../assets/portfolio_img/ai_virtual_assistance.jpg'
import face_recognition from '../assets/portfolio_img/face_recognition.png'
import brain_tumor from '../assets/portfolio_img/brain_tumor.png'


const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: ai_virtual_assistance,
            work: "AI Virtual Assistance",
            href: "https://github.com/imabhideb/mr-portfolio"
        },
        {
            id: 2,
            src: face_recognition,
            work: "Surveillance System",
            href: "https://github.com/imabhideb/mr-portfolio"
        },
        {
            id: 3,
            src: brain_tumor,
            work: "Brain Tumor Detection",
            href: "https://github.com/imabhideb/mr-portfolio"
        },
    ]
return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-8'>Check out some of my work here !</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0'>
                {portfolio.map(({id, src, work, href}) =>

                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            {/* // eslint-disable-next-line */}
                            <a href={href} target='_blank' rel="noreferrer"><button className='w-full px-6 py-3 m-4 duration-200 hover:scale-105'>{work}</button></a>
                            {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}
                        </div>
                    </div>

                )}
            </div>

        </div>
    </div>
)
}

export default Portfolio