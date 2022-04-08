import './App.css';
import {Helmet} from "react-helmet";

export default function App() {
  return (
    <>
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1649429050/wallhaven-4v7ve3_ovdwqq.jpg"
        data-setup
        loop
      >
        <source
          src="https://res.cloudinary.com/weknow-creators/video/upload/v1649429200/1434659607842-pgv4ql-1644333194892_gbiqyp.mp4"
          type="video/mp4"
        />
      </video>
      <Helmet>
        <script
          src="https://vjs.zencdn.net/5.4.6/video.js"
          type="text/javascript"
        />
      </Helmet>
    </>
  );
}
