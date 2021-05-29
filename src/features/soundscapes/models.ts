export interface SounscapeDto {
  url: string;
}

export interface Soundscape {
  url: string;
  name: string;
  thumbnail: Image;
  sounds: Sound[];
  colors: [string, string];
}

export interface Sound {
  url: string;
  name: string;
  color?: string;
  startVolume?: number;
}

export interface Image {
  url: string;
  alt: string;
}
