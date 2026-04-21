import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { colors, fontFamily } from "../components/theme";

const solutions = [
  { icon: "🎓", title: "전 직원 의무 교육 체계화", desc: "연 2회 이상 의료폐기물 분리배출 실무 교육 실시. 신규 직원 오리엔테이션 필수 포함.", tag: "교육·인식" },
  { icon: "🎨", title: "색상·라벨 표준화 시스템", desc: "색상코드 라벨 전 병동 통일 적용. 시각적 안내 포스터 비치로 오분류 90% 감소 목표.", tag: "시스템" },
  { icon: "📱", title: "IoT 스마트 용기 도입", desc: "센서 기반 용량 모니터링으로 과충전 차단. 바코드 스캔으로 처리 이력 실시간 추적.", tag: "기술" },
  { icon: "📊", title: "ESG 공시 지표 연동", desc: "월별 폐기물 발생량·종류별 처리 실적 데이터 수집. 연간 ESG 보고서 자동 집계 체계 구축.", tag: "보고·공시" },
];

export const SolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.6], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, fps * 0.6], [20, 0], { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });

  return (
    <AbsoluteFill style={{ background: colors.bg1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
      <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, textAlign: "center", marginBottom: 52 }}>
        <div style={{ fontSize: 13, fontFamily, fontWeight: 700, color: colors.brandPurple, letterSpacing: 3, marginBottom: 12 }}>ACTION PLAN</div>
        <h2 style={{ fontFamily, fontSize: 48, fontWeight: 800, color: colors.white, margin: 0 }}>
          지금 바로 실천할 수 있는 <span style={{ color: colors.brandPurple }}>4가지 솔루션</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, width: "100%" }}>
        {solutions.map((s, i) => {
          const delay = fps * (0.4 + i * 0.2);
          const opacity = interpolate(frame, [delay, delay + fps * 0.55], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const y = interpolate(frame, [delay, delay + fps * 0.55], [35, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
          return (
            <div key={i} style={{ opacity, transform: `translateY(${y}px)`, background: "rgba(139,61,255,0.07)", border: "1.5px solid rgba(139,61,255,0.28)", borderRadius: 14, padding: "28px 30px", display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, fontSize: 40, lineHeight: 1 }}>{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontFamily, fontSize: 19, fontWeight: 800, color: colors.white }}>{s.title}</span>
                  <span style={{ background: "rgba(139,61,255,0.2)", borderRadius: 6, padding: "2px 10px", fontFamily, fontSize: 11, fontWeight: 700, color: colors.brandPurple, whiteSpace: "nowrap" }}>{s.tag}</span>
                </div>
                <p style={{ fontFamily, fontSize: 14, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
