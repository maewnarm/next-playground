//@ts-nocheck
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export function Model(props) {
  const response = useGLTF("/Layout rev1.glb");
  const { nodes, materials } = response;
  console.log(response);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[2, 0.147, 1.106]}
        scale={[0.378, 0.075, 0.327]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[1.303, 0.147, 1.106]}
        scale={[0.296, 0.075, 0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[1.788, 0.147, 0.468]}
        scale={[0.93, 0.075, 0.302]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-1.188, 0.147, 0.527]}
        scale={[0.654, 0.075, 0.142]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-1.188, 0.147, -0.777]}
        scale={[0.542, 0.075, 0.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-1.188, 0.147, -1.772]}
        scale={[0.542, 0.075, 0.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-1.188, 0.147, 0.851]}
        scale={[0.559, 0.075, 0.451]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[1.299, 0.147, -1.784]}
        scale={[0.678, 0.077, 0.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[1.774, 0.147, -1.784]}
        scale={[0.212, 0.075, 0.619]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[0.677, 0.147, -0.512]}
        scale={[0.379, 0.075, 0.47]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[2.553, 0, -1.784]}
        scale={[2.547, 0.06, 1.793]}
      />
    </group>
  );
}

useGLTF.preload("/Layout rev1.glb");
