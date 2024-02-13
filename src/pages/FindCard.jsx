import React from 'react'
import CardSlide from '../components/CardSlide'

const FindCard = () => {
  return (
    <div className='flex items-center pt-3 start-[20vw] flex-col relative w-[75vw]'>
        <h2 className='text-3xl'>Find Card</h2>
        <div className="m-10 w-[400px] flex justify-around items-center rounded-lg bg-white relative start-5 p-3">
        <CardSlide/>
         
        </div>
    </div>
  )
}

export default FindCard