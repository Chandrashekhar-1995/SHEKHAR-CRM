import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Home = () => {
  return (
    <div className='grid grid-flow-col'>
      <Sidebar/>
      <MainContainer/>
      <div className='col-span-4 mr-4'></div>
      
    </div>
  )
}

export default Home