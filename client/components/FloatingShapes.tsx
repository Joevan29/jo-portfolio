"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';
import { Color } from 'three';

const Geometries = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const count = isMobile ? 4 : 7;

    const shapes = useMemo(() => {
        return new Array(8).fill(0).map(() => ({
            x: (Math.random() - 0.5) * 16,
            y: (Math.random() - 0.5) * 16,
            z: (Math.random() - 0.5) * 6,
            rotx: Math.random() * Math.PI,
            roty: Math.random() * Math.PI,
            scale: 0.5 + Math.random() * 0.8,
            type: Math.floor(Math.random() * 5),
            color: Math.random() > 0.5 ? "#4f46e5" : "#06b6d4"
        })).slice(0, count);
    }, [count]);

    return (
        <>
            {shapes.map((shape, i) => (
                <RigidBody
                    key={i}
                    position={[shape.x, shape.y, shape.z]}
                    rotation={[shape.rotx, shape.roty, 0]}
                    colliders="hull"
                    restitution={1.2}
                    friction={0}
                    linearDamping={0.4}
                    angularDamping={0.4}
                >
                    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                        <mesh scale={shape.scale}>
                            {shape.type === 0 && <boxGeometry args={[1, 1, 1]} />}
                            {shape.type === 1 && <sphereGeometry args={[0.8, 16, 16]} />}
                            {shape.type === 2 && <octahedronGeometry args={[1, 0]} />}
                            {shape.type === 3 && <torusGeometry args={[0.6, 0.25, 12, 24]} />}
                            {shape.type === 4 && <coneGeometry args={[0.7, 1.2, 16]} />}

                            <MeshTransmissionMaterial
                                backside={false}
                                samples={isMobile ? 2 : 4}
                                resolution={isMobile ? 128 : 256}
                                thickness={0.6}
                                roughness={0.2}
                                anisotropy={0}
                                chromaticAberration={isMobile ? 0 : 0.3}
                                color={isMobile ? "#4f46e5" : shape.color}
                                distortion={0.1}
                                distortionScale={0.3}
                                temporalDistortion={0}
                            />
                        </mesh>
                    </Float>
                </RigidBody>
            ))}
        </>
    );
};

export default function FloatingShapes() {
    return (
        <div className='absolute inset-0 z-0 bg-transparent pointer-events-none'>
            <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 18], fov: 40 }}
                gl={{
                    powerPreference: "high-performance",
                    antialias: false,
                    stencil: false,
                    depth: false,
                    alpha: true
                }}
            >
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={4} color="#a855f7" />
                <pointLight position={[-10, -10, -10]} intensity={4} color="#06b6d4" />
                <Environment preset="city" />

                <Physics gravity={[0, 0, 0]} timeStep="vary">
                    <Geometries />
                    <CuboidCollider position={[0, -14, 0]} args={[20, 1, 5]} />
                    <CuboidCollider position={[0, 14, 0]} args={[20, 1, 5]} />
                    <CuboidCollider position={[-18, 0, 0]} args={[1, 20, 5]} />
                    <CuboidCollider position={[18, 0, 0]} args={[1, 20, 5]} />
                </Physics>
            </Canvas>
        </div>
    );
}
