import { Soundscape } from "./types";

export const komanokodo: Soundscape = {
  name: "Komano Kodo",
  id: "komano-kodo",
  thumbnail: { src: "japan.png", alt: "Japan" },
  sounds: [
    {
      src: "/sounds/low-rain.wav",
      name: "deep rain",
      color: "primary-blue-000",
    },
    {
      src: "/sounds/hi-rain.wav",
      name: "high rain",
      color: "primary-blue-100",
    },
    {
      src: "/sounds/running-water.wav",
      name: "running water",
      color: "primary-blue-200",
    },
    {
      src: "/sounds/cicada.wav",
      name: "cicada",
      color: "primary-yellow-100",
    },
  ],
  colors: ["#f28246", "#aa46f2"],
};

export const testRain2: Soundscape = {
  name: "Forest",
  id: "forest",
  thumbnail: { src: "", alt: "forest" },
  sounds: [
    {
      src: "",
      name: "thunder",
      startVolume: 0,
    },
    {
      src: "",
      name: "rain-bass",
    },
    {
      src: "",
      name: "rain-mids",
    },
    {
      src: "",
      name: "rain-trebble",
    },
    {
      src: "",
      name: "forrest-bass",
    },
    {
      src: "",
      name: "forrest-mids",
    },
    {
      src: "",
      name: "forrest-trebble",
    },
  ],
  colors: ["#19ba15", "#247222"],
};

export interface Soundscapes {
  [key: string]: Soundscape;
}

export const soundscapes: Soundscapes = {
  komanokodo: komanokodo,
  forest: testRain2,
};
