import styled from "styled-components";
import {SliderNoStyle} from "../../../style";

export const Wrapper = styled.div`
  width: 24px;
  height: 200px;
  position: relative;
`

export const Slider = styled(SliderNoStyle)<{color:string, value: number}>`
  -webkit-appearance: none;
  margin-left: -88px;
  margin-top: 92px;
  min-width: 200px;
  height: 16px;
  border-radius: 25px;
  background: #585f88;
  outline: none;
  opacity: 0.9;
  -webkit-transition: .1s;
  transition: opacity .2s;
  transform: rotate(-90deg);

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    background: ${props => props.color};
    cursor: pointer;
    border-radius: 29px;
  }
  
  &::-webkit-slider-runnable-track {
    
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: ${props => props.color};
    cursor: pointer;
    border-radius: 25px;
  }
`