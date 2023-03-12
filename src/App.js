
import{useState} from "react";

const App =  ()=>{
    const [count ,setCount] = useState(50);
    const changeCount = ()=>{
        setCount(80)
    }

    let arr = [1,2,3,4]
    console.log( "before:" + arr)
    arr=[arr[0],...arr.slice(3,4) , 10 ,15]
    console.log("after:" + arr)


        return(
            <div>
                <header>
                    <h1>شمارنده ی من </h1>
                </header>
                <p>{count}</p>

            </div>
        )
}
export  default  App;