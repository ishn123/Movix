import React from 'react'
import HeroBanner from './HeroBanner/heroBanner';
import Trending from './trending/Trending.jsx'
import Popular from './popular/Popular';
function Home() {
  return (
    <>
    <HeroBanner></HeroBanner>
    <Trending></Trending>
    <Popular></Popular>
    </>
  )
}

export default Home;