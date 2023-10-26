import { Soundscape } from "./types";

export const komanokodo: Soundscape = {
  name: "Komano Kodo",
  id: "komano-kodo",
  thumbnail: { src: "japan.png", alt: "Japan" },
  sounds: [
    {
      src: "/low-rain.wav",
      name: "deep rain",
      color: "#233dd7",
    },
    {
      src: "/hi-rain.wav",
      name: "high rain",
      color: "#2b89db",
    },
    {
      src: "/running-water.wav",
      name: "running water",
      color: "#2b89db",
    },
    {
      src: "/cicada.wav",
      name: "cicada",
      color: "#247222",
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
      color: "#b7a137",
      startVolume: 0,
    },
    {
      src: "",
      name: "rain-bass",
      color: "#233dd7",
    },
    {
      src: "",
      name: "rain-mids",
      color: "#2e6fe0",
    },
    {
      src: "",
      name: "rain-trebble",
      color: "#2b89db",
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
