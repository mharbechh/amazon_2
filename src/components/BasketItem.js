import {
  StarIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSingle, increase, decrease } from '@/slices/basketSlice'

function BasketItem({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
  singleItemQuantity,
}) {
  const dispatch = useDispatch()
  const { basketItems } = useSelector((state) => state.basket)

  return (
    <div className='relative flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      <div className='absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded'>
        {category}
      </div>
      <div className='flex-shrink-0 w-full sm:w-auto'>
        <Image
          src={image}
          height={200}
          width={140}
          objectFit='contain'
          className='rounded-lg'
          alt={title}
        />
      </div>
      <div className='flex flex-col flex-grow space-y-2'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-800'>
          {title}
        </h2>
        <p className='flex items-center'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 sm:h-6 text-yellow-500' />
            ))}
        </p>
        <p className='text-sm sm:text-base md:text-lg text-gray-600 line-clamp-2'>
          {description}
        </p>
        <div className='text-lg sm:text-xl md:text-2xl font-bold text-gray-900'>
          <span className='text-sm align-top'>$</span>
          <span>{price.toFixed(2)}</span>
        </div>
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              className='h-8 sm:h-10'
              src='https://links.papareact.com/fdw'
              alt='Prime'
            />
            <p className='text-xs sm:text-sm md:text-base text-gray-500'>
              Free delivery Tomorrow
            </p>
          </div>
        )}
      </div>
      <div className='flex flex-col items-center space-y-2'>
        <button
          onClick={() => dispatch(increase({ id }))}
          className='bg-gray-100 p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-200 transition duration-200'
        >
          <ChevronUpIcon className='h-5 sm:h-6 md:h-7 text-gray-500' />
        </button>
        <p className='font-semibold text-lg sm:text-xl md:text-2xl text-amazonBlue'>
          {singleItemQuantity}
        </p>
        <button
          onClick={() => {
            if (singleItemQuantity === 1) {
              dispatch(removeSingle(id))
              return
            }
            dispatch(decrease(id))
          }}
          className='bg-gray-100 p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-200 transition duration-200'
        >
          <ChevronDownIcon className='h-5 sm:h-6 md:h-7 text-gray-500' />
        </button>
        <button
          onClick={() => dispatch(removeSingle(id))}
          className='px-3 py-1 sm:px-4 sm:py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200'
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default BasketItem
