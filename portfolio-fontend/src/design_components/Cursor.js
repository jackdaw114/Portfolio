// Cursor.js
import React, { useState, useEffect, useContext } from 'react';
import './Cursor.css';
import { MouseContext } from './MouseContext';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isHovered } = useContext(MouseContext);
  const [trail, setTrail] = useState([0]);


  const handleAnimationEnd = () => {
    const cursorDiv = document.getElementById('cursor_div');
    cursorDiv.classList.remove('click');
  };
  const moveCursor = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
    setTrail(prevTrail => {
      const newTrail = [...prevTrail, { id: Date.now(), x: e.pageX, y: e.pageY }];
      if (newTrail.length > 20) {
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

  useEffect(() => {
    const mouseClick = () => {
      const cursorDiv = document.getElementById('cursor_div');
      cursorDiv.classList.add('click');
    };

    document.addEventListener('click', mouseClick);

    return () => {
      document.removeEventListener('click', mouseClick);
    };
  }, []);


  return (
    <>
      <div
        id='cursor_div'
        className={`cursor ${isHovered ? 'hovering-button' : ''}`}
        onAnimationEnd={handleAnimationEnd}
        style={{ left: position.x, top: position.y }}
      />
      {/* <div className="trail-container">
        {trail.map((trailItem) => (
          <div
            className="trail"
            style={{ top: trailItem.y, left: trailItem.x }}
          ></div>
        ))}
      </div> */}
      <svg width="100vw" height="100vh" style={{ position: 'fixed', zIndex: 9999 }}>
        <path d={`M ${trail[trail.length - 1].x} ${trail[trail.length - 1].y} Q ${trail[parseInt((trail.length - 1) / 1.15)].x} ${trail[parseInt((trail.length - 1) / 1.15)].y}, ${trail[parseInt((trail.length - 1) / 1.3)].x} ${trail[parseInt((trail.length - 1) / 1.3)].y}  T ${trail[parseInt((trail.length - 1) / 2)].x} ${trail[parseInt((trail.length - 1) / 2)].y}`}
          stroke-width="3"
          fill="none"
          stroke="black"
        />
      </svg>



    </>
  );
};

export default Cursor;
