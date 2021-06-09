import React, { useEffect, useState } from "react";
import * as S from "./Player.styled";
import useSound from "use-sound";
import { Slider } from "../Slider";
import { Sound } from "../models";
import rain from "../../data/rain.ogg";
import PlayButton from "./PlayButton";

interface PlayerProps extends Sound {
  playing: boolean;
  controls?: boolean;
}

const Player = ({
  name,
  color,
  startVolume,
  playing,
  controls = false,
}: PlayerProps) => {
  const [volume, setVolume] = useState(startVolume ? startVolume : 0.5);
  const [play, { isPlaying, pause }] = useSound(rain, { volume, loop: true });

  useEffect(() => {
    if (!playing) pause();
    else play();

    return () => {
      pause();
    };
  }, [playing, pause, play]);

  function handleChange(value: number) {
    setVolume(value);
  }

  function handlePlayButtonClick() {
    if (isPlaying) pause();
    else play();
  }

  return (
    <S.Wrapper>
      <Slider
        color={color ? color : "#4750ff"}
        onChange={handleChange}
        value={volume}
        active={true}
        name={name}
      />
      {controls && (
        <PlayButton onClick={handlePlayButtonClick} isPlaying={isPlaying} />
      )}
    </S.Wrapper>
  );
};

export default Player;
