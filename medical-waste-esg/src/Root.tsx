import "./index.css";
import { Composition } from "remotion";
import { MedicalWasteESG } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MedicalWasteESG"
        component={MedicalWasteESG}
        durationInFrames={30 * 90}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
