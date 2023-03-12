// import {Component} from "react";
const Counter = (props)=>{
    const {count} = props
    console.log(props)
    // props.count===5?alert("hello"):alert("bye");
    return(
        <div>
            <h1> شمارنده ی من :{count}</h1>
            <p>{props.count || 60}</p>
        </div>
    )
}
// Counter.defaultProps = {
//     count : 25
// }

export default  Counter;