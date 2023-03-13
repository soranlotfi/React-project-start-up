import{useState} from "react";
import Counter from "./Components/Counter";
import "./style/style.css"
import PropTypes from "prop-types";
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
               <Counter inc = {increaseCount} dec = {decreaseCount} res={resetCount} count = {count}/>
            </div>
        )
}

Counter.propTypes={
    inc:PropTypes.func,
    dec : PropTypes.func,
    res : PropTypes.func,
    count : PropTypes.number
}
export  default  App;
