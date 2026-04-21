import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { colors, fontFamily } from "../components/theme";

const stats = [
  { value: 228000, unit: "톤", label: "연간 의료폐기물 발생량", sub: "2023년 기준, 전년 대비 6.2% 증가", color: colors.brandPurple, prefix: "약" },
  { value: 62, unit: "%", label: "부적절 분리배출 비율", sub: "의료기관 현장 점검 결과", color: "#ef4444", prefix: "" },
  { value: 3.5, unit: "배", label: "일반폐기물 대비 처리비용", sub: "kg당 평균 1,800원 vs 510원", color: colors.esgGold, prefix: "" },
  { value: 45, unit: "%", label: "감염 위험 노출 감소 가능", sub: "올바른 분리배출 시", color: colors.esgGreen, prefix: "최대" },
];

function useCountUp(target: number, start: number, end: number, frame: number) {
  const progress = interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const value = target * progress;
  return target < 10 ? value.toFixed(1) : Math.round(value).toLocaleString("ko-KR");
}

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.7], [0, 1], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const titleY = interpolate(frame, [0, fps * 0.7], [30, 0], { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });

  const countedStats = stats.map((s, i) => ({
    ...s,
    displayed: useCountUp(s.value, fps * (0.8 + i * 0.3), fps * (2.2 + i * 0.3), frame),
  }));

  return (
    <AbsoluteFill style={{ background: colors.bg2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 80px" }}>
      <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, textAlign: "center", marginBottom: 56 }}>
        <div style={{ fontSize: 14, fontFamily, fontWeight: 700, color: colors.brandPurple, letterSpacing: 3, marginBottom: 16 }}>CURRENT SITUATION</div>
        <h2 style={{ fontFamily, fontSize: 52, fontWeight: 800, color: colors.white, margin: 0, lineHeight: 1.2 }}>
          왜 지금 <span style={{ color: colors.brandPurple }}>의료폐기물 관리</span>가 중요한가?
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, width: "100%" }}>
        {countedStats.map((stat, i) => {
          const cardOpacity = interpolate(frame, [fps * (0.6 + i * 0.25), fps * (1.2 + i * 0.25)], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const cardY = interpolate(frame, [fps * (0.6 + i * 0.25), fps * (1.2 + i * 0.25)], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
          return (
            <div key={i} style={{ opacity: cardOpacity, transform: `translateY(${cardY}px)`, background: `${stat.color}12`, border: `1.5px solid ${stat.color}35`, borderRadius: 16, padding: "32px 36px", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                {stat.prefix && <span style={{ fontFamily, fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>{stat.prefix} </span>}
                <span style={{ fontFamily, fontSize: 60, fontWeight: 800, color: stat.color, lineHeight: 1 }}>{stat.displayed}</span>
                <span style={{ fontFamily, fontSize: 28, fontWeight: 700, color: stat.color }}>{stat.unit}</span>
              </div>
              <div style={{ fontFamily, fontSize: 20, fontWeight: 700, color: colors.white }}>{stat.label}</div>
              <div style={{ fontFamily, fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{stat.sub}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
