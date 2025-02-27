 import React from "react";
import YouTube from "react-youtube";

class YouTubePlugin extends React.Component {
  render() {
    const { videoId } = this.props; // Отримуємо videoId з пропсів

    const options = {
      height: "372",
      width: "100%",
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return <div className="video-container" style={{borderRadius: "10px", overflow: "hidden", marginBottom:"24px", flexShrink:"0"}}>
      <YouTube videoId={videoId} opts={options} onReady={this._onReady} id="video"/>
    </div>;
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

 export default YouTubePlugin;
