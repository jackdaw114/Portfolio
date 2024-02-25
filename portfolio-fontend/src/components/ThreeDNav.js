import React, { useContext, useRef, useState } from "react";
import { AnimationContext } from "../design_components/AnimationContext";
import { Canvas, useFrame } from "@react-three/fiber";
import './ThreeDNav.css';
import { Typography } from "@mui/material";

export default function ThreeDNav({ height, width }) {
    const { animationStep } = useContext(AnimationContext)
    return (
        <>
            {animationStep === 1 ?


                <Canvas className="three-canvas fade-component" style={{ pointerEvents: 'none', height: height, boxSizing: 'border-box' }}>
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <Box position={[-1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                </Canvas>


                : <></>

            }
        </>
    )
}


function Box(props) {
    const meshRef = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}
