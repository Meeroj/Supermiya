import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';





const CheckNumber = () => {
    const dispatch = useDispatch()
    const {number, getNumber, numberTime} = useSelector(state => state.number)
    const navigate = useNavigate()
    let count=0
    if(numberTime==5){
        count=600
    }else if(numberTime==15){
        count=1800
    }else{
        count = 5000
    }
  return (
    <div>
        <div className='flex items-center pt-3 lg:start-[20vw] flex-col lg:relative w-full lg:w-[75vw] mb-10'>
                <h2 className='text-3xl'>Check Number</h2>
                <div className="lg:m-10 w-full lg:w-[1100px] flex justify-around items-center rounded-lg bg-white lg:relative lg:start-5 p-3 mb-4">
                    <div className="flex flex-wrap w-[1000px]">
                        {getNumber.map((el, index) => (
                            
                            <input
                                key={index}
                                id={`input-${index}`}
                                type='number'
                                value={el}
                                className={`w-[25px] remove-arrow outline-none focus:border focus:border-amber-400 text-center text sm:my-2 border border-green-500 rounded-full ${el==number[index]?'text-green-500 ':'text-rose-500 border-red-500 rounded-full'} ${el==''&&' opacity-25'}`}
                                onChange={(e) => handleChange(index, e)}
                            />
                        ))}
                    </div>
                    <div className="hidden lg:block">
                        {Array.from({ length:  count/40}, (_, index) => (
                            <p key={index} className='my-[17.6px]'>Row {index + 1}</p>
                        ))}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CheckNumber