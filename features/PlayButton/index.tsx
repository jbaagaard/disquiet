import React from "react";
import * as S from "./PlayButton.styled";

interface PlayButtonProps {
  onClick: () => void;
  isPlaying: boolean;
}
const PlayButton = ({ onClick, isPlaying }: PlayButtonProps) => {
  return <S.Button playing={isPlaying} onClick={onClick}></S.Button>;
};

export default PlayButton;
