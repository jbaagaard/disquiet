import React, {useState} from "react";
import * as S from "./Player.styled";
import useSound from "use-sound";
import Slider from "../Slider";
import PlayButton from "./PlayButton";

interface PlayerProps {
    url: string;
    color?:string
}

const Player = ({url,color}: PlayerProps) => {
    const [volume, setVolume] = useState(0.5);
    const [play, {isPlaying, pause}] = useSound(url, {volume, loop: true});

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
            <Slider color={color? color : "#4750ff"} onChange={handleChange} value={volume} active={true}/>
            {/*<PlayButton onClick={handlePlayButtonClick} isPlaying={isPlaying}/>*/}
        </S.Wrapper>
    )
};

export default Player;
