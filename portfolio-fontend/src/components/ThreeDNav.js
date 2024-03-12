import React, { useContext, useRef, useState } from "react";
import { AnimationContext } from "../design_components/AnimationContext";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import './ThreeDNav.css';
import { Typography } from "@mui/material";
import * as THREE from 'three';

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
                    <CameraController />
                    <SmokeParticles />
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

function SmokeParticles() {
    const particles = useRef();
    const border_width = 10;
    const border_height = 10;

    const numParticles = 2000;
    useFrame(() => {
        const positions = particles.current.geometry.attributes.position.array;

        for (let i = 0; i < numParticles * 3; i += 3) {
            // Update particle positions (simulate movement)
            positions[i + 1] += 0.01; // Move particles upwards
            positions[i + 2] += 0.01;
            if (positions[i + 1] > border_height / 2) positions[i + 1] = -border_height / 2; // Reset particles if they go too high
            if (positions[i + 2] > border_height / 2) positions[i + 2] = -border_height / 2;
        }

        particles.current.geometry.attributes.position.needsUpdate = true;
    });

    const particlesGeometry = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < numParticles; i++) {
        positions.push((Math.random() - 0.5) * border_width, (Math.random() - 0.5) * border_height, (Math.random() - 0.5) * border_height);
    }

    particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    return (
        <points ref={particles}>
            <bufferGeometry attach="geometry" {...particlesGeometry} />
            <pointsMaterial size={0.01} color={0x888888} fog={true} />
        </points>
    );
}





const CameraController = () => {
    const { camera } = useThree();

    // Update the camera's position and orientation
    React.useEffect(() => {
        if (camera) {
            camera.position.set(2, 1, 5); // Set camera position
            camera.lookAt(0, 0, 0); // Look at the center of the scene
        }
    }, [camera]);
    return (
        <>
        </>
    );
};