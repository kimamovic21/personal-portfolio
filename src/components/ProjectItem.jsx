import { Link } from "react-router-dom";

const ProjectItem = ({ title, backgroundImg, projectUrl, imageAlt, desc }) => {
  return (
    <div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
            <img  
                className='rounded-xl group-hover:opacity-10 h-[300px]'
                src={backgroundImg}
                alt={imageAlt}
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-[#fff] tracking-wider text-center'>
                    {title}
                </h3>
                <p className='pb-4 pt-2 text-[#fff] text-center'>
                    {desc}
                </p>
                <Link to={projectUrl}>
                    <p className='text-center py-3 rounded-lg bg-[#fff] text-gray-700 font-bold text-lg cursor-pointer '>
                        More info
                    </p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem
