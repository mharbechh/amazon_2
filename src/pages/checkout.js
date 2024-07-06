import React, { useEffect } from 'react'
import Header from '@/components/Header'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutItems from '@/components/CheckoutItems'
import { calculTotal } from '@/slices/basketSlice'
import Modal from '@/components/Modal'
import { openModal } from '@/slices/modalSlice'
import { useSession } from 'next-auth/react'

function Checkout() {
  const { data: session } = useSession()
  const { basketItems, totalPrice } = useSelector((state) => state.basket)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculTotal())
  }, [basketItems])

  return (
    <div className='bg-gray-100 min-h-screen relative'>
      <Header />
      {isOpen && <Modal />}
      <div className='container mx-auto px-4 py-6'>
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>
          <img
            className='w-full h-64 sm:h-48 md:h-64 lg:h-80 xl:h-96 object-cover'
            src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/2400x1600/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935561/acastro_STK103__04.jpg'
            alt='Checkout Banner'
          />
          <div className='p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12'>
            <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800'>
              {basketItems.length > 0 ? 'Shopping Cart' : 'Basket Empty'}
            </h2>
            <div className='lg:grid lg:grid-cols-7 lg:gap-4'>
              <div className='lg:col-span-5'>
                <CheckoutItems basketItems={basketItems} />
              </div>
              {basketItems.length > 0 && (
                <div className='border-t mt-4 sm:mt-6 md:mt-8 lg:mt-0 pt-4 sm:pt-6 md:pt-8 lg:pt-0 lg:col-span-2 lg:border-none'>
                  <div className='flex justify-between items-center mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800'>
                      Total:
                    </p>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800'>
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className='border-t w-full mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10' />
                  <div className='flex flex-col space-y-4'>
                    <button
                      onClick={() => dispatch(openModal())}
                      className='bg-red-500 text-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 rounded-lg hover:bg-red-600 transition duration-200'
                    >
                      Remove All
                    </button>
                    <button
                      className={`${
                        session
                          ? 'bg-blue-500 hover:bg-blue-600'
                          : 'bg-gray-500 cursor-not-allowed'
                      } text-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 rounded-lg transition duration-200`}
                      disabled={!session}
                    >
                      {session ? 'Proceed to Checkout' : 'Sign In To Checkout'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
