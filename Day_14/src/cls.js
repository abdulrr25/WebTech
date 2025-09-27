import {Component} from 'react';

export default class CaseConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            st: ""
        };

        this.myeventHandler = this.myeventHandler.bind(this);
        this.uppercase = this.uppercase.bind(this);
        this.lowercase = this.lowercase.bind(this);
    }

    myeventHandler(e) {
        const str = e.target.value;
        this.setState({ st: str });
    }

    uppercase() {
        const currentStrr = this.state.st;
        console.log("Uppercase:", currentStrr.toUpperCase());
    }
    lowercase() {
        const Strr = this.state.st;
        console.log("Lowercase:", Strr.toLowerCase());
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    id="txt"
                    value={this.state.st}
                    onChange={this.myeventHandler}
                />
                <button type="submit" value="btn1" onClick={this.uppercase}>UpperCase</button>
                <button type="submit" value="btn1" onClick={this.lowercase}>SmallCase</button>
            </>
        )
    }
}