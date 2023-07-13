import { testRain, testRain2 } from "@/components/soundscapes";
import { Soundscape } from "../Soundscape/types";

export async function getSoundscapes(): Promise<Soundscape[]> {
  return [testRain, testRain2];
}

export async function getSoundscape(url: string): Promise<Soundscape | null> {
  const soundscapes = await getSoundscapes();
  return soundscapes.find((s) => s.url == url) || null;
}
