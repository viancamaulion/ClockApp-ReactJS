import { useState } from 'react';
import Clock from './components/Clock';
import Duration from './components/Duration';
import imgClock from './images/imgClock.png';
import imgCloud from './images/imgCloud.png';

function App() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const handleTimeIn = () => {
    setIsTimerRunning(true);
    setResetTimer(false);
  };

  const handleTimeOut = () => {
    setIsTimerRunning(false);
  };

  const handleResetTimer = () => {
    setResetTimer(true);
  };

  return (
    <div className="App">
      <img src={imgCloud} id="imgCloud" className="logo" alt="" />
      <img src={imgClock} id="imgClock" className="logo" alt="" />
      <Clock
        onTimeIn={handleTimeIn}
        onTimeOut={handleTimeOut}
        onResetTimer={handleResetTimer}
        isTimerRunning={handleResetTimer}
      />
      <Duration isTimerRunning={isTimerRunning} resetTimer={resetTimer} />
      <br />
      <img src={imgCloud} id="imgCloud2" className="logo" alt="" />
    </div>
  );
}

export default App;
