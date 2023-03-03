import React, { Component } from 'react';

class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
      age: 30
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
        <p>Hello, {this.state.name}! You are {this.state.age} years old.</p>
      </div>
    );
  }
}

export default FormExample;
