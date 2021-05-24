import React, {useEffect, useState} from "react";
import * as S from "./Player.styled";
import useSound from "use-sound";
import rain from "../../testData/rain.ogg"
import Slider from "../Slider";
import PlayButton from "./PlayButton";


const Player = () => {
    const [volume, setVolume] = useState(0.5);
    const [play, {isPlaying, pause}] = useSound(rain, {volume, loop:true});


    function handleChange(value: number) {
        setVolume(value);
        console.log(volume);
    }

    function handlePlayButtonClick() {
        if (isPlaying) pause();
        else play();
    }

    return (
        <S.Wrapper>
            <Slider color={"#4750ff"} onChange={handleChange} value={volume} active={true} />
            <PlayButton onClick={handlePlayButtonClick} isPlaying={isPlaying} />
        </S.Wrapper>
    )
};

export default Player;
