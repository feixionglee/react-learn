// This code is from https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
//
// Below is explanation why `increment` or `decrement` works
// https://stackoverflow.com/questions/39806802/lifecycle-event-state-and-prevstate-in-react-js/39806997#

import React, { Component } from 'react';

class Counter extends Component {
  state = { value: 0 };

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter;