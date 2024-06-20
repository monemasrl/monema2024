import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import AnimazionePrincipale from "./animazione";

function HeroScene() {
  const target = useRef<HTMLCanvasElement>(null);
  //const {actions, names} = useAnimations(animations, group);

  return (
    <>
      {/*  <Test /> */}
      <Canvas ref={target} style={{ zIndex: 2 }}>
        <Suspense fallback={<h2>loading</h2>}>
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
        </Suspense>
      </Canvas>
    </>
  );
}
export default HeroScene;
useGLTF.preload("/img/animazione.glb");
