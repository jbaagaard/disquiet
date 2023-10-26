import { useEffect, useRef, useState } from "react";
import { SoundPlayer, SoundPlayerRef } from "./SoundPlayer";
import { useSoundScape } from "../soundScapeContext";
import { Sound } from "../types";
import { Slider } from "../Slider";

interface SoundControllerProps {
  sound: Sound;
}
export default function SoundController({ sound }: SoundControllerProps) {
  const [volume, setVolume] = useState(0.5);

  const ref = useRef<SoundPlayerRef>(null);
  const { isPlaying } = useSoundScape();

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (ref.current) {
      console.log(volume);
      ref.current.setVolume(volume);
    }
  }, [volume]);

  return (
    <>
      <Slider
        color={sound.color ? sound.color : "primary-blue-100"}
        name={sound.name}
        onChange={(value) => {
          setVolume(value);
        }}
        value={volume}
      />
      <SoundPlayer src={sound.src} ref={ref} />
    </>
  );
}
