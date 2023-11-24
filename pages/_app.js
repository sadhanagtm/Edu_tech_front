import "../styles/globals.css";
import "../styles/SCSS/master.scss";

import PageLoadConextProvider, { PageLoadContext } from "../HOC/ContextApi/PageLoad";
import {useEffect, useState} from 'react'

import { CookiesProvider } from "react-cookie";
import {Progress} from '../components/UI/Progress/index'
import Script from "next/script";
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {
  const [isAnimating, setIsAnimating] = useState(false);
    const ChangeIsAnimation=(value)=>{
        setIsAnimating(value)
    }
  const router=useRouter();
  useEffect(() => {
    const handleStart=()=>{
      ChangeIsAnimation(true);
    }

    const handleStop=()=>{
      ChangeIsAnimation(false);
    }
    router.events.on('routeChangeStart',handleStart);
    router.events.on('routeChangeComplete',handleStop);
    router.events.on('routeChangeError',handleStop);
    
    return ()=>{

      router.events.off('routeChangeStart',handleStart);
      router.events.off('routeChangeComplete',handleStop);
      router.events.off('routeChangeError',handleStop);

    }


  }, [router])
  return (
    <CookiesProvider>
        <Progress isAnimating={isAnimating} />
        <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default MyApp;
