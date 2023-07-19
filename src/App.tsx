/* eslint-disable */

import React, { useState } from 'react';
import './App.scss';
import ColorButton from './Components/ColorButton/ColorButton';

export const App: React.FC = () => {

  const defaultHex = "white";

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
          <ColorButton 
            defaultColor={defaultHex}
          />
        </div>
        <div className="grid__item">
          <h1>3</h1>
        </div>
        <div className="grid__item">
          <ColorButton 
            defaultColor={defaultHex}
          />
        </div>
        <div className="grid__item">
          <h1>5</h1>
        </div>
        <div className="grid__item">
          <ColorButton 
            defaultColor={defaultHex}
          />
        </div>
        <div className="grid__item">
          <h1>7</h1>
        </div>
        <div className="grid__item">
          <ColorButton 
            defaultColor={defaultHex}
          />
        </div>
        <div className="grid__item">
          <h1>9</h1>
        </div>
      </div>
    </div>
  );
};
