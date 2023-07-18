import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    
    useEffect(() => {


        if(startTimer){
          const timerId = setInterval(() => {
            setTime(t => t + 1)
          }, 1000);
         return () => clearInterval(timerId)
        }
      }, [startTimer])

    return(
        <div className='cardDuration'>
            <h4>Total Time Worked: </h4>
            <p id='time'>{time}s</p>
            <button id = 'timein' className='btn-duration'  onClick={(
            ) => setStartTimer(true)}> Start Timer </button>
            <button id = 'timeout' className='btn-duration' onClick={() => setStartTimer(false)}> Stop timer </button>
            <br/><button id='reset' onClick={() => setTime(t=>0)}>Reset</button>
        </div>
    )

}


export default Timer;