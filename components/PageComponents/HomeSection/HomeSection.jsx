import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import BannerTwo from "../../../public/HomeBanner/slider.png";
import BannerThree from "../../../public/HomeBanner/sliderthree.jpg";
import BannerOne from "../../../public/HomeBanner/slidertwo.jpg";

import BreakPointTest from "../../test/BreakPointTest";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Fade } from "react-slideshow-image";
import HomeBg from "../../resources/images/circuitboard.svg";
import Image from "next/image";
import RightOne from "../../resources/images/rightside1.jpg";
import RightTwo from "../../resources/images/rightside2.jpg";
import Slide1 from "../../resources/images/slideimage1.png";
import Slide2 from "../../resources/images/slide2.jpeg";
import Slide3 from "../../resources/images/SikkaiForOwnership.jpg";
import Slider from "react-slick";

function HomeSection() {
  const data = [
    {
      bgImg: BannerTwo.src,
      title: "More Like This !",
      description: {
        question: " Why Sikka-I is perfect for you ?",
        answer:
          "Sikka-i is a platform that provides every individual with the opportunity of learning the desired skills , earning good income , and owning the dream life. we work to uplift the life of youths by providing them multiple learning , earning and owning opportunities. sikka-i stands out to be best because :",
      },
      sub: [
        {
          point1: "providing a best platform to learn the desired skills.",
        },
        {
          point1: " providing multiple income opportunity.",
        },
        {
          point1: " providing best ownerdship models to everyone.",
        },
        { point1: "best community of youths enterpreneurs." },
      ],
    },
    {
      bgImg: BannerOne.src,
      title: "Simillar Photos",
      description: {
        question: " Why Sikka-I is perfect for you ?",
        answer:
          "Sikka-i is a platform that provides every individual with the opportunity of learning the desired skills , earning good income , and owning the dream life. we work to uplift the life of youths by providing them multiple learning , earning and owning opportunities. sikka-i stands out to be best because :",
      },
      sub: [
        {
          point1: "providing a best platform to learn the desired skills.",
        },
        {
          point1: " providing multiple income opportunity.",
        },
        {
          point1: " providing best ownerdship models to everyone.",
        },
        { point1: "best community of youths enterpreneurs." },
      ],
    },
    {
      bgImg: BannerThree.src,
      title: "Aarti Bijay",
      description: {
        question: " Why Sikka-I is perfect for you ?",
        answer:
          "Sikka-i is a platform that provides every individual with the opportunity of learning the desired skills , earning good income , and owning the dream life. we work to uplift the life of youths by providing them multiple learning , earning and owning opportunities. sikka-i stands out to be best because :",
      },
      sub: [
        {
          point1: "providing a best platform to learn the desired skills.",
        },
        {
          point1: " providing multiple income opportunity.",
        },
        {
          point1: " providing best ownerdship models to everyone.",
        },
        { point1: "best community of youths enterpreneurs." },
      ],
    },
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  const properties = {
    duration: 3000,
    transitionDuration: 1000,
    pauseOnHover: false,
    infinite: true,
    prevArrow: (
      <div className="absolute ml-2  mt-5  opacity-40 text-lg lg:opacity-100 lg:text-2xl text-white -100 cursor-pointer drop-sadow-xl">
        <FaChevronCircleLeft />
      </div>
    ),
    nextArrow: (
      <div className="">
        <div className="absolute -ml-8  opacity-40 text-lg lg:text-2xl lg:opacity-100 text-white  cursor-pointer drop-shadow-xl">
          <FaChevronCircleRight />
        </div>
      </div>
    ),
  };
  return (
    <div className="h-150 2xl:h-152 py-8 md:py-10 2xl:py-12  homeBanner bg-yellow-600">
      <div
        className=" mx-auto h-146 2xl:h-150 px-4 lg:px-16 lg:mr-2 xl:mr-0     xl:px-16
       2xl:px-14"
      >
        <div className="grid grid-cols-12 h-146 2xl:bg-red-400  2xl:h-150 gap-6 md:gap-10">
          {/* slider section starts  */}
          <div
            className="w-full  mx-auto overflow-clip col-span-12 relative
           lg:col-span-8 h-145 2xl:h-150 shadow-xl shadow-gray-900"
          >
            {/* <Slider {...settings}> */}
            <Fade {...properties}>
              {data.map((item, i) => (
                <div
                  className="h-145 w-full 2xl:h-150 "
                  style={{
                    contain: "",
                    content: "",
                    backgroundImage: `url(${item.bgImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: i === 0 ? "left" : "center",
                    backgroundSize: "cover",
                  }}
                  key={i}
                >
                  {/* {i} */}
                </div>
                // <Image
                //   key={i}
                //   alt={i}
                //   src={item.bgImg}
                //   width={83}
                //   height={70}
                //   layout="responsive"
                // />
              ))}
            </Fade>
          </div>

          {/* slider section ends  */}

          {/* right section  */}
          <div className="col-span-12 pb-9  lg:col-span-4">
            <div
              className="flex flex-col lg:h-145 relative  space-y-6 
            md:flex-row md:space-y-0 md:space-x-8 lg:space-x-0
            2xl:space-y-0 2xl:grid 2xl:grid-cols-1 
             2xl:place-content-between 2xl:h-full  lg:grid lg:gap-3 lg:space-y-0 2xl:gap-5 "
            >
              <div
                className="w-full shadow-lg
                px-4 py-auto text-white shadow-gray-500 "
                style={{
                  background: `url(${Slide2.src})`,
                  backgroundSize: "cover",
                }}
              >
                <p
                  className="font-black text-xl xl:text-base  2xl:text-2xl  mt-2"
                  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}
                >
                  SIKKAI FOR <br /> LEARNING
                </p>
                <p className="text-sm mt-1 w-3/4 2xl:text-xl">
                  {`  The completely unique online learning system everyone's been
                  talking about.`}
                </p>
                <p
                  className="p-1 px-2 border-2 border-white w-fit
                 my-5 2xl:my-6 transition duration-700 
                 hover:bg-white hover:text-black cursor-pointer"
                >
                  View More
                </p>
              </div>

              {/* 2nd div  */}
              <div
                className="w-full shadow-lg  
                px-4 py-auto text-white shadow-gray-500 "
                style={{
                  background: `url(${RightTwo.src})`,
                  backgroundSize: "cover",
                }}
              >
                <p
                  className="font-black text-xl xl:text-base 2xl:text-2xl  mt-2"
                  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}
                >
                  SIKKAI FOR <br /> OWNERSHIP
                </p>
                <p className="text-sm mt-1 w-3/4 2xl:text-xl">
                  {`  The completely unique online learning system everyone's been
                  talking about.`}
                </p>
                <p
                  className="p-1 px-2 border border-white w-fit
                 my-5 2xl:my-6 transition duration-700 
                 hover:bg-yellow-500 hover:text-black cursor-pointer"
                >
                  View More
                </p>
              </div>

              {/* 2nd div ends /  */}
              {/* 3rd div  */}
              <div
                className="w-full 
                shadow-lg px-4 py-auto text-white
                 shadow-gray-500 "
                style={{
                  background: `url(${RightOne.src})`,
                  backgroundSize: "cover",
                }}
              >
                <p
                  className="font-black text-xl xl:text-base 2xl:text-2xl  
                   mt-2"
                  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
                >
                  SIKKAI FOR <br /> BUSINESS
                </p>
                <p className="text-sm mt-1 w-3/4 2xl:text-xl">
                  {`  The completely unique online business system everyone's been
                  talking about.`}
                </p>
                <p
                  className="p-2 border border-primary
                 w-fit my-5 xl:my-5 2xl:my-6 bg-primary shadow-lg transition hover:bg-red-500
                  cursor-pointer"
                >
                  View More
                </p>
              </div>

              {/* 3rd div ends /  */}
            </div>
          </div>

          {/* right section ends  */}
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
