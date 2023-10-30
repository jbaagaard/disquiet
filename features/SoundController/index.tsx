import { useEffect, useRef, useState } from "react";
import { SoundPlayer, SoundPlayerRef } from "./SoundPlayer";
import { useSoundScape } from "../soundScapeContext";
import { Sound } from "../types";
import { Slider } from "../Slider";

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

interface SoundControllerProps {
  sound: Sound;
}
export default function SoundController({ sound }: SoundControllerProps) {
  const [volume, setVolume] = useState(0.5);
  const [animateTrejectory, setAnimateTrejectory] = useState(0);

  const ref = useRef<SoundPlayerRef>(null);
  const {
    isPlaying,
    increaseVolumeTrigger,
    decreaseVolumeTrigger,
    animateSliders,
  } = useSoundScape();

  useEffect(() => {
    setVolume(Math.min(volume + 0.07, 1));
  }, [increaseVolumeTrigger]);

  useEffect(() => {
    setVolume(Math.max(volume - 0.07, 0));
  }, [decreaseVolumeTrigger]);

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
      ref.current.setVolume(volume);
    }
  }, [volume]);

  function randomizeSilder() {
    setAnimateTrejectory(
      clamp(animateTrejectory + (Math.random() - 0.5) / 0.7, -0.7, 0.7)
    );
    console.log(animateTrejectory);
    setVolume(
      clamp(volume + (Math.random() - 0.5) / 10 + animateTrejectory / 30, 0, 1)
    );
  }

  useEffect(() => {
    if (animateSliders) {
      const interval = setInterval(() => {
        randomizeSilder();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [animateSliders, volume, animateTrejectory]);

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
