import React from 'react';
import Slider from "./features/soundscapes/Slider";

function App() {
  return (
    <div className="App">
      <Slider color={"#ff47ac"} onChange={()=>{}} startValue={0}/>
      <Slider color={"#ff4747"} onChange={()=>{}} startValue={10}/>
      <Slider color={"#ff9747"} onChange={()=>{}} startValue={20}/>
      <Slider color={"#ffe047"} onChange={()=>{}} startValue={30}/>
      <Slider color={"#7eff47"} onChange={()=>{}} startValue={40}/>
      <Slider color={"#47ff84"} onChange={()=>{}} startValue={50}/>
      <Slider color={"#47f9ff"} onChange={()=>{}} startValue={60}/>
    </div>
  );
}

export default App;