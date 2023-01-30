import React from "react";

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
      <img
      className='w-full h-full object-cover'
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80"
        alt=""
      />
      <div className='max-w-[900px] m-auto'>
      <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-3xl'>Find Your Special Trip</h1>
          <h2 className='text-3xl py-4 italic'>With Weekaway</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
