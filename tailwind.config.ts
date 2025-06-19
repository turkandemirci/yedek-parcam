import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF",
        primary: {
          "50": "#E9F3FC",
          "100": "#D9EDFF",
          "200": "#B5DDFF",
          "300": "#63AFF3",
          "400": "#1A87E7",
          "500": "#1374CA",
          "600": "#075AA3",
          "700": "#024B8B",
          "800": "#00305B",
          "900": "#001B33",
        },
        neutral: {
          "50": "#F5F9FC",
          "75": "#F0F5F9",
          "100": "#EBF0F5",
          "200": "#D3DCE4",
          "300": "#BAC8D5",
          "400": "#99AEC1",
          "500": "#8095A8",
          "600": "#677B8E",
          "700": "#4F6477",
          "800": "#3F5365",
          "900": "#2B3A48",
        },
        success: {
          "100": "#F2FAF4",
          "500": "#19A739",
          "600": "#0D8027",
          "900": "#015915",
        },
        error: {
          "100": "#FFF0F1",
          "500": "#E52233",
          "600": "#B30816",
          "900": "#7C010B",
        },
        warning: {
          "100": "#FFF9E6",
          "500": "#FFC107",
          "600": "#EB9F07",
          "900": "#594504",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "heading-xxl": [
          "40px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.025em",
            fontWeight: "600",
          },
        ],
        "heading-xl": [
          "32px",
          {
            lineHeight: "35px",
            letterSpacing: "-0.0075em",
            fontWeight: "600",
          },
        ],
        "heading-lg": [
          "24px",
          {
            lineHeight: "28px",
            letterSpacing: "-0.005em",
            fontWeight: "600",
          },
        ],
        "heading-md": [
          "20px",
          {
            lineHeight: "24px",
            letterSpacing: "-0.0025em",
            fontWeight: "600",
          },
        ],
        "heading-sm": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        callout: [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        body: [
          "15px",
          {
            lineHeight: "22px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "body-sm": [
          "13px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        caption: [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      borderRadius: {
        "2xl": "16px",
        xl: "12px",
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};

export default config;
