import styled from "styled-components";
import { BaseTheme } from "../../styles/theme";

export const Button = styled.div<{ playing: boolean }>`
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 38px;
  opacity: 0.5;
  border-color: transparent transparent transparent
    ${(props) => props.theme.colors["content-100"]};
  transition: 500ms all ease;
  cursor: pointer;

  border-style: ${(props) => (props.playing ? "double" : "solid")};
  border-width: ${(props) =>
    props.playing ? "0 0 0 30px" : "19px 0 19px 30px"};

  &:hover {
    opacity: 1;
  }
`;
