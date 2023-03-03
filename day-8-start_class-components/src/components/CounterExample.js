import {Component} from 'react';

class CounterExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 100
    }
  }

  handleIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  handleDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    return (
      <div className="CounterExample">
        <span>
          Count : {this.state.count}
        </span>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default CounterExample;
