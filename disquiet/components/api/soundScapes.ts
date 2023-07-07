import { Soundscape } from "../Soundscape/types";
import { testRain, testRain2 } from "./data/soundscapes";

export async function getSoundscapes(): Promise<Soundscape[]> {
  return [testRain, testRain2];
}
