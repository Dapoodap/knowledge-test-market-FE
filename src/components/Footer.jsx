import logo from '../assets/logo.svg';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';


const Footer = () => {
  return (
    <div className='max-h-fit w-full bg-[#45474B] px-8 py-10 mt-5'>
      <div className='flex flex-wrap items-center justify-center w-full gap-10'>
        <div className="flex flex-col max-w-full gap-4 first_col">
        <div className='flex items-center gap-3'>
        <img src={logo} width={50}/>
        <h1 className='text-2xl font-bold text-white'>MarketStore</h1>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-sm font-semibold text-white'>Join our newsletter to stay up to date on features and releases.</p>
          <form className='flex flex-wrap items-center w-full gap-3 sm:w-fit '>
            <input type="text"className='w-full px-2 py-1 text-xl font-semibold text-black rounded-lg' />
            <button className='px-3 py-2 text-white border border-white rounded-lg'>Subscribe</button>
          </form>
          <p className='w-2/3 text-xs font-light text-white' >By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
        </div>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-20 mt-20 sm:gap-40 second_col sm:mt-0">
          <div className="flex flex-col items-center justify-center gap-5 col1">
            <h3 className='mb-3 text-base font-medium text-white'>About Us</h3>
            <a className='text-sm font-light text-white' href="#">Trending</a>
            <a className='text-sm font-light text-white' href="#">About us</a>
            <a className='text-sm font-light text-white' href="#">Contact</a>
            <a className='text-sm font-light text-white' href="#">Support/Help</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 col1">
            <h3 className='mb-3 text-base font-medium text-white'>Legal</h3>
            <a className='text-sm font-light text-white' href="#">FAQ&apos;s</a>
            <a className='text-sm font-light text-white' href="#">Terms and Condition</a>
            <a className='text-sm font-light text-white' href="#">Support</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 col1">
            <h3 className='mb-3 text-base font-medium text-white'>Follow Us</h3>
            <div className='flex items-center gap-2'>
              <IoLogoInstagram className='text-sm font-light text-white'/>
              <a className='text-sm font-light text-white' href="#">Instagram</a>
            </div>
            <div className='flex items-center gap-2'>
              <IoLogoFacebook className='text-sm font-light text-white'/>
              <a className='text-sm font-light text-white' href="#">Facebook</a>
            </div>
            <div className='flex items-center gap-2'>
              <IoLogoTwitter className='text-sm font-light text-white'/>
              <a className='text-sm font-light text-white' href="#">Twitter</a>
            </div>
            <div className='flex items-center gap-2'>
              <IoLogoLinkedin className='text-sm font-light text-white'/>
              <a className='text-sm font-light text-white' href="#">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer