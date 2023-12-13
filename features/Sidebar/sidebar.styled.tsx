import styled from "styled-components";
import { ButtonNoStyle } from "../IconButton/IconButton.styled";

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors["base-000"]};
  height: 100%;
`;

export const Title = styled.div``;

export const SoundscapeList = styled.div``;

export const Soundscape = styled(ButtonNoStyle)<{ active: boolean }>`
  color: ${(props) => props.theme.colors["content-100"]};
  padding: 1rem;
`;
