
import React, { createContext, useState } from 'react';

export const MouseContext = createContext();

export const MouseProvider = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <MouseContext.Provider value={{ setIsHovered, isHovered, }}>
            {children}
        </MouseContext.Provider>
    );
};
