import React from 'react';
// import {BsArrowUpRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import Javascript from '../assets/skills/javascript.png'
import ReactJS from '../assets/skills/react.png'
import Python from '../assets/skills/python.png'
import TailwindCSS from '../assets/skills/tailwind.png'
import Github from '../assets/skills/github.png'
import MySQL from '../assets/skills/mysql.png'
import C from '../assets/skills/C_program.png'
import Java from '../assets/skills/java.png'
import Node from '../assets/skills/node.png'


const techs = [
  {
    id: 1,
    src: HTML,
    title: 'HTML',
    style: 'shadow-orange-500'
  },
  {
    id: 2,
    src: CSS,
    title: 'CSS',
    style: 'shadow-blue-500'
  },
  {
    id: 3,
    src: Javascript,
    title: 'Javascript',
    style: 'shadow-yellow-500'
  },
  {
    id: 4,
    src: ReactJS,
    title: 'React',
    style: 'shadow-blue-600'
  },
  {
    id: 5,
    src: TailwindCSS,
    title: 'Tailwind',
    style: 'shadow-sky-400'
  },
  {
    id: 6,
    src: Node,
    title: 'NodeJS',
    style: 'shadow-blue-500'
  },
  {
    id: 7,
    src: Python,
    title: 'Python',
    style: 'shadow-yellow-600'
  },
  {
    id: 8,
    src: C,
    title: 'C Programming',
    style: 'shadow-blue-500'
  },
  {
    id: 9,
    src: Java,
    title: 'JAVA',
    style: 'shadow-blue-500'
  },
  {
     id: 10,
     src: MySQL,
     title: 'MySQL',
     style: 'shadow-orange-600'
  },
  {
    id: 11,
    src: Github,
    title: 'Github',
    style: 'shadow-gray-400'
  },
]

const Services = () => {
  return (
  <section id='services' className=' section'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* ----------------- */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}} className='flex-1 lg:bg-services md:mt-10 lg:bg-bottom bg-no-repeat mix-blend-lighten  mb-12 lg:mb-0'>
          <h2 className='h2 leading-tight text-accent mb-6'>Skill Set  & <br />  Expertise</h2>
          
          <h3 className=' max-w-[450px] text-[20px] font-medium mb-16'>List of my Tech Stack I developed over years of practice and learning which helped in developing different projects and works.</h3>
          <a href="https://github.com/imabhideb" target='blank'>
            <button className='btn btn-sm'>Check out My Works</button>
          </a>
        </motion.div>
        {/* --------services------ */}

        <motion.div className=' w-[400px] sm:w-[500px] grid grid-cols-2 sm:grid-cols-3 gap-8 text-center my-6 py-8 px-12 sm:px-0'>

          {techs.map(({id, src,title,style}) =>

            <motion.div
            variants={fadeIn('left', 0.5)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            key={id} className={`shadow-md hover:scale-110 py-2 rounded-lg  ${style}`}>
              <img src={src} alt="" className='w-20 mx-auto'/>
              <p className='mt-4'>{title}</p>
            </motion.div>
          )}

        </motion.div>

      </div>
    </div>
  </section>
  );
};

export default Services;
