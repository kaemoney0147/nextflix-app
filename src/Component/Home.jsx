import React from 'react'
import NewReleases from './NewReleases';
import TrendingNow from './TrendingNow';
import WatchitAgain from './WatchitAgain';

const Home=()=> {
  return (
    <div>
      <TrendingNow/>
      <WatchitAgain/>
      <NewReleases/>
    </div>
  )
}
export default Home
