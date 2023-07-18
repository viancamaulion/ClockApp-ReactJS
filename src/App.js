import { useState } from 'react';
import Clock from './components/Clock';
import Duration from './components/Duration';
import imgClock from './images/imgClock.png';
import imgCloud from './images/imgCloud.png';


function App() {
  return (
    <div className="App">
       <img src={imgCloud} id='imgCloud' className='logo' alt=''/>       
        <img src={imgClock} id='imgClock' className='logo' alt=''/>
        <Clock/>
        <Duration/>
        <br/>
        <img src={imgCloud} id='imgCloud2' className='logo' alt=''/>       
   
    </div>
  );
}

export default App;
