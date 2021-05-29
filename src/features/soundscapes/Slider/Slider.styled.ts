import styled from "styled-components";
import { SliderNoStyle } from "../../../style";

export const Wrapper = styled.div`
  width: 24px;
  height: 200px;
  position: relative;
  color: white;
`;

export const InfoDiv = styled.div<{ focus: boolean }>`
  transition: opacity 800ms;
  opacity: ${(props) => (props.focus ? 0.6 : -10)};
  position: absolute;
  top: -32px;
  left: -88px;
  width: 200px;
  text-align: center;
  display: block;
`;

export const Label = styled.label`
  opacity: 0;
`;

export const Slider = styled(SliderNoStyle)<{
  color: string;
  active: boolean;
}>`
  -webkit-appearance: none;
  position: absolute;
  left: -88px;
  top: 92px;
  min-width: 200px;
  height: 16px;
  border-radius: 25px;
  background: #585f88;
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
    background: ${(props) => props.color};
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
