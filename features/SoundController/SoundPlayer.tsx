import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Howl } from "howler";

interface SoundPlayerProps {
  src: string;
}

export type SoundPlayerRef = {
  play: () => void;
  pause: () => void;
  setVolume: (volume: number) => void;
};

export const SoundPlayer = forwardRef(function SoundPlayer(
  { src }: SoundPlayerProps,
  ref
) {
  const soundContext = new AudioContext();

  // const sound = useMemo(
  //   () => new Howl({ src, loop: true, preload: true }),
  //   [src]
  // );

  // useEffect(() => {
  //   return () => {
  //     sound.unload();
  //   };
  // }, [sound]);

  // useImperativeHandle(ref, () => {
  //   return {
  //     play() {
  //       console.log("playAudio");
  //       sound.play();
  //     },

  //     pause() {
  //       console.log("pauseAudio");
  //       sound.pause();
  //     },
  //     setVolume(volume: number) {
  //       sound.volume(volume);
  //     },
  //   };
  // });

  return null;
});
