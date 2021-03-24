import './App.css';
import ReactPlayer from "react-player"
// import Embed from 'react-music-embed'

function App() {
  return (
    <div className="App">
      <h1 id="header">Sugiwon</h1>

      <div className="syzzle">
        <ReactPlayer 
          url="https://www.youtube.com/watch?v=1_rs-VEkfm4"
          width={1300}
          height={700}
        />
      </div>

    <div id="audio-players">
      {/* <Embed 
      url="https://music.apple.com/us/album/syzzle-single/1554575992"
      width={400}
      height={150}
      /> */}

      <iframe title="syzzle-spotify-player" id="syzzle-spotify-player" src="https://open.spotify.com/embed/track/6aazTq4c97xRQrumZBwLe5" width="400" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>

    <div id="falling-pics">
      <img id="falling-artwork" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616603125/sugiwon/Falling_Final_no_parental_sizing_correct_insta-01_iv0wct.jpg" alt="" />
      <img id="falling-panel" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616603133/sugiwon/third_panel_3_insta-01_jqpxto.jpg" alt="" />
      <img id="falling-credits" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616603117/sugiwon/Falling_Final_back_cover_2_insta-01_pyb544.jpg" alt="" />
    </div>

    <div id="falling-players">
      {/* <Embed 
      url="https://music.apple.com/us/album/falling/1453405100"
      width={400}
      height={220}
      /> */}

      <iframe title="falling-spotify-player" id="falling-spotify-player" src="https://open.spotify.com/embed/album/4y1HHshmC6tmu1gFNG0xJ2" width="400" height="220" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>

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
