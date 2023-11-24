import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

import CourseCard from "../../courseCard/CourseCard";
import Slider from "react-slick";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../HOC/Axios/Axios";
import { useRef } from "react";
import { useRouter } from "next/router";

const RelatedCourses = ({ id }) => {
  const [ID, setID] = useState(id);
  const router = useRouter();
  console.log(router);

  console.log(id);
  const [data, setData] = useState([]);
  const [SpinnerShow, setSpinner] = useState(false);

  const getRelatedCourses = () => {
    console.log(ID);
    setSpinner(true);
    axios
      .get(`/course/relatedCourses?category_id=${id}`)
      .then((res) => {
        setSpinner(false);
        console.log("response", res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setSpinner(false);
      });
  };
  useEffect(() => {
    getRelatedCourses();
  }, [id]);

  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  const sliderSetting = {
    dots: false,
    dotsClass: "slick-dots line-indicator",
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: data.length >= 4,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          infinite: data.length >= 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: data.length >= 2,
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
  return (
    <div>
      {SpinnerShow ? <Spinner /> : null}
      {/* top title and next prev button section  */}
      <div className='flex items-center justify-between'>
        <h2 className='text-primary fold:text-xl sm:text-2xl md:text-3xl lg:ml-4'>
          Related Courses
        </h2>
        <div className='flex items-center space-x-2 lg:space-x-4 mr-4'>
          <div className='h-10 w-10 rounded-full p-2 bg-primary text-white cursor-pointer transition opacity-60 hover:opacity-100 shoadow-lg text-center'>
            <FaAngleLeft
              className='mx-auto text-xl'
              onClick={() => sliderRef.current.slickPrev()}
            />
          </div>
          <div className='h-10 w-10 rounded-full p-2 bg-primary text-white cursor-pointer transition opacity-60 hover:opacity-100 shoadow-lg text-center'>
            <FaAngleRight
              className='mx-auto text-xl'
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </div>
      </div>

      {/* slider section starts  */}
      <div>
        <Slider {...sliderSetting} ref={sliderRef}>
          {data.map((item, i) => (
            <div className='fold:p-1 sm:p-4' key={i}>
              <CourseCard
                key={i}
                id={item.id}
                related={"related"}
                category={item.category.category_name}
                tag={item.tag}
                course_title={item.course_name}
                rating={item.rating}
                course_thumbnail={item.thumbnail_img}
                ratingNo={item.ratingNo}
                price={item.price}
                RP={item.RP}
                SP={item.SP}
                discount={item.discount}
                instructor_img={item.instructor.profile_img}
                instructor_name={item.instructor.first_name + item.instructor.last_name}
                no_videos={item.course_content}
                SpinnerShow={SpinnerShow}
                setSpinner={setSpinner}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* slider section ends  */}
    </div>
  );
};

export default RelatedCourses;
