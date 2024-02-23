
import React, { createContext, useState } from 'react';

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
    const [animationStep, setAnimationStep] = useState(0);
    const [bColor, setBColor] = useState([255, 255, 255, 1]);

    return (
        <AnimationContext.Provider value={{ animationStep, setAnimationStep, bColor, setBColor }}>
            {children}
        </AnimationContext.Provider>
    );
};
