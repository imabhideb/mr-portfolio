import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium ullam qui nisi ex debitis commodi, praesentium asperiores assumenda pariatur ea rerum eum odio corrupti officia iure cupiditate facere! Dolorem aliquid animi quaerat provident ipsum ratione, nobis enim ipsa nemo ea quidem? Beatae assumenda itaque voluptatum eveniet temporibus aut facere!
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, provident. Libero pariatur fuga quia! Minus ducimus officiis molestiae, assumenda vitae iste, laudantium aliquid quae autem adipisci ipsum atque nisi molestias voluptas nam repudiandae officia odio dignissimos sunt corporis ex! Sunt voluptatem voluptas assumenda? Fugiat deserunt quasi dolorum praesentium sit veniam!
            </p>
        </div>
    </div>
  )
}

export default About