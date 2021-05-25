import React from "react";
import * as S from "./Soundscape.styled";
import {Soundscape} from "../models";
import Player from "../Player";
import PlayButton from "../Player/PlayButton";

interface SoundscapeProps {
    soundscape:Soundscape
}
const SoundscapeComponent = ({soundscape}:SoundscapeProps) => {
    return(
        <S.Wrapper>
            <S.Sliders>
                {soundscape.sound_urls.map(s=>
                    <S.Slider>
                        <Player url={s}/>
                    </S.Slider>
                )}
            </S.Sliders>
                <S.PlayButton>

                    <PlayButton onClick={()=>{}} isPlaying={false}/>
                </S.PlayButton>
        </S.Wrapper>
    )
};

export default SoundscapeComponent;
