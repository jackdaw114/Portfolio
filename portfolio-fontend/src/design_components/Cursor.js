// Cursor.js
import React, { useState, useEffect, useContext } from 'react';
import './Cursor.css';
import { MouseContext } from './MouseContext';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isHovered } = useContext(MouseContext);
  const [trail, setTrail] = useState([]);


  const handleAnimationEnd = () => {
    const cursorDiv = document.getElementById('cursor_div');
    cursorDiv.classList.remove('click');
  };
  const moveCursor = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
    setTrail(prevTrail => {
      const newTrail = [...prevTrail, { id: Date.now(), x: e.pageX, y: e.pageY }];
      if (newTrail.length > 10) {
        return newTrail.slice(1); // Keep only the last 10 trail items
      }
      return newTrail;
    });
    setTimeout(() => {
      setTrail(prevTrail => prevTrail.slice(1));
    }, 500);
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
      <div className="trail-container">
        {trail.map((trailItem) => (
          <div
            className="trail"
            style={{ top: trailItem.y, left: trailItem.x }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Cursor;
