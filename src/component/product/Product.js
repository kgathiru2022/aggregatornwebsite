import React from 'react'
import Data from '../../Data'
export default function Product() {
    console.log(Data)
  return (
    <div className='p-4 bg-yellow-200 '>
        {/* searching  */}
        <div className='relative'>
        <input className='ml-[35%] w-[25%] p-[0.3em] bg-gray-200 font-extralight rounded-full outline-none
         pl-4 text-sm hover:ring-2 hover:ring-blue-400 cursor-pointer' placeholder='searching...'/>
         <i className="bi bi-search absolute left-[57%] mt-1"></i>
        </div>
        {/* section product */}
        <div className='p-4 grid md:grid-cols-4 gap-2'>
            {/* single product */}
{
    Data.map((product)=>(
        <div className='bg-white  cursor-pointer hover:shadow-xl shadow-gray-1000 hover:border-4 border-gray-1000  rounded-md flex flex-col items-center py-6 px-4  ' key={product.id}>
        <span className='uppercase'>{product.name}</span>
        <img src={product.image} alt="product ph"
        className='h-[60%] w-[100%] mt-2'/>
        <p className='text-start text-[0.7em] my-1'>
        A paraphrase is a restatement of the meaning of a text
         or passage using other words.

        </p>
        {/* price div */}
        <div className='flex text-[0.8em] justify-between  w-[100%] mt-4'>
            <div className='flex justify-between gap-4'><span className='uppercase'>price:</span> <h2 className='font-bold underline'>{product.price} ksh</h2></div>
            <span className='text-yellow-600'>{product.compay}</span>
        </div>
    </div>
    )
    
    )
}







           
        </div>
    </div>
  )
}
 