import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { colors, fontFamily } from "../components/theme";

const steps = [
  { num: "STEP 1", icon: "📋", title: "발생 즉시 분류", desc: "폐기물 발생 시점에서 종류별 전용 용기에 즉시 분리 투입. 혼합 투입 금지.", law: "의료폐기물관리법 제14조" },
  { num: "STEP 2", icon: "🏷️", title: "라벨 부착 및 밀봉", desc: "전용 용기에 종류·발생일·의료기관명 기재 라벨 부착 후 밀봉.", law: "시행규칙 제15조" },
  { num: "STEP 3", icon: "🏠", title: "전용 보관창고 보관", desc: "전용 냉장보관창고(4℃ 이하) 또는 전용 보관창고에 보관 기간 준수.", law: "시행규칙 제16조" },
  { num: "STEP 4", icon: "🚛", title: "위탁 처리 및 서류 관리", desc: "허가받은 폐기물처리업체에 인계. 인계서류 2년 보관 의무.", law: "법 제18조·제22조" },
];

export const SeparationScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.6], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: colors.bg1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
      <div style={{ opacity: titleOpacity, textAlign: "center", marginBottom: 52 }}>
        <div style={{ fontSize: 13, fontFamily, fontWeight: 700, color: colors.brandPurple, letterSpacing: 3, marginBottom: 12 }}>PROCESS GUIDE</div>
        <h2 style={{ fontFamily, fontSize: 48, fontWeight: 800, color: colors.white, margin: 0 }}>
          올바른 분리배출 <span style={{ color: colors.brandPurple }}>4단계 프로세스</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, width: "100%" }}>
        {steps.map((step, i) => {
          const delay = fps * (0.4 + i * 0.28);
          const itemOpacity = interpolate(frame, [delay, delay + fps * 0.5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const itemX = interpolate(frame, [delay, delay + fps * 0.5], [-50, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
          return (
            <div key={i} style={{ opacity: itemOpacity, transform: `translateX(${itemX}px)`, display: "flex", alignItems: "center", gap: 28, background: "rgba(139,61,255,0.07)", border: "1px solid rgba(139,61,255,0.25)", borderRadius: 12, padding: "22px 28px" }}>
              <div style={{ width: 64, flexShrink: 0, textAlign: "center" }}>
                <div style={{ fontSize: 34 }}>{step.icon}</div>
                <div style={{ fontFamily, fontSize: 11, fontWeight: 700, color: colors.brandPurple, letterSpacing: 1 }}>{step.num}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily, fontSize: 22, fontWeight: 800, color: colors.white, marginBottom: 6 }}>{step.title}</div>
                <div style={{ fontFamily, fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{step.desc}</div>
              </div>
              <div style={{ background: "rgba(139,61,255,0.15)", borderRadius: 8, padding: "6px 14px", flexShrink: 0 }}>
                <span style={{ fontFamily, fontSize: 12, color: colors.brandPurple, fontWeight: 600 }}>{step.law}</span>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
