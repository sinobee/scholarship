import MainNavbar from '@/component/header/MainNavbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
   <MainNavbar/> 
  <Component {...pageProps} />
  </>
  )

}
