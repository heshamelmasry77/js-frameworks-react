import {Component} from "react";

class First extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      myVar: 0,
      name: "jake",
      age: "31",
      carsData: []
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
    // we make API calls and we update the state
    // make your api call using Axios
    setTimeout(()=>{
      this.setState({
        myVar: 10,
        name: "Paul",
        age: "98"
      })
    }, 2000)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }


  render() {
    console.log("render");
    return (<div>
      <h1>Hello this is my var value: {this.state.myVar}</h1>
      <h1>my name is {this.state.name}</h1>
      <h1>my age is {this.state.age}</h1>
    </div>)
  }
}

export default First;
