import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNumber, numberFinishing, setNumber } from '../../slice/speedNumber';
import { useNavigate } from 'react-router-dom';

const BinarNumberLook = ({time}) => {
    const dispatch = useDispatch()
    const [rowNumberCount, setRowNumberCount] = useState([]);
    const [numberBg, setNumberBg] = useState(0);
    const {number, isNumberStart} = useSelector(state => state.number)
    
    const dep = 12
    let count=0
    if(time==5){
        count=600
    }else if(time==15){
        count=1800
    }else{
        count = 5000
    }
    const navigate = useNavigate()

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                setNumberBg(prev => (prev + 2) % count);
            } else if (e.key === 'ArrowLeft') {
                setNumberBg(prev => (prev - 2 + count) % count); 
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const newNumbers = [];
        for (let index = 0; index < count; index++) {
            let type = (Math.random() * 1).toFixed()
            if(type%2==0){
                newNumbers.push(1);
            }else{
                newNumbers.push(0)
            }
        }
        setRowNumberCount(newNumbers);
        dispatch(setNumber(newNumbers));
    }, [dep]);
    
    const handleChange = (index, e) => {
        if (e.target.value.length >= 1 && index < number.length - 1) {
            document.getElementById(`input-${index}`).classList.add('border-amber-400')
            const nextInput = document.getElementById(`input-${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }else if(e.target.value.length ==0  && index < number.length + 1) {
            const nextInput = document.getElementById(`input-${index - 1}`);
            document.getElementById(`input-${index}`).classList.remove('border-amber-400')
            if (nextInput) {
                nextInput.focus();
            }
        };
    };

    const getNumberArray=()=>{
        const numberArr = []
        for (let index = 0; index < count; index++) {
            numberArr.push(document.getElementById(`input-${index}`).value)
        }
        return numberArr
    }

    const handleSubmit=()=>{
        dispatch(getNumber(getNumberArray()))
        navigate('/check-number')
    }
    const handleFinish=()=>{
        dispatch(numberFinishing())
    }

    return (
        isNumberStart ? (
            <div className='flex items-center pt-3 start-[20vw] flex-col relative w-[75vw]'>
                <h2 className='text-3xl'>Binar Number 5 minut</h2>
                <div className="m-10 w-[1100px] flex justify-around items-center rounded-lg bg-white relative start-5 p-3">
                    <div className="flex flex-wrap w-[1000px]">
                        {number.map((el, index) => (
                            <p key={index} className={`w-[25px] text-center my-1 sm:my-2 ${index === numberBg || index - 1 === numberBg ? 'bg-amber-400' : ''}`}>
                                {el}
                            </p>
                        ))}
                    </div>
                    <div className="hidden sm:block">
                        {Array.from({ length: count/40 }, (_, index) => (
                            <p key={index} className='my-4'>Row {index + 1}</p>
                        ))}
                    </div>
                </div>
                <button onClick={handleFinish} className='border border-amber-400 text-amber-600 px-3 py-1 rounded-md hover:text-white hover:bg-amber-500 ease-in duration-100'>Finish</button>
            </div>
        ) : (
            <div className='flex items-center pt-3 start-[20vw] flex-col relative w-[75vw]'>
                <h2 className='text-3xl'>Binar Number 5 minut</h2>
                <div className="my-3 w-[1100px] flex justify-around items-center rounded-lg bg-white relative start-5 p-3">
                    <div className="flex flex-wrap w-[1000px]">
                        {number.map((el, index) => (
                            
                            <input
                                key={index}
                                id={`input-${index}`}
                                type='number'
                                className={`w-[25px] remove-arrow outline-none focus:border focus:border-amber-400 text-center sm:my-2 border`}
                                onChange={(e) => handleChange(index, e)}
                            />
                        ))}
                    </div>
                    <div className="hidden sm:block">
                        {Array.from({ length: count/40 }, (_, index) => (
                            <p key={index} className='my-[17px]'>Row {index + 1}</p>
                        ))}
                    </div>
                </div>
                <button onClick={handleSubmit} className='border border-amber-400 text-amber-600 px-3 py-1 rounded-md hover:text-white hover:bg-amber-500 ease-in duration-100'>Submit</button>
            </div>
        )
    );
}    

export default BinarNumberLook;