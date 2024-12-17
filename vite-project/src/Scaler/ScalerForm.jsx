import { useState } from "react"

const ScalerForm=()=>{
    const [Count, setCount] = useState(0)
    function incrementCount(){
        setCount(Count +1)
    }
    function decrementCount(){
        setCount(Count -1)
    }
    return (
        <div>
           <h1>A comonent counter:{Count}</h1> 
            <button onClick={incrementCount}>INCREMENT</button>
            <button onClick={decrementCount}>DECREMENT</button>

        </div>
    )
}

export default ScalerForm
