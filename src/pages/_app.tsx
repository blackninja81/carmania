import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../components/HomePage/HomePage.scss'
import '../components/CarPage/CarPage.scss'
import '../components/Layout/Layout.scss'
import 'bootstrap/dist/css/bootstrap.css'

// Default theme
import '@splidejs/react-splide/css';
import 'react-tabs/style/react-tabs.scss';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
