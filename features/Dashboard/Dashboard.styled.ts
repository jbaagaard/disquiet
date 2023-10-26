import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.text};
  ${(props) => props.theme.fonts.h1}
`;

export const SoundScapeWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;