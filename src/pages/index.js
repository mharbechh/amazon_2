import Banner from '@/components/Banner'
import Header from '@/components/Header'
import ProductFeed from '@/components/ProductFeed'

export default function Home({ products }) {
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
