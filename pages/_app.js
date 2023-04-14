import Navbar from '@/component/header/Navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
   <Navbar/> 
  <Component {...pageProps} />
  </>
  )

}
