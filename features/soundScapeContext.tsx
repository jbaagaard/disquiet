import { createContext, use, useContext, useState } from "react";
import { Soundscapes, soundscapes } from "./soundScapes";
import { Soundscape } from "./types";

export interface soundscapeContextProps {
  noGestures: boolean;
  isPlaying: boolean;
  setPlaying: (value: boolean) => void;
  soundscapes: Soundscapes;
  currentSoundscape?: Soundscape;
  setCurrentSoundscape?: (value: keyof Soundscapes) => void;
}

export const soundScapeContext = createContext<soundscapeContextProps>(null!);

export interface soundScapeProviderProps {
  children: React.ReactNode;
}

export const SoundScapeProvider = ({ children }: soundScapeProviderProps) => {
  const [playing, setPlaying] = useState(false);
  const [noGestures, setNoGestures] = useState(true);
  const [currentSoundscape, setCurrentSoundscape] = useState<Soundscape>(
    soundscapes["komanokodo"]
  );
  return (
    <soundScapeContext.Provider
      value={{
        noGestures,
        isPlaying: playing,
        setPlaying: (value: boolean) => {
          setPlaying(value);
          setNoGestures(false);
        },
        soundscapes: soundscapes,
        currentSoundscape: currentSoundscape,
        setCurrentSoundscape: (value: keyof Soundscapes) => {
          setCurrentSoundscape(soundscapes[value]);
        },
      }}
    >
      {children}
    </soundScapeContext.Provider>
  );
};

export const useSoundScape = () => {
  if (!soundScapeContext)
    throw new Error("useSoundScape must be used within a SoundScapeProvider");
  return useContext(soundScapeContext);
};
