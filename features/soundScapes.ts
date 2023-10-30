import { Soundscape } from "./types";

export const komanokodo: Soundscape = {
  name: "Komano Kodo",
  id: "komano-kodo",
  thumbnail: { src: "japan.png", alt: "Japan" },
  sounds: [
    {
      src: "/sounds/low-rain.wav",
      name: "deep rain",
      color: "primary-blue-100",
    },
    {
      src: "/sounds/hi-rain.wav",
      name: "high rain",
      color: "primary-blue-100",
    },
    {
      src: "/sounds/running-water.wav",
      name: "running water",
      color: "primary-green-100",
    },
    {
      src: "/sounds/cicada.wav",
      name: "cicada",
      color: "primary-yellow-100",
    },
  ],
  colors: ["#f28246", "#aa46f2"],
};

export interface Soundscapes {
  [key: string]: Soundscape;
}

export const soundscapes: Soundscapes = {
  komanokodo: komanokodo,
};
