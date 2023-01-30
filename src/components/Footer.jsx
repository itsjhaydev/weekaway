import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'

function Footer() {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex flex-col items-center m-auto justify-center'>
            <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2' />
            <h1 className='text-xl font-bold text-gray-700'>IT'SJHAY WEEKAWAY</h1>
            <p className=' text-gray-700'>2023 c Alright Reserved</p>
        </div>
    </div>
  )
}

export default Footer