import { useState } from "react"
// interface Props {
//   name:string
// }
function App() {
  const [count, setCount]=useState<number>(0);
  const increment=()=>{
    setCount(prevCount=>prevCount+1);
  };
  const decrement=()=>{
    setCount(prevCount=>prevCount-1);
  };


  return (
    <>
      <div>
        <p>Count:{count}</p>
        <button onClick={increment} >Increment</button>
        <button onClick={decrement} >Decrement</button>
      </div>
    </>
  )
}

export default App
