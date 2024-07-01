import Image from 'next/image'
import React from 'react'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'

function Header() {
  return (
    <header className='sticky top-0 z-50'>
      {/* top Nav */}
      <div className='flex items-center bg-amazonBlue p-1 space-x-3'>
        <div className='p-2 flex-grow md:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={120}
            height={80}
            objectFit='contain'
            alt='amazon logo'
          />
        </div>
        <div className='hidden md:flex flex-grow items-center h-12'>
          <input
            className='h-full flex-grow rounded-l-md focus:outline-none pl-4'
            type='text'
          />
          <div className='bg-yellow-400 h-12 w-12 flex items-center justify-center cursor-pointer rounded-r-md'>
            <MagnifyingGlassIcon className='h-6 w-6 p-1' />
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <div className='link'>
            <p className='text-xs md:text-sm'>hello, Sahbi Bayar</p>
            <p className='text-xs font-extrabold md:text-sm'>
              Accounts & Lists
            </p>
          </div>
          <div className='link'>
            <p className='text-xs md:text-sm'>Returns</p>
            <p className='text-xs font-extrabold md:text:sm'>&Orders</p>
          </div>
          <div className='flex space-x-2 link relative'>
            <span className='absolute text-xs -top-1 -right-1 bg-yellow-400 h-4 w-4 rounded-full text-center md:right-12 lg:right-10'>
              0
            </span>
            <ShoppingCartIcon className='h-8 w-8' />
            <p className='hidden md:inline-flex mt-3'>Basket</p>
          </div>
        </div>
      </div>
      {/* bottom Nav */}
      <div className='bg-amazonBlueLight flex items-center space-x-3 pl-4'>
        <Bars3Icon className='h-6 hover:cursor-pointer text-white' />
        <p className='link'>All</p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='hidden lg:inline link'>Electronics</p>
        <p className='hidden lg:inline link'>Food & Grocery</p>
        <p className='hidden lg:inline link'>Prime</p>
        <p className='hidden lg:inline link'>Buy Again</p>
        <p className='hidden lg:inline link'>Shopper Toolkit</p>
        <p className='hidden lg:inline link'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
