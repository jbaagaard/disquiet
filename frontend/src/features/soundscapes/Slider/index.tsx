import React from "react";
import * as S from "./Slider.styled";

interface SliderProps {
    color: string;
    onChange: (value: number) => void;
    active:boolean;
    value:number;
}

const Slider = ({onChange, color, active, value}: SliderProps) => {

    function handleChange(event: any) {
        onChange(event.currentTarget.value);
    }

    return (
        <S.Wrapper>
            <S.Slider type={"range"} min={0} max={1} step={0.01} value={value} onChange={handleChange} color={color} active={active && (value != 0)}/>
        </S.Wrapper>
    )
};

export default Slider;
