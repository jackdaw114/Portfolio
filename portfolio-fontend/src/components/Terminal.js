import { useContext, useEffect, useState } from "react"
import { AnimationContext } from "../design_components/AnimationContext"
import { Box } from "@mui/material"

export default function Terminal() {
    const { animationStep } = useContext(AnimationContext)
    const [active, setActive] = useState(true)
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 't') {
                setActive(prevState => {
                    return !prevState
                })
            }

        }; document.addEventListener('keydown', handleKeyPress);


        return () => {
            console.log("eventremoveed")
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);


    return (
        <>
            {animationStep >= 1 && active ?
                <Box sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '20em',
                    backgroundColor: '#1a1f28',
                    borderTop: 1,
                    borderColor: "#11141a"
                }}>

                </Box>
                : <></>
            }</>
    )
}