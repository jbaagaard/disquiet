import React, { useEffect, useState } from "react";
import * as S from "./Player.styled";
import useSound from "use-sound";
import { Slider } from "../Slider";
import { Sound } from "../Soundscape/types";

interface PlayerProps extends Sound {
  playing: boolean;
}

const Player = ({ name, color, startVolume, playing }: PlayerProps) => {
  const [volume, setVolume] = useState(startVolume ? startVolume : 0.5);
  const [play, { pause }] = useSound("", { volume, loop: true });

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
