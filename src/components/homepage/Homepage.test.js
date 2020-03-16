import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Homepage from './Homepage';
// import Display from '../display/Display';
// import Dashboard from '../dashboard/Dashboard';

describe('<Homepage />', () => {
  it('renders without crashing', () => {
    render(<Homepage />);
  });

  describe('<button>ball</button>', () => {
    afterEach(cleanup);

    it('increments balls when cicked', () => {
      const { getByTestId } = render(<Homepage />);
      const btnBall = getByTestId(/^btn-ball$/i);
      const ballValue = getByTestId(/^balls$/i);
  
      fireEvent.click(btnBall);
      expect(Number(ballValue.textContent)).toBe(1);
      fireEvent.click(btnBall);
      expect(Number(ballValue.textContent)).toBe(2);
      fireEvent.click(btnBall);
      expect(Number(ballValue.textContent)).toBe(3);
    });
  
    it('resets balls and strikes to 0 when balls exceeds 3', () => {
      const { getByTestId } = render(<Homepage />);
      const btnBall = getByTestId(/^btn-ball$/i);
      const btnStrike = getByTestId(/^btn-strike$/i);
      const ballValue = getByTestId(/^balls$/i);
      const strikeValue = getByTestId(/^strikes$/i)
  
      fireEvent.click(btnStrike);
      fireEvent.click(btnStrike);

      fireEvent.click(btnBall);
      fireEvent.click(btnBall);
      fireEvent.click(btnBall);
      fireEvent.click(btnBall);
      
      expect(Number(ballValue.textContent)).toBe(0);
      expect(Number(strikeValue.textContent)).toBe(0);
    });

    it('does not reset balls and strikes when strikes === 2 and balss < 3', () => {
      const { getByTestId } = render(<Homepage />);
      const btnBall = getByTestId(/^btn-ball$/i);
      const btnStrike = getByTestId(/^btn-strike$/i);
      const ballValue = getByTestId(/^balls$/i);
      const strikeValue = getByTestId(/^strikes$/i)
  
      fireEvent.click(btnStrike);
      fireEvent.click(btnStrike);

      fireEvent.click(btnBall);


      
      expect(Number(ballValue.textContent)).toBe(1);
      expect(Number(strikeValue.textContent)).toBe(2);
    });
  });

  describe('<button>strike</button>', () => {
    afterEach(cleanup);

    it('increments strikes with each click', () => {
      const { getByTestId } = render(<Homepage />);
      const btnStrike = getByTestId(/^btn-strike$/i);
      const strikeValue = getByTestId(/^strikes$/i);
      
      fireEvent.click(btnStrike);
      expect(Number(strikeValue.textContent)).toBe(1);
      fireEvent.click(btnStrike);
      expect(Number(strikeValue.textContent)).toBe(2);
    });

    it('resets balls and strikes to 0 when strikes exceeds 2', () => {
      const { getByTestId } = render(<Homepage />);
      const btnBall = getByTestId(/^btn-ball$/i);
      const btnStrike = getByTestId(/^btn-strike$/i);
      const ballValue = getByTestId(/^balls$/i);
      const strikeValue = getByTestId(/^strikes$/i)
  
      fireEvent.click(btnBall);

      fireEvent.click(btnStrike);
      fireEvent.click(btnStrike);
      fireEvent.click(btnStrike);

      
      expect(Number(ballValue.textContent)).toBe(0);
      expect(Number(strikeValue.textContent)).toBe(0);
    });
    
    it('does not reset balls and strikes when balls === 3 and strikes < 2', () => {
      const { getByTestId } = render(<Homepage />);
      const btnBall = getByTestId(/^btn-ball$/i);
      const btnStrike = getByTestId(/^btn-strike$/i);
      const ballValue = getByTestId(/^balls$/i);
      const strikeValue = getByTestId(/^strikes$/i)
  
      fireEvent.click(btnBall);
      fireEvent.click(btnBall);
      fireEvent.click(btnBall);

      fireEvent.click(btnStrike);


      
      expect(Number(ballValue.textContent)).toBe(3);
      expect(Number(strikeValue.textContent)).toBe(1);
    });
  });

  describe('<button>hit</button>', () => {
    afterEach(cleanup);
    
    it('should reset the balls and strikes to 0', () => {
      const { getByTestId } = render(<Homepage />);
      const btnHit = getByTestId(/^btn-hit$/i);
      const btnStrike = getByTestId(/^btn-strike$/i);
      const btnBall = getByTestId(/^btn-ball$/i);
      const strikeValue = getByTestId(/^strikes$/i)
      const ballValue = getByTestId(/^balls$/i)

      fireEvent.click(btnBall)
      fireEvent.click(btnBall)
      fireEvent.click(btnStrike)
      fireEvent.click(btnStrike)
      expect(Number(strikeValue.textContent)).toBe(2);
      expect(Number(ballValue.textContent)).toBe(2);

      fireEvent.click(btnHit);
      expect(Number(strikeValue.textContent)).toBe(0);
      expect(Number(ballValue.textContent)).toBe(0);
    });
  });

  describe('<button>foul</button>', () => {
    afterEach(cleanup);
    
    it('should increment the strikes but not the balls', () => {
      const { getByTestId } = render(<Homepage />);
      const btnFoul = getByTestId(/^btn-foul$/i);
      const strikeValue = getByTestId(/^strikes$/i)
      const ballValue = getByTestId(/^balls$/i)

      fireEvent.click(btnFoul)
      expect(Number(strikeValue.textContent)).toBe(1);
      expect(Number(ballValue.textContent)).toBe(0);
    });

    it('should not increase strikes beyound the value 2', () => {
      const { getByTestId } = render(<Homepage />);
      const btnFoul = getByTestId(/^btn-foul$/i);
      const strikeValue = getByTestId(/^strikes$/i)

      expect(Number(strikeValue.textContent)).toBe(0);
      fireEvent.click(btnFoul)
      expect(Number(strikeValue.textContent)).toBe(1);
      fireEvent.click(btnFoul)
      expect(Number(strikeValue.textContent)).toBe(2);
      fireEvent.click(btnFoul)
      expect(Number(strikeValue.textContent)).toBe(2);
      fireEvent.click(btnFoul)
      expect(Number(strikeValue.textContent)).toBe(2);
    });
  });
});

