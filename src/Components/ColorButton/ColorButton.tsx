/* eslint-disable */

import React, { useState } from 'react';

type Props = {
  defaultColor: string;
  isReset: boolean;
};

const ColorButton: React.FC<Props> = ({ defaultColor, isReset }) => {
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
    if (!isReset) {
      const randomColors = randomColor();

      return setColor(randomColors);
    }

    return setColor("white");
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