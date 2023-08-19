import React,{useState, useEffect} from 'react';
import LogoDark from '../assets/img/logo-dark.svg';
import LogoWhite from '../assets/img/logo-white.svg';
import {BsFillSunFill, BsMoonFill, BsCheck} from 'react-icons/bs';
import GirlImage from '../assets/img/girl.png';

const Hero = () => {
  //theme state
  const [theme,setTheme] = useState('light');

  //local storage 
  useEffect(() => {
    if(localStorage.getItem('theme') === null) {
      localStorage.setItem('theme','light');
    }
  },[]);
  //select html element
  useEffect(() => {
    const html = document.querySelector('html');
  if(localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    setTheme('dark');
  } else {
    html.classList.remove('dark');
    setTheme('light');
  }
  })
  //handle switch
  const handleSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme','dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme','light')
    }
  }

  return (
    <section className={`min-h-[740px] w-full ${theme === 'light' ? 'bg-heroLight' : 'bg-heroDark'} bg-cover bg-center bg-no-repeat overflow-hidden`}>
      <div className='container mx-auto px-4 lg:px-0'>
        {/* header */}
        <header className='flex items-center justify-between py-8'>
          {/* logo */}
          <div>
            <a href='#'>
              { theme === 'light' ? (
                <img src={LogoDark} />
              ) : (
                <img src={LogoWhite} />
              )}
            </a>
          </div>
          {/* button */}
          <button onClick={handleSwitch} className='p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center'>
          {
            theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />
          }
          </button>
        </header>
        {/* text and img wrapper */}
        <div className='flex flex-col items-center lg:flex-row min-h-[740px]'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center items-start'>
              <h1 className={`${theme === 'light' ? 'text-primary' : 'text-white'} font-bold mb-0 text-5xl leading-[60px]`}>
                Online Accounting
              </h1> 
              <span className='text-accent text-5xl font-bold'>Fast & Reliable</span>
            
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-white'} font-light mb-12 max-w-[597px] mt-5`}>We specialize in small businesses. Our goal is to eliminate bureaucracy, creating a morden relationship between  your company and the accountat.</p>
            {/* checked items */}
            <div className='flex flex-col gap-y-6 mb-12'>
              {/* item */}
              <div className='flex items-center gap-x-2'>
                {/* item icon */}
                <div className={`${theme === 'light' ? 'text-accent' : 'text-white'} ${theme === 'light' ? 'bg-accent/10' : 'bg-accent/70'} w-[20px] h-[20px] rounded-full flex justify-center items-center`}>
                  <BsCheck />
                </div>
                {/* item text */}
                <p className={`${theme === 'light' ? 'text-base' : 'text-white'} font-light `}>Have your accounting 100% online.</p>
              </div>
              <div className='flex items-center gap-x-2'>
                {/* item icon */}
                <div className={`${theme === 'light' ? 'text-accent' : 'text-white'} ${theme === 'light' ? 'bg-accent/10' : 'bg-accent/70'} w-[20px] h-[20px] rounded-full flex justify-center items-center`}>
                  <BsCheck />
                </div>
                {/* item text */}
                <p className={`${theme === 'light' ? 'text-base' : 'text-white'} font-light `}>Save with plans stargin at $10/month</p>
              </div>
            </div>
            {/* button */}
            <button className='btn'>Discover our plans</button>
          </div>
          {/* image */}
          <div className='hidden lg:flex self-end'>
            <img src={GirlImage} alt='girl' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;