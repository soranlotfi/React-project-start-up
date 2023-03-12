import {Component} from "react";

class App extends  Component{

state = {
    name:"soran",
    lastName:"lotfi",
    count:0,
}

changeState(){
    this.setState({count:5})
}

    render(){
        const {count,name,lastName}=this.state
        return(
            <div>
                <header>
                    <h1>شمارنده ی من </h1>
                </header>
                <p>{count}</p>
                <p>{name}</p>
                <p>{lastName}</p>

            </div>
        )
    }
}
export  default  App;