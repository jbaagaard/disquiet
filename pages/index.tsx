import DashBoard from "../features/Dashboard";
import { SoundScapeProvider } from "../features/soundScapeContext";

export default function Home() {
  return (
    <SoundScapeProvider>
      <DashBoard />
    </SoundScapeProvider>
  );
}
