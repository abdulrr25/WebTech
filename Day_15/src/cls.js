import { Component } from 'react';

export default class CaseConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            st: "",
            caseType: "upper",
            convertedOutput: ""
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.getConvertedText = this.getConvertedText.bind(this);
        this.handleConvertClick = this.handleConvertClick.bind(this);
    }

    handleTextChange(e) {
        this.setState({ st: e.target.value, convertedOutput: "" });
    }

    handleRadioChange(e) {
        this.setState({ caseType: e.target.value, convertedOutput: "" });
    }

    handleConvertClick() {
        const convertedText = this.getConvertedText();
        this.setState({ convertedOutput: convertedText });
    }

    getConvertedText() {
        const { st, caseType } = this.state;

        switch (caseType) {
            case 'upper':
                return st.toUpperCase();
            case 'lower':
                return st.toLowerCase();
            case 'title':
                return st.toLowerCase().split(' ').map(word => {
                    if (word.length > 0) {
                        return word.charAt(0).toUpperCase() + word.slice(1);
                    }
                    return '';
                }).join(' ');
            default:
                return st;
        }
    }

    render() {

        return (
            <div>
                <label For="txt">Enter Text:</label>
                <input
                    type="text"
                    id="txt"
                    value={this.state.st}
                    onChange={this.handleTextChange}
                />

                <br />
                <br />
                <br />

                <div>
                    Select Case :
                    <input
                        type="radio"
                        id="upper"
                        name="case"
                        value="upper"
                        checked={this.state.caseType === 'upper'}
                        onChange={this.handleRadioChange}
                    />
                    <label For="upper">UpperCase</label>

                    <input
                        type="radio"
                        id="lower"
                        name="case"
                        value="lower"
                        checked={this.state.caseType === 'lower'}
                        onChange={this.handleRadioChange}
                    />
                    <label htmlFor="lower">LowerCase</label>

                    <input
                        type="radio"
                        id="title"
                        name="case"
                        value="title"
                        checked={this.state.caseType === 'title'}
                        onChange={this.handleRadioChange}
                    />
                    <label htmlFor="title">Title Case</label>
                </div>

                <br />
                <br />
                <br />
                <button onClick={this.handleConvertClick}>
                    Convert
                </button>

                <br />
                <h3>Converted Text:</h3>
                <p>{this.state.convertedOutput}</p>
                <br />
            </div>
        );
    }
}