import React, { useEffect, useState } from "react";
import * as S from "./Soundscape.styled";
import { Soundscape } from "../models";
import Player from "../Player";
import PlayButton from "../Player/PlayButton";
import { calculateColor } from "../../color/color";

interface SoundscapeProps {
  soundscape: Soundscape;
}

const SoundscapeComponent = ({ soundscape }: SoundscapeProps) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        handlePlayPauseClick();
      }
    });

    return () => {
      window.removeEventListener("keyup", (event) => {
        if (event.code === "Space") {
          handlePlayPauseClick();
        }
      });
    };
  }, []);

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
