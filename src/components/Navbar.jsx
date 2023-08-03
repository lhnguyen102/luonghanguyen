import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(' ');
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    // This is an instance of IntersectionObserver
    const observer = new IntersectionObserver(
      // This is a callback function that will be invoked whenever a target intersects with the root
      entries => {
        // Iterate over all entries
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id !== '') {
            setActive(entry.target.id);
            // push the id into the URL
            history.pushState(null, '', `#${entry.target.id}`);
          }
        });
      },
      // target must be in view for the 'isIntersecting' property to be true. In this case, 
      // 80% of the target must be in view.
      { threshold: 0.8 }  // Adjust as needed
    );

    // Create an array of targets
    const targets = navLinks.map(link => link.id !== '' ? document.querySelector(`#${link.id}`) : null).filter(target => target != null);
    targets.forEach(target => { 
      if (target){
        observer.observe(target); 
      }
    });
  
    // Cleanup
    return () => {
      targets.forEach(target => {
        if (target){
          observer.unobserve(target);
        }
      });
    };
  }, []);
  
  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary` }
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/luonghanguyen/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className ="w-7 h-7 object-contain"/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> Luong-Ha Nguyen &nbsp;<span className='lg:block hidden'>| AI Developer</span></p>
        </Link>
        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`} 
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`} 
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar