import styled from "styled-components";
import { Colors } from "../../styles/theme";

export const SliderNoStyle = styled.input<{ orient?: string }>`
  -webkit-appearance: none;
  width: 100%;
  height: 200px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &:hover {
    outline: none;
  }
  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
`;

export const Wrapper = styled.div`
  width: 24px;
  height: 200px;
  position: relative;
  color: white;
`;

export const Label = styled.label`
  opacity: 0;
`;

export const Slider = styled(SliderNoStyle)<{
  color: keyof Colors;
  active: boolean;
}>`
  -webkit-appearance: none;
  position: absolute;
  left: -88px;
  top: 92px;
  min-width: 200px;
  height: 16px;
  border-radius: 25px;
  background: ${(props) => props.theme.colors["base-200"]};
  outline: none;
  opacity: ${(props) => (props.active ? "0.9" : "0.3")};
  -webkit-transition: 0.1s;
  transition: opacity 0.2s;
  transform: rotate(-90deg);

  &:hover {
    opacity: ${(props) => (props.active ? "1" : "0.5")};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    background: ${(props) => props.theme.colors[props.color]};
    cursor: pointer;
    border-radius: 29px;
  }

  &::-webkit-slider-runnable-track {
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: ${(props) => props.color};
    cursor: pointer;
    border-radius: 25px;
  }
`;
