import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Tea from '../assets/hero/final21.png'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
  <section id='about' className=' section' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div
         variants={fadeIn('right', 0.3)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
         className='flex-1  bg-contain bg-no-repeat mb-2 mix-blend-lighten bg-top'>
          <img src={Tea} className=" rounded-[80px]" alt="" />
         </motion.div>
        <motion.div
         variants={fadeIn('left', 0.5)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
         className='flex-1 mb-6'>
          <h2 className='h2 text-accent'>ABout me.</h2>
          <h3 className='h4 font-bold sm:h3 sm:mb-4 '>
            I'm an engineering grad with specialization in Computer Science and Engineering. 
          </h3>
          <p className='mb-3 sm:mb-8'>
          I love buildings apps and softwares that impacts the lives of millions. Passionate about learning new tech and constantly upgrading my skills.
          </p>
          <p className='mb-6 sm:mb-14 italic font-semibold'>
          "Living with the motive to discover the unknown unknowns of life."
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 sm:mb-12'>
            <div>
              <div className=' text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={10} duration={2} /> : 
                  null}
                  
              </div>
              <div className=' font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
            </div>

            {/* --------------------------- */}
            <div>
              <div className=' text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={50} duration={2} /> : 
                  null}
                  +
              </div>
              <div className=' font-primary text-sm tracking-[2px]'>
                Leetcode <br />
                Problems
              </div>
            </div>

            {/* ---------------------------- */}
            <div>
              <div className=' text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={8} duration={2} /> : 
                  null
                }
                +
              </div>
              <div className=' font-primary text-sm tracking-[2px]'>
                Certifications & <br />
                Achievements
              </div>
            </div>

            {/* ---------------------------- */}
          </div>
          {/* <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact Me</button>
            <a href="#" className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div> */}
        </motion.div>
      </div>
    </div>
  </section>
  )
};

export default About;
 