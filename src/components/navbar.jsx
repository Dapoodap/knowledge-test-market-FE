import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SignOutHandler } from '../redux/actions/userAction';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  
  


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlerSignout = () =>{
    dispatch(SignOutHandler())
    nav('/')
  }
  return (
    <div className='flex flex-wrap items-center justify-between w-full px-5 py-4 md:flex-nowrap sm:px-8 '>
      <div className='flex items-center gap-3'>
      <img loading='lazy' src={logo} width={50} />
      <h1 className='text-3xl font-bold text-[#45474B] sm:block'>MarketStore</h1>
      </div>

       {/* Hamburger Menu */}
       <div className='md:hidden'>
        {isOpen ? (
          <IoClose className='text-3xl' onClick={toggleMenu} />
        ) : (
          <HiMenu className='text-3xl' onClick={toggleMenu} />
        )}
      </div>

      {/* Navbar Links */}
      <div className={`md:flex items-center gap-3 sm:w-fit w-full ${isOpen ? 'flex flex-col mt-3' : 'hidden'}`}>
        <Link hre className='px-3 py-1 text-lg font-semibold  hover:border-b-2 hover:border-[#45474B]' href='/'>
          Home
        </Link>
        <Link className='px-3 py-1 text-lg font-semibold hover:border-b-2 hover:border-[#45474B]' href='/blog/1'>
          Popular
        </Link>
        <Link className='px-3 py-1 text-lg font-semibold hover:border-b-2 hover:border-[#45474B]' href='#'>
          Trending
        </Link>
        <Link className='px-3 py-1 text-lg font-semibold hover:border-b-2 hover:border-[#45474B]' href='#'>
          About Us
        </Link>
        
      </div>
      {sessionStorage.getItem('token')?<div className={`md:flex items-center gap-3 sm:w-fit w-full ${isOpen ? 'flex flex-col mt-3' : 'hidden'}`}>
        <button className='px-6 py-2 text-lg border border-black rounded-lg hover:shadow-custom-shadow hover:border-none' onClick={()=>{nav('/dashboard')}}>Dashboard</button>
        <button className='px-6 py-2 text-lg border border-black rounded-lg hover:shadow-custom-shadow hover:border-none' onClick={handlerSignout}>SignOut</button>
      </div>:<div className={`md:flex items-center gap-3 sm:w-fit w-full ${isOpen ? 'flex flex-col mt-3' : 'hidden'}`}>
        <button className='px-6 py-2 text-lg border border-black rounded-lg hover:shadow-custom-shadow hover:border-none' onClick={()=>{nav('/login')}}>Login</button>
        <button className='px-6 py-2 text-lg text-white bg-[#45474B] border border-black rounded-lg hover:shadow-custom-shadow' onClick={()=>{nav('/signup')}}>Sign Up</button>
      </div>}
     
    </div>
  );
}