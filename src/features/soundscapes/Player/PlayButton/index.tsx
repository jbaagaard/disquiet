import React from "react";
import * as S from "./PlayButton.styled";

interface PlayButtonProps {
  onClick: () => void;
  isPlaying: boolean;
}
const PlayButton = ({ onClick, isPlaying }: PlayButtonProps) => {
  return (
    <S.Wrapper>
      <S.Button playing={isPlaying} onClick={onClick}></S.Button>
    </S.Wrapper>
  );
};

export default PlayButton;
