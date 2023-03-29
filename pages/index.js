import Head from 'next/head'
import Header from '@/component/header/Header';
import Filter from '@/component/filter/Filter';
import Featurelist from '@/component/featureSection/Featurelist';
export default function Home() {
  return (
    <>
      <Header />
      <Filter />
      {/* <Featurelist /> */}
    </>
  )
}
