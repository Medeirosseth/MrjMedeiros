import './App.css';
import MusicVideos from './Components/MusicVideos/MusicVideos';
import TopBar from './Components/TopBar/TopBar';
import Live from './Components/Live/Live';
import Lyrics from './Components/Lyrics/Lyric';
import Pics from './Components/Pics/Pics';

function App() {
  return (
    <>
    <TopBar/>
    <div className="sections">
      <Live />
      <Lyrics />
      <MusicVideos />
      <Pics/>
    </div>
    </>

  );
}

export default App;
