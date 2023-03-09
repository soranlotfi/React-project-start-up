
import "./style/style.css"
import Counter from "./Components/Counter";

const  App = ()=>{
    return(
        <div className="Soran">
            <Counter count={5}/>
            {/*<Counter name = "soran" isLoggedIn={true}></Counter>*/}
            {/*<Counter myArray={[1,2,3,4]}/>*/}

        </div>
    )
}

export default App;