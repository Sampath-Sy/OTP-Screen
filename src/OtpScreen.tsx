import { useEffect, useRef, useState } from "react";
import './OTPScreen.css'
import { SuccessComponent } from "./successComponent";
export function OtpScreen(){
    const[otp,setOtp]=useState(['', '', '', '']);
    const[isSuccess,setSuccess]=useState(false);
    const expectedOTP = ['1', '2', '3', '4'];
    const[timer,setTimer]=useState(10);

    const inputRefs=useRef<Array<HTMLInputElement |null>>([]);
    const handleChnage=(index:number,event:React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=event.target;
        if(/^\d*$/.test(value) || value === ''){
            const newOtp=[...otp];
        newOtp[index]=event.target.value;
        if(event.target.value&&index<otp.length-1){
            inputRefs.current[index+1]?.focus();
        }
        setOtp(newOtp);

        }
        
    }
    const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const enteredOtp=otp.join('');
        if(enteredOtp===expectedOTP.join('')){
            setSuccess(true);
        }
        else{
            setSuccess(false);
            alert('Invalid OTP. Please try again.');
        }
    }
    //handle OTP resend
    const handleResend=()=>{
        alert('OTP Resent!');
        setTimer(10);
    }
    //Timer effect 
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTimer(prevTimer=>prevTimer-1);
        },1000);
        return ()=>clearInterval(interval);
    },[]);
    return (
       

        <div className="otp-container">
            {!isSuccess?(
                <>
                <h2>Enter OTP</h2>
                <form action="" className="otp-form" onSubmit={handleSubmit}>
                    <div className="otp-inputs">
                        {otp.map((digit,index)=>(
                            <input  key={index} 
                            type="text" 
                            maxLength={1}
                            value={digit}
                            onChange={(event)=>handleChnage(index,event)}
                            ref={(input)=>{
                                inputRefs.current[index]=input;
                            }}
                            />
                            
                        ))}
                    </div>
                    <button type="submit">Submit</button>
                    <p>{timer>0? `Resend OTP in ${timer} seconds` :<button onClick={handleResend} disabled={timer>0}>Resend OTP</button>}</p>
                </form>
                </>
            ):(
                <SuccessComponent/>
            )}
            

        </div>
    )
   
}