import React, { useState, useEffect } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

function CourseContent({ id, title, video, setVideo, status }) {
  const [activeContent, setActiveContent] = useState("");
  console.log("active content", activeContent);
  const handleContentClick = (video, id) => {
    setActiveContent("");
    setActiveContent(id);
    setVideo(video);
  };

  return (
    <div
      // onClick={() => handleContentClick(video, id)}
      className="transition-all cursor-pointer duration-500 w-full 
      delay-500 bg-white border-l-4 border-l-blue-400 shadow-xl"
    >
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BsFillPlayCircleFill className="text-xl" />
            <p
              className={`capitalize ${
                activeContent == id && "text-purple-800"
              }`}
            >
              {title}
            </p>
          </div>
          {status && <p>Playing</p>}
        </div>
        <hr className="mt-3" />
      </div>
    </div>
  );
}

export default CourseContent;
