import { Soundscape } from "../soundscapes/models";

export const testRain: Soundscape = {
  name: "Porch rain",
  url: "forrest_rain",
  thumbnail: "https://i.imgur.com/UqF6BqY.png",
  sounds: [
    {
      url: "sub_rain.ogg",
      name: "sub-bass",
    },
    {
      url: "low_rain.ogg",
      name: "low-bass",
    },
    {
      url: "bass-rain.ogg",
      name: "bass",
    },
    {
      url: "high-bassrain.ogg",
      name: "high-bass",
    },
    {
      url: "low-midsrain.ogg",
      name: "low-mids",
    },
    {
      url: "midsrain.ogg",
      name: "mids",
    },
    {
      url: "high-midsrain.ogg",
      name: "high-mids",
    },
    {
      url: "low-trebblerain.ogg",
      name: "low-trebble",
    },
    {
      url: "trebblerain.ogg",
      name: "trebble",
    },
    {
      url: "high-trebblerain.ogg",
      name: "high-trebble",
    },
  ],
  colors: ["#f28246", "#aa46f2"],
};

export const testRain2: Soundscape = {
  name: "Forest",
  url: "forest",
  thumbnail: "https://i.imgur.com/d8KaAmn.png",
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
