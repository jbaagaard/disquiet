import { createContext, useState } from "react";

export interface soundscapeContextProps {
  noGestures: boolean;
  playing: boolean;
  setPlaying: (value: boolean) => void;
}

export const soundScapeContext = createContext<soundscapeContextProps>(null!);

export interface soundScapeProviderProps {
  children: React.ReactNode;
}

export const SoundScapeProvider = ({ children }: soundScapeProviderProps) => {
  const [playing, setPlaying] = useState(false);
  const [noGestures, setNoGestures] = useState(true);
  return (
    <soundScapeContext.Provider
      value={{
        noGestures,
        playing,
        setPlaying: (value: boolean) => {
          setPlaying(value);
          setNoGestures(false);
        },
      }}
    >
      {children}
    </soundScapeContext.Provider>
  );
};
