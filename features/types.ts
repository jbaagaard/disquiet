import { Colors } from "../styles/theme";

export interface Soundscape {
  id: string;
  name: string;
  thumbnail: Image;
  sounds: Sound[];
  colors: [string, string];
}

export interface Sound {
  src: string;
  name: string;
  color?: keyof Colors;
  startVolume?: number;
}

export interface Image {
  src: string;
  alt: string;
}
