import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const SideBarWrapper = styled.div<{ open: boolean }>`
  width: 10rem;
  position: relative;
  margin-left: ${(props) => (props.open ? "0" : "-10rem")};
  transition: margin-left 0.3s ease-in-out;
`;

export const SidebarButtonWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: -2rem;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1.5rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors["content-100"]};
  ${(props) => props.theme.fonts.h1}
  margin-bottom: 1rem;
`;

export const SoundScapeWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
