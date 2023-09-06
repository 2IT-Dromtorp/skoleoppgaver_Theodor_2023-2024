import { useEffect, useState } from 'react';

export default function DigitalClock(){

    let clock = new Date();
    let hh = clock.getHours();
    let nn = clock.getMinutes();
    let ss = clock.getSeconds();
    const [currentTime, newTime] = useState(new Date);
//useEffect fires when state changes
useEffect(() => { 
    const myInterval = setInterval(() => {
        newTime(new Date);
    }, 1000)
    return () => clearInterval(myInterval);
    })
  
    return(
        <div className="App">
            <header className="appheader">
                <h1>{currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}{console.log(currentTime)}</h1>
            </header>
        </div>
        
    )
}