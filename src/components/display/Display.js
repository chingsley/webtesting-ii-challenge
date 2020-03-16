import React from "react";
import styled from "styled-components";

// import "./display.css";
const Display = styled.div`
  display: flex;
  // border: 1px solid blue;
  justify-content: center;

  .ball,
  .strike {
    // border: 1px solid red;
    width: 15rem;
    text-align: center;

    h1 {
      font-size: 6rem;
      border: 1px solid mediumvioletred;
      margin-bottom: 0;
    }
  }
`;

export default function({ atBat: { balls, strikes } }) {
  return (
    <Display className="display">
      <div className="ball">
        <h1 data-testid="balls">{balls}</h1>
        <h2>Balls</h2>
      </div>
      <div className="strike">
        <h1 data-testid="strikes">{strikes}</h1>
        <h2>Strikes</h2>
      </div>
    </Display>
  );
}
