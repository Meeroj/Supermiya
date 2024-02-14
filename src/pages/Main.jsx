import React from 'react'
import Card from '../components/Card'

const Main = () => {
  return (
    <div className='flex flex-wrap justify-between p-5 relative w-[75vw] start-[20vw]'>
     <div className="flex flex-wrap gap-6 mb-5">
     <Card
          title="Supermiya Kursi"
          description="Bu kurs bilan siz "
          imageUrl="https://sharpagain.org/wp-content/uploads/2021/05/Glowing-brain_35601415_xl-2015-1-e1620183426206.jpg"
        />
        <Card
          title="Supermiya Kursi"
          description="Bu kurs bilan siz "
          imageUrl="https://sunmag.me/wp-content/uploads/2016/03/analitik1.jpg"
        />
        <Card
          title="Supermiya Kursi"
          description="Bu kurs bilan siz "
          imageUrl="https://sharpagain.org/wp-content/uploads/2021/05/Glowing-brain_35601415_xl-2015-1-e1620183426206.jpg"
        />
     </div>
        
       <img src="./img/davronTurdiyev.jpg" className='w-[75vw] rounded-xl' alt="" />
    </div>
  )
}

export default Main