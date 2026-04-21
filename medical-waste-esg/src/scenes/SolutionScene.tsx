import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors, fonts } from "../components/theme";

const steps = [
  { num: "01", title: "폐기물 전담 교육", desc: "전 직원 연 2회 의료폐기물 분리배출 교육 의무화" },
  { num: "02", title: "색상·라벨 표준화", desc: "색상 코드·라벨 부착 → 오분류 90% 감소" },
  { num: "03", title: "IoT 스마트 용기", desc: "센서 기반 용량 감지 → 과충전·혼합 차단" },
  { num: "04", title: "처리 이력 투명공시", desc: "ESG 보고서에 폐기물 처리량·재활용률 공개" },
];

export const SolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: "#080b12",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 120px",
    }}>
      <h2 style={{
        opacity: headingOpacity,
        fontFamily: fonts.primary,
        fontSize: 44,
        fontWeight: 700,
        color: colors.white,
        textAlign: "center",
        marginBottom: 52,
      }}>
        <span style={{ color: colors.brandPurple }}>실천 가능한</span> 분리배출 솔루션
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, width: "100%" }}>
        {steps.map((step, i) => {
          const cardSpring = spring({ frame: frame - i * 10, fps, config: { damping: 18, stiffness: 85 } });
          const cardOpacity = interpolate(frame, [i * 10, i * 10 + 25], [0, 1], { extrapolateRight: "clamp" });
          return (
            <div key={i} style={{
              opacity: cardOpacity,
              transform: `scale(${interpolate(cardSpring, [0, 1], [0.92, 1])})`,
              background: "rgba(139,61,255,0.08)",
              border: "1px solid rgba(139,61,255,0.3)",
              borderRadius: 12,
              padding: "28px 32px",
              display: "flex",
              gap: 20,
              alignItems: "flex-start",
            }}>
              <div style={{
                fontSize: 32,
                fontWeight: 800,
                color: colors.brandPurple,
                fontFamily: fonts.primary,
                opacity: 0.9,
                flexShrink: 0,
                lineHeight: 1,
              }}>{step.num}</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: colors.white, fontFamily: fonts.primary, marginBottom: 8 }}>{step.title}</div>
                <div style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", fontFamily: fonts.primary, lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
