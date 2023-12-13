import { useSoundScape } from "../soundScapeContext";
import { Soundscapes } from "../soundScapes";
import * as S from "./sidebar.styled";

export default function Sidebar() {
  const { soundscapes, currentSoundscape, setCurrentSoundscape } =
    useSoundScape();

  return (
    <S.Content>
      <S.SoundscapeList>
        {Object.entries(soundscapes).map(([key, soundscape]) => (
          <S.Soundscape
            key={key}
            onClick={() => {
              setCurrentSoundscape!(key as keyof Soundscapes);
            }}
            active={currentSoundscape?.name === soundscape.name}
          >
            {soundscape.name}
          </S.Soundscape>
        ))}
      </S.SoundscapeList>
    </S.Content>
  );
}
