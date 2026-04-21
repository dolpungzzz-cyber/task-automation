import { loadFont } from "@remotion/google-fonts/NotoSansKR";

export const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "700", "800"],
});

export const colors = {
  brandPurple: "#8b3dff",
  deepPurple:  "#5a32fa",
  teal:        "#00c4cc",
  nearBlack:   "#0f1015",
  white:       "#ffffff",
  offWhite:    "#f0ece7",
  // Medical palette
  burgundy:    "#8b2234",
  patientBlue: "#a8c4d8",
  silverGray:  "#b0b8c0",
  // ESG pillars
  esgGreen:    "#22c55e",
  esgBlue:     "#3b82f6",
  esgGold:     "#f59e0b",
  // Scene backgrounds
  bg1: "#0f1015",
  bg2: "#0a0d14",
  bg3: "#080b12",
} as const;

export const heroGradient =
  "radial-gradient(126% 86% at 74% -33%, rgba(90,50,250,.25) 0%, transparent 60%)," +
  "radial-gradient(70% 64% at 1% 1%, rgba(0,196,204,.35) 0%, transparent 70%)," +
  colors.bg1;

export const ctaGradient =
  "linear-gradient(98deg, #00c4cc -9%, #5a32fa 78%, #7630d7 158%)";
