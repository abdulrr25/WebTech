import { Component } from 'react';
export default class UserDetailsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            category: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.renderCategoryDetails = this.renderCategoryDetails.bind(this);
    }
    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleCategoryChange(e) {
        this.setState({ category: e.target.value });
    }
    renderCategoryDetails() {
        const { category } = this.state;
        switch (category) {
            case 'Graduate':
                return (
                    <div>
                        <h3>Graduate Details</h3>
                        <p><strong>Degree:</strong> BTECH Computer Science</p>
                        <p><strong>Year:</strong> 2025</p>
                        <p><strong>University:</strong> AKTU University</p>
                    </div>
                );
            case 'PG':
                return (
                    <div>
                        <h3>Postgraduate Details</h3>
                        <p><strong>Year:</strong> 2025</p>
                        <p><strong>Course:</strong> PGDAC</p>
                    </div>
                );
            case 'UnderGrad':
                return (
                    <div>
                        <h3>Undergraduate Details</h3>
                        <p><strong>SSC:</strong> 92%</p>
                        <p><strong>HSC:</strong> 80%</p>
                    </div>
                );
            default:
                return null;
        }
    }
    render() {
        const { name, email, category } = this.state;

        return (
            <div >
                <h2>User Details Form</h2>

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleInputChange}
                />
                <br /><br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                />
                <br /><br />

                <div>
                    <label htmlFor="category">Select Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={this.handleCategoryChange}
                    >
                        <option value="">--Select--</option>
                        <option value="Graduate">Graduate</option>
                        <option value="PG">PG</option>
                        <option value="UnderGrad">UnderGrad</option>
                    </select>
                </div>
                <br />
                <hr />
                <div>
                    <p><strong>Entered Name:</strong> {name}</p>
                    <p><strong>Entered Email:</strong> {email}</p>
                </div>
                {this.renderCategoryDetails()}
            </div>
        );
    }
}
