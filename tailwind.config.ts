import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      animation: {
        'float-1': 'float-1 6s ease-in-out infinite',
        'float-2': 'float-2 8s ease-in-out infinite',
        'float-3': 'float-3 7s ease-in-out infinite',
      },
      keyframes: {
          'float-1': {
              '0%': { transform: 'translate(0, 0)' },
              '25%': { transform: 'translate(8px, -8px)' },
              '50%': { transform: 'translate(-8px, 8px)' },
              '75%': { transform: 'translate(8px, 8px)' },
              '100%': { transform: 'translate(0, 0)' },
          },
          'float-2': {
              '0%': { transform: 'translate(0, 0)' },
              '25%': { transform: 'translate(12px, -6px)' },
              '50%': { transform: 'translate(-12px, 6px)' },
              '75%': { transform: 'translate(6px, 12px)' },
              '100%': { transform: 'translate(0, 0)' },
          },
          'float-3': {
              '0%': { transform: 'translate(0, 0)' },
              '25%': { transform: 'translate(6px, -12px)' },
              '50%': { transform: 'translate(-6px, 12px)' },
              '75%': { transform: 'translate(12px, 6px)' },
              '100%': { transform: 'translate(0, 0)' },
          },
      },
    },
  },
  plugins: [],
};
export default config;
