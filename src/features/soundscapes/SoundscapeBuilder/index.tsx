import React, { useState } from "react";
import * as S from "./SoundscapeBuilder.styled";
import { Sound } from "../models";
import Player from "../Player";

const SoundscapeBuilder = () => {
  const [Sounds, setSounds] = useState<Sound[]>([]);
  const [playing, setPlaying] = useState<boolean>(false);

  return (
    <S.Wrapper>
      <S.Sounds>
        {Sounds.map((s) => (
          <Player
            playing={playing}
            name={s.name}
            url={s.url}
            color={s.color}
            startVolume={0}
          />
        ))}
      </S.Sounds>
    </S.Wrapper>
  );
};

export default SoundscapeBuilder;
