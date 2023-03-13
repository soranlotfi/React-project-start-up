// import {Component} from "react";

// class counter extends  Component {
//     changName=()=>{
//             this.setState({name:"sina"})
//     }
//     constructor() {
//         super();
//         this.state={
//             name:"soran"
//         }
//     }
//
//
//     render() {
//         return(
//             <div>
//                 <p>{this.state.name}</p>
//                 <button onClick={this.changName}> تغیر نام </button>
//             </div>
//         )
//     }
// }

const counter = ({inc,dec,res,count})=>{
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>افزایش</button>
            <button onClick={dec}>کاهش </button>
            <button onClick={res}>بازنشانی </button>
        </div>
    )
}

export default  counter;