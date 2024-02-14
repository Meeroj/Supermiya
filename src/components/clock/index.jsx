import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberFinishing } from "../../slice/speedNumber";
import timerVoice from './timerVoice.mp3'
import AudioPlayer from "./Audio";

const Clock = () => {
  const {numberTime}=useSelector(state=>state.number)
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(numberTime);
  const [seconds, setSeconds] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(timer);
            dispatch(numberFinishing())
          } else {
            setHours(hours => hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes => minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds => seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);
  return (
    <div className="flex justify-center">
    <h1 className=" border-dotted  border-4 border-amber-400 rounded-full w-[18vw] h-[18vw] flex justify-center items-center text-6xl clock">
     <p className=" absolute reverse-clock">
       {/* {hours < 10 ? `0${hours}` : hours}: */}
       {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
     </p>
     <AudioPlayer src={timerVoice} />
    </h1>
  </div>
  );
};

export default Clock;