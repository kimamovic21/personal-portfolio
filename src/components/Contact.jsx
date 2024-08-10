
import { FaLinkedinIn, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styled from 'styled-components';

const InstagramIcon = styled(FaInstagram)`
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    border-radius: 100%; 
`;

const Contact = () => {
  return (
    <div id='contact' className='w-full'>

        <div className='max-w-[1240px] mx-auto px-2 py-16 w-full'>

            <h2 className='mt-10 text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </h2>

            <h2>Get in touch</h2>

            <div className='grid lg:grid-cols-5 gap-8'>
                  
                {/* Left  */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>

                    <div className='h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300'
                                 src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871" 
                                 alt="Laptop image" 
                            />
                        </div>

                        <div>
                            <h2 className='py-2'>
                                Kerim Imamović
                            </h2>
                            <p className='font-semibold'>Junior Web Developer</p>
                            <p className='py-4'>
                                If you would like to know more about me, contact me for more informations.
                            </p>
                        </div>

                        <div className='pt-8'>
                            <p className='uppercase'>
                                Connect with me.
                            </p>
                            <div className='flex items-center justify-between py-4'>
                                <a
                                    href="https://www.linkedin.com/in/kerimimamovic/" 
                                    target='_blank'
                                    rel="noopener noreferrer"  
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaLinkedinIn size={20} className='text-blue-700' />
                                    </div>
                                </a>

                                <a
                                    href="https://www.github.com/kimamovic21" 
                                    target='_blank'
                                    rel="noopener noreferrer"  
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaGithub size={20} className='text-black'/>
                                    </div>
                                </a>

                                <a
                                    href="https://www.facebook.com/imamovic.kerim/" 
                                    target='_blank'
                                    rel="noopener noreferrer"  
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaFacebook size={20} className='text-blue-600' />
                                    </div>
                                </a>

                                <a
                                    href="https://www.instagram.com/k_imamovic/" 
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
                                        <FaXTwitter size={20} className='text-black' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>    

                {/* Right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>

                    <div className='p-4'>
                        <form 
                            method='POST'
                            action={`https://getform.io/f/${import.meta.env.VITE_API_FORM_KEY}`}
                        >
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>First Name:</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-400'
                                        id='firstName'
                                        name='Name'
                                        type='text'
                                        placeholder='Enter your First Name'
                                        maxLength='40'
                                        minLength='2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Last Name:</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-400' 
                                        id='lastName'
                                        name='Surname'
                                        type='text'
                                        placeholder='Enter your Last Name'
                                        maxLength='40'
                                        minLength='2'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email:</label>
                                <input 
                                    id='email'
                                    name='Email'
                                    type='email'
                                    placeholder='Enter your Email'
                                    className='border-2 rounded-lg p-3 flex border-gray-400' 
                                    maxLength='50'
                                    required
                                />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Phone Number:</label>
                                <input 
                                    id='phone'
                                    name='Phone'
                                    type='number'
                                    placeholder='Enter your Phone'
                                    className='border-2 rounded-lg p-3 flex border-gray-400' 
                                    maxLength='20'
                                    minLength='5'
                                />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject:</label>
                                <input 
                                    id='subject'
                                    name='Subject'
                                    type='text'
                                    placeholder='Enter your Subject'
                                    className='border-2 rounded-lg p-3 flex border-gray-400' 
                                    maxLength='50'
                                    minLength='5'
                                    required
                                />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message:</label>
                                <textarea 
                                    id='message'
                                    name='Message'
                                    placeholder='Enter your Message'
                                    className='border-2 rounded-lg p-3 border-gray-300 min-h-[300px] max-h-[300px]'
                                    maxLength='500'
                                    minLength='10'
                                    required
                                />
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-3 hover:scale-105 transition duration-300'>
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact