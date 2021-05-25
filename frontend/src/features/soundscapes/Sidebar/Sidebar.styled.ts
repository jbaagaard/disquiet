import styled from "styled-components";

export const Wrapper = styled.div<{open:boolean}>`
  width: 160px;
  margin-left: ${props => props.open? "-160px":"0"};
  flex-direction: column;
  background-color: #050910;
  height: 100vh;
  justify-content: center;
  transition: margin-left 200ms;
  position: relative;
`

export const SidebarButton = styled.div`
  display: block;
  position: absolute;
  top:32px;
  right: 0;
  margin-right: -28px;
  width: 28px;
  height: 48px;
  background-color: #050910;
  border-radius: 0 8px 8px 0;
  line-height: 41px;
  font-size: 24px;
  color: #bdc2e3;
  padding-left: 4px;
  box-sizing: border-box;
  cursor: pointer;
`

export const ScButtonWrapper = styled.div<{active:boolean, colors:[string,string]}>`
  padding: 2px;
  height: 132px;
  width: 132px;
  background: linear-gradient(to right, ${props => props.active ? props.colors[0] + ", " + props.colors[1] : "none ,none"});
  border-radius: 8px;
  margin: 16px auto 0;
  box-sizing: border-box;
`

export const ScButton = styled.div`
  height: 128px;
  width: 128px;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`

export const ScImg = styled.img`
  filter: blur(0px);
  position: absolute;
  height: 100%;
  width: 100%;
`

export const ScText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0,0,0,0.4);
  text-align: center;
  display: block;
`