import { useState } from "react";
import { IconButton } from "../IconButton/intex";
import PlayButton from "../PlayButton";
import SoundController from "../SoundController";
import { useSoundScape } from "../soundScapeContext";
import * as S from "./Dashboard.styled";
import Sidebar from "../Sidebar";
import { SideBarToggleButton } from "../Sidebar/SidebarTogggleButton";

export default function DashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const {
    setPlaying,
    isPlaying,
    currentSoundscape,
    decreaseVolume,
    increaseVolume,
    setAnimateSliders,
    animateSliders,
  } = useSoundScape();

  return (
    <S.Wrapper>
      <S.SideBarWrapper open={sidebarOpen}>
        <S.SidebarButtonWrapper>
          <SideBarToggleButton
            open={sidebarOpen}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
        </S.SidebarButtonWrapper>
        <Sidebar />
      </S.SideBarWrapper>
      <S.Content>
        <S.Title>{currentSoundscape?.name}</S.Title>

        <S.SoundScapeWrapper>
          {currentSoundscape.sounds.map((sound) => (
            <SoundController
              sound={sound}
              key={currentSoundscape.id + sound.src}
            />
          ))}
        </S.SoundScapeWrapper>
        <S.ControlsWrapper>
          <IconButton
            icon="volume-down"
            onClick={decreaseVolume}
            tooltip="Decrease volume"
          />
          <IconButton
            icon="animate-sliders"
            onClick={() => setAnimateSliders(!animateSliders)}
            value={animateSliders}
            tooltip="Animate sliders"
          />
          <IconButton
            icon="volume-up"
            onClick={increaseVolume}
            tooltip="Increase volume"
          />
        </S.ControlsWrapper>
        <PlayButton
          isPlaying={isPlaying}
          onClick={() => {
            setPlaying(!isPlaying);
          }}
        />
      </S.Content>
    </S.Wrapper>
  );
}
