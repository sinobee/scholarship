import Head from 'next/head'
import Header from '@/component/header/Header';
import Filter from '@/component/filter/Filter';
import Card from '@/component/futureSection/Card';
export default function Home() {
  return (
    <>
      <Header/>
      <Filter/>
      <Card/>
    </>
  )
}
