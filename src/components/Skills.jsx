import { FaHtml5, FaCss3, FaReact, FaGitAlt, FaGithub, FaNpm, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>

        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>

            <h2 className='mt-6 text-xl tracking-widest uppercase text-[#5651e5]'>
                Skills
            </h2>

            <h3 className='py-4 text-2xl'>
                What I can do
            </h3>

            <div className='mx-[1%] grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <Skill 
                    skillIcon={<FaHtml5 className="text-red-600" size={40} />} 
                    skillName='HTML 5'
                />

                <Skill 
                    skillIcon={<FaCss3 className="text-blue-700" size={40} />} 
                    skillName='CSS 3'
                />
                
                <Skill 
                    skillIcon={<RiTailwindCssFill className="text-blue-500" size={40} />} 
                    skillName='Tailwind CSS'
                />

                <Skill 
                    skillIcon={<IoLogoJavascript className="text-yellow-400" size={40} />} 
                    skillName='Javascript'
                />

                <Skill 
                    skillIcon={<FaNpm className="text-red-500" size={40} />} 
                    skillName='NPM'
                />

                <Skill 
                    skillIcon={<FaReact className="text-blue-500" size={40} />} 
                    skillName='React.js'
                />

                <Skill 
                    skillIcon={<FaGitAlt className="text-red-500" size={40} />} 
                    skillName='Git'
                />

                <Skill 
                    skillIcon={<FaGithub className="text-black" size={40} />} 
                    skillName='Github'
                />

                <Skill 
                    skillIcon={<IoLogoFirebase className="text-orange-600" size={40} />} 
                    skillName='Firebase'
                />

                <Skill 
                    skillIcon={<FaNodeJs className="text-green-600" size={40} />} 
                    skillName='Node.js'
                />

                <Skill 
                    skillIcon={<SiExpress  className="text-gray-600" size={40} />} 
                    skillName='Express'
                />

                <Skill 
                    skillIcon={<DiMongodb  className="text-green-900" size={40} />} 
                    skillName='Mongo DB'
                />
            </div>
        </div>
    </div>
  )
}

export default Skills
