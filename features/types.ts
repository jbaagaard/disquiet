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
  color?: string;
  startVolume?: number;
}

export interface Image {
  src: string;
  alt: string;
}
