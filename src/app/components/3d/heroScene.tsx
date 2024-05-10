import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";
import Keyboard from "./keyboard/model";
import Mug from "./mug/mug";
import Monitor from "./monitor/model";

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 0] }}>
      <Keyboard />

      <Preload all />
    </Canvas>
  );
}
export default HeroScene;
