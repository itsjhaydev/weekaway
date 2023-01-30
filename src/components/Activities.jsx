import React from 'react'

function Activities() {
  return (
    <div className='max-w-[900px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img className='w-full h-full object-cover relative border-white shadow-lg'
            src='https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruise</h3>
            <img className='w-full h-full object-cover relative border-white shadow-lg'
            src='https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
            <img className='w-full h-full object-cover relative border-white shadow-lg'
            src='https://images.unsplash.com/photo-1544736826-61c35a3511dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhjdXJzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        </div>
    </div>
  )
}

export default Activities