import { useContext, useEffect, useRef, useState } from "react"
import { AnimationContext } from "../design_components/AnimationContext"
import { Box } from "@mui/material"
import zIndex from "@mui/material/styles/zIndex"
import './Terminal.css'
import { MouseContext } from "../design_components/MouseContext"




export default function Terminal({ height, setHeight, width }) {
    const { animationStep } = useContext(AnimationContext)
    // const [height, setHeight] = useState(200);
    const [isResizing, setIsResizing] = useState(false);
    const { setIsHovered } = useContext(MouseContext)

    const [active, setActive] = useState(true)
    const [prevKey, setPrevKey] = useState('')
    const [resizerColor, setResizerColor] = useState("#11141a")

    const terminalRef = useRef();
    const handleKeyPress = (event) => {
        console.log(event.key + " " + prevKey)

        if (event.key === 'e' && prevKey === 'Control') {
            if (active) {
                setHeight(0)
            }
            else {
                setHeight(300)
            }
            setActive(prevState => !prevState);
        }

        setPrevKey(event.key);
    };
    const handleKeyUp = (event) => {
        setPrevKey('');
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);

            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [prevKey]);
    const handleMouseEnter = () => {
        setIsHovered(true);
        setResizerColor('#A7BED5')
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (!isResizing)
            setResizerColor("#11141a")
    };
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isResizing) {
                const bbox = terminalRef.current.getBoundingClientRect()
                console.log(bbox)
                setHeight(bbox.bottom - e.clientY);
            }
        };

        const handleMouseUp = () => {
            if (isResizing) {
                setIsResizing(false);
                setResizerColor("#11141a")
            }
        };

        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);

    const handleMouseDown = () => setIsResizing(true);

    return (
        <>
            {animationStep >= 1 && active ?
                <Box ref={terminalRef} className="fade-component" sx={{
                    position: 'relative',
                    backgroundColor: ' #1a1f28',
                    height: height,
                    minHeight: height,
                    zIndex: 2,
                    alignSelf: 'flex-end',
                    width: width
                }}>
                    <Box className="resizer" onMouseDown={handleMouseDown} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} sx={{ backgroundColor: 'transparent', borderTop: 1, borderColor: resizerColor }} />


                </Box >
                : <></>
            }</>
    )
}