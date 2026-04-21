// Design tokens — sourced from CLAUDE.md Design System (Canva)
export const colors = {
  // Canva brand
  brandPurple:  "#8b3dff",
  deepPurple:   "#5a32fa",
  purpleDark:   "#7d2ae8",
  teal:         "#00c4cc",
  nearBlack:    "#0f1015",
  white:        "#ffffff",

  // Medical / video palette (from user's Canva AI video)
  hospitalBeige: "#c9b99a",
  offWhite:      "#f0ece7",
  patientBlue:   "#a8c4d8",
  burgundy:      "#7d2535",
  silverGray:    "#b0b8c0",
  accentBlue:    "#b5d0e0",

  // ESG accent colors
  esgGreen:  "#2d9e5f",
  esgBlue:   "#1a73e8",
  esgGold:   "#f4a80a",
} as const;

export const fonts = {
  // Canva Sans stack (use Noto Sans KR for Korean)
  primary: '"Noto Sans KR", "Noto Sans", -apple-system, sans-serif',
  mono:    '"Fira Mono", "Consolas", monospace',
} as const;

export const spacing = {
  xs:  4,
  sm:  8,
  md:  16,
  lg:  24,
  xl:  32,
  xxl: 48,
  xxxl: 64,
} as const;

export const radius = {
  sm:   6,
  md:   8,
  lg:   16,
  pill: 9999,
} as const;

export const heroGradient =
  "radial-gradient(126% 86% at 74% -33%, rgba(90,50,250,.2) 0%, rgba(90,50,250,0) 100%)," +
  "radial-gradient(99% 75% at 83% -11%, rgb(125,42,232) 0%, rgba(125,42,232,0) 57%)," +
  "radial-gradient(70% 64% at 1% 1%, rgb(0,196,204) 0%, rgba(0,196,204,0) 90%)," +
  "#0f1015";

export const ctaGradient =
  "linear-gradient(98deg, #00c4cc -9%, #5a32fa 78%, #7630d7 158%)";
