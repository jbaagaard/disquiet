import React, {useEffect, useState} from 'react';
import {Soundscape} from "./features/soundscapes/models";
import {getSoundscapes} from "./features/api/soundScapes";
import Sidebar from "./features/soundscapes/Sidebar";
import SoundscapeComponent from "./features/soundscapes/Soundscape";

function App() {
    const [soundscapes, setSoundscapes] = useState<Soundscape[]>([])
    const [activeSoundscape, setActiveSoundscape] = useState<string>("");
    useEffect(() => {
        (async function () {
            const sc = await getSoundscapes();
            setSoundscapes(sc);
            if (sc.length !== 0)
                setActiveSoundscape(sc[0].url)
        })()
    }, []);
    return (
        <div className="App">
            <Sidebar soundscapes={soundscapes} onChange={(value) => {
                setActiveSoundscape(value)
            }} value={activeSoundscape}/>
            {activeSoundscape && <SoundscapeComponent soundscape={soundscapes.find(s=>s.url === activeSoundscape)!}/>}
        </div>
    );
}

export default App;