import { useEffect, useRef } from "react";
import { AnimationMixer } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Props {
  input: string;
  rotation: number;
}

const Model = ({ input, rotation }: Props) => {
  const mixer = useRef<AnimationMixer>();
  const gltf = useLoader(GLTFLoader, input);

  useEffect(() => {
    if (!gltf) {
      return;
    }

    mixer.current = new AnimationMixer(gltf.scene);
    const action = mixer.current.clipAction(gltf.animations[1]);
    action.play();
  }, [gltf]);

  useFrame((_, delta) => mixer.current?.update(delta));

  return gltf ? (
    <primitive
      object={gltf.scene}
      position={[0.75, -0.75, -1.5]}
      rotation={[0, -Math.PI / 3 + rotation, 0]}
      scale={[0.01, 0.01, 0.01]}
    />
  ) : (
    <></>
  );
};

export default Model;
