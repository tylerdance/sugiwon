import ReactPlayer from "react-player"

const MainVideo = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=1_rs-VEkfm4'
            width='100%'
            height='100%'
            controls={true}
            />
        </div>
    )
}

export default MainVideo;