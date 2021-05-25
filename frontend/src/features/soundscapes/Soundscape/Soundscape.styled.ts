import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
  position: relative;
`

export const BGImage = styled.img`
  position: absolute;
  height: 30vh;
  top: 0;
  left: 0;
`

export const Title = styled.h1`
  margin: 0 auto;
  margin-bottom: 32px;
  font-weight: 400;
  color: #aaaecb;
`

export const Sliders = styled.div`
  margin: 0 auto;
`

export const Slider = styled.div`
  margin-right: 12px;

  :last-child {
    margin-right: 0;
  }
`

export const PlayButton = styled.div`
  margin: 0 auto;
  padding-top: 24px;
`