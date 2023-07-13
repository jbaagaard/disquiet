import React, { useEffect, useState } from "react";
import * as S from "./Player.styled";
import useSound from "use-sound";
import { Slider } from "../Slider";
import { Sound } from "../Soundscape/types";

interface PlayerProps extends Sound {
  playing: boolean;
}

const Player = ({
  name,
  color,
  startVolume = 0.5,
  playing,
  url,
}: PlayerProps) => {
  const [volume, setVolume] = useState(startVolume);
  const [play, { pause }] = useSound(url, { volume, loop: true });
  console.log(url);
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

  return (
    <S.Wrapper>
      <Slider
        color={color ? color : "#4750ff"}
        onChange={handleChange}
        value={volume}
        active={true}
        name={name}
      />
    </S.Wrapper>
  );
};

export default Player;
