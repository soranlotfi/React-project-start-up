import {Component} from "react";

class counter extends  Component {
    changName=()=>{
            this.setState({name:"sina"})
    }
    constructor() {
        super();
        this.state={
            name:"soran"
        }
    }


    render() {
        return(
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.changName}> تغیر نام </button>
            </div>
        )
    }
}

export default  counter;