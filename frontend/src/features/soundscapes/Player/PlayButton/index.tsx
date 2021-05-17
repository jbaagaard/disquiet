import React, {useState} from "react";
import * as S from "./PlayButton.styled";


interface PlayButtonProps {
    onChange: (playing: boolean) => void
}
const PlayButton = ({onChange}:PlayButtonProps) => {
    const [playing, setPlaying] = useState(false)

    function handleClick() {
        onChange(!playing);
        setPlaying(!playing)
    }

    return(
        <S.Wrapper>
            <S.Button playing={playing} onClick={handleClick}>

            </S.Button>
        </S.Wrapper>
    )
};

export default PlayButton;
