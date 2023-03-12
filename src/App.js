import{useState} from "react";
import Counter from "./Components/Counter";
import "./style/style.css"
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
            <div className={"app"}>
                <header >
                    <h1>شمارنده ی من </h1>
                </header>
               <Counter/>
            </div>
        )
}
export  default  App;