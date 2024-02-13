import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';





const CheckNumber = () => {
    const dispatch = useDispatch()
    const {number, getNumber} = useSelector(state => state.number)
    const navigate = useNavigate()
  return (
    <div>
        <div className='flex items-center pt-3 start-[20vw] flex-col relative w-[75vw]'>
                <h2 className='text-3xl'>Speed Number 5 minut</h2>
                <div className="my-3 w-[1100px] flex justify-around items-center rounded-lg bg-white relative start-5 p-3">
                    <div className="flex flex-wrap w-[1000px]">
                        {getNumber.map((el, index) => (
                            
                            <input
                                key={index}
                                id={`input-${index}`}
                                type='number'
                                value={el}
                                className={`w-[25px] remove-arrow outline-none focus:border focus:border-amber-400 text-center text sm:my-2 border border-green-500 rounded-full ${el==number[index]?'text-green-500 ':'text-rose-500 border-red-500 rounded-full'} ${el==''&&(getNumber[index+40]==''||getNumber[index-40]=='')&&' opacity-0'}`}
                                onChange={(e) => handleChange(index, e)}
                            />
                        ))}
                    </div>
                    <div className="hidden sm:block">
                        {Array.from({ length: 15 }, (_, index) => (
                            <p key={index} className='my-[17px]'>Row {index + 1}</p>
                        ))}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CheckNumber