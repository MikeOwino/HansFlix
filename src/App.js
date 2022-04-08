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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1648400395/wallhaven-4v32r5_vtploh.jpg"
        data-setup
        loop
      >
        <source
          src="https://nl35.seedr.cc/ff_get/1140221661/Curious.George.Cape.Ahoy.2021.720p.WEBRip.800MB.x264-GalaxyRG.mkv?st=V-DAne8Wjv1TuIXQwiLyxQ&e=1649139196"
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
