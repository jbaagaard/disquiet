import React, {useState} from "react";
import * as S from "./Slider.styled";

interface SliderProps {
    color: string
    onChange: (value: number) => void
    startValue?: number
    active:boolean
}

const Slider = ({startValue, onChange, color, active}: SliderProps) => {
    const [value, setValue] = useState<number>(startValue ? startValue : 0);

    function handleChange(event: any) {
        console.log(event.currentTarget.value)
        onChange(event.currentTarget.value);
        setValue(event.currentTarget.value);
    }

    return (
        <S.Wrapper>
            <S.Slider type={"range"} min={0} max={100} step={1} value={value} onChange={handleChange} color={color} active={active && (value != 0)}/>
        </S.Wrapper>
    )
};

export default Slider;
