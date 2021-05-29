import { Soundscape } from "../soundscapes/models";
import { testRain, testRain2 } from "../data/soundscapes";

export async function getSoundscapes(): Promise<Soundscape[]> {
  return [
    testRain,
    testRain2,
    testRain,
    testRain2,
    testRain,
    testRain2,
    testRain,
    testRain2,
    testRain,
    testRain2,
  ];
}
