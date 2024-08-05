const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-12'>

        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>

            <div className='col-span-2'>
                <p className='uppercase text-2xl tracking-widest text-[#5651e5]'>
                    About
                </p>

                <h2 className='py-4'>
                    Who I am ?
                </h2>

                <p className='py-2 text-gray-600'>
                    My name is Kerim Imamović.
                </p>

                <p className='py-2 text-gray-600 text-justify'>
                    I&apos;m Kerim Imamović. I am 27 years old. I come from Sarajevo, B&H.
                    I&apos;m passionate about learning and following the new technologies and trends in Web development. As a web developement enthusiast, I&apos;m interested in MERN Stack, especially Frontend Web Development and React.js library. I love to watch tutorials on Udemy and Youtube about Web Development.
                </p>
                
                <h3>Let&apos;s Connect</h3>
                
                <p className='py-2 text-gray-600 text-justify'>
                    I&apos;m always open to networking and collaborating on exciting projects. Feel free to reach me out. 
                    Let&apos;s build something amazing together! 
                    Connect with me to explore opportunities and stay updated on the latest trends in web development. 
                    Let&apos;s create a vibrant and innovative digital future!
                </p>

                <a 
                    href="https://github.com/kimamovic21?tab=repositories" 
                    target='_blank'
                    rel="noopener noreferrer"    
                >
                    <p className='py-2 text-[#5651e5] underline cursor-pointer hover:no-underline'>
                        Check out my latest projects I worked on.
                    </p>
                </a>
            </div>

            <div className='w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-10 md:hover:scale-105 ease-in duration-500'>
                <img 
                    src="https://avatars.githubusercontent.com/u/79793398?v=4" 
                    alt="Kerim Imamović Personal Image" 
                />
            </div>
        </div>
    </div>
  )
}

export default About