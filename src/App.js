import './App.css';
import ReactPlayer from "react-player"
import MainVideo from './components/MainVideo';
import Falling from './components/Falling';
// import Embed from 'react-music-embed'

function App() {
  return (
    <div className="App">
      <h1 id="header">Sugiwon</h1>

      <MainVideo />

      <div id="syzzle-fill">

        <div id="audio-players">
          {/* <Embed 
          url="https://music.apple.com/us/album/syzzle-single/1554575992"
          width={400}
          height={150}
          /> */}

          <iframe title="syzzle-spotify-player" id="syzzle-spotify-player" src="https://open.spotify.com/embed/track/6aazTq4c97xRQrumZBwLe5" width="400" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>

      </div>
        
      <Falling />

      <div id="social-media-icons">
        <div>
          <a href="https://www.instagram.com/suggyone/?hl=en" target="_blank" rel="noreferrer" alt="">
            <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616607664/instagram_2_xasei6.png" alt="" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/sugiwon?lang=en" target="_blank" rel="noreferrer" alt="">
            <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616607704/twitter_p0bcyf.png" alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UCp4nAnP5y8VHG1QBz0_bwqA" target="_blank" rel="noreferrer" alt="">
            <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616607749/youtube_uxoade.png" alt="" />
          </a>
        </div>
        <div>
          <a href="https://music.apple.com/us/artist/sugiwon/1436411443" target="_blank" rel="noreferrer" alt="">
            <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616624839/applemusic_xx311x.png" alt="" />
          </a>
        </div>
        <div>
          <a href="https://open.spotify.com/artist/4S7Yep3i1Xa0Y4Dsu4GsK9" target="_blank" rel="noreferrer" alt="">
            <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616625310/spotify_1_lwpby9.png" alt="" />
          </a>
        </div>

      </div>

    </div>
  );
}

export default App;
