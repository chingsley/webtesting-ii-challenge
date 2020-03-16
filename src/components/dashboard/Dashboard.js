import React from 'react';
import styled from 'styled-components';


import './dashboard.css';

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    display: block;
    height: 2.5rem;
    width: 7rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 0.5rem;
    border-radius: 3px;
    background-color: white;
    color: black;
    border: 2px solid #008CBA;
    outline: none;
    transition-duration: 0.4s;

    &:hover {
      background-color: #008CBA;
      color: white;
    }

    &:active {
      // background-color: #130f40;
      // transition-duration: 0s;
    }
  }
`;


class Dashboard extends React.Component {
  recordball = () => {
    this.props.ball();
  }

  handleStrike = () => {
    this.props.strike();
  }

  handleHit = () => {
    this.props.hit();
  }

  handleFoul = () => {
    this.props.foul();
  }

  render() {
    return (
      <DashboardContainer className="dashboard">
        <div>
            <button data-testid="btn-ball" onClick={this.recordball}>ball</button>
            <button data-testid="btn-strike" onClick={this.handleStrike}>strike</button>
        </div>
        <div>
          <button data-testid="btn-hit" onClick={this.handleHit}>hit</button>
          <button data-testid="btn-foul" onClick={this.handleFoul}>foul</button>
        </div>
      </DashboardContainer >
    );
  }
}

export default Dashboard;
