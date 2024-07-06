// import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Banner() {
  return (
    <div className='relative'>
      <Carousel
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        className='z-10'
      >
        <div>
          <img
            src='https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897329.jpg'
            alt='Banner 1'
            className='object-cover w-full h-64 sm:h-80 md:h-96 lg:h-120'
          />
        </div>
        <div>
          <img
            src='https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg'
            alt='Banner 2'
            className='object-cover w-full h-64 sm:h-80 md:h-96 lg:h-120'
          />
        </div>
        <div>
          <img
            src='https://img.freepik.com/free-vector/abstract-sales-landing-page-template_23-2148343235.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user'
            alt='Banner 3'
            className='object-cover w-full h-64 sm:h-80 md:h-96 lg:h-120'
          />
        </div>
      </Carousel>
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none' />
    </div>
  )
}

export default Banner
