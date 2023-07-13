"use client";
import Sidebar from "@/components/Sidebar";
import SoundscapeComponent from "@/components/Soundscape";
import { Soundscape } from "@/components/Soundscape/types";
import { getSoundscapes } from "@/components/api/soundScapes";
import { useEffect, useState } from "react";

const Index = () => {
  const [soundscapes, setSoundscapes] = useState<Soundscape[]>([]);
  const [activeSoundscape, setActiveSoundscape] = useState<string>("");

  useEffect(() => {
    (async function () {
      const sc = await getSoundscapes();
      setSoundscapes(sc);
      if (sc.length !== 0) setActiveSoundscape(sc[0].url);
    })();
  }, []);

  return (
    <div style={{ height: "100%", display: "flex" }}>
      <Sidebar
        soundscapes={soundscapes}
        onChange={(value) => {
          setActiveSoundscape(value);
        }}
        value={activeSoundscape}
      />
      {activeSoundscape && (
        <SoundscapeComponent
          soundscape={soundscapes.find((s) => s.url === activeSoundscape)!}
        />
      )}
    </div>
  );
};

export default Index;
