import { Link } from 'react-router-dom';
import { RiRadioButtonFill } from 'react-icons/ri';
import PropertyPulseImage from '../images/property-pulse.jpg';
import Navbar from './Navbar';

const PropertyPulse = () => {
  return (
    <>
      <Navbar />
      <div 
        className='relative flex flex-col justify-between gap-20'
        style={{ backgroundImage: `url(${PropertyPulseImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className='absolute inset-0 bg-black opacity-80'></div>
        <div className='relative mt-24 ml-14 text-gray-700 p-2'>
          <h2 className='py-2 text-gray-100'>Property Pulse App</h2>
        </div>

        <div className='relative max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <h2 className='text-gray-100 mb-10'>Overview</h2>
            <p className='text-gray-100 text-justify'>
              This app was built using Next.js. Users are able to create and search properties
              and retrieve a list of active properties that currently for rent. You will
              be able to view property information as well as the specific
              location of the property integrated with the Google Geolocation API. User
              authentication is available so you can Sign up & Sign in to your
              account with an email address in order to save your favorite
              properties. 
            </p>
            <a 
                href='https://github.com/kimamovic21/udemy-nextjs-course-property-pulse-traversymedia/' 
                target='_blank'> 
                    <button className='px-8 py-2 mt-4 mr-8'>
                        Github Code
                    </button>
            </a>
            {/* <a 
                href='' 
                target='_blank'> 
                    <button className='px-8 py-2 mt-4'>
                        Live Demo
                    </button>
            </a> */}
          </div>

          <div className='col-span-4 md:col-span-1 shadow-md bg-gray-100 shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2 '>Technologies used:</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Next.js
                </p>
                <p className='text-gray-600 py-2 flex items-center'> 
                  <RiRadioButtonFill className='pr-1' /> Tailwind
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Javascript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Claudinary
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Mapbox
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

export default PropertyPulse
