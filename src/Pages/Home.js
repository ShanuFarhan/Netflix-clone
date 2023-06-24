import React from 'react'
import Navbar from '../Components/Navbar/navbar'
import Banner from '../Components/Banner/Banner'
import RawPost from '../Components/RawPost/Rawpost'
import {originals,action, comedy, horror, romance, documentary} from '../urls'
const Home = () => {
 
  return (
    <div className='App'>
          <Navbar/>
          <Banner/>
          <RawPost url={originals} title='Netflix Originals'/>
          <RawPost url={action} title='Action' isSmall/>
          <RawPost url={comedy} title='Comedy' isSmall/>
          <RawPost url={horror} title='Horror' isSmall/>
          <RawPost url={romance} title='Romance' isSmall/>
          <RawPost url={documentary} title='Documentaries' isSmall/>
    </div>
  )
}

export default Home
