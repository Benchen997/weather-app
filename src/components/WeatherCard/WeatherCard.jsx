import React from 'react';
import CurrentCity from './components/CurrentCity';
import DayForecast from './components/Forecast';

function WeatherCard() {
  return (
    <div className='w-full h-full opacity-80 bg-[#f1f0fc] p-10 shadow-lg 
                    rounded-[4rem] flex justify-between items-center'>
      {/* current city component takes left section of card */}
      <CurrentCity />
      {/* forecast,search bar and history component together takes right section of card */}
      <div className='h-full w-9/12 bg-blue-300'>
        <span className='w-full h-6/12 p-10 flex item-center justify-around'>
          <DayForecast />
          <DayForecast />
          <DayForecast />
          <DayForecast />
        </span>
      </div>

    </div>
  );
}

export default WeatherCard;
