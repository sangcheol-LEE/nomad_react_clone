import React from "react";
import PropTypes from "prop-types"
import { throwStatement } from "@babel/types";
import { CompatSource } from "webpack-sources";

class App extends React.Component {

  state = {
    count : 0

  };

  add =() => {
   this.setState(current => ( { count : current.count + 1 }));

  };

  minus =() => {
   this.setState( { count : this.state.count - 1 } );   // 위에 current를 사용하는 것과 같은 식이지만 위에 방법은 좀 더 권장합니다.
};

  componentDidMount() {
    console.log("component rendered");
    
  }
  componentDidUpdate () {
  console.log("I just updated")

  }
  componentWillUnmount() {
    console.log("Goodbye")
  }

  render() {
    console.log("im rendering")

      return (
        <div>
            <h1>The number is  {this.state.count}</h1>
            <button onClick={ this.add } >Add</button>
            <button onClick={  this.minus }>Minus</button>

        </div>

        
      )
  }


}


 
export default App;
