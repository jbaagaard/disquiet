import React, { useEffect, useState } from "react";
import * as S from "./Player.styled";
import useSound from "use-sound";
import Slider from "../Slider";
import { Sound } from "../models";
import rain from "../../testData/rain.ogg";

interface PlayerProps extends Sound {
  playing: boolean;
}

const Player = ({ name, color, startVolume, playing }: PlayerProps) => {
  const [volume, setVolume] = useState(startVolume ? startVolume : 0.5);
  const [play, { pause }] = useSound(rain, { volume, loop: true });

  useEffect(() => {
    if (!playing) pause();
    else play();
  }, [playing]);

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
