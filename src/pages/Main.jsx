import React, { useState } from 'react';
import CircularProgressBar from '../components/ProgressBar';
import AttendanceTracker from '../components/AttandenceTracker';
import WorkCalendar from '../components/WorkData';

const Main = () => {

  return (
    <div className='flex flex-wrap justify-between p-5 relative w-full lg:w-[75vw] lg:start-[20vw] mb-5'>
    <div className="container mx-auto">
      <h1 className="text-3xl font-regular mb-8">Attendance Tracker</h1>
      <div className="grid grid-cols-1 gap-4">
        <AttendanceTracker/>
          <div
            className={`bg-white rounded-lg p-6 shadow-md flex justify-around`}
          >
            <div>
            <h2 className="text-xl font-bold mb-2">Quality </h2>
            <CircularProgressBar progress={60}/>
            <p>Record result per: <span className='text-xl ms-3'> 52 <span className='text-sm'>5min</span></span></p>
            </div>
            <div>
            <h2 className="text-xl font-bold mb-2">Speed  </h2>
            <CircularProgressBar progress={80}/>
            <p>Record result per: <span className='text-xl ms-3'> 52 <span className='text-sm'>5min</span></span></p>
            </div>
            <div>
            <h2 className="text-xl font-bold mb-2">Memory  </h2>
            <CircularProgressBar progress={70}/>
            <p>Record result per: <span className='text-xl ms-3'> 52 <span className='text-sm'>5min</span></span></p>
            </div>
          </div>
          <WorkCalendar/>
      </div>
    </div>
  </div>
  );
};

export default Main;
