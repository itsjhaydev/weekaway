import React from "react";

function Contact() {
  return (
    <div id="contact" className='max-w-[1140px] m-auto p-4 py-16'>
      <h2 className='text-center text-gray-700'>Send us a message</h2>
      <p className='text-center text-gray-700 py-2'>We're standing by!</p>
      <div className='grid md:grid-cols-2'>
        <img
        className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
          src="https://media.istockphoto.com/id/1415316016/photo/palu-is-a-district-belonging-to-elazig-one-of-the-most-ancient-cities-of-turkey-whose-old.jpg?s=612x612&w=0&k=20&c=xy1tTW6LNi6Vup9iGRbqr27vRP1e6CrjUlYRYmtHRPU="
          alt=""
        />
        <form>
          <div className='grid grid-cols-2'>
            <input className='border m-2 p-2' type="text" placeholder="First Name" />
            <input className='border m-2 p-2' type="text" placeholder="Last Name" />
            <input className='border m-2 p-2' type="email" placeholder="Email" />
            <input className='border m-2 p-2' type="tel" placeholder="Contact Number" />
            <input className='border col-span-2 p-2 m-2' type="text" placeholder="Address" />
            <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
            <button className='col-span-2 m-2'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
