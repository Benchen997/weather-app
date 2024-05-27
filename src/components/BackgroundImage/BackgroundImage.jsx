import React from 'react';
import bg from '../../assets/background.png';

function BackgroundImage({ children }) {
  return (
    <div className='h-screen z-1 bg-gradient-to-r from-[#A0AFF4] to-[#6A63E2] 
                    flex justify-center items-center relative'>
      <img className="absolute bottom-0 right-0 z-0 h-80 w-80" src={bg} alt="double cloud" />
      <div className="z-10 w-10/12 h-4/5 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

export default BackgroundImage;



