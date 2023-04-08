import Head from 'next/head'
import Header from '@/component/header/Header';
import Filter from '@/component/filter/Filter';
import Featurelist from '@/component/featureSection/Featurelist';
import Navbar from '@/component/header/Navbar';
export default function Home() {
  return (
    <>
      <Navbar/>
      <Header />
      <Filter />
      <Featurelist />
    </>
  )
}



