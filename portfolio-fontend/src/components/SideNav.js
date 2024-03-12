import { useContext, useEffect, useRef, useState } from "react"
import { AnimationContext } from "../design_components/AnimationContext"
import { Box, Typography } from "@mui/material";
import { MouseContext } from "../design_components/MouseContext";
import "./SideNav.css"

const side_bar_width = 66

export default function SideNav({ width, setWidth }) {
    const { animationStep } = useContext(AnimationContext)
    const [resizerColor, setResizerColor] = useState("#11141a")

    const [isResizing, setIsResizing] = useState(false);
    const { setIsHovered } = useContext(MouseContext)

    const sideNavRef = useRef();

    const handleMouseEnter = () => {
        setIsHovered(true);
        setResizerColor('#A7BED5')
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (!isResizing)
            setResizerColor("#11141A")
    };
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isResizing) {
                const bbox = sideNavRef.current.getBoundingClientRect()
                if (e.clientX < 200)
                    setWidth(side_bar_width)
                else
                    setWidth(e.clientX);
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
            {animationStep === 1 ?
                <>
                    <Box ref={sideNavRef} className="fade-component" sx={{
                        position: 'relative',

                        width: width,
                        minWidth: width,
                        height: '100%',
                        backgroundColor: '#1a1f28',

                        zIndex: 2
                    }}>
                        <Box onMouseDown={handleMouseDown} onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} sx={{ backgroundColor: 'transparent', borderRight: 1, borderColor: resizerColor, height: '100%', width: 6, float: 'right' }} />

                        <Box sx={{ display: 'flex', height: '100%' }}>
                            <span className="side-span" style={{ minWidth: side_bar_width - 6, maxWidth: side_bar_width - 6, width: side_bar_width - 6, }}>
                                ads;lkfasdfljk
                                {/* TODO: menu list here */}
                            </span>
                            <span className="side-nav-main side-span" style={{ width: width - side_bar_width }}>
                                <Typography sx={{
                                    paddingLeft: 4,
                                    paddingTop: 1,
                                    fontSize: 18
                                }}>
                                    EXPLORER

                                </Typography>
                                {/* TODO: dynamic list here? */}
                            </span>

                        </Box>

                    </Box >
                </> : <></>
            }</>
    )
}