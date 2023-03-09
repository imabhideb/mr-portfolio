import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Img1 from '../assets/zegocloud.jpg'
import Img2 from '../assets/bg.jpg'
import Img3 from '../assets/face.jpg'

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work
              </h2>
              <p className=' max-w-sm mb-16  '>
                Check out my most recent works and projects. Click on the project to see it in action along with the github link for reference. 
              </p>
              <a href="https://github.com/imabhideb" target='blank'>
                <button className='btn btn-sm'>View all projects</button>
              </a>
            </div>
            {/* image */}
            <a href="https://github.com/imabhideb/Face-recognition-OpenCV.git" target='blank'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
                {/* pretitle */}
                <div className=' absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className=' text-gradient'>Web App</span> 
                </div>
                {/* title */}
                <div className=' absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className=' text-3xl text-white'>Smart-Connect</span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.2)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'>
            {/* image */}
            <a href="https://github.com/imabhideb/Brain-Tumor-Detection-CNN.git" target='blank'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              {/* pretitle */}
              <div className=' absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className=' text-gradient'>Python - AI / ML </span> 
              </div>
              {/* title */}
              <div className=' absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className=' text-3xl text-white'>Bain Tumor Detection</span>
              </div>
            </div>
            </a>

            <a href="https://github.com/imabhideb/Face-recognition-OpenCV.git" target='blank'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
                {/* pretitle */}
                <div className=' absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className=' text-gradient'>Python - OpenCV</span> 
                </div>
                {/* title */}
                <div className=' absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className=' text-3xl text-white'>Surveillance System</span>
                </div>
              </div>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
