import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },  
      colors: {
        rainbowTheme:{
          blue:{
            low:"#96C9F4",
            mid:"#3FA2F6",
            high:"#0F67B1",
          },
          red:{
            low:"#FA7070",
            mid:"#D24545",
            high:"#820300",
          },
          green:{
            low:"#DEF9C4",
            mid:"#9CDBA6",
            high:"#468585",
          },
          yellow:{
            low:"#F6FB7A",
            mid:"#FFDE4D",
            high:"#FFB22C",
          },
          purple:{
            low:"#C8ACD6",
            mid:"#2E236C",
            high:"#17153B",
          },
          orange:{
            low:"#F6DCAC",
            mid:"#FB773C",
            high:"#EB5B00",
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
