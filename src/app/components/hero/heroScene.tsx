import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, useGLTF } from "@react-three/drei";
import { useScroll, useTransform, useSpring } from "framer-motion";

import { useRef } from "react";
import * as THREE from "three";
import AnimazionePrincipale from "./animazione";

useGLTF.preload("/img/keyboard.glb");

function HeroScene() {
  const target = useRef<HTMLCanvasElement>(null);
  //const {actions, names} = useAnimations(animations, group);
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 0.1], [0, 4.5]);
  //const opacity = useTransform(scrollYProgress, [0, 200], [0.5, 1]);
  const ref = useRef<THREE.Mesh>(); // Update the type of ref to THREE.Mesh
  const toCenter = useTransform(scrollYProgress, [0, 0.1], [-20, -100]);

  const springPhysics = {
    stiffness: 90,
    mass: 0.1,
    damping: 20,
    restDelta: 0.001,
  };

  const animRotate = useSpring(rotate, springPhysics);
  const animToCenter = useSpring(toCenter, springPhysics);
  const { nodes, scene, animations } = useGLTF("/img/animazione.glb");
  console.log(nodes, "scene");
  return (
    <>
      {/*  <Test /> */}
      <Canvas ref={target} style={{ zIndex: 2 }}>
        <PerspectiveCamera
          makeDefault
          position={[180, 350, -250]}
          far={800}
          fov={13.2}
          coordinateSystem={2000}
        />
        <ambientLight intensity={4} color={"#1c70bf"} />
        <directionalLight position={[10, 90, -50]} color="white" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          enableDamping={true}
          minPolarAngle={1}
          maxPolarAngle={1}
        />
        <AnimazionePrincipale />
      </Canvas>
    </>
  );
}
export default HeroScene;
