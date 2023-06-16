import { Canvas } from "@react-three/fiber";

import Model from "./Model";
import Controls from "./Controls";

interface Props {
  input: string;
  rotation: number;
}

const ModelViewer = ({ input, rotation }: Props) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <Controls />

      <Model input={input} rotation={rotation} />
    </Canvas>
  );
};

export default ModelViewer;
