import { useState } from "react";

export default function ButtonStop({ timer,setTimer,setTime }){

    const handleClick=e=>{
        clearInterval(timer);
        setTimer(undefined);
        setTime(0);
    }

    return (
        <button onClick={handleClick}>
            Stop
        </button>
    );
}