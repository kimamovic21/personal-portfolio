import { Link } from 'react-router-dom';
import { RiRadioButtonFill } from 'react-icons/ri';
import ProShopImage from '../images/pro-shop.png';
import Navbar from './Navbar';

const ProShop = () => {
  return (
    <>
      <Navbar />
      <div 
        className='relative flex flex-col justify-between gap-20'
        style={{ backgroundImage: `url(${ProShopImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className='absolute inset-0 bg-black opacity-80'></div>
        <div className='relative mt-24 ml-14 text-gray-700 p-2'>
          <h2 className='py-2 text-gray-100'>Pro Shop App</h2>
        </div>

        <div className='relative max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <h2 className='text-gray-100 mb-10'>Overview</h2>
            <p className='text-gray-100 text-justify'>
            The eCommerce platform is a full-featured online store built with the MERN stack (MongoDB, Express.js, React, Node.js). 
            It includes user authentication, product management, a shopping cart, and secure checkout with PayPal for developers integration. 
            The admin dashboard allows for managing users, products, and orders. The platform is designed for a seamless user 
            experience across all devices.
            </p>
            <a 
                href='https://github.com/kimamovic21/udemy-mern-course-ecommerce-platform-traversymedia' 
                target='_blank'> 
                    <button className='px-8 py-2 mt-4 mr-8'>
                        Github Code
                    </button>
            </a>
            <a 
                href='https://udemy-mern-course-ecommerce-platform-08it.onrender.com/' 
                target='_blank'> 
                    <button className='px-8 py-2 mt-4'>
                        Live Demo
                    </button>
            </a>
          </div>

          <div className='col-span-4 md:col-span-1 shadow-md bg-gray-100 shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2 '>Technologies used:</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> React.js
                </p>
                <p className='text-gray-600 py-2 flex items-center'> 
                  <RiRadioButtonFill className='pr-1' /> Tailwind CSS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Redux Toolkit
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Node.js
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Express
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Mongo DB
                </p>
              </div>
            </div>
          </div>
          <Link to='/projects'>
            <p className='underline cursor-pointer text-gray-100 hover:no-underline'>Back to Projects</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProShop
