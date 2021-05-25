import React, {useEffect, useState} from 'react';
import Player from "./features/soundscapes/Player";
import rain from "./features/testData/rain.ogg"
import {SoundscapeDto} from "./features/soundscapes/models";
import {getSoundscapes} from "./features/api/soundScapes";
function App() {
    const [soundscapes,setSoundscapes] = useState<SoundscapeDto[]>([])
    useEffect(()=>{(async ()=>{
        setSoundscapes(await getSoundscapes())
    })();},[])
  return (
    <div className="App">
      <Player url={rain}/>
    </div>
  );
}

export default App;