import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { colors, fontFamily } from "../components/theme";

const types = [
  {
    color: "#dc2626", bgColor: "#dc262618",
    dot: "🔴",
    name: "격리 의료폐기물",
    category: "감염병 특별관리",
    container: "붉은색 전용 봉투",
    items: ["감염병 환자·의심환자 격리 병실에서 발생", "격리 격리해제 전까지 전용 용기 사용", "위탁처리업체 즉시 신고 의무"],
  },
  {
    color: "#f59e0b", bgColor: "#f59e0b18",
    dot: "🟡",
    name: "위해 의료폐기물",
    category: "날카로운 기구류",
    container: "노란색 전용 안전용기",
    items: ["주사바늘·메스·봉합침 등 날카로운 기구", "내구성 있는 합성수지 전용 용기 필수", "30일 이내 처리 (냉장보관 시 60일)"],
  },
  {
    color: "#22c55e", bgColor: "#22c55e18",
    dot: "🟢",
    name: "일반 의료폐기물",
    category: "혈액·체액 오염 물품",
    container: "녹색 전용 봉투",
    items: ["혈액·체액·분비물에 오염된 탈지면·거즈", "일회용 주사기(바늘 제거 후)", "배양용기·검사용 재료"],
  },
  {
    color: colors.silverGray, bgColor: "#b0b8c018",
    dot: "⚪",
    name: "일반 생활폐기물",
    category: "오염 없는 일반 쓰레기",
    container: "일반 종량제 봉투",
    items: ["비오염 포장재·종이·플라스틱", "환자용 식기(세척 후)", "오염되지 않은 일반 비품"],
  },
];

export const WasteTypesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.6], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, fps * 0.6], [20, 0], { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });

  return (
    <AbsoluteFill style={{ background: colors.bg3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 80px" }}>
      <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, textAlign: "center", marginBottom: 44 }}>
        <div style={{ fontSize: 13, fontFamily, fontWeight: 700, color: colors.teal, letterSpacing: 3, marginBottom: 12 }}>WASTE CLASSIFICATION</div>
        <h2 style={{ fontFamily, fontSize: 46, fontWeight: 800, color: colors.white, margin: 0 }}>
          의료폐기물 <span style={{ color: colors.teal }}>4가지 유형</span> 분류 기준
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, width: "100%" }}>
        {types.map((type, i) => {
          const delay = fps * (0.5 + i * 0.22);
          const cardOpacity = interpolate(frame, [delay, delay + fps * 0.6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const cardX = interpolate(frame, [delay, delay + fps * 0.6], [i % 2 === 0 ? -40 : 40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
          return (
            <div key={i} style={{ opacity: cardOpacity, transform: `translateX(${cardX}px)`, background: type.bgColor, border: `1.5px solid ${type.color}45`, borderRadius: 14, padding: "24px 28px", display: "flex", gap: 20 }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontSize: 36, marginBottom: 4 }}>{type.dot}</div>
                <div style={{ background: type.color, borderRadius: 6, padding: "4px 10px", fontSize: 11, fontFamily, fontWeight: 700, color: "#000", whiteSpace: "nowrap" }}>{type.container}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily, fontSize: 11, fontWeight: 700, color: type.color, letterSpacing: 2, marginBottom: 4 }}>{type.category}</div>
                <div style={{ fontFamily, fontSize: 20, fontWeight: 800, color: colors.white, marginBottom: 10 }}>{type.name}</div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 5 }}>
                  {type.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: type.color, marginTop: 2, flexShrink: 0, fontSize: 12 }}>▪</span>
                      <span style={{ fontFamily, fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
