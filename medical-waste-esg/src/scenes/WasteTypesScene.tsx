import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors, fonts } from "../components/theme";

const wasteTypes = [
  { emoji: "🔴", color: "#e53935", bg: "#e5393520", label: "격리 의료폐기물", desc: "감염병 환자 폐기물 (붉은색 봉투)" },
  { emoji: "🟡", color: "#f4a80a", bg: "#f4a80a20", label: "위해 의료폐기물", desc: "주사바늘·메스 등 날카로운 것 (노란 전용 용기)" },
  { emoji: "🟢", color: colors.esgGreen, bg: "#2d9e5f20", label: "일반 의료폐기물", desc: "혈액·체액 오염 물품 (초록 봉투)" },
  { emoji: "⚪", color: colors.silverGray, bg: "#b0b8c020", label: "일반 생활쓰레기", desc: "오염 없는 포장재·종이 (일반 종량제)" },
];

export const WasteTypesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: "#0a0d14",
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
        의료폐기물 <span style={{ color: colors.teal }}>종류별 분리배출 기준</span>
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
        {wasteTypes.map((type, i) => {
          const itemSpring = spring({ frame: frame - i * 12, fps, config: { damping: 20, stiffness: 90 } });
          const itemOpacity = interpolate(frame, [i * 12, i * 12 + 25], [0, 1], { extrapolateRight: "clamp" });
          return (
            <div key={i} style={{
              opacity: itemOpacity,
              transform: `translateX(${interpolate(itemSpring, [0, 1], [-60, 0])}px)`,
              display: "flex",
              alignItems: "center",
              gap: 28,
              background: type.bg,
              border: `1.5px solid ${type.color}50`,
              borderRadius: 12,
              padding: "22px 32px",
            }}>
              <span style={{ fontSize: 40 }}>{type.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: type.color, fontFamily: fonts.primary }}>{type.label}</div>
                <div style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", fontFamily: fonts.primary, marginTop: 4 }}>{type.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
