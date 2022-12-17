import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'
import deb from '../assets/portfolio_img/deb.jpg'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-3xl sm:text-7xl sm:m-1 m-[90px] font-bold text-white'>I'm a python developer and frontend developer.</h2>
                <p className='text-gray-500 py-4 max-w-md text-2xl'>Hi, I'm Abhijit Deb an engineering grad from Bangalore, India. I love coding and developing application using the latest technologies. Basically an intern working as a frontend developer and python application developer.</p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-lg'>
                        Portfolio
                        <span className='group-hover:rotate-90'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={deb} alt="my profile" className='rounded-2xl mx-auto w-full md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home