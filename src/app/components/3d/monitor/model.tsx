import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

useGLTF.preload("/img/monitor.glb");

function Monitor() {
  const ref = useRef<THREE.Mesh>(); // Update the type of ref to THREE.Mesh

  const { nodes, scene } = useGLTF("/img/monitor.glb");
  useFrame(() => {
    ref.current && (ref.current.rotation.y += 0.01);
  });

  return (
    <group dispose={null}>
      <mesh
        ref={ref as any}
        geometry={(nodes.Cube088 as any).geometry}
        scale={[1.3, 1.3, 1.3]}
        position={[0, 0, 0]}
        rotation={[1, 1, 1]}
      >
        <meshNormalMaterial wireframe flatShading transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export default Monitor;
