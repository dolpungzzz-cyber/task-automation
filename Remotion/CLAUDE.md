# Remotion Video Project

## Skill

When the user requests video creation, editing, animation, or any Remotion-related task, always invoke the `remotion-best-practices` skill first:

```
/remotion-best-practices
```

This applies to:
- Creating new Remotion compositions or scenes
- Adding animations, transitions, or effects
- Working with audio, video, fonts, captions, or subtitles
- Rendering or previewing videos
- Any code in `.tsx`/`.ts` files under a Remotion project

## New Project Setup

Scaffold a new project in an empty directory:

```bash
npx create-video@latest --yes --blank --no-tailwind my-video
```

## Preview

```bash
npx remotion studio
```

---

## Design System (Canva)

> Extracted directly from canva.com via browser JS. Apply these values whenever creating Remotion videos to match Canva's visual identity.

### Colors

| Role | Hex | RGB |
|---|---|---|
| **Brand Purple** (primary CTA) | `#8b3dff` | `rgb(139, 61, 255)` |
| **Deep Purple** (gradient) | `#5a32fa` | `rgb(90, 50, 250)` |
| **Purple Dark** (gradient) | `#7d2ae8` | `rgb(125, 42, 232)` |
| **Teal / Cyan** (accent) | `#00c4cc` | `rgb(0, 196, 204)` |
| **Near Black** (primary text/bg) | `#0f1015` | `rgb(15, 16, 21)` |
| **White** (text on dark, bg) | `#ffffff` | `rgb(255, 255, 255)` |
| **Overlay dark** | `#0f121a` at 70% | `rgba(15, 18, 26, 0.698)` |
| **Subtle border** | `#404f6d` at 6% | `rgba(64, 79, 109, 0.06)` |

### Gradients

```css
/* Hero background — multi-layer radial (purple + teal) */
background: radial-gradient(126.01% 85.86% at 73.68% -32.8%,
    rgba(90, 50, 250, 0.20) 0%, rgba(90, 50, 250, 0) 100%),
  radial-gradient(99.02% 74.57% at 82.57% -11%,
    rgb(125, 42, 232) 0%, rgba(125, 42, 232, 0) 56.82%),
  radial-gradient(70.01% 64.44% at 0.69% 1.4%,
    rgb(0, 196, 204) 0%, rgba(0, 196, 204, 0) 89.9%);

/* CTA / Button gradient */
background: linear-gradient(98deg, rgb(0, 196, 204) -9.02%, rgb(90, 50, 250) 77.89%, rgb(118, 48, 215) 158.29%);

/* Section fade-out */
background: linear-gradient(rgba(0,0,0,0), rgb(246, 247, 248));
```

### Typography

**Font Stack**
```
"Canva Sans", "Noto Sans Variable", "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
```

**Type Scale**

| Role | Size | Weight | Line Height |
|---|---|---|---|
| Hero H1 | `48px` | `500` | `60px` |
| Section heading | `32–36px` | `500–600` | `1.2×` |
| Subheading / Nav label | `15px` | `700` | normal |
| Body / Button | `14px` | `400 / 500 / 600` | `22px` |
| Small / Caption | `12px` | `600` | `20px` |
| Label tiny | `11px` | `600` | `16px` |

**Font Weights:** `400` regular · `500` medium · `600` semibold · `700` bold

### Spacing Scale

```
4px · 6px · 8px · 12px · 16px · 24px · 32px · 48px
```

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `xs` | `4px` | Small chips |
| `sm` | `6px` | Inputs |
| `md` | `8px` | Buttons, cards |
| `lg` | `16px` | Cards, panels |
| `pill` | `9999px` | Tags, avatars |

### Shadows

```css
/* Card / Dropdown */
box-shadow:
  rgba(64, 79, 109, 0.06) 0px 0px 0px 0.5px,
  rgba(24, 44, 89, 0.137) 0px 2px 4px 0px,
  rgba(24, 44, 89, 0.07) 0px 6px 12px 0px;

/* Focus ring (inset) */
box-shadow: rgba(53, 65, 90, 0.20) 0px 0px 0px 1px inset;
```

### Button Styles

```css
/* Primary (Purple) — Nav size */
background: #8b3dff;
color: #ffffff;
border-radius: 8px;
padding: 0 12px;
font-size: 14px;
font-weight: 600;
height: 32px;

/* Primary (Purple) — CTA size */
background: #8b3dff;
color: #ffffff;
border-radius: 8px;
padding: 0 16px;
font-size: 14px;
font-weight: 600;
height: 40px;

/* Ghost / Nav item */
background: transparent;
color: #0f1015;
border-radius: 8px;
padding: 4px 8px;
font-size: 13.3px;
font-weight: 400;
height: 32px;
```

### Remotion Usage Notes

- Use `#0f1015` as default dark background for video scenes
- Use `#8b3dff` for primary highlights, progress bars, badges
- Apply the hero radial gradient as scene background for branded intros
- Use `"Canva Sans"` via Google Fonts (`Noto Sans`) or load locally; fall back to `Inter`
- Stick to the 8px spacing grid (multiples of 8: 8, 16, 24, 32, 48, 64)
- Border radius `8px` for UI elements, `16px` for larger cards, `9999px` for pills

---

## User Video Style Reference (Canva AI 생성 영상)

> 사용자가 Canva AI로 직접 만든 영상을 분석해 추출. Remotion으로 영상 제작 시 이 스타일을 기본으로 적용.

### 영상 스펙

| 항목 | 값 |
|---|---|
| 해상도 | `1920 × 1080 px` (16:9 Landscape) |
| 총 길이 | ~29초 |
| AI 클립 원본 길이 | ~5.3초 (슬로우/확장 적용) |
| 프레임레이트 | 30fps (Canva 기본) |
| 색보정 | 없음 (raw AI generation, 모든 슬라이더 0) |
| 필터 | 없음 |
| 포맷 | YouTube/가로형 동영상 |

### 씬 색상 팔레트

| 역할 | Hex | 설명 |
|---|---|---|
| 병원 벽/배경 | `#c9b99a` | 따뜻한 베이지 톤 |
| 침구/화이트 | `#f0ece7` | 오프화이트, 순백보다 따뜻함 |
| 환자 가운 | `#a8c4d8` | 뮤트된 하늘색 |
| 간호사 스크럽 | `#7d2535` | 딥 버건디/마룬 |
| 창문 광원 | `#faf6ef` | 따뜻한 자연광 화이트 |
| 의료 장비 | `#b0b8c0` | 실버 그레이 |
| 장비 포인트 | `#b5d0e0` | 연한 파스텔 블루 |

### 촬영·조명 스타일

- **촬영 구도**: 아이레벨 미디엄 2-샷 (인물 2명 동시 프레임)
- **심도**: 중간 — 두 피사체 모두 포커스
- **조명**: 우측 창문 자연광(주광), 부드러운 확산광, 고키(high-key) 밝기
- **색온도**: 따뜻한 데이라이트 (warm daylight through blinds)
- **분위기**: 임상적이지만 따뜻하고 친근한 느낌, 한국 드라마 미학

### 콘텐츠 도메인

- **주제**: 의료/헬스케어 (병원 내 환자-간호사 장면)
- **인물**: 한국인 배우 스타일, 사실적 AI 생성
- **배경**: 현대적 병원 입원실 (침대, IV 스탠드, 의료 카트)
- **무드**: 프로페셔널하고 신뢰감 있는 의료 환경

### Remotion에서 이 스타일 재현하기

```tsx
// 기본 씬 배경 (병원/클리닉 느낌 오버레이)
const sceneStyle = {
  backgroundColor: '#f0ece7',       // 따뜻한 오프화이트
  backgroundImage: 'linear-gradient(135deg, #f0ece7 0%, #e8ddd0 100%)',
};

// 텍스트 오버레이 스타일 (영상 위 자막/타이틀)
const titleStyle = {
  fontFamily: '"Noto Sans KR", "Noto Sans", sans-serif',
  fontSize: 48,
  fontWeight: 500,
  color: '#ffffff',
  textShadow: '0 2px 12px rgba(0,0,0,0.4)',
};

// 의료/신뢰 계열 액센트 컬러
const accentMedical = '#7d2535';    // 버건디 (간호사 스크럽 색상)
const accentBlue    = '#a8c4d8';    // 뮤트 블루 (환자 가운 색상)
const brandPurple   = '#8b3dff';    // Canva 브랜드 퍼플 (UI 요소)
```

### 권장 영상 제작 원칙

1. **16:9 (1920×1080)** 기본 해상도 사용
2. 배경은 순백보다 **따뜻한 오프화이트** 또는 **딥 다크(`#0f1015`)** 선택
3. 텍스트는 영상 위 오버레이 시 **흰색 + 드롭섀도** 또는 **반투명 다크 패널** 처리
4. 색보정 없이 자연스러운 AI 영상 톤 유지
5. 타이포그래피는 Canva Sans(Noto Sans) 계열 사용
6. UI 강조 요소는 **브랜드 퍼플(`#8b3dff`)** 또는 **틸(`#00c4cc`)** 사용
