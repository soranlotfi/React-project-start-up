
import "./style/style.css"
import Counter from "./Components/Counter";

const  App = ()=>{
    return(
        <div className="Soran">
            <Counter count={5}/>
            <Counter name = "soran" isLoggedIn={true}>
                hello everybody
            </Counter>
            <Counter myArray={[1,2,3,4]}/>
            <Counter count = {10}>
                این شمارنده ی من است
            </Counter>
        </div>
    )
}

export default App;