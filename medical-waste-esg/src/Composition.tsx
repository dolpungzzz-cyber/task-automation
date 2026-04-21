import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { TitleScene } from "./scenes/TitleScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { WasteTypesScene } from "./scenes/WasteTypesScene";
import { ESGScene } from "./scenes/ESGScene";
import { SolutionScene } from "./scenes/SolutionScene";
import { OutroScene } from "./scenes/OutroScene";

// Scene timing (in frames at 30fps)
// Total: 90s = 2700 frames
const SCENES = {
  title:    { from: 0,    duration: 450 },  // 0–15s
  problem:  { from: 450,  duration: 450 },  // 15–30s
  types:    { from: 900,  duration: 600 },  // 30–50s
  esg:      { from: 1500, duration: 450 },  // 50–65s
  solution: { from: 1950, duration: 450 },  // 65–80s
  outro:    { from: 2400, duration: 300 },  // 80–90s
};

export const MedicalWasteESG: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={SCENES.title.from} durationInFrames={SCENES.title.duration}>
        <TitleScene />
      </Sequence>
      <Sequence from={SCENES.problem.from} durationInFrames={SCENES.problem.duration}>
        <ProblemScene />
      </Sequence>
      <Sequence from={SCENES.types.from} durationInFrames={SCENES.types.duration}>
        <WasteTypesScene />
      </Sequence>
      <Sequence from={SCENES.esg.from} durationInFrames={SCENES.esg.duration}>
        <ESGScene />
      </Sequence>
      <Sequence from={SCENES.solution.from} durationInFrames={SCENES.solution.duration}>
        <SolutionScene />
      </Sequence>
      <Sequence from={SCENES.outro.from} durationInFrames={SCENES.outro.duration}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
