import React from "react";
import * as S from "./Sidebar.styled";
import {Soundscape} from "../models";

interface SidebarProps {
    soundscapes: Soundscape[];
    onChange: (value: string) => void;
    value: string;
}

const Sidebar = ({soundscapes, onChange, value}: SidebarProps) => {
    function handleSoundscapeClick(value: string) {
        onChange(value);
    }

    return (
        <S.Wrapper>
            {soundscapes.map(s =>
                <SoundscapeButton
                    soundscape={s}
                    onClick={handleSoundscapeClick}
                    active={s.url === value}/>
            )}
        </S.Wrapper>
    )
};

interface SoundscapeButtonProps {
    soundscape: Soundscape,
    onClick: (value: string) => void,
    active: boolean
}

const SoundscapeButton = ({soundscape, onClick, active}: SoundscapeButtonProps) => {
    function handleClick() {
        onClick(soundscape.url);
    }

    return (
        <S.ScButton onClick={handleClick} active={active}>
            <S.ScImg src={soundscape.thumbnail}/>
            <S.ScText>{soundscape.name}</S.ScText>
            {active && " active"}
        </S.ScButton>
    )
}


export default Sidebar;
