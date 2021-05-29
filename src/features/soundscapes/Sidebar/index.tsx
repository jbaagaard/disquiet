import React, { useState } from "react";
import * as S from "./Sidebar.styled";
import { Soundscape } from "../models";

interface SidebarProps {
  soundscapes: Soundscape[];
  onChange: (value: string) => void;
  value: string;
}

const Sidebar = ({ soundscapes, onChange, value }: SidebarProps) => {
  const [open, setOpen] = useState(true);

  function handleSoundscapeClick(value: string) {
    onChange(value);
  }

  function handleSidebarButtonClick() {
    setOpen(!open);
  }

  return (
    <S.Wrapper open={open}>
      <S.SidebarButton onClick={handleSidebarButtonClick}>
        {open ? ">" : "<"}
      </S.SidebarButton>
      {soundscapes.map((s) => (
        <SoundscapeButton
          key={s.url}
          soundscape={s}
          onClick={handleSoundscapeClick}
          active={s.url === value}
        />
      ))}
    </S.Wrapper>
  );
};

interface SoundscapeButtonProps {
  soundscape: Soundscape;
  onClick: (value: string) => void;
  active: boolean;
}

const SoundscapeButton = ({
  soundscape,
  onClick,
  active,
}: SoundscapeButtonProps) => {
  function handleClick() {
    onClick(soundscape.url);
  }

  return (
    <S.ScButtonWrapper active={active} colors={soundscape.colors}>
      <S.ScButton onClick={handleClick}>
        <S.ScImg
          src={soundscape.thumbnail.url}
          alt={soundscape.thumbnail.alt}
        />
        <S.ScText>{soundscape.name}</S.ScText>
        {active && " active"}
      </S.ScButton>
    </S.ScButtonWrapper>
  );
};

export default Sidebar;
