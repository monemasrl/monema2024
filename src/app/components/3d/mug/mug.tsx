import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

useGLTF.preload("/img/mug.glb");

function Mug() {
  const ref = useRef<THREE.Mesh>(); // Update the type of ref to THREE.Mesh

  const { nodes, scene } = useGLTF("/img/mug.glb");
  useFrame(() => {
    ref.current && (ref.current.rotation.z += 0.01);
  });

  return (
    <group dispose={null}>
      <mesh
        ref={ref as any}
        geometry={(nodes.Cloud_4007 as any).geometry}
        scale={[2, 2, 2.7]}
        position={[90, 50, 0]}
        rotation={[7.5, 3.7, 0]}
      >
        <meshNormalMaterial wireframe flatShading transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export default Mug;
