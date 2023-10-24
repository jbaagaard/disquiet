import React, { useState } from "react";
import * as S from "./Soundscape.styled";
import { Soundscape } from "./types";
import Player from "../Player";
import PlayButton from "../Player/PlayButton";
import { calculateColor } from "../color/color";
import { soundScapeContext } from "../soundScapeContext";

interface SoundscapeProps {
  soundscape: Soundscape;
}

const SoundscapeComponent = ({ soundscape }: SoundscapeProps) => {
  const { playing, setPlaying } = React.useContext(soundScapeContext);
  function handlePlayPauseClick() {
    setPlaying(!playing);
  }

  return (
    <S.Wrapper key={soundscape.name}>
      <S.Title>{soundscape.name}</S.Title>
      <S.Sliders>
        {soundscape.sounds.map((s, i) => (
          <S.Slider key={s.url + i}>
            <Player
              url={s.url}
              name={s.name}
              startVolume={s.startVolume ? s.startVolume : 0.5}
              playing={playing}
              color={
                s.color ||
                calculateColor(
                  i,
                  soundscape.sounds.length,
                  soundscape.colors[0],
                  soundscape.colors[1]
                )
              }
            />
          </S.Slider>
        ))}
      </S.Sliders>
      <S.PlayButton>
        <PlayButton onClick={handlePlayPauseClick} isPlaying={playing} />
      </S.PlayButton>
    </S.Wrapper>
  );
};

export default SoundscapeComponent;
