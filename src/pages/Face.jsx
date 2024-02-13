import React from 'react'
import SlideFace from '../components/SlideFace'

const Face = () => {
  return (
    <div className='flex items-center pt-3 start-[20vw] flex-col relative w-[75vw]'>
        <h2 className='text-3xl'>Find Face</h2>
        <div className="m-10 w-[700px] flex justify-around items-center rounded-lg bg-white relative start-5 p-3">
            <SlideFace/>
        </div>
    </div>
  )
}

export default Face