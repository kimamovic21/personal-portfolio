import { FaLinkedinIn, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styled from 'styled-components';

const InstagramIcon = styled(FaInstagram)`
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    border-radius: 100%; 
`;

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>

        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>

            <div className='sm:mt-5'>
                <p className='uppercase text-sm tracking-widest text-gray-500'>
                    Let&apos;s build something together.
                </p>

                <h1 className='py-3 text-gray-700'>
                    Hi, I&apos;am <span className='text-[#5651e5]'>Kerim</span>
                </h1>

                <h2 className='py-3 text-gray-700'>
                    Junior Web Developer
                </h2>

                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    Welcome to my portfolio web page. I&apos;m learning MERN Stack Web technologies. 
                </p>

                <div className='flex items-center justify-between w-2/3 m-auto py-4'>
                    <a 
                        href="https://www.linkedin.com/in/kerimimamovic/" 
                        target='_blank'
                        rel="noopener noreferrer"    
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn 
                                size={20} 
                                className='text-blue-700'
                            />
                        </div>
                    </a>

                    <a 
                        href="https://www.github.com/kimamovic21/" 
                        target='_blank'
                        rel="noopener noreferrer"    
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub 
                                size={20} 
                                className='text-black' 
                            />
                        </div>
                    </a>

                    <a 
                        href="https://www.facebook.com/imamovickerim" 
                        target='_blank'
                        rel="noopener noreferrer"    
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaFacebook 
                                size={20} 
                                className='text-blue-700'
                            />
                        </div>
                    </a>

                    <a 
                        href="https://www.facebook.com/k_imamovic" 
                        target='_blank'
                        rel="noopener noreferrer"    
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <InstagramIcon size={20} />
                        </div>
                    </a>

                    <a 
                        href="https://www.x.com/k_imamovic" 
                        target='_blank'
                        rel="noopener noreferrer"    
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaXTwitter 
                                size={20} 
                                className='text-black'
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
