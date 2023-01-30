import React from 'react'

function Gallery() {
  return (
    <div id='gallery' className='max-w-[900px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-4 gap-2'>
            <div className='sm:col-span-2 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1536561996889-43a085fcdb39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXhjdXJzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1560251180-1a0b93970379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXhjdXJzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1571922835318-d2221de9d2e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGV4Y3Vyc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://media.istockphoto.com/id/1318051948/photo/panoramic-view-of-a-scenic-route-on-top-of-a-mountain-ridge-in-the-desert.jpg?b=1&s=170667a&w=0&k=20&c=-xDGLwukkKNeGk5l99bpWonFKVDSzsQxTOvmycoiaxs=" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1609666869239-919fd1f0e7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGV4Y3Vyc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery