import { Component } from "react";

export default class Calculator extends Component {
    constructor(props) {
        super(props);

                this.calc = this.calc.bind(this);
                this.handleChange = this.handleChange.bind(this);

        this.state = {
            res: 0,
            n1: this.props.n1,
            n2: 0,
            n3: 0
        };
    }
    calc(e) {
        let result=0;
        switch (this.state.n3) {
            case 1:
                result = this.state.n1 + this.state.n2;
                break;
            case 2:
                result = this.state.n1 - this.state.n2;
                break;
            case 3:
                result = this.state.n1 * this.state.n2;
                break;
            case 4:
                result = this.state.n1 / this.state.n2;
                break;

            default:
                break;
            }
this.setState({ res: result });

    }
    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: Number(value)
        });
    }

    render() {
        return (
            <>
            
                <div>

                    Enter Number 1<input
                        type="number"
                        id="txt"
                        a
                        onChange={this.handleChange}
                        name="n1"
                        value={this.state.n1}
                    />
                </div>

                <div>Enter Number 2
                    <input
                        type="number"
                        id="txt"
                        onChange={this.handleChange}
                        name="n2"

                        value={this.state.n2}
                    />
                </div>
                <div>
                    Enter the Number For Operation :<br/>
                    1 : Addition <br/>
                    2 : Substraction<br/>
                    3 : Multiplication<br/>
                    4 : Division<br/>

                    <input
                        type="Number"
                        id="txt"
                        onChange={this.handleChange}
                        name="n3"

                        value={this.state.n3}
                    />
                </div>
                <button type="submit" value="btn1" onClick={this.calc}>Calculate</button>


                <h1>Result is {this.state.res}</h1>
            </>
        )
    }
}
                              