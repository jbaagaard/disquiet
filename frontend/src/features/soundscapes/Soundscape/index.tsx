import React, {useState} from "react";
import * as S from "./Soundscape.styled";
import {Soundscape} from "../models";
import Player from "../Player";
import PlayButton from "../Player/PlayButton";
import {calculateColor} from "../../color/color";


interface SoundscapeProps {
    soundscape: Soundscape
}

const SoundscapeComponent = ({soundscape}: SoundscapeProps) => {
    const [playing, setPlaying] = useState(false)

    function handlePlayPauseClick() {
        setPlaying(!playing)
    }

    return (
        <S.Wrapper>
            <S.Title>
                {soundscape.name}
            </S.Title>
            <S.Sliders>
                {soundscape.sound_urls.map((s, i) =>
                    <S.Slider key={s + i}>
                        <Player url={s}
                                color={calculateColor(i, soundscape.sound_urls.length, soundscape.colors[0], soundscape.colors[1])}/>
                    </S.Slider>
                )}
            </S.Sliders>
            <S.PlayButton>

                <PlayButton onClick={handlePlayPauseClick} isPlaying={playing}/>
            </S.PlayButton>
        </S.Wrapper>
    )
};

export default SoundscapeComponent;
