import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import logo from "../../../../public/sikkai1.webp";
import Image from "next/image";
export const BusinessVideo = (props) => {
  const video = [
    {
      id: 1,
      image: logo,
      title: "Introduction to Sikka-I",
    },
    {
      id: 2,
      image: logo,
      title: "Getting started with Sikka-I",
    },
    {
      id: 3,
      image: logo,
      title: "Business scope of Sikka-I",
    },
    // {
    //   id: 4,
    //   image: logo,
    //   title: "anniversary video",

    // },
  ];
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        player.log("player is ready");
        onReady && onReady(player);
      }));

      // You can update player in the `else` block here, for example:
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div className="pt-16 py-5 ">
      <div className="text-4xl mb-4 text-center font-openSansSeven text-gray-700">
        Our Videos
      </div>
      <div className="text-xl mt-5 text-start font-openSansFive px-5 text-gray-700">
        <div className=" text-center text-lg mt videos -5 text-start font-openSansFive px-5 text-gray-700">
          These are ultimate guideline of sikkai. This videos will guide you
          through every part of sikkai.
        </div>
      </div>
      <div className="flex flex-col cursor-pointer justify-center items-center md:grid   relative gap-5 md:grid-cols-3 py-12">
        {video.map((val, i) => {
          return (
            <div key={i} className="  m-3 lg:m-5">
              <div className="flex gap-3 items-center relative mx-auto lg:mx-0 z-50 justify-center w-full">
                <div className="w-8 lg:w-12  relative ml-1 sm:ml-0  z-50  p-1 rounded-full bg-white">
                  <Image
                    src={logo}
                    height={100}
                    width={100}
                    alt="image"
                    placeholder="blur"
                    blurDataURL="logo"
                    layout="responsive"
                  />
                </div>
                <div className="z-50 transition-all duration-200 ease-in-out w-48 lg:w-9/12  text-white  capitalize line-clamp-1 text-base lg:text-2xl  font-semibold  ">
                  {val.title}
                </div>
              </div>
              <div className="   -mt-10 lg:-mt-16 h-36 w-full mx-auto lg:w-full lg:h-96 z-20  ">
                {/* <div data-vjs-player>
                  <video
                    ref={videoRef}
                    poster={props.poster}
                    className="video-js vjs-big-play-centered w-60 h-40 lg:w-96 lg:h-96"
                  />
                </div> */}
                <div className="bg-black h-40 lg:h-96"></div>
                <div className="text-sm lg:text-lg  my-3  transition-all hover:text-blue-500 duration-200 ease-in-out font-openSansSix text-center text-gray-700">
                  {val.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <div
          className="  hover:shadow-sm
                  hover:shadow-gray-300  hover:opacity-75 
                  shadow-xl transition-all duration-300 ease-in-out mt-6 w-fit lg:w-32 h-fit btn-primary rounded-md"
        >
          View More
        </div>
      </div>
    </div>
  );
};

export default BusinessVideo;
