const Skill = ({ skillIcon, skillName }) => {
  return (
    <div className='p-6 shadow-md rounded-xl md:hover:scale-110 ease-in duration-200 cursor-pointer'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                {skillIcon}
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3>{skillName}</h3>
            </div>
        </div>
    </div>
  )
}

export default Skill