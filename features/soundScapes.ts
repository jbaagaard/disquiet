import { Soundscape } from "./types";

export const kumanokodo: Soundscape = {
  name: "Kumano Kodo",
  id: "kumano-kodo",
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
export const kumano: Soundscape = {
  name: "test",
  id: "test",
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
  kumanokodo,
  kumano,
};
