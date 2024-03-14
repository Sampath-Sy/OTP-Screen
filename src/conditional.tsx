import { useState } from "react";
function Conditional(){
    const [isOn,setIsOn]=useState(false);
    const handleClick=()=>{
        setIsOn(prevIsOn=>!prevIsOn);
    };
    return (
        <>
        <button onClick={handleClick}>
            {isOn?"Turn off":"Turn On"}
        </button>
        {isOn && <div> The button is turn on</div>}
        </>
    )

}
export default Conditional;