import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { colors, fontFamily, heroGradient, ctaGradient } from "../components/theme";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const titleY = interpolate(frame, [fps * 0.3, fps * 1.2], [60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
  const titleOpacity = interpolate(frame, [fps * 0.3, fps * 1.2], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subtitleOpacity = interpolate(frame, [fps * 1.4, fps * 2.2], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dividerW = interpolate(frame, [fps * 1.6, fps * 2.6], [0, 320], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
  const metaOpacity = interpolate(frame, [fps * 2.4, fps * 3.2], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Fade out at end
  const fadeOut = interpolate(frame, [fps * 14, fps * 16], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: heroGradient, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", opacity: fadeOut }}>
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: 80, left: 80, width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(139,61,255,0.15)" }} />
      <div style={{ position: "absolute", bottom: 100, right: 100, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(0,196,204,0.1)" }} />

      {/* ESG Badge */}
      <div style={{ opacity: badgeOpacity, background: "linear-gradient(135deg, rgba(90,50,250,.2), rgba(0,196,204,.15))", border: "1px solid rgba(139,61,255,0.5)", borderRadius: 9999, padding: "10px 28px", marginBottom: 40, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: colors.teal }} />
        <span style={{ fontSize: 16, fontFamily, fontWeight: 700, color: colors.teal, letterSpacing: 3 }}>ESG 경영 교육 콘텐츠</span>
      </div>

      {/* Main Title */}
      <h1 style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, fontFamily, fontSize: 80, fontWeight: 800, color: colors.white, textAlign: "center", lineHeight: 1.15, margin: 0, padding: "0 120px" }}>
        의료폐기물의{" "}
        <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          분리배출
        </span>
        과<br />ESG 경영
      </h1>

      {/* Divider */}
      <div style={{ width: dividerW, height: 2, background: ctaGradient, borderRadius: 2, marginTop: 40, marginBottom: 36 }} />

      {/* Subtitle */}
      <p style={{ opacity: subtitleOpacity, fontFamily, fontSize: 26, fontWeight: 400, color: "rgba(255,255,255,0.7)", margin: 0, textAlign: "center", lineHeight: 1.6 }}>
        지속가능한 의료환경을 위한 올바른 폐기물 관리
      </p>

      {/* Meta info */}
      <div style={{ opacity: metaOpacity, marginTop: 60, display: "flex", gap: 32, alignItems: "center" }}>
        {["환경(E)", "사회(S)", "지배구조(G)"].map((tag, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 8, padding: "8px 20px", fontFamily, fontSize: 15, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
            {tag}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
