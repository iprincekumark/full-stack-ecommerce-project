import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ReactPlayer from "react-player";
import "./Home.css";

import video1 from "../Media/videos/video01.mp4";
import video2 from "../Media/videos/video02.mp4";
import video3 from "../Media/videos/video03.mp4";
import video4 from "../Media/videos/video04.mp4";
import video5 from "../Media/videos/video05.mp4";

const Home = () => {
  const [isopen, setisopen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(video1);

  const toggle = () => {
    setisopen(!isopen);
  };

  useEffect(() => {
    // Update the video source when the component mounts
    setCurrentVideo(getCurrentVideo());
  }, []);

  const videos = [video1, video2, video3, video4, video5];
  let currentIndex = videos.indexOf(currentVideo);

  const getCurrentVideo = () => {
    // Check viewport width and return the appropriate video source
    return window.innerWidth <= 720
      ? videos[currentIndex + 2]
      : videos[currentIndex % videos.length];
  };

  const handleResize = () => {
    // Update video source when the viewport width changes
    setCurrentVideo(getCurrentVideo());
  };

  useEffect(() => {
    // Attach an event listener for window resize
    window.addEventListener("resize", handleResize);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Set up an interval to change the video every N seconds (adjust as needed)
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % videos.length;
      setCurrentVideo(getCurrentVideo());
    }, 1500); // Change video every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <div className="container-001">
        <ReactPlayer
          url={currentVideo}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
    </>
  );
};

export default Home;
