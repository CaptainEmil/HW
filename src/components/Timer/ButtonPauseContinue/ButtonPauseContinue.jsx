import { useState } from "react";

export default function ButtonPauseContinue({ addTime,timer,setTimer }){


    const handleClick=e=>{
        console.log(timer,timer!==undefined&&timer!==null);
        if(timer!==undefined&&timer!==null) {
            clearInterval(timer);
            setTimer(undefined);
        }
        else timer=setTimer(setInterval(addTime,10));
    }

    return (
        <button onClick={handleClick}>
            {timer!==undefined&&timer!==null?"Pause":"Continue"}
        </button>
    );
}