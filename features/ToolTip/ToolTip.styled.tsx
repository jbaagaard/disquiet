import styled from "styled-components";

export const ToolTip = styled.div<{ focus: boolean }>`
  transition: opacity 800ms;
  color: ${(props) => props.theme.colors["content-100"]};
  opacity: ${(props) => (props.focus ? 0.6 : -10)};
  position: absolute;
  top: -32px;
  left: -88px;
  width: 200px;
  text-align: center;
  display: block;
`;
