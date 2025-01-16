import React from 'react'
import Banner from '../components/Banner'
import TopSellers from '../components/TopSellers'
import Recomended from '../components/Recomended'
import News from '../components/News'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recomended />
      <News />
    </>
  )
}

export default Home