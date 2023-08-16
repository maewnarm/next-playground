// @ts-nocheck
"use client";
import { Model } from "@/components/model";
import { Bounds, CycleRaycast, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";
import React, { Suspense } from "react";

const Three = () => {
  return (
    <div className="three">
      <Canvas orthographic camera={{ position: [-3, 3, 3], zoom: 30 }}>
        <Suspense fallback={<p>Loading ...</p>}>
          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3}
            enableZoom={true}
            zoomSpeed={0.3}
          />
          <ambientLight intensity={0.1} />
          <directionalLight color={"white"} position={[0, 10, 10]} />
          <Selection>
            <EffectComposer multisampling={0} autoClear={false}>
              <Outline
                visibleEdgeColor="white"
                hiddenEdgeColor="white"
                blur
                edgeStrength={1}
              />
            </EffectComposer>
            <Bounds fit clip observe margin={1}>
              <Model position={[1.2, 0, 1]} />
            </Bounds>
          </Selection>
          <CycleRaycast
            preventDefault={true}
            onChanged={(objects, cycle) => set({ objects, cycle })}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Three;
