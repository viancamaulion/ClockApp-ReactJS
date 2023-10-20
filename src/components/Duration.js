import React, { useEffect, useState } from 'react';

const Timer = ({ isTimerRunning, resetTimer }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isTimerRunning) {
      const timerId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      const timerId = setInterval(() => {
        setTime((t) => t);
      });
      return () => clearInterval(timerId);
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (resetTimer) {
      setTime(0);
    }
  });

  return (
    <div className="cardDuration">
      <h4>Total Time Worked: </h4>
      <p id="time">{time}s</p>
    </div>
  );
};

export default Timer;
