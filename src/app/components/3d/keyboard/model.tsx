import {
  useGLTF,
  OrbitControls,
  GizmoHelper,
  PerspectiveCamera,
  PivotControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { motion } from "framer-motion-3d";
import { RefObject, useRef } from "react";

useGLTF.preload("/img/mug.glb");

function Keyboard() {
  const ref = useRef<THREE.Mesh>(); // Update the type of ref to THREE.Mesh

  const { nodes, scene } = useGLTF("/img/mug.glb");
  console.log(nodes, "nodes");
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={[180, 350, -250]}
        far={900}
        fov={3.6}
        coordinateSystem={2000}
      />
      <ambientLight intensity={4} color={"#1c70bf"} />
      <directionalLight position={[10, 90, -50]} color="white" />
      <group dispose={null}>
        <motion.mesh
          ref={ref as any}
          geometry={(nodes.Cloud_4007 as any).geometry}
          scale={[1, 1, 1]}
          position={[1, -1, 1]}
          rotation={[-1, 0, 0]}
        >
          {" "}
          {/* Access geometry directly on nodes.Cube069 */}
          <meshStandardMaterial />
        </motion.mesh>
      </group>
      <GizmoHelper />

      <OrbitControls />
    </Canvas>
  );
}

export default Keyboard;
