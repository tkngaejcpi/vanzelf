/** @type {import("prettier").Config & import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,

  useTabs: false,

  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],

  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],

  importOrder: [
    "^astro",
    "<THIRD_PARTY_MODULES>",

    "^@models/(.*)$",
    "^@layouts/(.*)$",
    "^@components/(.*)$",

    "^[./]",
  ],

  importOrderSeparation: true,
};

export default config;
