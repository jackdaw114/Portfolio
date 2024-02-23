import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AnimationContext } from "../design_components/AnimationContext";

// SHOULD BE CALLED FIRST ANIMATION
export default function MainAnimation() {
    const [text, setText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [invert, setInvert] = useState(false)
    const { setBColor, bColor, animationStep, setAnimationStep } = useContext(AnimationContext)

    useEffect(() => {
        const textToType = "Hi, Im Jason Sampy.";
        let index = 0;


        // Toggle cursor visibility every 500ms
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);

        const interval = setInterval(() => {
            setText(textToType.slice(0, index));
            index++;
            if (index > textToType.length) {
                clearInterval(interval);

                setTimeout(() => {
                    setBColor([33, 39, 51, 1])
                    const reset = setInterval(() => {
                        setText(textToType.slice(0, index));
                        index--;
                        if (index < 0) {
                            clearInterval(reset);
                            setTimeout(() => {
                                clearInterval(cursorInterval);
                                // setVisible(false)

                                setAnimationStep(1);
                            }, 1500)
                        }
                    }, 50);
                }, 1500)
            }
        }, 100);
        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };
    }, []);
    return (
        <>
            {animationStep == 0 ?
                <Box sx={{
                    minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: `rgba(${bColor.join(', ')})`, transition: 'background-color 1s ease'
                }} >
                    <Typography variant="h2" sx={{
                        color: `rgba(${255 - bColor[0]},${255 - bColor[1]},${255 - bColor[2]},${bColor[3]})`, transition: 'color 1s ease'
                    }}>{text}
                        {!cursorVisible ? '|' : '\u202F'}
                    </Typography>
                </Box > : <></>
            }

        </>
    )
}