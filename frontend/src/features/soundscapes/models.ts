export interface SounscapeDto {
    url:string
}

export interface Soundscape {
    url:string;
    name:string;
    image:string;
    thumbnail:string;
    sound_urls:string[];
    colors:[string,string]
}