import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { addToBasket } from '@/slices/basketSlice'

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch()

  const [rating, setRating] = useState(0)
  const [hasPrime, setHasPrime] = useState(false)

  useEffect(() => {
    setRating(Math.floor(Math.random() * 5) + 1)
    setHasPrime(Math.random() < 0.5)
  }, [])

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
      singleItemQuantity: 1,
    }
    dispatch(addToBasket(product))
  }

  return (
    <div className='flex flex-col relative p-4 bg-white m-4 space-y-2 justify-between shadow-lg rounded-lg'>
      <p className='text-xs text-gray-400 absolute top-2 right-2'>{category}</p>
      <div className='flex justify-center'>
        <Image
          className='justify-center'
          src={image}
          width={140}
          height={160}
          objectFit='contain'
          alt={title}
        />
      </div>
      <h1 className='text-black font-semibold text-lg'>{title}</h1>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
      </div>
      <p className='line-clamp-2 text-sm text-gray-700'>{description}</p>
      <p className='text-lg font-bold text-gray-900'>
        <span className='font-extrabold'>$</span> {price.toFixed(2)}
      </p>
      {hasPrime && (
        <div className='flex items-center space-x-2'>
          <img
            className='h-10'
            src='https://images-na.ssl-images-amazon.com/images/G/01/dex/2022/Delivery_Choices/091222_DEX_PrimeAmazonDay_LP_Steps_1_Mobile_750x220.jpg'
            alt='Prime'
          />
          <p className='text-xs text-gray-500'>Free delivery Tomorrow</p>
        </div>
      )}
      <button
        onClick={addItemToBasket}
        className='p-2 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-md text-sm font-semibold mt-4 hover:bg-yellow-400 transition duration-200'
      >
        Add To Basket
      </button>
    </div>
  )
}

export default Product
