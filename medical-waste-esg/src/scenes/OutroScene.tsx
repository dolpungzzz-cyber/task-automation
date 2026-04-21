import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors, fonts, heroGradient, ctaGradient } from "../components/theme";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({ frame, fps, config: { damping: 16, stiffness: 70 } });
  const textOpacity = interpolate(frame, [30, 60], [0, 1], { extrapolateRight: "clamp" });
  const ctaOpacity  = interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: heroGradient,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 28,
    }}>
      <div style={{
        transform: `scale(${interpolate(logoSpring, [0, 1], [0.6, 1])})`,
        background: ctaGradient,
        borderRadius: 9999,
        padding: "14px 40px",
      }}>
        <span style={{ fontFamily: fonts.primary, fontSize: 20, fontWeight: 700, color: colors.white, letterSpacing: 1 }}>
          ESG 경영
        </span>
      </div>

      <h2 style={{
        opacity: textOpacity,
        fontFamily: fonts.primary,
        fontSize: 52,
        fontWeight: 700,
        color: colors.white,
        textAlign: "center",
        margin: 0,
        lineHeight: 1.3,
      }}>
        올바른 의료폐기물 분리배출,<br />
        <span style={{ color: colors.teal }}>지속가능한 미래</span>를 만듭니다
      </h2>

      <p style={{
        opacity: ctaOpacity,
        fontFamily: fonts.primary,
        fontSize: 20,
        color: "rgba(255,255,255,0.65)",
        textAlign: "center",
        margin: 0,
      }}>
        작은 실천이 ESG 경영의 시작입니다
      </p>
    </AbsoluteFill>
  );
};
