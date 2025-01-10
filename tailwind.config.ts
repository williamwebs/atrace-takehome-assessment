import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textGray: "var(--text-grey)",
        blue: "var(--blue)",
        dark: "var(--dark)",
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(to right, #EAABF0, #4623E9)",
      },
    },
  },
  plugins: [],
} satisfies Config;
