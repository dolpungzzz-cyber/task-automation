import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { colors, fontFamily, ctaGradient } from "../components/theme";

const benefits = [
  { icon: "💰", value: "35", unit: "%", label: "폐기물 처리비용 절감", desc: "체계적 분리로 위해폐기물 비율 감소", color: colors.esgGold },
  { icon: "🛡️", value: "68", unit: "%", label: "의료사고 리스크 감소", desc: "날카로운 기구 혼합 투입 방지", color: "#6366f1" },
  { icon: "🌍", value: "42", unit: "%", label: "CO₂ 배출량 감축", desc: "소각 처리량 감소 및 재활용 확대", color: colors.esgGreen },
  { icon: "⭐", value: "A+", unit: "", label: "ESG 등급 향상 기대", desc: "환경·사회·거버넌스 전 항목 개선", color: colors.brandPurple },
  { icon: "📊", value: "100", unit: "%", label: "법적 컴플라이언스", desc: "환경부 지도점검 통과율 제고", color: colors.teal },
  { icon: "🏆", value: "3배", unit: "", label: "이해관계자 신뢰도", desc: "투명한 공시로 환자·지역사회 신뢰 확보", color: "#f472b6" },
];

export const BenefitsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.6], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: colors.bg3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 80px" }}>
      <div style={{ opacity: titleOpacity, textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 13, fontFamily, fontWeight: 700, color: colors.esgGreen, letterSpacing: 3, marginBottom: 12 }}>EXPECTED OUTCOMES</div>
        <h2 style={{ fontFamily, fontSize: 48, fontWeight: 800, color: colors.white, margin: 0 }}>
          올바른 분리배출 도입 시 <span style={{ color: colors.esgGreen }}>기대 효과</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, width: "100%" }}>
        {benefits.map((b, i) => {
          const delay = fps * (0.3 + i * 0.12);
          const cardOpacity = interpolate(frame, [delay, delay + fps * 0.5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const cardScale = interpolate(frame, [delay, delay + fps * 0.5], [0.88, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.34, 1.56, 0.64, 1) });
          return (
            <div key={i} style={{ opacity: cardOpacity, transform: `scale(${cardScale})`, background: `${b.color}0f`, border: `1.5px solid ${b.color}35`, borderRadius: 14, padding: "28px 24px", textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{b.icon}</div>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 2, marginBottom: 6 }}>
                <span style={{ fontFamily, fontSize: 48, fontWeight: 800, color: b.color, lineHeight: 1 }}>{b.value}</span>
                {b.unit && <span style={{ fontFamily, fontSize: 22, fontWeight: 700, color: b.color }}>{b.unit}</span>}
              </div>
              <div style={{ fontFamily, fontSize: 16, fontWeight: 700, color: colors.white, marginBottom: 6 }}>{b.label}</div>
              <div style={{ fontFamily, fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{b.desc}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
