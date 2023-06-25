import React from 'react';

const ProjectItems = ({ img, title }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-900 to-[#184c64]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' style={{ width: '100%', height: '100%' }} />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] transform translate-x-[-50%] -translate-y-1/2'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React Js</p>
        <a href="/">
          <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold curser-pointer text-lg'>More Info</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
