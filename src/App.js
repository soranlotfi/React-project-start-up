
import{useState} from "react";

const App =  ()=>{
    const [count ,setCount] = useState(50);
    const increaseCount = ()=>{
        setCount(count+1)
    }
    const decreaseCount = ()=>{
        setCount(count-1)
    }
    const resetCount = ()=>{
        setCount(50)
    }
        return(
            <div>
                <header>
                    <h1>شمارنده ی من </h1>
                </header>
                <p>{count}</p>
                <button onClick={increaseCount}>افزایش شماره </button>
                <button onClick={decreaseCount}>کاهش شماره </button>
                <button onClick={resetCount}>بازنشانی شماره </button>
            </div>
        )
}
export  default  App;