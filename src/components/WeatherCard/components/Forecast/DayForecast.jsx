import React from 'react'
import cloudyIcon from '../../../../assets/weather_icon/Cloudy_day.png'

function DayForecast() {
  return (
    <div className='bg-none flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'> Monday </h1>
        <h2 className='text-lg'>24 July</h2>
        <img src={cloudyIcon} alt='cloudy' />
        <h3 className='text-lg'>23&#176; ~ 25&#176;</h3>
    </div>
  )
}

export default DayForecast