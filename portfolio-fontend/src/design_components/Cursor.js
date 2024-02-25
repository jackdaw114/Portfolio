// Cursor.js
import React, { useState, useEffect, useContext, useRef } from 'react';
import './Cursor.css';
import { MouseContext } from './MouseContext';
import { AnimationContext } from './AnimationContext';
import { Box } from '@mui/material';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isHovered } = useContext(MouseContext);
  const [trail, setTrail] = useState([0]);
  const [clickRipple, setClickRipple] = useState([]);

  const { bColor } = useContext(AnimationContext)
  const moveCursor = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
    setTrail(prevTrail => {
      const newTrail = [...prevTrail, { id: Date.now(), x: e.pageX, y: e.pageY }];
      if (newTrail.length > 10) {
        return newTrail.slice(1);
      }
      return newTrail;
    });
    setTimeout(() => {
      setTrail(prevTrail => prevTrail.slice(1));
    }, 200);
  };
  useEffect(() => {

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const mouseClick = (e) => {
    setClickRipple(prevRipple => {
      const newRipple = [...prevRipple, { id: Date.now(), x: e.pageX, y: e.pageY }];
      if (newRipple.length > 10) {
        return newRipple.slice(1);
      }
      return newRipple;
    });
    setTimeout(() => {
      setClickRipple(prevRipple => prevRipple.slice(1));
    }, 400);
  };
  useEffect(() => {

    document.addEventListener('click', mouseClick);

    return () => {
      document.removeEventListener('click', mouseClick);
    };
  }, []);



  const canvasRef = useRef(null);



  return (
    <>
      <Box
        id='cursor_div'
        className={`cursor ${isHovered ? 'hovering-button' : ''}`}

        sx={{ borderWidth: '3px', borderColor: bColor[0] > 255 / 2 || bColor[1] > 255 / 2 || bColor[2] > 255 / 2 ? 'black' : '#a6e3a3 ', left: position.x, top: position.y }}
      />

      <div className="click-ripple-container">
        {clickRipple.map((rippleItem) => (
          <div
            className="click"
            key={rippleItem.id}
            style={{
              top: rippleItem.y, left: rippleItem.x, boxShadow: `inset 0 0 10px rgba(${255 - bColor[0]},${255 - bColor[1]},${255 - bColor[2]}, 0.4),
              0 0 10px rgba(${255 - bColor[0]},${255 - bColor[1]},${255 - bColor[2]}, 0.9)`
            }}
          ></div>
        ))}
      </div>
      {trail.length ? <svg className='pointer-disable' width="100vw" height="100vh" style={{ position: 'fixed', zIndex: 9999 }}>

        <path className='pointer-disable' d={`M ${trail[trail.length - 1].x} ${trail[trail.length - 1].y} Q ${trail[parseInt((trail.length - 1) / 1.15)].x} ${trail[parseInt((trail.length - 1) / 1.15)].y}, ${trail[parseInt((trail.length - 1) / 1.3)].x} ${trail[parseInt((trail.length - 1) / 1.3)].y}  T ${trail[parseInt((trail.length - 1) / 2)].x} ${trail[parseInt((trail.length - 1) / 2)].y}`}
          stroke-width="2"
          fill="none"
          stroke={bColor[0] > 255 / 2 || bColor[1] > 255 / 2 || bColor[2] > 255 / 2 ? 'black' : '#a6e3a3'}
        />
      </svg> : <></>}



    </>
  );
};

export default Cursor;