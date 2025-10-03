import { Component } from "react";

export default class Counter1 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
        <h1>Counter1</h1>
        <h2>Data {this.props.value}</h2>
        <button onClick={this.props.onClick}>Click </button>
      </>
        )
    }
}