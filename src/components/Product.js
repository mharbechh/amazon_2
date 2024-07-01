import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5) + 1)
  const [hasPrime] = useState(Math.random() < 0.5)
  return (
    <div className='flex flex-col relative p-2 bg-white m-4 space-y-2 justify-between'>
      <p className='text-xs text-gray-400 absolute right-2'>{category}</p>
      <div className='flex justify-center'>
        <Image
          className='justify-center'
          src={image}
          width={140}
          height={60}
          objectFit='contain'
        />
      </div>
      <h1 className='text-black font-semibold'>{title}</h1>
      <p className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-6 text-yellow-500' />
          ))}
      </p>
      <p className='line-clamp-2 text-sm'>{description}</p>
      <p className='font-bold'>
        <span className='font-extrabold'>$</span> {price}
      </p>
      {hasPrime && (
        <div className='flex items-center'>
          <img
            className='h-10'
            src='https://images-na.ssl-images-amazon.com/images/G/01/dex/2022/Delivery_Choices/091222_DEX_PrimeAmazonDay_LP_Steps_1_Mobile_750x220.jpg'
            alt=''
          />
          <p className='text-xs'>Free delivery Tomorrow</p>
        </div>
      )}
      <button className='p-2 bg-gradient-to-t from-yellow-500 to bg-yellow-100 rounded-md text-sm font-semibold'>
        Add To Basket
      </button>
    </div>
  )
}

export default Product
