import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        card: "0px 8px 55px 2px rgba(0,0,0,0.10)"
      },
      transitionDelay: {
        icon: "50ms"
      },
      transitionDuration: {
        icon: "200ms"
      },
      animation: {
        'spin-swap': 'spin-swap ease-in-out 4s infinite',
        movingDots: "movingDots 1.2s steps(1) infinite",
      },
      keyframes: {
        'spin-swap': {
          '0%': {
            transform: 'scale(1.4)',
          },
          '50%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.4)',
          },
        },
        movingDots: {
          "0%": { content: '"·..."' },
          "25%": { content: '" .·.." ' },
          "50%": { content: '" ..·. "' },
          "75%": { content: '" ...·"' },
          "100%": { content: '"...."' }
        },
      },
    },
  },
  plugins: [],
};
export default config;
