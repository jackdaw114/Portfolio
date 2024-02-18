
import React, { createContext, useState } from 'react';

export const MouseContext = createContext();

export const MouseProvider = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const setTrue = () => {
        console.log('setTrue')
        setIsHovered(true);
    }
    const setFalse = () => {
        console.log('setFalse')
        setIsHovered(false);
    }
    return (
        <MouseContext.Provider value={{ isHovered, setTrue, setFalse }}>
            {children}
        </MouseContext.Provider>
    );
};
