import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            I'm pursuing B.E from Sri Sairam College of Engineering, Bangalore, India with specialization in Computer Engineering. I am a technology enthusiast and have been learning different programming languages and have handson experience specially in Python. I have done projects in Machine Learning & Artificial Intelligence using TensorFlow, Keras, OpenCV,etc.
            </p>

            <br />

            <p className='text-xl'>
            Besides programming I also have knowledge in database management using MySQL. Currently I'm developing skills for being an excellent frontend developer and have designed few websites using HTML, CSS, Javascript, React and Tailwind. I love to work as a freelancer either as a python developer or a frontend developer.
            </p>
        </div>
    </div>
  )
}

export default About