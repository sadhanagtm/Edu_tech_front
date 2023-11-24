import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

import CourseCard from "../../courseCard/CourseCard";
import Course_thumbnail3 from "../../../components/resources/images/speaking.jpg";
import Slider from "react-slick";
import axios from "../../../HOC/Axios/Axios";
import { useRef } from "react";

const PopularCourses = () => {
  const [Popular, setPopular] = useState([]);
  const sliderRef = useRef(null);

  const getPopular = () => {
    axios
      .get("/course")
      .then((res) => {
        if (res.status === 200) {
          setPopular(res.data.data);
          console.log(res.data.data);
        }
      })
      .catch((error) => console.log(error));
  };
  const sliderSetting = {
    dots: false,
    dotsClass: "slick-dots line-indicator",
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: Popular.length >= 4,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          infinite: Popular.length >= 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: Popular.length >= 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div>
      {/* top title and next prev button section  */}
      <div className="flex items-center text-xl justify-between px-1 lg:pb-10 pb-8 w-full">
        <div
          className="font-bold text-gray-700 text-center  
         w-full text-4xl py-2 "
        >
          Our Courses
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full p-2 bg-gray-500 text-white cursor-pointer transition hover:opacity-60 shoadow-lg text-center">
            <FaAngleLeft
              className="mx-auto text-xl"
              onClick={() => sliderRef.current.slickPrev()}
            />
          </div>
          <div className="h-10 w-10 rounded-full p-2 bg-gray-500 text-white cursor-pointer transition hover:opacity-60 shoadow-lg text-center cuspi">
            <FaAngleRight
              className="mx-auto text-xl"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </div>
      </div>

      {/* slider section starts  */}
      <div className="">
        {console.log(Popular)}
        <Slider {...sliderSetting} ref={sliderRef}>
          {Popular?.map((item, i) => {
            console.log(item, i);
            return (
              <div className="pt-2 pb-4 px-2" key={item.id}>
                <CourseCard
                  key={item.id}
                  id={item.id}
                  category={item.category.category_name}
                  tag={item.tag}
                  course_title={item.course_name}
                  rating={item.rating}
                  course_thumbnail={item.thumbnail_img}
                  ratingNo={item.ratingNo}
                  price={item.price}
                  SP={item.SP}
                  RP={item.RP}
                  discount={item.discount}
                  instructor_img={item.instructor.profile_img}
                  instructor_name={
                    item.instructor.first_name + item.instructor.last_name
                  }
                  no_videos={item.course_content}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* slider section ends  */}
    </div>
  );
};

export default PopularCourses;
