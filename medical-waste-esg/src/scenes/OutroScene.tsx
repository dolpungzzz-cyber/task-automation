import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { colors, fontFamily, heroGradient, ctaGradient } from "../components/theme";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeScale = interpolate(frame, [0, fps * 0.8], [0.5, 1], { extrapolateRight: "clamp", easing: Easing.bezier(0.34, 1.56, 0.64, 1) });
  const badgeOpacity = interpolate(frame, [0, fps * 0.5], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [fps * 0.5, fps * 1.3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [fps * 0.5, fps * 1.3], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
  const subOpacity = interpolate(frame, [fps * 1.2, fps * 2.0], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tagsOpacity = interpolate(frame, [fps * 1.8, fps * 2.6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const tags = ["#의료폐기물", "#ESG경영", "#분리배출", "#지속가능경영", "#탄소중립"];

  return (
    <AbsoluteFill style={{ background: heroGradient, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0 }}>
      {/* Decorative glow */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 600, height: 300, borderRadius: "50%", background: "rgba(139,61,255,0.12)", filter: "blur(80px)", pointerEvents: "none" }} />

      {/* Badge */}
      <div style={{ opacity: badgeOpacity, transform: `scale(${badgeScale})`, marginBottom: 44 }}>
        <div style={{ background: ctaGradient, borderRadius: 9999, padding: "14px 44px" }}>
          <span style={{ fontFamily, fontSize: 18, fontWeight: 700, color: colors.white, letterSpacing: 2 }}>ESG 경영 실천</span>
        </div>
      </div>

      {/* Main message */}
      <h2 style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, fontFamily, fontSize: 60, fontWeight: 800, color: colors.white, textAlign: "center", margin: "0 0 24px 0", lineHeight: 1.25, padding: "0 120px" }}>
        올바른 의료폐기물 분리배출,<br />
        <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          지속가능한 미래
        </span>
        를 만듭니다
      </h2>

      <p style={{ opacity: subOpacity, fontFamily, fontSize: 22, color: "rgba(255,255,255,0.65)", textAlign: "center", margin: "0 0 48px 0", lineHeight: 1.6 }}>
        작은 실천 하나가 ESG 경영의 시작입니다<br />
        <span style={{ fontSize: 18, color: "rgba(255,255,255,0.45)" }}>오늘부터 의료폐기물을 올바르게 분리해 주세요</span>
      </p>

      {/* Tags */}
      <div style={{ opacity: tagsOpacity, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
        {tags.map((tag, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 9999, padding: "8px 20px", fontFamily, fontSize: 14, color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
            {tag}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
