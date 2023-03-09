import React from 'react';
// import Image from '../assets/avatar.svg'
import Img from '../assets/hero/final.png'
import {FaGithub, FaLinkedin, } from 'react-icons/fa'
import {GoMail} from 'react-icons/go'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Link } from 'react-scroll'

const Banner = () => {
  const onButtonClick = () => {
    fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
  }

  return (
  <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className="container mx-auto">
      <div className=' flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className=' text-[55px] font-bold leading-[0.8] lg:text-[100px]'>ABHIJIT <span>DEB</span></motion.h1>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4 text-white'>I am a </span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Engineer',
              2000,
            ]}
            speed = {50} className=' text-accent' wrapper = 'span' repeat = {Infinity}
            />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>Hi, I'm an engineer passionate about developing apps and stuffs that lives over the internet impacting millions.  </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className=' flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to="contact" smooth duration={500}>
                <button className='btn btn-lg'>Contact Me</button>
              </Link>
              <button target="blank" onClick={onButtonClick} className=' text-gradient btn-link'>My Portfolio</button>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className=' flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href="https://www.linkedin.com/in/abhijit-deb/" target='blank'>
                  <FaLinkedin/>
                </a>
                <a href="https://github.com/imabhideb" target='blank'>
                  <FaGithub/>
                </a>
                <a href="mailto:imabhijitdeb@gmail.com" target='blank' className='text-[25px] mt-[-2px]'>
                  <GoMail/>
                </a>
            </motion.div>
        </div>
        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 mt-[30px] max-w-[320px] lg:max-w-[480px]'>
          <img src={Img} className=" rounded-[60px] w-[430px]" alt="" />
        </motion.div>
      </div>
    </div>
  </section>);
};

export default Banner;
