import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";

const Controls = () => {
  const { camera, gl } = useThree();
  camera.position.set(0, 0, 0);

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    return () => controls.dispose();
  }, [camera, gl]);

  return null;
};

export default Controls;
