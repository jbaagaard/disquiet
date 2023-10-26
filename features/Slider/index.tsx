import React, { ChangeEvent, useState } from "react";
import * as S from "./Slider.styled";

interface SliderProps {
  color: string;
  name: string;
  onChange: (value: number) => void;
  value: number;
}

export const Slider = ({ onChange, color, value, name }: SliderProps) => {
  const [focus, setFocus] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(Number(event.currentTarget.value));
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
      <form>
        <S.Label htmlFor={name}>{name}</S.Label>
        <S.Slider
          id={name}
          type={"range"}
          min={0}
          max={1}
          step={0.01}
          value={String(value)}
          onChange={handleChange}
          color={color}
          active={value !== 0}
        />
      </form>
    </S.Wrapper>
  );
};
