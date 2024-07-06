import Banner from '@/components/Banner'
import Header from '@/components/Header'
import ProductFeed from '@/components/ProductFeed'
import { useDispatch, useSelector } from 'react-redux'
import { calculTotal } from '@/slices/basketSlice'
import { useEffect } from 'react'

export default function Home({ products }) {
  const { basketItems, totalPrice } = useSelector((state) => state.basket)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculTotal())
  }, [basketItems])
  return (
    <div>
      <Header />
      <main className='max-w-screen-xl mx-auto bg-gray-300'>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}
