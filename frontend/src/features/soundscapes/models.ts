export interface SounscapeDto {
    url: string
}

export interface Soundscape {
    url: string;
    name: string;
    image: string;
    thumbnail: string;
    sounds: Sound[];
    colors: [string, string]
}

export interface Sound {
    url:string,
    name:string,
    color?:string
}
