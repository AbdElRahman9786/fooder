import Image from 'next/image'
import React from 'react'
import img from '../../app/images/burger 2.svg'

export const Footer = () => {
  return (
    <div className='w-full bg-[#FF6947] text-white p-10 mt-6 grid grid-cols-4 max-md:grid-cols-2'>
        <div className='flex flex-col justify-between '>
            <div>
                
                <div>
                <p className='font-bold text-2xl mb-24'>FOODER</p>
                </div>

            </div>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <ul className='list-none mt-10'>
                <li className='mb-2.5'>+91 9876543210</li>
                <li className='mb-2.5'>Mail@gmail.com</li>
                <li>xyz, anyware rode, sectore 4</li>
            </ul>
        </div>
        <div className=' text-center max-md:text-start'>
            <h1 className='mb-10 text-xl font-bold'>Service</h1>
            <ul>
                <li>burger</li>
                <li>Menu</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        </div>
        <div className='text-center max-md:text-start max-md:mt-5'>
              <h1 className='mb-10 text-xl font-bold'>Follow Us</h1>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linked In</li>
                <li>Tweeter</li>
            </ul>
        </div>
        <div>
            <p className='font-bold'>Subscribe for new update</p>
            <input placeholder='Enter Email...' className='placeholder:text-[#FF6947] bg-white px-8 py-3 outline-none max-w-full'/>
        </div>
    </div>
  )
}
