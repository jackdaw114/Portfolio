import { useContext, useEffect, useRef, useState } from "react"
import { AnimationContext } from "../design_components/AnimationContext"
import { Box } from "@mui/material"
import Header from "../design_components/Header"
import ThreeDNav from "./ThreeDNav"
import Terminal from "./Terminal"
import SideNav from "./SideNav"
import "./LandingPage.css"
import LandingContent from "./LandingContent"
import { ReactComponent as RightArrow } from '../assets/chevron-right.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const TopTextSpan = ({ children }) => {
    return (
        <span style={{
            fontSize: '1.1em',
            fontFamily: 'Fira Code',
            color: 'rgba(113,125,140,0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </span>
    );
}
const ArrowWrapper = () => {
    return <RightArrow style={{ height: 20, width: 20, marginBottom: 2, paddingLeft: 2, paddingRight: 2 }} />
}
export default function LandingPage() {
    const { animationStep, bColor } = useContext(AnimationContext)
    const [sideNavWidth, setSideNavWidth] = useState(400);
    const [terminalHeight, setTerminalHeight] = useState(400);
    const [containerWidth, setContainerWidth] = useState();
    const [containerHeight, setContainerHeight] = useState();
    const containerRef = useRef(null)
    useEffect(() => {
        console.log(containerHeight)
        setContainerWidth(window.innerWidth - sideNavWidth);
        setContainerHeight(window.innerHeight - terminalHeight);
        console.log(containerHeight)
        const handleResize = () => {
            setContainerWidth(window.innerWidth - sideNavWidth);
            setContainerHeight(window.innerHeight - terminalHeight);

        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [sideNavWidth, terminalHeight]); // Call useEffect whenever sideNavWidth changes

    return (
        <>
            {
                animationStep === 1 ? <Box sx={{ backgroundColor: `rgba(${bColor.join(', ')})`, width: '100vw', height: '100vh', maxHeight: '100vh', display: 'flex', }}>

                    <Header sx={{ width: containerWidth }} />
                    <SideNav width={sideNavWidth} setWidth={setSideNavWidth} />
                    <Box ref={containerRef} sx={{ height: '100vh', display: 'flex', flexDirection: 'column', width: containerWidth, maxWidth: containerWidth, overflow: 'hidden' }}>
                        <Box className='content-box' sx={{ height: containerHeight, maxHeight: containerHeight }}>


                            <TopNavBar bColor={bColor} containerWidth={containerWidth}>
                                <TopTextSpan>
                                    home <ArrowWrapper />
                                </TopTextSpan>
                                <TopTextSpan>
                                    {/* loop here for location */}
                                </TopTextSpan>
                            </TopNavBar>



                            {/* use routing here  */}
                            <LandingContent height={containerHeight - 32 - 91} width={containerWidth} />
                            <ThreeDNav height={containerHeight - 32 - 91} />

                        </Box>
                        <Terminal height={terminalHeight} setHeight={setTerminalHeight} width={containerWidth} />

                    </Box>



                </Box > : <></>
            }
        </>
    )
}


const TopNavBar = ({ props, children, containerWidth, bColor }) => {
    return (

        <Box {...props} sx={{ maxHeight: '32px', height: '32px', backgroundColor: `rgba(${bColor.join(', ')})`, boxSizing: 'border-box', zIndex: 3, width: { containerWidth }, borderBottom: 3, borderColor: 'rgba(30,38,47,0.85)', alignItems: 'center', display: 'flex', paddingLeft: 2 }}>
            {children}
        </Box>
    )
}