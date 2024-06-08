/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 animazione.glb 
*/

import React, { use, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useScroll, scrollInfo, clamp } from 'framer-motion'
import * as THREE from 'three'
export default function AnimazionePrincipale(props) {
  const group = useRef()
  const { nodes, materials, animations, scene } = useGLTF('/img/animazione.glb')
  const { actions, names } = useAnimations(animations, group)

  const { scrollY } = useScroll({});

  useEffect(() => {
    names.forEach((name) => {
      actions[name].clampWhenFinished = true;
      actions[name].setDuration(1);
      actions[name].setLoop(THREE.LoopOnce);
      actions[name].play();
    })
  }, [])
  useFrame(() => {
    group.current.rotation.y = scrollY.get() * -.002;
  }
  )


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="NurbsPath" position={[-19.127, 33.611, -9.205]} rotation={[0, 0, -Math.PI / 2]} />
        <group name="NurbsPath001" position={[-32.327, 36.746, -15.052]} rotation={[0, 0, -Math.PI / 2]} />
        <group name="NurbsPath002" position={[-47.85, 22.617, 5.73]} rotation={[0, 0, -Math.PI / 2]} />
        <group name="NurbsPath003" position={[7.337, 40.02, -6.811]} rotation={[0, 0, -1.554]} />
        <mesh name="Cloud_4007" geometry={nodes.Cloud_4007.geometry} position={[-51.098, 68.671, -9.205]} rotation={[0.117, -0.49, -2.341]} scale={[0.944, 1.029, 1.361]}>
          <meshStandardMaterial />
        </mesh>
        <mesh name="Cube069" geometry={nodes.Cube069.geometry} position={[6.829, 70.588, -6.811]} rotation={[0, 0, 0.017]} scale={[0.152, 0.342, 0.277]} >
          <meshStandardMaterial />
        </mesh>
        <mesh name="Cube088" geometry={nodes.Cube088.geometry} material={nodes.Cube088.material} position={[4.052, 210.376, 5.73]} rotation={[-2.203, 1.553, -0.925]} >
          <meshStandardMaterial />
        </mesh>
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[34.745, 41.955, -6.877]} rotation={[1.7, 0, 3]}>
          <meshStandardMaterial />
        </mesh>
        {/*    <group name="Right_Cube004" position={[46.98, 54.501, -5.946]} rotation={[-0.002, -0.786, -0.003]} scale={2.412}>
          <mesh name="Right_Cube004_1" geometry={nodes.Right_Cube004_1.geometry} material={materials.Plastic}>
            <meshStandardMaterial />
          </mesh>
          <mesh name="Right_Cube004_2" geometry={nodes.Right_Cube004_2.geometry} material={materials.Glass}>
            <meshStandardMaterial />
          </mesh>
        </group> */}



        <mesh name="mouse" geometry={nodes.mouse.geometry} material={nodes.mouse.material} position={[-7.056, 55.964, -29.119]} rotation={[Math.PI, -1.373, Math.PI]} scale={[1.509, 0.854, 1.106]} >
          <meshStandardMaterial />
        </mesh>
        <mesh name="Banana_Cube038" geometry={nodes.Banana_Cube038.geometry} material={materials.Yellow} position={[-6.225, 88.901, -15.052]} rotation={[-0.733, 0.018, 0.103]} scale={-14.477}>
          <meshStandardMaterial />
        </mesh>

      </group>

    </group>
  )
}

useGLTF.preload('/animazione.glb')
