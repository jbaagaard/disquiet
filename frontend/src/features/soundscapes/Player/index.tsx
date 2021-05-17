import React from "react";
import * as S from "./Player.styled";
import Sound from "react-sound"

const Player = () => {
    return(
        <S.Wrapper>
            asasd
            <Sound playStatus={"PLAYING"} url={"../../testData/rain.ogg"} loop={true} volume={100}/>
        </S.Wrapper>
    )
};

export default Player;
