import { useContext } from "react"
import { AnimationContext } from "../design_components/AnimationContext"
import { Box } from "@mui/material"
import Header from "../design_components/Header"

export default function LandingPage() {
    const { animationStep, bColor } = useContext(AnimationContext)

    return (
        <>
            {
                animationStep === 1 ? <Box sx={{ backgroundColor: `rgba(${bColor.join(', ')})`, width: '100vw', height: '100vh', position: 'absolute', }}>
                    <Header />

                </Box> : <></>
            }
        </>
    )
}