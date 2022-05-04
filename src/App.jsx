import './App.css';
import MusicVideos from './Components/MusicVideos/MusicVideos';
import TopBar from './Components/TopBar/TopBar';
import Live from './Components/Live/Live';
import Lyrics from './Components/Lyrics/Lyric';
import Pics from './Components/Pics/Pics';
import Photo from './Components/Photo/Photo';

function App() {
  return (
    <>
    <TopBar/>
    <div className="sections">
      <Photo/>
      <Live />
      <Lyrics />
      <MusicVideos />
      <Pics/>
    </div>
    </>

  );
}

export default App;
