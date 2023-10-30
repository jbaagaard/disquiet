import { IconButton } from "../IconButton/intex";
import PlayButton from "../PlayButton";
import SoundController from "../SoundController";
import { useSoundScape } from "../soundScapeContext";
import { soundscapes } from "../soundScapes";
import * as S from "./Dashboard.styled";

export default function DashBoard() {
  const {
    setPlaying,
    isPlaying,
    currentSoundscape,
    decreaseVolume,
    increaseVolume,
    setAnimateSliders,
    animateSliders,
  } = useSoundScape();

  return (
    <S.Content>
      <S.Title>{currentSoundscape?.name}</S.Title>

      <S.SoundScapeWrapper>
        {soundscapes.komanokodo.sounds.map((sound) => (
          <SoundController sound={sound} key={sound.src} />
        ))}
      </S.SoundScapeWrapper>
      <S.ControlsWrapper>
        <IconButton
          icon="volume-down"
          onClick={decreaseVolume}
          tooltip="Decrease volume"
        />
        <IconButton
          icon="animate-sliders"
          onClick={() => setAnimateSliders(!animateSliders)}
          value={animateSliders}
          tooltip="Animate sliders"
        />
        <IconButton
          icon="volume-up"
          onClick={increaseVolume}
          tooltip="Increase volume"
        />
      </S.ControlsWrapper>
      <PlayButton
        isPlaying={isPlaying}
        onClick={() => {
          setPlaying(!isPlaying);
        }}
      />
    </S.Content>
  );
}
