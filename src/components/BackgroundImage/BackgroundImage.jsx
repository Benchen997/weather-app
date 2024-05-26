import React from 'react'
import bg from '../../assets/background.png'

// rfce fast create react component
function BackgroundImage() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-purple-500 to-pink-500'>
      <img className = "b-0 r-0" src={bg} alt="double cloud" />
    </div>
  )
}

export default BackgroundImage

