import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { colors, fonts, heroGradient } from "../components/theme";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleY = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const subtitleOpacity = interpolate(frame, [40, 80], [0, 1], { extrapolateRight: "clamp" });
  const badgeOpacity = interpolate(frame, [60, 100], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: heroGradient, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {/* ESG Badge */}
      <div style={{
        opacity: badgeOpacity,
        background: "rgba(139,61,255,0.2)",
        border: "1px solid rgba(139,61,255,0.6)",
        borderRadius: 9999,
        padding: "8px 24px",
        marginBottom: 32,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}>
        <span style={{ fontSize: 14, color: colors.teal, fontFamily: fonts.primary, fontWeight: 600, letterSpacing: 2 }}>
          ESG 경영
        </span>
      </div>

      {/* Main Title */}
      <h1 style={{
        opacity: titleOpacity,
        transform: `translateY(${interpolate(titleY, [0, 1], [40, 0])}px)`,
        fontFamily: fonts.primary,
        fontSize: 72,
        fontWeight: 700,
        color: colors.white,
        textAlign: "center",
        lineHeight: 1.2,
        margin: 0,
        padding: "0 80px",
        textShadow: "0 2px 24px rgba(0,0,0,0.4)",
      }}>
        의료폐기물의<br />
        <span style={{ color: colors.brandPurple }}>분리배출</span>과 ESG 경영
      </h1>

      {/* Subtitle */}
      <p style={{
        opacity: subtitleOpacity,
        fontFamily: fonts.primary,
        fontSize: 24,
        fontWeight: 400,
        color: "rgba(255,255,255,0.75)",
        marginTop: 32,
        textAlign: "center",
      }}>
        지속가능한 의료환경을 위한 올바른 폐기물 관리
      </p>
    </AbsoluteFill>
  );
};
