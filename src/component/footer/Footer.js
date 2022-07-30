import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col  '>
      {/* div contact us */}
      <span className='ml-[40%] font-light'>contact us through</span>
      <div className='flex justify-between items-center '>
      <ul className='flex flex-col pl-32 text-sm'>
<li>0798323870</li>
<li>aggphones135@yahoo.com</li>
<li>p.o box 100 Nairobi</li>
      </ul>
      
      {/* div icons */}
      <div className='flex flex-col justify-center items-center pr-9'>
        <span className='font-light my-2'>social media</span>
     <span className='font-light text-sm'><i className="bi bi-facebook"></i> facebook</span>
     <span className='font-light text-sm mr-2'>   <i className="bi bi-linkedin"></i> linkedin</span>
     <span className='font-light text-sm'> <i className="bi bi-instagram"></i>instagram</span>
     <span className='font-light text-sm mr-4'><i class="bi bi-twitter"></i> twitter</span> 
      </div>
      </div>
    </div>
  )
}
