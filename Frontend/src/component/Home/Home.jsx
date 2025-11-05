import React from 'react'
import Header from '../Header'
import HeroBanner from './HeaderBanner'
import SearchBar from './SearchBar'
import Product from './Product'
import Footer from '../Footer'
const Home = () => {
  return (
    <div>
     
        <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N3WKFS4P"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm-request-page"
        ></iframe>
        </noscript>
        <SearchBar />
        <HeroBanner />
        <Product />
      
    </div>
  )
}

export default Home
