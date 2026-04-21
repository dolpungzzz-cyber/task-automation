import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors, fonts, ctaGradient } from "../components/theme";

const pillars = [
  {
    letter: "E",
    title: "환경 (Environmental)",
    points: ["탄소 발생량 감축", "친환경 폐기물 처리", "재활용 비율 향상"],
    color: colors.esgGreen,
  },
  {
    letter: "S",
    title: "사회 (Social)",
    points: ["직원 안전보건 관리", "지역사회 위생 기여", "감염병 예방"],
    color: colors.esgBlue,
  },
  {
    letter: "G",
    title: "지배구조 (Governance)",
    points: ["법령 준수 내부통제", "폐기물 처리 투명공시", "감사 체계 구축"],
    color: colors.esgGold,
  },
];

export const ESGScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: colors.nearBlack,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 100px",
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
        의료폐기물 관리와 <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ESG 경영 연계</span>
      </h2>

      <div style={{ display: "flex", gap: 32, width: "100%" }}>
        {pillars.map((pillar, i) => {
          const cardSpring = spring({ frame: frame - i * 18, fps, config: { damping: 16, stiffness: 70 } });
          const cardOpacity = interpolate(frame, [i * 18, i * 18 + 30], [0, 1], { extrapolateRight: "clamp" });
          return (
            <div key={i} style={{
              opacity: cardOpacity,
              transform: `translateY(${interpolate(cardSpring, [0, 1], [60, 0])}px)`,
              flex: 1,
              background: `${pillar.color}15`,
              border: `2px solid ${pillar.color}60`,
              borderRadius: 16,
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{
                fontSize: 64,
                fontWeight: 800,
                color: pillar.color,
                fontFamily: fonts.primary,
                lineHeight: 1,
                marginBottom: 12,
              }}>{pillar.letter}</div>
              <div style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.white,
                fontFamily: fonts.primary,
                marginBottom: 20,
              }}>{pillar.title}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {pillar.points.map((point, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: pillar.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", fontFamily: fonts.primary }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
