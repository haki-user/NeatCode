import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

const colorClasses = {
  "c-blue": "#00cded",
  "c-blue-light": "#96d1f9",
  "c-atlantis": "#8dc63f",
  "c-atlantis-light": "#b9f4bc",
  "c-mango": "#ffb601",
  "c-mango-light": "#ffd57f",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colorClasses,
        ...colors,
        "dark-layer-1": "rgb(40,40,40)",
        "c-blue": "#00cded",
        "c-atlantis": "#8dc63f",
        "c-atlantis-light": "#b9f4bc",
        "dark-layer-2": "rgb(26,26,26)",
        "dark-label-2": "rgba(239, 241, 246, 0.75)",
        "dark-divider-border-2": "rgb(61, 61, 61)",
        "dark-fill-2": "hsla(0,0%,100%,.14)",
        "dark-fill-3": "hsla(0,0%,100%,.1)",
        "dark-gray-6": "rgb(138, 138, 138)",
        "dark-gray-7": "rgb(179, 179, 179)",
        "gray-8": "rgb(38, 38, 38)",
        "dark-gray-8": "rgb(219, 219, 219)",
        "brand-orange": "rgb(255 161 22)",
        "brand-orange-s": "rgb(193, 122, 15)",
        "dark-yellow": "rgb(255 192 30)",
        "dark-pink": "rgb(255 55 95)",
        olive: "rgb(0, 184, 163)",
        "dark-green-s": "rgb(44 187 93)",
        "dark-blue-s": "rgb(10 132 255)",
        white: "#fff",
        black: "#000",
        "blue-b": "#1da09c",
        "dark-blue-b": "#17807d",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        TypoRound: ["var(--font-TypoRound)"],
        NimbusSans: ["var(--font-NimbusSans)"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0rem)" },
          "50%": { transform: "translateY(1.25rem)" },
          "100%": { transform: "translateY(0rem)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
      screens: {
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1440px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value: string) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
export default config;
