import Image from 'next/image'
import React from 'react'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

function Header() {
  const { itemsNumber } = useSelector((state) => state.basket)
  const router = useRouter()
  const { data: session } = useSession()
  return (
    <header className='sticky top-0 z-50'>
      {/* Top Nav */}
      <div className='flex items-center bg-amazonBlue p-1 py-2 space-x-3'>
        <div className='p-2 flex-grow cursor-pointer md:flex-grow-0'>
          <Image
            onClick={() => router.push('/')}
            src='https://links.papareact.com/f90'
            width={120}
            height={80}
            objectFit='contain'
            alt='amazon logo'
          />
        </div>
        <div className='hidden md:flex flex-grow items-center h-12 bg-white rounded-md'>
          <input
            className='h-full flex-grow rounded-l-md focus:outline-none pl-4'
            type='text'
            placeholder='Search Amazon'
          />
          <div className='bg-yellow-400 h-12 w-12 flex items-center justify-center cursor-pointer rounded-r-md hover:bg-yellow-500 transition duration-300'>
            <MagnifyingGlassIcon className='h-6 w-6 text-black' />
          </div>
        </div>
        <div className='flex items-center space-x-6 text-white text-sm'>
          <div
            onClick={() => {
              if (!session) {
                signIn()
              } else {
                signOut()
              }
            }}
            className='link flex flex-col items-center'
          >
            <p className='font-semibold'>
              {session ? `Hello, ${session.user.username}` : 'Sign In'}
            </p>
            <p className='font-bold'>Accounts & Lists</p>
          </div>
          <div className='link flex flex-col items-center'>
            <p className='font-semibold'>Returns</p>
            <p className='font-bold'>& Orders</p>
          </div>
          <div
            onClick={() => router.push('/checkout')}
            className='flex items-center space-x-2 link relative'
          >
            <span className='absolute -top-1 -right-1 bg-yellow-400 h-4 w-4 rounded-full text-center text-xs font-bold text-black'>
              {itemsNumber}
            </span>
            <ShoppingCartIcon className='h-8 w-8' />
            <p className='hidden md:inline mt-3 font-bold'>Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className='bg-amazonBlueLight flex items-center space-x-4 pl-4 py-2'>
        <Bars3Icon className='h-6 hover:cursor-pointer text-white' />
        <p className='link text-white'>All</p>
        <p className='link text-white'>Prime Video</p>
        <p className='link text-white'>Amazon Business</p>
        <p className='link text-white'>Today's Deals</p>
        <p className='hidden lg:inline link text-white'>Electronics</p>
        <p className='hidden lg:inline link text-white'>Food & Grocery</p>
        <p className='hidden lg:inline link text-white'>Prime</p>
        <p className='hidden lg:inline link text-white'>Buy Again</p>
        <p className='hidden lg:inline link text-white'>Shopper Toolkit</p>
        <p className='hidden lg:inline link text-white'>
          Health & Personal Care
        </p>
      </div>
    </header>
  )
}

export default Header
