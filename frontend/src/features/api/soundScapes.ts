import {Soundscape} from "../soundscapes/models";

export async function getSoundscapes():Promise<Soundscape[]>{
    const rain:Soundscape = {
        name:"Forrest rain",
        url:"forrest_rain",
        image:"https://i.imgur.com/SVNb0yt.jpg",
        thumbnail:"https://i.imgur.com/d8KaAmn.png",
        sound_urls:["rain.ogg","rain.ogg","rain.ogg","rain.ogg","rain.ogg","rain.ogg","rain.ogg"],
        colors:["#f28246","#aa46f2"]
    }
    const rain2:Soundscape = {
        name:"Forrest rain 2",
        url:"forrest_rain2",
        image:"https://i.imgur.com/SVNb0yt.jpg",
        thumbnail:"https://i.imgur.com/d8KaAmn.png",
        sound_urls:["rain.ogg","rain.ogg","rain.ogg","rain.ogg","rain.ogg"],
        colors:["#27928f","#233dd7"]
    }
    return [rain,rain2];
}