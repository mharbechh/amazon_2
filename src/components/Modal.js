import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '@/slices/modalSlice'
import { removeProducts } from '@/slices/basketSlice'

function Modal() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.modal)
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-sm w-full'>
        <h2 className='text-lg font-semibold text-gray-800 mb-4'>
          You are about to clear all items from your basket. Are you sure you
          want to proceed?
        </h2>
        <div className='flex justify-between space-x-4'>
          <button
            onClick={() => dispatch(closeModal())}
            className='px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200'
          >
            Cancel
          </button>
          <button
            onClick={() => {
              dispatch(removeProducts())
              dispatch(closeModal())
            }}
            className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200'
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
