import { useState } from "react";
import ButtonStart from "./ButtonStart/ButtonStart";
import ButtonPauseContinue from "./ButtonPauseContinue/ButtonPauseContinue";
import ButtonStop from './ButtonStop/ButtonStop';

export default function Timer({ className, children }) {
    const [time, setTime] = useState(0);
    const [timer,setTimer]=useState(undefined);
 
    const addTime=()=>setTime((prevTime)=>prevTime+0.01);

    return (
        <>
            <div>
                Time: {time.toFixed(2)} s
            </div>
            <ButtonStart addTime={addTime} setTimer={setTimer}></ButtonStart>
            <br />
            <ButtonPauseContinue addTime={addTime} timer={timer} setTimer={setTimer}></ButtonPauseContinue>
            <br />
            <ButtonStop timer={timer} setTimer={setTimer} setTime={setTime}></ButtonStop>
        </>

    );
}