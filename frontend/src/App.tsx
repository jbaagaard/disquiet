import React from 'react';
import Slider from "./features/soundscapes/Slider";
import PlayButton from "./features/soundscapes/Player/PlayButton";
import Player from "./features/soundscapes/Player";

function App() {
  return (
    <div className="App">
      <Slider color={"#ff47ac"} onChange={()=>{}} startValue={0}  active={false}/>
      <Slider color={"#ff4747"} onChange={()=>{}} startValue={10} active={true}/>
      <Slider color={"#ff9747"} onChange={()=>{}} startValue={20} active={true}/>
      <Slider color={"#ffe047"} onChange={()=>{}} startValue={30} active={true}/>
      <Slider color={"#7eff47"} onChange={()=>{}} startValue={40} active={true}/>
      <Slider color={"#47ff84"} onChange={()=>{}} startValue={50} active={true}/>
      <Slider color={"#47f9ff"} onChange={()=>{}} startValue={60} active={true}/>
      <PlayButton onChange={() => {}}/>
      <Player/>
    </div>
  );
}

export default App;