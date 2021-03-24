
import './App.css';
import ReactPlayer from "react-player"


function App() {
  return (
    <div className="App">
      <h1 id="header">curtis chezlertonvilletown</h1>

      <div className="syzzle">
        <ReactPlayer 
          url="https://www.youtube.com/watch?v=1_rs-VEkfm4"
          width={1300}
          height={700}
        />
      </div>

    </div>
  );
}

export default App;
