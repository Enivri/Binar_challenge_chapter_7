import React from 'react'
import Card from './card'
import Footer from './footer'
import Intro from './intro'
import Navbar from './navbar'
import Search from './search'
import { useSelector } from 'react-redux'
import Grid from './Grid'

const Filter = () => {
  const renderData = useSelector(state => state.cars.filterCars)
  console.log(renderData);
  return (
    <>
      <Navbar />
      <Intro />
      <Search/>
      <Grid>
        {
            renderData.map((data) => (
                <Card key={data.id} data={data}/> 
            ))
        }
      </Grid>
      {/* <Card/> */}
      <Footer/>
    </>
  )
}

export default Filter