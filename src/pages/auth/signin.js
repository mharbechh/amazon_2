import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Header from '@/components/Header'

function SignIn({ providers }) {
  return (
    <div className='bg-amazonBlueLight min-h-screen flex flex-col'>
      <Header />
      <div
        className='flex flex-col items-center justify-center flex-grow bg-cover bg-center'
        style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}
      >
        <div className='bg-white p-10 rounded-lg shadow-lg max-w-md w-full space-y-5'>
          <img
            className='rounded-lg mx-auto w-32'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oePE8KmWTFoF_jKIvr-cXu32XZYipWbHdw&s'
            alt='Your Logo'
          />
          <h1 className='text-2xl font-bold text-center text-gray-800'>
            Welcome Back
          </h1>
          <p className='text-center text-gray-600'>Sign in to your account</p>
          {providers ? (
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105'
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))
          ) : (
            <div className='text-center'>Loading providers...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignIn

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
