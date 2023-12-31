/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Helvetica Neue",
        "PingFang SC",
        "Microsoft YaHei",
        "Noto Sans CJK TC",
        "WenQuanYi Micro Hei",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Noto Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      serif: [
        "Noto Serif CJK TC",
        "serif",
        "Apple Color Emoji",
        "Noto Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      mono: [
        "Jetbrains Mono",
        "Menlo",
        "Consolas",
        "Monaco",
        "monospace",
        "Apple Color Emoji",
        "Noto Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
