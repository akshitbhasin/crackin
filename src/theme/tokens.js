const brandBase = {
  pink: "#ff2e9a",
  cyan: "#2ee8ff",
  cream: "#f8f8f8",
  ink: "#0d0d0d",
};

// radii etc.
const shape = {
  radius: "18px",
  cardRadius: "18px",
  pillRadius: "999px",
};

// light theme (matches :root vars)
const lightColors = {
  bg: "#ffffff",
  text: "#1f1b1b",
  navBg: "#ffffff",
  heroBg: "#ffeef8",
  cardBg: "#ffffff",
  footerBg: "#ffffff",
  borderSoft: "#e1d5c8",
};

// dark theme (matches .site[data-theme="dark"])
const darkColors = {
  bg: "#0d0d0d",
  text: "#fff7ec",
  navBg: "#0d0d0d",
  heroBg: "#111111",
  cardBg: "#151515",
  footerBg: "#070707",
  borderSoft: "#ffffff16",
};

// helper to get tokens based on theme string: "light" | "dark"
export function getTokens(mode = "light") {
  const palette = mode === "dark" ? darkColors : lightColors;

  return {
    ...brandBase,
    ...shape,
    ...palette,
  };
}
