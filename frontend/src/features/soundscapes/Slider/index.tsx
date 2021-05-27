import React, {useState} from "react";
import * as S from "./Slider.styled";

interface SliderProps {
    color: string;
    name:string
    onChange: (value: number) => void;
    active:boolean;
    value:number;
}

const Slider = ({onChange, color, active, value, name}: SliderProps) => {
    const [focus,setFocus] = useState(false)

    function handleChange(event: any) {
        onChange(event.currentTarget.value);
    }

    function handleFocus() {
        setFocus(true);
    }

    function handleBlur() {
        setFocus(false);
    }

    return (
        <S.Wrapper onMouseOver={handleFocus} onMouseLeave={handleBlur}>
            <S.InfoDiv focus={focus}>{name}</S.InfoDiv>
            <S.Slider type={"range"} min={0} max={1} step={0.01} value={value} onChange={handleChange} color={color} active={active && (value != 0)}/>
        </S.Wrapper>
    )
};

export default Slider;
