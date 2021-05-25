import {SoundscapeDto} from "../soundscapes/models";

export async function getSoundscapes():Promise<SoundscapeDto[]>{
    const rain:SoundscapeDto = {
        name:"Forrest rain",
        url:"forrest_rain",
        image:"https://i.imgur.com/SVNb0yt.jpg",
        thumbnail:"https://i.imgur.com/d8KaAmn.png",
        sound_urls:["rain.ogg","rain.ogg"]
    }
    return [rain];
}