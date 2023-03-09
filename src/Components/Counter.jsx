// import {Component} from "react";
const Counter = (props)=>{
    const {count} = props
    console.log(props)
    props.count===5?alert("hello"):alert("bye");
    return(
        <h1>{count}</h1>
    )
}

export default  Counter;