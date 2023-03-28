import Head from 'next/head'
import Header from '@/component/Header';
import Filter from '@/component/Filter';
import Card from '@/component/Card';
export default function Home() {
  return (
    <>
      <Header/>
      <Filter/>
      <Card/>
    </>
  )
}
