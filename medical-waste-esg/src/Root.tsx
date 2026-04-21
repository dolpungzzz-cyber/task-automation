import "./index.css";
import { Composition } from "remotion";
import { MedicalWasteESG, TOTAL_DURATION } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MedicalWasteESG"
      component={MedicalWasteESG}
      durationInFrames={TOTAL_DURATION}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
