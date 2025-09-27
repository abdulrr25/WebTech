import { Component } from "react";

export default class FromViewToCompClass1 extends Component {

    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = { data: this.props.data }
        this.handler1 = this.handler1.bind(this)

    }



    handler1(e) {

        this.setState({ data: 'Helooooooooooooooooooooooooooooo ' });
    }

    render() {
        console.log("render");
        return <div className="bordered" >
            <button onClick={this.handler1}> Click Me
            </button>
            <p> You's Data   :  {this.state.data}</p>
        </div>
    }
}