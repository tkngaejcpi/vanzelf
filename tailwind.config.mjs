/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Noto Sans CJK TC",
        "Noto Sans",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "sans-serif",
        "Noto Color Emoji",
      ],
      serif: [
        "Noto Serif CJK TC",
        "Noto Serif",
        "ui-serif",
        "serif",
        "Noto Color Emoji",
      ],
      mono: [
        "Jetbrains Mono",
        "Menlo",
        "Consolas",
        "Monaco",
        "ui-monospace",
        "monospace",
      ],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
