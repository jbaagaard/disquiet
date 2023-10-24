import React, { useContext, useEffect, useState } from "react";
import * as S from "./Player.styled";
import useSound from "use-sound";
import { Slider } from "../Slider";
import { Sound } from "../Soundscape/types";
import { soundScapeContext } from "../soundScapeContext";

interface PlayerProps extends Sound {
  playing: boolean;
}

const Player = ({ name, color, startVolume = 0.5, url }: PlayerProps) => {
  const [volume, setVolume] = useState(startVolume);
  const { playing, noGestures } = useContext(soundScapeContext);

  const [play, { pause }] = useSound(url, { volume, loop: true });

  useEffect(() => {
    if (noGestures) return;

    if (!playing) {
      pause();
    } else {
      play();
    }

    return () => {
      console.log("unmounting");
      pause();
    };
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
