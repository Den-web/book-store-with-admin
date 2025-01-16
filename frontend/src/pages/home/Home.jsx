import React from 'react'
import Banner from './../../components/Banner'
import TopSellers from './../../components/TopSellers'
import Recommened from './../../components/Recomended'
import News from './../../components/News'

const Home = () => {
  return (
    <>
        <Banner/>
        <TopSellers/>
        <Recommened/>
        <News/>
    </>
  )
}

export default Home