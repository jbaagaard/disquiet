import React from "react";
import * as S from "./Soundscape.styled";
import {Soundscape} from "../models";
import Player from "../Player";
import PlayButton from "../Player/PlayButton";

export type Color = [number, number, number];

export const rgbToHex = (c: Color) =>
    "#" +
    [c[0], c[1], c[2]]
        .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");

export const hexToRgb = (hex: string): Color | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
        ]
        : null;
};

export const calculateColor = (
    index: number,
    amount: number,
    color1: string,
    color2: string
) => {
    const c1 = hexToRgb(color1)!;
    const c2 = hexToRgb(color2)!;
    let color: Color = [0, 0, 0];
    for (let i = 0; i < color.length; i++) {
        const difference = c1[i] - c2[i];
        const differncePer = difference / Math.max(amount - 1, 1);
        color[i] = Math.round(c2[i] + differncePer * index);
    }
    return rgbToHex(color);
};

interface SoundscapeProps {
    soundscape:Soundscape
}
const SoundscapeComponent = ({soundscape}:SoundscapeProps) => {
    return(
        <S.Wrapper>
            <S.Sliders>
                {soundscape.sound_urls.map((s,i)=>
                    <S.Slider>
                        <Player url={s} color={calculateColor(i,soundscape.sound_urls.length,"#aa46f2","#f28246")}/>
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
