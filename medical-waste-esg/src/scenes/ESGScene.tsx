import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { colors, fontFamily, ctaGradient } from "../components/theme";

const pillars = [
  {
    letter: "E",
    color: colors.esgGreen,
    title: "Environmental",
    subtitle: "환경 경영",
    points: [
      "의료폐기물 소각 시 CO₂·다이옥신 배출 감소",
      "재활용 가능 폐기물 분리로 탄소발자국 저감",
      "친환경 처리 비율 ESG 보고서 공시 항목",
      "병원 탄소중립 목표 달성 핵심 지표",
    ],
    kpi: "탄소 배출 -30%",
  },
  {
    letter: "S",
    color: colors.esgBlue,
    title: "Social",
    subtitle: "사회 경영",
    points: [
      "의료 종사자 감염·부상 사고 예방",
      "지역사회 감염병 확산 차단",
      "환자·방문객 안전한 의료환경 제공",
      "취약계층 의료서비스 안전성 향상",
    ],
    kpi: "감염사고 -45%",
  },
  {
    letter: "G",
    color: colors.esgGold,
    title: "Governance",
    subtitle: "지배구조 경영",
    points: [
      "폐기물 처리 내부 감사체계 구축",
      "법령 준수(컴플라이언스) 내부통제",
      "처리 이력 투명 공시 및 이해관계자 신뢰",
      "ISO 14001 환경경영시스템 인증 기반",
    ],
    kpi: "컴플라이언스 100%",
  },
];

export const ESGScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.6], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, fps * 0.6], [20, 0], { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });

  return (
    <AbsoluteFill style={{ background: colors.bg2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 80px" }}>
      <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 13, fontFamily, fontWeight: 700, color: colors.teal, letterSpacing: 3, marginBottom: 12 }}>ESG FRAMEWORK</div>
        <h2 style={{ fontFamily, fontSize: 48, fontWeight: 800, color: colors.white, margin: 0 }}>
          분리배출이{" "}
          <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            ESG 경영 3대 축
          </span>
          에 미치는 영향
        </h2>
      </div>

      <div style={{ display: "flex", gap: 24, width: "100%" }}>
        {pillars.map((pillar, i) => {
          const delay = fps * (0.5 + i * 0.22);
          const cardOpacity = interpolate(frame, [delay, delay + fps * 0.7], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const cardY = interpolate(frame, [delay, delay + fps * 0.7], [60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
          return (
            <div key={i} style={{ opacity: cardOpacity, transform: `translateY(${cardY}px)`, flex: 1, background: `${pillar.color}10`, border: `2px solid ${pillar.color}50`, borderRadius: 16, padding: "32px 28px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 8 }}>
                <span style={{ fontFamily, fontSize: 72, fontWeight: 800, color: pillar.color, lineHeight: 1 }}>{pillar.letter}</span>
                <div>
                  <div style={{ fontFamily, fontSize: 13, fontWeight: 700, color: pillar.color, letterSpacing: 1 }}>{pillar.title}</div>
                  <div style={{ fontFamily, fontSize: 18, fontWeight: 700, color: colors.white }}>{pillar.subtitle}</div>
                </div>
              </div>
              <div style={{ width: "100%", height: 1, background: `${pillar.color}30`, marginBottom: 18 }} />
              <ul style={{ listStyle: "none", margin: 0, padding: 0, flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                {pillar.points.map((point, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: pillar.color, flexShrink: 0, fontSize: 14, marginTop: 2 }}>▸</span>
                    <span style={{ fontFamily, fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{point}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 20, background: `${pillar.color}20`, borderRadius: 8, padding: "10px 16px", textAlign: "center" }}>
                <span style={{ fontFamily, fontSize: 16, fontWeight: 800, color: pillar.color }}>{pillar.kpi}</span>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
