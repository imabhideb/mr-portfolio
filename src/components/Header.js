import React from 'react';
import {Link} from 'react-scroll'

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <div className='text-2xl'>
          <h1 className='text-gradient font-primary font-bold'>TECH</h1>
          <h1 className='font-tertiary font-medium'>CODIAC</h1>
        </div>
        <Link to="work" smooth duration={500}>
          <button className='btn btn-sm'>Work with me</button>
        </Link>
      </div>
    </div>
  </header>;
};

export default Header;