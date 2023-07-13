import { Soundscape } from "./Soundscape/types";

export const testRain: Soundscape = {
  name: "Komano Kodo",
  url: "komano-kodo",
  thumbnail: { url: "japan.png", alt: "japanese" },
  sounds: [
    {
      url: "data/low-rain.wav",
      name: "deep rain",
    },
    {
      url: "data/hi-rain.wav",
      name: "high rain",
    },
    {
      url: "data/running-water.wav",
      name: "running water",
    },
    {
      url: "data/cicada.wav",
      name: "cicada",
    },
  ],
  colors: ["#f28246", "#aa46f2"],
};

export const testRain2: Soundscape = {
  name: "Forest",
  url: "forest",
  thumbnail: { url: "", alt: "forest" },
  sounds: [
    {
      url: "",
      name: "thunder",
      color: "#b7a137",
      startVolume: 0,
    },
    {
      url: "",
      name: "rain-bass",
      color: "#233dd7",
    },
    {
      url: "",
      name: "rain-mids",
      color: "#2e6fe0",
    },
    {
      url: "",
      name: "rain-trebble",
      color: "#2b89db",
    },
    {
      url: "",
      name: "forrest-bass",
    },
    {
      url: "",
      name: "forrest-mids",
    },
    {
      url: "",
      name: "forrest-trebble",
    },
  ],
  colors: ["#19ba15", "#247222"],
};
