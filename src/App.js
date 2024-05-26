import React from 'react'
import BackgroundImage from './components/BackgroundImage'
import WeatherCard from './components/WeatherCard'

function App() {
  return (
    <div>
      <BackgroundImage>
        <WeatherCard />
      </BackgroundImage>
    </div>
  )
}

export default App