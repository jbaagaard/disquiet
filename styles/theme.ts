export interface Colors {
  "base-000": string;
  "base-100": string;
  "base-200": string;
  "content-000": string;
  "content-100": string;
  "content-200": string;
  "content-300": string;
  "primary-red-000": string;
  "primary-red-100": string;
  "primary-red-200": string;
  "primary-red-content-100": string;
  "primary-pink-000": string;
  "primary-pink-100": string;
  "primary-pink-200": string;
  "primary-pink-content-100": string;
  "primary-yellow-000": string;
  "primary-yellow-100": string;
  "primary-yellow-200": string;
  "primary-yellow-content-100": string;
  "primary-green-000": string;
  "primary-green-100": string;
  "primary-green-200": string;
  "primary-green-content-100": string;
  "primary-blue-000": string;
  "primary-blue-100": string;
  "primary-blue-200": string;
  "primary-blue-content-100": string;
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
    "base-000": "#161819",
    "base-100": "#1D2021",
    "base-200": "#282828",
    "content-000": "#ECD6B1",
    "content-100": "#D4BE98",
    "content-200": "#897F73",
    "content-300": "#7A7064",
    "primary-red-000": "#B4453F",
    "primary-red-100": "#EA6962",
    "primary-red-200": "#FB867F",
    "primary-red-content-100": "",
    "primary-pink-000": "#B86179",
    "primary-pink-100": "#D3869B",
    "primary-pink-200": "#EEA2B6",
    "primary-pink-content-100": "",
    "primary-yellow-000": "#BA883A",
    "primary-yellow-100": "#D8A657",
    "primary-yellow-200": "#F2C884",
    "primary-yellow-content-100": "",
    "primary-green-000": "#92A33A",
    "primary-green-100": "#A9B665",
    "primary-green-200": "#C1CE7A",
    "primary-green-content-100": "",
    "primary-blue-000": "#559A8B",
    "primary-blue-100": "#7DAEA3",
    "primary-blue-200": "#94CABE",
    "primary-blue-content-100": "",
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
