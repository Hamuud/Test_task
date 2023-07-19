/* eslint-disable */

import React, { useState } from 'react';

type Props = {
  defaultColor: string;
};

const ColorButton: React.FC<Props> = ({ defaultColor }) => {
  const [color, setColor] = useState(defaultColor);

  const randomColor = () => {
    const variablesLetter = '1234567890ABCDEF';

    let hex = '#';

    for (let i = 0; i < 6; i++) {
      hex += variablesLetter[Math.floor(Math.random() * 16)];
    };

    return hex;
  };

  const changeColor = () => {
    const randomColors = randomColor();

    setColor(randomColors);
  };

  const DoubleClick = () => {
    setColor(defaultColor);
  }

  return (
    <button
      type="button"
      className="button--click"
      onClick={changeColor}
      onDoubleClick={DoubleClick}
      style={{backgroundColor: color}}
    >
      Click me
    </button>
  )
}

export default ColorButton;