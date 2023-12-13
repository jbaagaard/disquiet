import React, { ChangeEvent, useState } from "react";
import * as S from "./Slider.styled";
import { Colors } from "../../styles/theme";
import ToolTip from "../ToolTip";

interface SliderProps {
  color: keyof Colors;
  name: string;
  onChange: (value: number) => void;
  value: number;
}

export const Slider = ({ onChange, color, value, name }: SliderProps) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(Number(event.currentTarget.value));
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }
  
  return (
    <S.Wrapper onMouseOver={handleFocus} onMouseLeave={handleBlur}>
      <ToolTip isFocused={isFocused}>{name}</ToolTip>
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
