import React from 'react'
export default function Nav() {
  return (
    <div className='bg-gray-300 flex justify-between items-center p-4 shadow-lg shadow-gray-500'>
<span className='text-lg uppercase font-light text-indigo-400'>aggregator app</span>
<ul className='flex space-x-4'>
  <li className='bg-indigo-200 px-[0.9em] py-[0.3em] cursor-pointer uppercase text-sm font-light rounded
  hover:bg-green-100'>home</li>
  <li className='px-[0.9em] hover:bg-green-100 py-[0.3em] bg-indigo-200 cursor-pointer uppercase text-sm font-light rounded'>about us</li>
</ul>
<span><i className="bi bi-person-circle text-3xl text-indigo-500 cursor-pointer"></i></span>
    </div>
  )
}
