import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  flex-direction: column;
  background-color: #080615;
  height: 100vh;
  justify-content: center;

`

export const ScButton = styled.div<{active:boolean}>`
  height: 128px;
  width: 128px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  margin-top: 16px;
  border: ${props => props.active ? "2px" : "0px"} solid rgb(100, 100, 255);
  box-sizing: border-box;
`

export const ScImg = styled.img`
  filter: blur(0px);
  position: absolute;
`

export const ScText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0,0,0,0.4);
  text-align: center;
  display: block;
`