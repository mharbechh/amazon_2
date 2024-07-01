import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-48'>
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} {...product} />
      ))}
      <img
        className='col-span-full'
        src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/logos/OG_image_Squid_Ink.png'
        alt=''
      />
      <div className='md:col-span-2'>
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      {products.slice(5, products.length).map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductFeed
