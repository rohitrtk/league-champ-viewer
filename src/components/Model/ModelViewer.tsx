import { Canvas } from "@react-three/fiber";

import Model from "./Model";
import Controls from "./Controls";

interface Props {
  input: string;
}

const ModelViewer = ({ input }: Props) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <Controls />

      <Model input={input} />
    </Canvas>
  );
};

export default ModelViewer;
