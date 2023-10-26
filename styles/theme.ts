export interface Colors {
  bg: string;
  bgDark: string;
  bgLight: string;
  text: string;
  textHighlight: string;
  textSubtle: string;
  textSubtler: string;
  red: string;
  redText: string;
  yellowText: string;
  yellow: string;
  greenText: string;
  green: string;
}

export interface Font {
  "font-size"?: string;
  "font-weight?": number;
  "line-height"?: string;
  "letter-spacing"?: string;
  "font-family"?: string;
}

export interface Fonts {
  h1: Font;
  body: Font;
}

export interface BaseTheme {
  colors: Colors;
  fonts: Fonts;
}

export const train: BaseTheme = {
  colors: {
    bg: "#1d2021",
    bgDark: "#161819",
    bgLight: "#282828",
    text: "#d4be98",
    textHighlight: "#e3ceaa",
    textSubtle: "#897f73",
    textSubtler: "#897f73",
    green: "#a9b665",
    greenText: "#1d2021",
    red: "#ea6962",
    redText: "#d4be98",
    yellow: "#d8a657",
    yellowText: "#1d2021",
  },
  fonts: {
    h1: {
      "font-size": "2rem",
      "font-weight?": 700,
    },
    body: {
      "font-size": "1rem",
      "font-weight?": 400,
    },
  },
};

export interface Themes {
  [key: string]: BaseTheme;
}

export const themes: Themes = {
  train: train,
};
