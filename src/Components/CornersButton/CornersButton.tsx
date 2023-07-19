import { useState } from "react";

const CornersButton = () => {
  const [position, setPosition] = useState({top: 0, left: 0});
  const [moving, setMoving] = useState(false);
  
  const moveButton = () => {
    if (moving) {
      const WindowWidth = window.innerWidth;
      const WindowHeigth = window.innerHeight;

      const newPosition = {
        top: Math.floor(Math.random() * (WindowHeigth - 40)),
        left: Math.floor(Math.random() * (WindowWidth - 40)),
      };

      setPosition(newPosition);
    };
  };

  const startMoving = () => {
    return setMoving(true);
  }

  const stopMoving = () => {
    return setMoving(false);
  }

  return (
    <button
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      onMouseEnter={startMoving}
      onMouseLeave={stopMoving}
    >
      Corners
    </button>
  );
}

export default CornersButton;