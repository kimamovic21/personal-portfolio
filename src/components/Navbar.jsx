import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'; 
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  useEffect(() => {
    if (
        navigate.name === '/property' ||
        navigate.name === '/crypto' ||
        navigate.name === '/netflix' ||
        navigate.name === '/twitch'
    ) {
        setNavBg('transparent')
        setLinkColor('#ecf0f3')
    } else  {
        setNavBg('#ecf0f3')
        setLinkColor('#1f2937')
    }
  }, [navigate]);
                        
  return (
    <div style={{ backgroundColor: `${navBg}` }} className={shadow ? "fixed w-full shadow-xl h-20 z-[100]" : "fixed w-full h-20 z-[100]"}>

        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <img 
                src="../kerim.png" 
                alt="My image"
                width="140"
                height="60"
                className='rounded-xl'
            />
        
           <div>
               <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                   <a href='/#home'>
                       <li className='ml-10 text-sm uppercase hover:border-b hover:border-slate-900'>
                           Home
                        </li>
                   </a>
                   <a href='/#about'>
                       <li className='ml-10 text-sm uppercase hover:border-b hover:border-slate-900'>
                           About
                        </li>
                   </a>
                   <a to='/#skills'>
                       <li className='ml-10 text-sm uppercase hover:border-b hover:border-slate-900'>
                           Skills
                        </li>
                   </a>
                   <a to='/#projects'>
                       <li className='ml-10 text-sm uppercase hover:border-b hover:border-slate-900'>
                           Projects
                        </li>
                   </a>
                   <a to='/#contact'>
                       <li className='ml-10 text-sm uppercase hover:border-b hover:border-slate-900'>
                           Contact
                        </li>
                   </a>
               </ul>
           </div>

           <div className='md:hidden cursor-pointer' onClick={handleNav}>
                <AiOutlineMenu 
                    size={30} 
                    style={{ color: `${linkColor}` }}
                />
           </div>

        </div>

        <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/60 md:hidden' : ' '}>

            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300' : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'}>

                <div>
                    <div className='flex w-full items-center justify-between'>
                        <img 
                            src='../kerim.png' 
                            alt='My logo'
                            width={100}
                            height={50}
                            className='rounded-xl'
                        />

                        <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer' onClick={handleNav}>
                            <AiOutlineClose/>
                        </div>    
                    </div>

                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>
                            Let&apos;s build something legendary together.
                        </p>
                    </div>
                </div>

                <div className='py-4 flex flex-col'>
                    <ul className='uppercase max-w-[20%]'>
                        <a href='/#home'>
                            <li 
                                onClick={() => setNav(false)}
                                className='py-2 text-sm hover:border-b hover:border-slate-900'
                            >
                                Home
                            </li>
                        </a>

                        <a href='/#about'>
                            <li 
                                onClick={() => setNav(false)}
                                className='py-2 text-sm hover:border-b hover:border-slate-900'
                            >
                                About
                            </li>
                        </a>

                        <a href='/#skills'>
                            <li 
                                onClick={() => setNav(false)}
                                className='py-2 text-sm hover:border-b hover:border-slate-900'
                            >
                                Skills
                            </li>
                        </a>

                        <a href='/#projects'>
                            <li 
                                onClick={() => setNav(false)}
                                className='py-2 text-sm hover:border-b hover:border-slate-900'
                            >
                                Projects
                            </li>
                        </a>

                        <a href='/#contact'>
                            <li 
                                onClick={() => setNav(false)}
                                className='py-2 text-sm hover:border-b hover:border-slate-900'
                            >
                                Contact
                            </li>
                        </a>
                    </ul>

                    <div className='pt-10'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>
                            Let&apos;s connect.
                        </p>

                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <a 
                                href="https://www.linkedin.com/in/kerimimamovic/" 
                                target='_blank'
                                rel="noopener noreferrer"    
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                            </a>
                            
                            <a 
                                href="https://www.github.com/kimamovic21" 
                                target='_blank'
                                rel="noopener noreferrer"    
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                            </a>

                            <a 
                                href="https://www.facebook.com/imamovic.kerim/" 
                                target='_blank'
                                rel="noopener noreferrer"    
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaFacebook />
                                </div>
                            </a>

                            <a 
                                href="https://www.instagram.com/k_imamovic/" 
                                target='_blank'
                                rel="noopener noreferrer"    
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaInstagram />
                                </div>
                            </a>

                            <a 
                                href="https://x.com/k_imamovic" 
                                target='_blank'
                                rel="noopener noreferrer"    
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaXTwitter />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;