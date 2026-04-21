import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { TitleScene }       from "./scenes/TitleScene";
import { ProblemScene }     from "./scenes/ProblemScene";
import { WasteTypesScene }  from "./scenes/WasteTypesScene";
import { SeparationScene }  from "./scenes/SeparationScene";
import { ESGScene }         from "./scenes/ESGScene";
import { BenefitsScene }    from "./scenes/BenefitsScene";
import { SolutionScene }    from "./scenes/SolutionScene";
import { OutroScene }       from "./scenes/OutroScene";

// Scene durations in frames (30fps)
const S = {
  title:      480, // 16s
  problem:    510, // 17s
  wasteTypes: 660, // 22s
  separation: 510, // 17s
  esg:        510, // 17s
  benefits:   390, // 13s
  solution:   390, // 13s
  outro:      330, // 11s
} as const;

const T = 20; // transition duration in frames

// Total = sum(scenes) - transitions * T
// = 3780 - 7*20 = 3780 - 140 = 3640  (~121.3s)
// nudge outro up to make exactly 3600:
// 3780 - 140 = 3640, but we want 3600, so reduce total scenes by 40
// => reduce outro to 290 frames
// 480+510+660+510+510+390+390+290 = 3740 - 140 = 3600 ✓
export const TOTAL_DURATION = 3600; // exactly 2 min

export const MedicalWasteESG: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={480}>
        <TitleScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

      <TransitionSeries.Sequence durationInFrames={510}>
        <ProblemScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: T })} />

      <TransitionSeries.Sequence durationInFrames={660}>
        <WasteTypesScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: T })} />

      <TransitionSeries.Sequence durationInFrames={510}>
        <SeparationScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={wipe({ direction: "from-left" })} timing={linearTiming({ durationInFrames: T })} />

      <TransitionSeries.Sequence durationInFrames={510}>
        <ESGScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: T })} />

      <TransitionSeries.Sequence durationInFrames={390}>
        <BenefitsScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

      <TransitionSeries.Sequence durationInFrames={390}>
        <SolutionScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

      <TransitionSeries.Sequence durationInFrames={290}>
        <OutroScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
