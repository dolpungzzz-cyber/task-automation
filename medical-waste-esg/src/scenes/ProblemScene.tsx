import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors, fonts } from "../components/theme";

const stats = [
  { value: "20만톤+", label: "연간 의료폐기물 발생량", color: colors.burgundy },
  { value: "62%", label: "부적절한 분리배출 비율", color: colors.brandPurple },
  { value: "3.5배", label: "일반폐기물 대비 처리 비용", color: colors.teal },
];

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: colors.nearBlack,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 120px",
    }}>
      <h2 style={{
        opacity: headingOpacity,
        fontFamily: fonts.primary,
        fontSize: 48,
        fontWeight: 700,
        color: colors.white,
        textAlign: "center",
        marginBottom: 60,
      }}>
        왜 <span style={{ color: colors.brandPurple }}>의료폐기물 분리배출</span>이 중요한가?
      </h2>

      <div style={{ display: "flex", gap: 40, justifyContent: "center", width: "100%" }}>
        {stats.map((stat, i) => {
          const cardSpring = spring({ frame: frame - i * 15, fps, config: { damping: 18, stiffness: 80 } });
          const cardOpacity = interpolate(frame, [i * 15, i * 15 + 30], [0, 1], { extrapolateRight: "clamp" });
          return (
            <div key={i} style={{
              opacity: cardOpacity,
              transform: `translateY(${interpolate(cardSpring, [0, 1], [50, 0])}px)`,
              background: "rgba(255,255,255,0.05)",
              border: `1px solid ${stat.color}40`,
              borderRadius: 16,
              padding: "40px 48px",
              textAlign: "center",
              flex: 1,
            }}>
              <div style={{
                fontSize: 56,
                fontWeight: 700,
                color: stat.color,
                fontFamily: fonts.primary,
                marginBottom: 16,
              }}>{stat.value}</div>
              <div style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.7)",
                fontFamily: fonts.primary,
              }}>{stat.label}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
