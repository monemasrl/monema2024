import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { motion } from "framer-motion-3d";
import { RefObject, useRef } from "react";

useGLTF.preload("/img/keyboard.glb");

function Keyboard() {
  const ref = useRef<THREE.Mesh>(); // Update the type of ref to THREE.Mesh

  const { nodes, scene } = useGLTF("/img/keyboard.glb");

  useFrame(() => {
    ref.current && (ref.current.rotation.z += 0.003);
  });

  return (
    <group dispose={null}>
      <motion.mesh
        ref={ref as any}
        geometry={(nodes.Cube069 as any).geometry}
        /*        scale={[0.4, 1, 1]}
        position={[4, -8, 1]}
        initial={{ x: 4, y: -8, z: 3 }}
        animate={{ x: 1, y: 1, z: -100 }}
        transition={{ duration: 3 }} */
      >
        {" "}
        {/* Access geometry directly on nodes.Cube069 */}
        <meshNormalMaterial wireframe flatShading transparent opacity={0.15} />
      </motion.mesh>
    </group>
  );
}

export default Keyboard;
