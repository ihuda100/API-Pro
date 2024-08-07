import React from 'react'
import Weather from '../components/Weather'
import { useLocation } from 'react-router-dom'

const WeatherPage = () => {
  const location = useLocation();
  const city = location.state.city;
  return (
    <div className='screen-center vh-100'>
      <div>
      <Weather city={city}/>
      </div>
    </div>
  )
}

export default WeatherPage
