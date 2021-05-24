import React from "react";
import * as S from "./Player.styled";
const rain = require("../../../public/rain.ogg")
const Player = () => {
    return(
        <S.Wrapper>
            <audio controls={true}>
                <source src={rain} type={"audio/ogg"}/>
            </audio>
        </S.Wrapper>
    )
};

export default Player;
