import { useState } from "react";

export default function ButtonStart({ addTime,setTimer }){

    const handleClick=e=>{
        setTimer(setInterval(addTime,10));
    }

    return (
        <button onClick={handleClick}>
            Start
        </button>
    );
}