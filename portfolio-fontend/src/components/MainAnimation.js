import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function MainAnimation() {
    const [text, setText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const textToType = "Hello, Im Jason Sampy.";
        let index = 0;

        const interval = setInterval(() => {
            setText(textToType.slice(0, index));
            index++;

            if (index > textToType.length) {
                clearInterval(interval);
            }
        }, 100);

        // Toggle cursor visibility every 500ms
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);

        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };
    }, []);
    return (
        <Box sx={{ minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <Typography variant="h1">{text}</Typography>
            </Box>
            {cursorVisible ? <Typography sx={{ borderRight: 5 }} variant="h1">&nbsp;</Typography> : <Typography sx={{ paddingRight: '5px' }} variant="h1"> &nbsp;</Typography>}
        </Box>

    )
}