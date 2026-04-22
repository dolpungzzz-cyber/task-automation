# Remotion Video Project

## GitHub 저장소

- **Repository**: `https://github.com/dolpungzzz-cyber/task-automation`
- **구조**: `업무자동화/` 폴더 전체를 하나의 repo로 관리
- **브랜치**: `main`
- **gh CLI 경로** (임시): `%TEMP%\gh_cli\bin\gh.exe`

### 새 프로젝트를 시작할 때

```bash
# 1. 업무자동화/ 하위에 새 폴더로 프로젝트 생성
cd C:/Users/cheon/Desktop/업무자동화
npx create-video@latest --yes --blank --no-tailwind <project-name>

# 2. 작업 후 커밋 & 푸시
git add <project-name>/
git commit -m "feat: add <project-name>"
git push
```

### GitHub CLI (gh) 사용

```bash
$gh = "$env:TEMP\gh_cli\bin\gh.exe"
& $gh repo list dolpungzzz-cyber   # 저장소 목록
& $gh auth status                  # 인증 상태 확인
```

> **인증 만료 시**: `& $gh auth login --hostname github.com --git-protocol https --web` 실행 후 브라우저에서 디바이스 코드 입력

---

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

---

## 실사화 영상 제작 가이드 (등장인물 + 실제 배경)

> **트리거**: 사용자가 "실사 영상", "실제 인물이 등장", "사람이 나오는 영상", "실제 장소" 등을 언급할 때 이 섹션을 우선 참조.

### 개요

실제 사람·장소가 등장하는 영상은 Remotion 단독으로 제작 불가. 반드시 **AI 영상 생성 도구로 클립 생성 → Remotion으로 합성·편집** 워크플로를 따른다.

### 도구 선택 기준

| 상황 | 추천 도구 | URL | 비고 |
|---|---|---|---|
| 한국어 프롬프트, 무료로 시작 | **Kling AI** | https://kling.ai | 한국어 지원, 무료 크레딧 |
| 최고 품질, 예산 있음 | **Google Veo 3 / Google Flow** | https://flow.google.com | Google 계정 필요, 대기 가능 |
| 빠른 생성, 무료 | **Hailuo AI (MiniMax)** | https://hailuoai.com | 무료 플랜, 인물 동작 자연스러움 |
| ChatGPT Plus 구독자 | **Sora** | https://sora.com | OpenAI, 긴 클립 가능 |

### 표준 제작 워크플로

```
1. 스토리보드 확정 (장면 수, 각 장면 내용·길이)
   ↓
2. AI 도구로 장면별 클립 생성 (보통 5~8초/클립)
   - 영어 프롬프트 권장 (품질↑)
   - 동일 인물 연속성: 같은 프롬프트 구조 유지
   ↓
3. 클립 다운로드 → Remotion 프로젝트 public/ 폴더에 배치
   ↓
4. Remotion <Video> 컴포넌트로 클립 재생
5. 그래픽 오버레이: 라벨, 자막, 설명 박스, 화살표 등 추가
   ↓
6. npx remotion render → 최종 MP4 출력
```

### Remotion 클립 합성 패턴

```tsx
import { Video, AbsoluteFill, staticFile } from "remotion";

// 클립 위에 오버레이 그래픽 합성
export const ClipScene: React.FC = () => (
  <AbsoluteFill>
    {/* 배경 영상 클립 */}
    <Video src={staticFile("clip-nurse-gauze.mp4")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

    {/* 그래픽 오버레이 */}
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* 라벨, 자막, 안내 박스 등 */}
    </AbsoluteFill>
  </AbsoluteFill>
);
```

### 인물·장면 프롬프트 작성 원칙

- **인물 연속성**: 매 장면 프롬프트에 동일한 인물 묘사 유지
  - 예: `"Korean female nurse in burgundy scrubs, mid-30s, warm expression"`
- **카메라**: `medium shot`, `eye level`, `cinematic`
- **조명**: `soft natural daylight from window, warm tone, high-key`
- **배경**: `modern hospital room, white walls, IV stand, medical cart`
- **동작**: 구체적이고 단순하게 (복잡한 동작은 품질 저하)

### 의료폐기물 프로젝트 기준 프롬프트 세트

#### 장면 1 — 간호사 처치 장면
```
Korean female nurse in dark burgundy scrubs treating a patient's wound with sterile gauze in a bright modern hospital room. Medium shot, eye level. Soft warm natural light from window. Patient in light blue hospital gown lying in bed. Clean clinical setting with IV stand. Cinematic, realistic.
```

#### 장면 2 — 의료폐기물 전용 용기에 버리기
```
Korean female nurse in dark burgundy scrubs carefully placing used gauze into a yellow medical waste container labeled in Korean. Close-up shot. Bright hospital room background. Focused, deliberate hand movement. Realistic, cinematic.
```

#### 장면 3 — 일반폐기물 통에 포장재 버리기
```
Korean female nurse in dark burgundy scrubs disposing of gauze packaging wrapper into a regular waste bin in a hospital room. Medium close-up. Clean hospital environment. Natural lighting. Realistic, cinematic.
```

#### 장면 4 — 병실 전체 클린샷
```
Clean modern Korean hospital room with natural light streaming through window blinds. Empty bed with light blue blanket, IV stand, medical equipment. Calm, professional atmosphere. Wide shot. Cinematic, warm daylight.
```

### 클립 파일 관리 규칙

- 저장 위치: `<project>/public/clips/`
- 네이밍: `scene-01-nurse-treatment.mp4`, `scene-02-medical-waste.mp4` 형식
- 포맷: MP4 (H.264), 1920×1080, 30fps (Remotion 프로젝트와 동일)
- 클립 길이: 5~10초 권장 (TransitionSeries 전환 여유 포함)

### Google Flow / Veo 3 접근 방법

1. **Google 계정** (dolpungzzz@gmail.com)으로 로그인
2. **flow.google.com** 접속 — 대기자 명단 또는 바로 사용 가능 여부 확인
3. 접근 불가 시 대안: **Google AI Studio** (aistudio.google.com) → Veo API 사용
4. 또는 **Kling AI** (kling.ai) 즉시 사용 가능 (한국어 지원)

### Claude가 할 수 있는 것 / 없는 것

| 역할 | 가능 여부 |
|---|---|
| AI 영상 클립 직접 생성 | ❌ 불가 |
| 각 장면 프롬프트 작성 | ✅ 가능 |
| 클립 다운로드 후 Remotion 합성 코드 작성 | ✅ 가능 |
| 그래픽 오버레이 애니메이션 제작 | ✅ 가능 |
| 최종 MP4 렌더 | ✅ 가능 |

---

## Google Veo / Gemini 영상 생성 레퍼런스

> 출처: https://gemini.google/kr/overview/video-generation/ 및 https://deepmind.google/technologies/veo/
> 실사화 영상 제작 시 Gemini(Veo)를 사용할 경우 이 섹션을 참조.

### 모델 스펙

| 항목 | Veo 3.1 Lite | Veo 3.1 |
|---|---|---|
| 목적 | 빠른 생성 (속도 최적화) | 최고 화질 |
| 클립 길이 | 8초 | 8초 |
| 해상도 | 1080p | 1080p / 4K |
| 네이티브 오디오 | ✅ (효과음·대사·음악) | ✅ |
| 사진→영상 변환 | ✅ | ✅ |
| 세로 영상 (모바일) | ✅ | ✅ |

### Veo 3.1 핵심 기능

| 기능 | 설명 |
|---|---|
| **참고 이미지 업로드** | 캐릭터·객체·배경 스타일을 참고 이미지로 지정, 인물 일관성 유지 |
| **스타일 레퍼런스** | 원하는 시각 스타일 이미지를 제공하면 해당 미학으로 생성 |
| **장면 확장** | 첫 번째 클립 마지막 1초를 이어받아 다음 장면으로 자연스럽게 연결 |
| **첫/마지막 프레임** | 시작·끝 이미지를 지정해 그 사이 장면을 자동 생성 |
| **카메라 컨트롤** | dolly / zoom / pan / tilt 정밀 제어 |
| **모션 컨트롤** | 객체의 이동 경로를 직접 지정 |
| **객체 추가/제거** | 영상 내 특정 요소를 자연스럽게 삽입하거나 제거 |
| **아웃페인팅** | 원본 프레임 바깥으로 장면을 자연스럽게 확장 |
| **캐릭터 제어** | 얼굴·몸·목소리로 캐릭터 애니메이션 |

### Veo 프롬프트 7대 요소 (공식 가이드)

프롬프트에 아래 요소를 많이 포함할수록 결과물 통제력이 높아진다.

1. **카메라 프레이밍·움직임**
   - `low angle`, `eye level`, `bird's eye view`
   - `dolly in`, `pan left`, `zoom out`, `tracking shot`, `handheld`

2. **스타일**
   - `cinematic`, `documentary`, `film noir`, `VHS texture`, `clay animation`
   - 실사화: `photorealistic`, `cinematic`, `realistic`

3. **조명**
   - `warm natural daylight from window`, `soft diffused light`, `high-key`
   - `spotlight`, `golden hour`, `studio lighting`

4. **인물 묘사** ← 구체적일수록 좋음
   - ❌ 나쁜 예: `"a nurse"`
   - ✅ 좋은 예: `"Korean female nurse in dark burgundy scrubs, mid-30s, warm expression, slight smile"`

5. **장면 설정** ← 구체적일수록 좋음
   - ❌ 나쁜 예: `"hospital room"`
   - ✅ 좋은 예: `"bright modern Korean hospital room, white walls, IV stand, medical cart, natural light from window blinds"`

6. **행동·동작**
   - 단순하고 구체적으로 (복잡한 동작은 품질 저하)
   - `carefully places`, `gently wraps`, `slowly walks toward`

7. **대사·사운드** (Veo 3 전용)
   - `with ambient hospital sounds`, `with sound of footsteps`
   - `she says: "..."` 형태로 대사 삽입 가능

### Veo 실사 인물 영상 프롬프트 구조 템플릿

```
[카메라 샷] of [인물 상세 묘사] [동작] in [배경 상세].
[조명]. [분위기/스타일]. [사운드 요소(선택)].
```

**예시:**
```
Medium shot of a Korean female nurse in dark burgundy scrubs, mid-30s,
carefully placing used gauze into a yellow medical waste container.
Bright modern hospital room background with IV stand.
Soft warm natural light from window. Cinematic, photorealistic.
Ambient hospital sounds.
```

### Gemini에서 Veo 접근 방법

1. **Gemini 앱** (gemini.google.com) — Google AI Plus/Pro/Ultra 구독 필요 (만 18세 이상)
2. **Google Flow** (flow.google.com) — AI 영화 제작 특화 도구, Veo 3.1 기반
3. **Google AI Studio** (aistudio.google.com) — API 형태 접근, 개발자용
4. **Google Vids** — 업무용 영상 제작
5. **Vertex AI Studio** — 엔터프라이즈용

> **접근 계정**: dolpungzzz@gmail.com
> **구독 확인**: Google AI Plus 이상 필요

### 실사화 영상 품질 레퍼런스 (Gemini 소개 페이지 기준)

Gemini 공식 소개 영상(https://gemini.google/kr/overview/video-generation/)에서 보여주는 영상 스타일:
- **해상도**: 1080p / 4K
- **조명**: 자연광 위주, 영화적 조명
- **인물**: 사실적 묘사, 자연스러운 움직임
- **물리**: 실제 세계 물리 법칙 반영 (물, 천, 연기 등)
- **오디오**: 효과음·대사·배경음 자동 생성
- **특징**: 프롬프트 추종 정확도 높음, 인물 표정·동작 자연스러움

### SynthID 워터마크 안내

Veo로 생성된 모든 영상에는 **SynthID** 워터마크가 자동 삽입됨 (육안으로는 보이지 않음). AI 생성 콘텐츠 식별 기술로 저작권·편집 시 참고.
