import styled from "styled-components";

export const ButtonNoStyle = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Button = styled(ButtonNoStyle)<{ active: boolean }>`
  opacity: ${(props) => (props.active ? 0.7 : 0.3)};
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 1;
  }
`;

export const iconWrapper = styled.div<{ animateSliders: boolean }>`
  box-sizing: border-box;
  ${(props) => props.animateSliders && "margin-top: -5px;"}
  width: 48px;
  height: 48px;
  padding: 10px;
`;
