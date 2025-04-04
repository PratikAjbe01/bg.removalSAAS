import React from 'react'
import { testimonialsData } from '../assets/assets'

function Testimonial() {
  return (
    <div>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent leading-normal py-5'>Customer Testimonial</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>
        {testimonialsData.map((item,index)=>{
          return( <div key={index} className='bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700'>
<p className='text-4xl text-gray-500'>"</p>
<p className='text-sm text-gray-500'>{item.text}</p>
<div className='flex items-center gap-3 mt-5'>
    <img className='w-9 rounded-full' src={item.image} alt="" />
</div>
<p className='text-sm text-gray-600'>{item.author}</p>
<p>{item.jobTitle}</p>
</div>
       ) })}
      </div>
    </div>
  )
}

export default Testimonial
