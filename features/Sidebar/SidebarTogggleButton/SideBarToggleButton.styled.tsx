import styled from "styled-components";

import { ButtonNoStyle } from "../../IconButton/IconButton.styled";

export const Button = styled(ButtonNoStyle)`
  height: 3rem;
  width: 2rem;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: ${(props) => props.theme.colors["base-000"]};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div<{ open: boolean }>`
  width: 0.5rem;
`;
