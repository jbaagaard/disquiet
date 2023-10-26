import PlayButton from "../PlayButton";
import SoundController from "../SoundController";
import { useSoundScape } from "../soundScapeContext";
import { soundscapes } from "../soundScapes";
import * as S from "./Dashboard.styled";

export default function DashBoard() {
  const { setPlaying, isPlaying, currentSoundscape } = useSoundScape();

  return (
    <S.Content>
      <S.Title>{currentSoundscape?.name}</S.Title>

      <S.SoundScapeWrapper>
        {soundscapes.komanokodo.sounds.map((sound) => (
          <SoundController sound={sound} key={sound.src} />
        ))}
      </S.SoundScapeWrapper>
      <PlayButton
        isPlaying={isPlaying}
        onClick={() => {
          setPlaying(!isPlaying);
        }}
      />
    </S.Content>
  );
}
