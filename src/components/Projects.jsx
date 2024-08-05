import ProjectItem from './ProjectItem'
import ProShopImage from '../images/pro-shop.png'
import PropertyPulseImage from '../images/property-pulse.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>

        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h2 className='mt-8 text-xl tracking-widest uppercase text-[#5651e5]'>
                Projects
            </h2>

            <h3 className='py-4 text-2xl'>
                What I&apos;ve build recently
            </h3>

            <div className='grid md:grid-cols-2 gap-8'>

               <ProjectItem title='Pro Shop App' 
                            backgroundImg={ProShopImage}
                            projectUrl='/projects/pro-shop'
                            imageAlt='Pro Shop MERN Project'
                            desc='MERN Project'
                />

                <ProjectItem title='Property Pulse App' 
                             backgroundImg={PropertyPulseImage}
                             projectUrl='/projects/property-pulse'
                             imageAlt='Property Pulse Next.js Project'
                             desc='Next.js Project'
                />
            </div>

        </div>

    </div>
  )
}

export default Projects
