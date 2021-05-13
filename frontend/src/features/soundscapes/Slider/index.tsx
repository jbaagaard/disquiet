import React, {useState} from "react";
import * as S from "./Slider.styled";

interface SliderProps {
    color: string
    onChange: (value: number) => void
    startValue?: number
}

const Slider = ({startValue, onChange, color}: SliderProps) => {
    const [value, setValue] = useState<number>(startValue ? startValue : 0);

    function handleChange(event: any) {
        console.log(event.currentTarget.value)
        onChange(event.currentTarget.value);
        setValue(event.currentTarget.value);
    }

    return (
        <S.Wrapper>
            <S.Slider type={"range"} min={0} max={100} step={1} value={value} onChange={handleChange} color={color}/>
        </S.Wrapper>
    )
};

export default Slider;
