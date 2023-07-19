/* eslint-disable */

import React, { useState } from 'react';
import './App.scss';
import ColorButton from './Components/ColorButton/ColorButton';

export const App: React.FC = () => {
  const defaultColors = "white";
  const [buttonFirst, setButtonFirst] = useState(defaultColors);
  const [buttonSecond, setButtonSecond] = useState(defaultColors);
  const [buttonThird, setButtonThird] = useState(defaultColors);
  const [buttonFourth, setButtonFourth] = useState(defaultColors);

  const randomColor = () => {
    const variablesLetter = '1234567890ABCDEF';

    let hex = '#';

    for (let i = 0; i < 6; i++) {
      hex += variablesLetter[Math.floor(Math.random() * 16)];
    };

    return hex;
  };

  const changeColorFirst = () => {
    const randomColors = randomColor();

    setButtonFirst(randomColors);
  };

  const changeColorSecond = () => {
    const randomColors = randomColor();

    setButtonSecond(randomColors);
  };

  const changeColorThird = () => {
    const randomColors = randomColor();

    setButtonThird(randomColors);
  };

  const changeColorFourth = () => {
    const randomColors = randomColor();

    setButtonFourth(randomColors);
  };

  const DoubleClickFirst = () => {
    setButtonFirst(defaultColors);
  }

  const DoubleClickSecond = () => {
    setButtonSecond(defaultColors);
  }

  const DoubleClickThird = () => {
    setButtonThird(defaultColors);
  }

  const DoubleClickFourth = () => {
    setButtonFourth(defaultColors);
  }

  const ChangeDefault = () => {
    setButtonFirst(defaultColors);
    setButtonSecond(defaultColors);
    setButtonThird(defaultColors);
    setButtonFourth(defaultColors);
  }

  return (
    <div className="starter">
      <div className="grid">
        <div className="grid__item">
          <button
            type="button"
            className="button--corners"
          >
            Corners
          </button>
        </div>
        <div className="grid__item">
          <button
            onClick={changeColorFirst}
            onDoubleClick={DoubleClickFirst}
            style={{backgroundColor: buttonFirst}}
          >
            Click me
          </button>
        </div>
        <div className="grid__item">
          <h1>3</h1>
        </div>
        <div className="grid__item">
          <button
            onClick={changeColorSecond}
            onDoubleClick={DoubleClickSecond}
            style={{backgroundColor: buttonSecond}}
          >
            Click me
          </button>
        </div>
        <div className="grid__item">
          <button
            onClick={ChangeDefault}
          >
            Reset
          </button>
        </div>
        <div className="grid__item">
          <button
            onClick={changeColorThird}
            onDoubleClick={DoubleClickThird}
            style={{backgroundColor: buttonThird}}
          >
            Click me
          </button>
        </div>
        <div className="grid__item">
          <h1>7</h1>
        </div>
        <div className="grid__item">
          <button
            onClick={changeColorFourth}
            onDoubleClick={DoubleClickFourth}
            style={{backgroundColor: buttonFourth}}
          >
            Click me
          </button>
        </div>
        <div className="grid__item">
          <h1>9</h1>
        </div>
      </div>
    </div>
  );
};
