import { createContext, useState } from "react";

export interface soundscapeContextProps {
  playing: boolean;
  setPlaying: (playing: boolean) => void;
}

export const soundScapeContext = createContext<soundscapeContextProps>(null!);

export interface soundScapeProviderProps {
  children: React.ReactNode;
}

export const SoundScapeProvider = ({ children }: soundScapeProviderProps) => {
  const [playing, setPlaying] = useState(false);
  return (
    <soundScapeContext.Provider
      value={{
        playing,
        setPlaying,
      }}
    >
      {children}
    </soundScapeContext.Provider>
  );
};
