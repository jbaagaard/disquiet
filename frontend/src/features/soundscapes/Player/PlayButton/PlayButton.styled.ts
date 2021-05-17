import styled from "styled-components";

export const Wrapper = styled.div`

`

export const Button = styled.div<{ playing: boolean }>`
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 38px;
  opacity: 0.9;
  border-color: transparent transparent transparent #bdc2e3;
  transition: 200ms all ease;
  cursor: pointer;

  border-style: ${props => props.playing ? "solid" : "double"};
  border-width: ${props => props.playing ? "19px 0 19px 30px" : "0 0 0 30px"};

  &:hover {
    opacity: 1;
  }
`