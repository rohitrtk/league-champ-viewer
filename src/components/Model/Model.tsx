import { useEffect, useRef } from "react";
import { AnimationMixer } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useSelector } from "react-redux";
import { RootState } from "./../../store";

interface Props {
  input: string;
}

const Model = ({ input }: Props) => {
  const mixer = useRef<AnimationMixer>();
  const gltf = useLoader(GLTFLoader, input);

  const addedRotation = useSelector(
    (state: RootState) => state.champion.rotation
  );

  useEffect(() => {
    if (!gltf) {
      return;
    }

    mixer.current = new AnimationMixer(gltf.scene);
    const action = mixer.current.clipAction(gltf.animations[0]);
    action.play();
  }, [gltf]);

  useFrame((_, delta) => mixer.current?.update(delta));

  return gltf ? (
    <primitive
      object={gltf.scene}
      position={[0.75, -0.75, -1.5]}
      rotation={[0, -Math.PI / 3 + addedRotation, 0]}
      scale={[0.01, 0.01, 0.01]}
    />
  ) : (
    <></>
  );
};

export default Model;
