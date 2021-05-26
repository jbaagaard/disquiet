import React, {useState} from "react";
import * as S from "./Player.styled";
import useSound from "use-sound";
import Slider from "../Slider";
import PlayButton from "./PlayButton";
import {Sound} from "../models";

interface PlayerProps extends Sound{

}

const Player = ({url,name,color,startVolume}: PlayerProps) => {
    const [volume, setVolume] = useState(startVolume? startVolume : 0.5);
    const [play, {isPlaying, pause}] = useSound(url, {volume, loop: true});
    console.log(startVolume)
    function handleChange(value: number) {
        setVolume(value);
    }

    function handlePlayButtonClick() {
        if (isPlaying) pause();
        else play();
    }

    return (
        <S.Wrapper>
            <Slider color={color? color : "#4750ff"} onChange={handleChange} value={volume} active={true} name={name}/>
            {/*<PlayButton onClick={handlePlayButtonClick} isPlaying={isPlaying}/>*/}
        </S.Wrapper>
    )
};

export default Player;
