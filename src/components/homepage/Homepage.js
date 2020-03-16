import React from "react";
import Display from "../display/Display";
import Dashboard from '../dashboard/Dashboard';

const initialState = {
  atBat: {
    balls: 0,
    strikes: 0
  }
};

export default class Homepage extends React.Component {
  state = initialState;

  ball = () => {
    // console.log(e.target.name)
    // e.persist();
    this.setState(prevState => {
      const { atBat: { balls } } = prevState
      if(balls === 3) {
        return {
          atBat: initialState.atBat,
        };
      } else {
        // console.log(e.target.name)
        return {
          atBat: {
            ...prevState.atBat,
            balls: balls + 1,
          }
        }
      }
    })
  };
  strike = () => {
    // console.log(e.target.name)
    // e.persist();
    this.setState(prevState => {
      const { atBat: { strikes } } = prevState
      if(strikes === 2) {
        return {
          atBat: initialState.atBat,
        };
      } else {
        // console.log(e.target.name)
        return {
          atBat: {
            ...prevState.atBat,
            strikes: strikes + 1,
          }
        }
      }
    })
  };

  hit = () => {
    this.setState({ atBat: initialState.atBat });
  };

  foul = () => {
    this.setState(prevState => {
      if (prevState.atBat.strikes < 2) {
        return {
          atBat: {
            ...prevState.atBat,
            strikes: prevState.atBat.strikes + 1
          }
        };
      }
    });
  }

  render() {
    return (
      <>
        <Display atBat={this.state.atBat} />
        <br />
        <Dashboard ball={this.ball} strike={this.strike} hit={this.hit} foul={this.foul} />
      </>
    );
  }
}
