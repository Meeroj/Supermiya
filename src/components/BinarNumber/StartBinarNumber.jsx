import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { numberFinishing, numberStarting, setSystem } from '../../slice/speedNumber'
import { useNavigate } from 'react-router-dom'

const StartBinarNumber = () => { 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputt = useRef()
  return (
    <div className='flex flex-col items-center justify-center relative lg:start-[20vw] w-full lg:w-[75vw] pt-3 mb-5'>
        {useEffect(()=>{dispatch(numberFinishing())},[])}
        <h2 className='text-3xl'>Binar Number</h2>
        <div className="flex flex-wrap gap-3 lg:justify-around items-center rounded-lg bg-white lg:relative lg:w-[1000px] xl:w-[1100px] lg:m-10 lg:start-5 p-3">
            <div className='flex flex-col items-start border border-amber-500 rounded-md w-full sm:w-80'>
                <div className=" h-52 w-full bg-gray-200 rounded-md rounded-b-none"><img src="./img/clock.svg"className='w-full h-full' alt="..topilmadi" /></div>
                <p className='text-xl text-amber-600 m-2'>Binar Number in 5 minut</p>
                <p className='text-amber-800 m-2 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veniam dolorum doloremque ex magni hic voluptatem voluptatum accusamus labore. Eum possimus amet, </p>
                <button  onClick={()=>{dispatch(numberStarting(5))
                navigate('/binar-number/look')}} className='m-2 border border-amber-500 px-5 py-1 text-amber-500 rounded-md hover:text-white hover:bg-amber-600 ease-linear duration-150'>Start</button>
            </div>
            <div className='flex flex-col items-start border border-amber-500 rounded-md w-full sm:w-80'>
                <div className=" h-52 w-full bg-gray-200 rounded-md rounded-b-none"><img src="./img/clock.svg"className='w-full h-full' alt="..topilmadi" /></div>
                <p className='text-xl text-amber-600 m-2'>Binar Number in 15 minut</p>
                <p className='text-amber-800 m-2 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veniam dolorum doloremque ex magni hic voluptatem voluptatum accusamus labore. Eum possimus amet, </p>
                <button  onClick={()=>{dispatch(numberStarting(15)) 
                    navigate('/binar-number/look')}} className='m-2 border border-amber-500 px-5 py-1 text-amber-500 rounded-md hover:text-white hover:bg-amber-600 ease-linear duration-150'>Start</button>
            </div>
            <div className='flex flex-col items-start border border-amber-500 rounded-md w-full sm:w-80'>
                <div className=" h-52 w-full bg-gray-200 rounded-md rounded-b-none"><img src="./img/clock.svg"className='w-full h-full' alt="..topilmadi" /></div>
                <p className='text-xl text-amber-600 m-2'>Binar Number in 120 minut</p>
                <p className='text-amber-800 m-2 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veniam dolorum doloremque ex magni hic voluptatem voluptatum accusamus labore. Eum possimus amet, </p>
                <button  onClick={()=>{dispatch(numberStarting(120))
                navigate('/binar-number/look')}} className='m-2 border border-amber-500 px-5 py-1 text-amber-500 rounded-md hover:text-white hover:bg-amber-600 ease-linear duration-150'>Start</button>
            </div>
        </div>
        <p>Set your complite number:</p>
                <span className='my-2'>example <span className='border border-amber-400 '>1 2 <span className='bg-amber-400 px-1'>3 4</span> 5 6 7 8</span></span>
                <select name="system" style={{width:'100px'}} className='border border-amber-400' id="system" onChange={(e)=>{dispatch(setSystem(e.target.value))}}>
                    <option disabled style={{display:"none"}}>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                
    </div>
  )
}

export default StartBinarNumber