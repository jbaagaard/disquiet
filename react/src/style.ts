import styled from "styled-components";

export const SliderNoStyle = styled.input<{ orient?: string }>`
  -webkit-appearance: none;
  width: 100%;
  height: 200px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: red;
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
