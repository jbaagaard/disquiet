import {Soundscape} from "../soundscapes/models";
import {testRain, testRain2} from "../testData/soundscapes";

export async function getSoundscapes(): Promise<Soundscape[]> {


    return [testRain, testRain2];
}